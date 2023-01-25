import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { navbar } from "@/constants";

const Navbar = () => {
  return (
    <div className="container">
      <div className={styles.navbar}>
        <div className={styles.left}>
          <Image src={navbar.logo} alt='alt' />
          <div className={styles.menu}>
            {navbar.pages.map((item) => (
              <Link key={item.id} href={`/${item.link}`}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          {navbar.profile.map((item) => (
            <div key={item.id} className={styles.icon}>
              <i className={item.icon}></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
