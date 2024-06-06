import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import HeaderBackground from "./main-header-backgroud";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href={"/"}>
          <Image
            width={1024}
            height={1024}
            priority
            src={logoImg.src}
            alt="logo"
          />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <Link href={"/meals"}>Browse Meals</Link>
          <Link href={"/community"}>Food Community</Link>
        </nav>
      </header>
    </>
  );
}
