import styles from "./footer.module.css";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3>SerraTec Shopee</h3>

      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaGithub/>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
