import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { getCategories } from "../services";

export default function Topbar() {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    getCategories().then((newCategorias) => setCategorias(newCategorias));
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  });

  return (
    <div className="nav">
      <div className={isScrolled ? "topbarWrapper scrolled" : "topbarWrapper"}>
        <div className="topbarLogo">
          <Link href="/">
            <img src="../img/topImg2.png" width="160px" alt=""></img>
          </Link>
        </div>
        <input type="radio" name="topSlide" id="menuBtn" />
        <input type="radio" name="topSlide" id="cancelBtn" />
        <ul className="navLinks">
          <img
            className="topImg topImgMob"
            src="../img/topImg2.png"
            width="170px"
            alt=""
          ></img>
          <label htmlFor="cancelBtn" className="btn cancelBtn">
            <i className="fas fa-times"></i>
          </label>
          <li>
            <Link href="/">
              <a className="topbarLink">Inicio</a>
            </Link>
          </li>
          <li>
            <a href="#!" className="desktopItem">
              Categorías <i className="fas fa-chevron-down"></i>
            </a>
            <input type="checkBox" id="showDrop" />
            <label htmlFor="showDrop" className="mobileItem">
              Categorías <i className="fas fa-chevron-down"></i>
            </label>
            <ul className="dropMenu">
              {categorias.map((categoria) => (
                <li key={categoria.slug}>
                  <Link
                    href={`/categoria/${categoria.slug}`}
                  >
                    <a className="topbarLink">{categoria.nombreCat}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
              <a className="topbarLink" href="https://incopet.vercel.app/">Regresar Página Principal</a>
          </li>
        </ul>
        <label
          htmlFor="menuBtn"
          className={isScrolled ? "btn menuBtn scrolled" : "btn menuBtn"}
        >
          <HiOutlineMenuAlt3 />
        </label>
      </div>
    </div>
  );
}
