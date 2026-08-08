import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";
import ParticleField from "../components/ParticleField";
import AvatarOrb from "../components/AvatarOrb";
import profile from "../data/profile.json";
import "./Hero.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <ParticleField density={80} />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
      </div>

      <div className="container hero-inner">
        <motion.div
          className="hero-text"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="hero-status">
            <span className="hero-status-dot" />
            Available for new projects
          </motion.div>

          <motion.h1 variants={item} className="hero-title">
            I build things that
            <br />
            <span className="gradient-text">actually ship.</span>
          </motion.h1>

          <motion.p variants={item} className="hero-sub">
            {profile.tagline} I'm {profile.name.split(" ")[0]} — a{" "}
            {profile.title.toLowerCase()} based in{" "}
            {profile.location.split(",")[0]}.
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href={profile.resume}
              target="main"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href={profile.socials.find((s) => s.name === "GitHub")?.url}
              target="_blank"
              rel="noreferrer"
              className="hero-github"
              aria-label="GitHub profile"
            >
              <GithubIcon size={20} />
            </a>
          </motion.div>

          <motion.div variants={item} className="hero-stats">
            {profile.stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <span className="hero-stat-value">
                  {s.value}
                  {s.suffix}
                </span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <AvatarOrb />
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-cue"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  );
}
