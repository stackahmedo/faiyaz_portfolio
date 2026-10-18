import imgGmail from "../assets/509bf497099afa9d7192b9cf61f0a13160aec435.png";
import imgInstagram from "../assets/67e34b1cbcffd45ecea86bc09833bdbc19ffa60a.png";
import imgFacebook from "../assets/cdc12c352f169c60fcde32e82e64acc46f8e2cb7.png";
import imgX from "../assets/60d95c92f7e8ee83b8f2d3ccbc77adf7c2e68b55.png";
import imgBehance from "../assets/d2eb623c572df7ebd9a61eadc23985f32b4fbe47.png";
import imgTelegram from "../assets/8b93f6af2c76e04330fb1f79dd6f74df5cba6788.png";
import imgWhatsApp from "../assets/336e9a9a435dc4e7320d3e09f51e689cb76559a9.png";
import imgDribbble from "../assets/646bc62a4f94be4b9fee8f3bb5e7e4d346bd418f.png";

export const CONTACT_EMAIL = "wc.ahmedo@gmail.com";
export const CONTACT_PHONE = "080 1299 1035";
export const CONTACT_PHONE_HREF = "tel:+818012991035";
export const RESUME_URL = "https://drive.google.com/file/d/1nmbxssfXE8wV4r3yLnmgn_Hbh5ftgZ2I/view?usp=sharing";

export interface SocialLink {
  name: string;
  icon: string;
  /** Leave empty until the profile exists — links without a URL are not rendered. */
  url: string;
}

export const socialLinks: SocialLink[] = [
  { name: "Gmail", icon: imgGmail, url: `mailto:${CONTACT_EMAIL}` },
  { name: "Instagram", icon: imgInstagram, url: "" },
  { name: "Facebook", icon: imgFacebook, url: "" },
  { name: "X (Twitter)", icon: imgX, url: "" },
  { name: "Behance", icon: imgBehance, url: "" },
  { name: "Telegram", icon: imgTelegram, url: "" },
  { name: "WhatsApp", icon: imgWhatsApp, url: "" },
  { name: "Dribbble", icon: imgDribbble, url: "" },
];

export const activeSocialLinks = socialLinks.filter((link) => link.url !== "");
