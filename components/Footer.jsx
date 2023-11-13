import { Pacifico } from "next/font/google";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Footer = () => {
  const contactLinks = [
    { icon: HiMail, link: "mailto:divinedomokuma@gmail.com" },
    { icon: FaPhone, link: "tel:09071214921" },
    { icon: FaGithub, link: "https://github.com/DivineDomokuma10" },
    { icon: FaFacebook, link: "https://facebook.com" },
    { icon: FaLinkedin, link: "https://linkedin/in/divine-domokuma/" },
  ];
  return (
    <footer
      id="contact"
      className="w-full p-5 flex flex-col items-center border-t space-y-5 sm:flex-row sm:justify-between"
    >
      <h2
        className={`${pacifico.className} text-2xl text-red-500 font-bold sm:pt-3`}
      >
        Divine Domokuma
      </h2>
      <div className="flex space-x-7 items-center">
        {contactLinks.map((link) => (
          <a href={link.link}>
            <link.icon className="text-gray-500 text-2xl transition hover:text-red-500" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
