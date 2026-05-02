// This file contains project data dynamically

import bingoGame from "/images/bingogame_landing_page.png";
import medisetu from "/images/medi_landing_page.png";
import apnastay from "/images/apnastay_landing_page.png";

const projects = [
  {
    image: bingoGame,
    name: "Bingo Game",
    about:
      "An interactive Bingo game application built with modern web technologies.",
    link: "https://bingogame-web-t73z.vercel.app/",
  },
  {
    image: medisetu,
    name: "Medisetu",
    about: "A healthcare platform providing medical services and information.",
    link: "https://medisetu-smoky.vercel.app/",
  },
  {
    image: apnastay,
    name: "Apnastay",
    about:
      "A property rental and accommodation platform for finding your perfect stay.",
    link: "https://apnastay-s5fk.onrender.com/",
  },
];

export default projects;
