import imgLogo from "figma:asset/35bfddfccbff1c21e7f2efa8d0b93bbd439aa96a.png";
import imgGmail from "figma:asset/509bf497099afa9d7192b9cf61f0a13160aec435.png";
import imgInstagram from "figma:asset/67e34b1cbcffd45ecea86bc09833bdbc19ffa60a.png";
import imgFacebook from "figma:asset/cdc12c352f169c60fcde32e82e64acc46f8e2cb7.png";
import imgX from "figma:asset/60d95c92f7e8ee83b8f2d3ccbc77adf7c2e68b55.png";
import imgBehance from "figma:asset/d2eb623c572df7ebd9a61eadc23985f32b4fbe47.png";
import imgTelegram from "figma:asset/8b93f6af2c76e04330fb1f79dd6f74df5cba6788.png";
import imgWhatsApp from "figma:asset/336e9a9a435dc4e7320d3e09f51e689cb76559a9.png";
import imgDribbble from "figma:asset/646bc62a4f94be4b9fee8f3bb5e7e4d346bd418f.png";

const socialLinks = [
  { name: "Gmail", icon: imgGmail, url: "mailto:ahmed@example.com" },
  { name: "Instagram", icon: imgInstagram, url: "#" },
  { name: "Facebook", icon: imgFacebook, url: "#" },
  { name: "X", icon: imgX, url: "#" },
  { name: "Behance", icon: imgBehance, url: "#" },
  { name: "Telegram", icon: imgTelegram, url: "#" },
  { name: "WhatsApp", icon: imgWhatsApp, url: "#" },
  { name: "Dribbble", icon: imgDribbble, url: "#" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000414] border-t border-[#1057bc] py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={imgLogo}
              alt="Ahmed Faiyaz Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4"
            />
            <p className="text-[#5cb6ff] text-center md:text-left">
              Web Developer & Designer
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-[#5cb6ff] text-xl md:text-2xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-[#d8ebf9] hover:text-[#5cb6ff] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#d8ebf9] hover:text-[#5cb6ff] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-[#d8ebf9] hover:text-[#5cb6ff] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#d8ebf9] hover:text-[#5cb6ff] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#d8ebf9] hover:text-[#5cb6ff] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-[#5cb6ff] text-xl md:text-2xl mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-[#d8ebf9]">
              <p>Tokyo, Japan</p>
              <p>+81 (80) 1291 1533</p>
              <p>ahmdfaiyaz@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 md:mt-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={social.name}
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-8 h-8 object-contain hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 md:mt-12 pt-8 border-t border-[#1057bc]">
          <p className="text-[#5cb6ff]">
            © {currentYear} Ahmed Faiyaz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}