"use client";
import { useState } from "react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/helpers/icons";
import Link from "next/link";
import "./style.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <Link href={"/"}>Atalay Oto</Link>
      <button className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <ul className={`nav ${menuOpen ? "active" : ""}`}>
        <li>
          <Link href={"/"}>Anasayfa</Link>
        </li>
        <li>
          <Link href={"/hizmetler"}>Hizmetler</Link>
        </li>
        <li>
          <Link href={"/magaza"}>Mağaza</Link>
        </li>

        <li>
          <Link href={"/hakkimizda"}>Hakkımızda</Link>
        </li>
        <li>
          <Link href={"/iletisim"}>İletişim</Link>
        </li>
      </ul>
      <ul className="social">
        <li>
          <Link href={"/insta"}>
            <InstagramIcon />
          </Link>
        </li>
        <li>
          <Link href={"/face"}>
            <FacebookIcon />
          </Link>
        </li>
        <li>
          <Link href={"/linkedin"}>
            <LinkedinIcon />
          </Link>
        </li>
      </ul>
    </header>
  );
}
