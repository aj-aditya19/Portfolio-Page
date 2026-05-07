import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

const ADMIN_SECRET = process.env.ADMIN_SECRET || "devsecret";
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

const dbFile = path.join(process.cwd(), "server", "visits.db");

let db;
async function initDb() {
  db = await open({ filename: dbFile, driver: sqlite3.Database });
  await db.exec(
    `CREATE TABLE IF NOT EXISTS visits (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ip TEXT,
      ua TEXT,
      path TEXT,
      referrer TEXT,
      created_at INTEGER
    )`,
  );
}

app.post("/api/track", async (req, res) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";
    const ua = req.headers["user-agent"] || "";
    const { path: p = "/", referrer = "" } = req.body || {};
    const ts = Date.now();
    await db.run(
      "INSERT INTO visits (ip, ua, path, referrer, created_at) VALUES (?, ?, ?, ?, ?)",
      [ip, ua, p, referrer, ts],
    );
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: String(err) });
  }
});

app.get("/api/count", async (req, res) => {
  try {
    const row = await db.get("SELECT COUNT(*) as cnt FROM visits");
    res.json({ count: row.cnt });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

app.get("/api/visits", async (req, res) => {
  try {
    const secret = req.query.secret || "";
    if (secret !== ADMIN_SECRET)
      return res.status(403).json({ error: "forbidden" });
    const rows = await db.all(
      "SELECT id, ip, ua, path, referrer, created_at FROM visits ORDER BY created_at DESC LIMIT 1000",
    );
    res.json({ visits: rows, count: rows.length });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

initDb()
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => {
    console.error("Failed to initialize DB", err);
    process.exit(1);
  });
