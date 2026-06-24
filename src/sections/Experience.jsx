// import React from 'react';
// import { motion } from 'framer-motion';
// import { Briefcase, GraduationCap } from 'lucide-react';
// import data from '../data/experience.json';
// import './Experience.css';

// export default function Experience() {
//   return (
//     <section id="experience" className="section experience">
//       <div className="container">
//         <div className="eyebrow">04 — Journey</div>
//         <h2 className="section-title">
//           Experience & <span className="gradient-text">education.</span>
//         </h2>
//         <p className="section-sub">Where the skills above actually got tested.</p>

//         <div className="journey-grid">
//           <div className="journey-col">
//             <h3 className="journey-col-title">
//               <Briefcase size={18} /> Experience
//             </h3>
//             <div className="timeline">
//               {data.experience.map((exp, i) => (
//                 <motion.div
//                   className="timeline-item"
//                   key={i}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, margin: '-60px' }}
//                   transition={{ duration: 0.5, delay: i * 0.1 }}
//                 >
//                   <div className="timeline-dot" />
//                   <div className="timeline-content card-surface">
//                     <div className="timeline-head">
//                       <h4>{exp.role}</h4>
//                       <span className="pill">{exp.type}</span>
//                     </div>
//                     <p className="timeline-org">
//                       {exp.org} · {exp.duration}
//                     </p>
//                     <p className="timeline-desc">{exp.description}</p>
//                     <div className="timeline-tech">
//                       {exp.tech.map((t) => (
//                         <span key={t} className="tech-chip">
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <div className="journey-col">
//             <h3 className="journey-col-title">
//               <GraduationCap size={18} /> Education
//             </h3>
//             <div className="timeline">
//               {data.education.map((edu, i) => (
//                 <motion.div
//                   className="timeline-item"
//                   key={i}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, margin: '-60px' }}
//                   transition={{ duration: 0.5, delay: i * 0.1 }}
//                 >
//                   <div className="timeline-dot" />
//                   <div className="timeline-content card-surface">
//                     <div className="timeline-head">
//                       <h4>{edu.degree}</h4>
//                       {edu.score && <span className="pill">{edu.score}</span>}
//                     </div>
//                     <p className="timeline-org">
//                       {edu.institution} · {edu.duration}
//                     </p>
//                     {edu.coursework.length > 0 && (
//                       <div className="timeline-tech">
//                         {edu.coursework.map((c) => (
//                           <span key={c} className="tech-chip">
//                             {c}
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import data from "../data/experience.json";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="eyebrow">04 — Journey</div>

        <h2 className="section-title">
          Work <span className="gradient-text">Experience.</span>
        </h2>

        <p className="section-sub">
          Where the skills above actually got tested.
        </p>

        <h3 className="journey-col-title">
          <Briefcase size={18} />
          Experience
        </h3>

        <div className="timeline">
          {data.experience.map((exp, i) => (
            <motion.div
              className="timeline-item"
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
            >
              <div className="timeline-dot" />

              <div className="timeline-content card-surface">
                <div className="timeline-head">
                  <h4>{exp.role}</h4>

                  <span className="pill">{exp.type}</span>
                </div>

                <p className="timeline-org">
                  {exp.org} · {exp.duration}
                </p>

                <p className="timeline-desc">{exp.description}</p>

                <div className="timeline-tech">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
