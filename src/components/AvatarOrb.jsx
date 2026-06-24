import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import profile from "../data/profile.json";
import "./AvatarOrb.css";

export default function AvatarOrb() {
  const ref = useRef(null);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), {
    stiffness: 150,
    damping: 18,
  });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
    setHovering(false);
  }

  return (
    <div className="avatar-orb-wrap">
      <motion.div
        ref={ref}
        className="avatar-orb"
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleLeave}
        animate={!hovering ? { y: [0, -10, 0] } : { y: 0 }}
        transition={
          !hovering
            ? { duration: 5, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.4 }
        }
      >
        <div className="orb-face">
          <img
            src={profile.profileImage}
            alt={profile.name}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
        <div className="orb-badge orb-badge-1">
          <span>React</span>
        </div>
        <div className="orb-badge orb-badge-2">
          <span>Flutter</span>
        </div>
        <div className="orb-badge orb-badge-3">
          <span>Node.js</span>
        </div>
      </motion.div>
    </div>
  );
}
