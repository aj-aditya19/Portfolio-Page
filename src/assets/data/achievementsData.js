import winnerImg from "../src/Winner Coding Contest.jpg";
import hackathonImg from "../src/the_real_mavericks.jpg";
import cppCert from "../src/Learn Advanced C++.pdf";
import webCert from "../src/Web Certificate.pdf";
import pythonCert from "../src/Python Certificate.pdf";
import cyberCert from "../src/NPTEL Cyber Security and Privacy.pdf";

const photoAchievements = [
  {
    photo: winnerImg,
    title: "Winner of Senior Year Coding",
    description:
      "I won the college coding contest organized in Engineer's Obsdey.",
  },
  {
    photo: hackathonImg,
    title: "1st Runner in Hackathon",
    description: "Got 2nd position in SIH Inter-College Selection.",
  },
];

const certificateAchievements = [
  {
    title: "Full Stack Developer Certificate",
    link: webCert,
  },
  {
    title: "Advanced C++ Certificate",
    link: cppCert,
  },
  {
    title: "Python Certificate",
    link: pythonCert,
  },
  {
    title: "Cyber Security and Privacy Certificate",
    link: cyberCert,
  },
];

export { photoAchievements, certificateAchievements };
