export async function trackVisit(payload = {}) {
  try {
    const base = import.meta.env.VITE_TRACKING_URL || "http://localhost:4000";
    await fetch(`${base}/api/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {}
}

export async function getCount() {
  try {
    const base = import.meta.env.VITE_TRACKING_URL || "http://localhost:4000";
    const r = await fetch(`${base}/api/count`);
    return await r.json();
  } catch (err) {
    return { error: String(err) };
  }
}

export async function getVisits(secret) {
  try {
    const base = import.meta.env.VITE_TRACKING_URL || "http://localhost:4000";
    const r = await fetch(
      `${base}/api/visits?secret=${encodeURIComponent(secret)}`,
    );
    return await r.json();
  } catch (err) {
    return { error: String(err) };
  }
}
