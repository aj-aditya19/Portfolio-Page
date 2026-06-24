// Real brand icons sourced from the `simple-icons` package (CC0 licensed,
// https://simpleicons.org). We pull just `path` + `hex` per icon so each tile
// can render a crisp inline <svg> with the actual brand mark and color —
// no external requests, no broken-image risk.
import {
  siReact,
  siJavascript,
  siHtml5,
  siCss,
  siFlutter,
  siDart,
  siNodedotjs,
  siExpress,
  siSocketdotio,
  siMongodb,
  siPostgresql,
  siDocker,
  siGit,
  siGithub,
  siPython,
  siCplusplus,
  siFirebase,
  siPostman,
  siFigma,
  siJsonwebtokens,
} from 'simple-icons';

function icon(si, overrideHex) {
  return { name: si.title, path: si.path, hex: overrideHex || `#${si.hex}` };
}

export const TECH_STACK = [
  {
    category: 'Frontend',
    items: [
      { ...icon(siReact), level: 92 },
      { ...icon(siJavascript), level: 90 },
      { ...icon(siHtml5), level: 92 },
      { ...icon(siCss, '#2563EB'), level: 90 }, // CSS3 ships near-black by default; recolored for visibility on dark cards
      { ...icon(siFlutter), level: 85 },
      { ...icon(siDart), level: 80 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { ...icon(siNodedotjs), level: 88 },
      { ...icon(siExpress, '#8B5CF6'), level: 86 }, // Express ships pure black; recolored for dark-card legibility
      { ...icon(siSocketdotio, '#06B6D4'), level: 78 }, // Socket.io ships near-black; recolored
      { ...icon(siJsonwebtokens, '#D63AFF'), level: 84 }, // JWT ships pure black; recolored
    ],
  },
  {
    category: 'Data & Infra',
    items: [
      { ...icon(siMongodb), level: 85 },
      { ...icon(siPostgresql), level: 80 },
      { ...icon(siDocker), level: 75 },
      { ...icon(siFirebase), level: 82 },
      { ...icon(siGit), level: 90 },
      { ...icon(siGithub, '#94A3B8'), level: 90 }, // GitHub ships pure black; recolored to a neutral that works on both themes
    ],
  },
  {
    category: 'Exploring & Tools',
    items: [
      { ...icon(siPython), level: 75 },
      { ...icon(siCplusplus), level: 78 },
      { ...icon(siPostman), level: 80 },
      { ...icon(siFigma), level: 70 },
    ],
  },
];
