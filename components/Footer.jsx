import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="sloganFooter">
        <img className="sloganImg" src="../img/slogan.png" alt="" width="100%" />
        <div data-aos="zoom-in" className="wordsWrapper">
          <div className="words">
            <span>INCOPET</span>
            <span>del Ecuador</span>
            <span>Más allá</span>
            <span>de sus expectativas</span>
            <span>INCOPET</span>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerSocial">
          <a
            href="https://www.facebook.com/Incopet-del-Ecuador-635388663609161"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/incopet_del_ecuador/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://ec.linkedin.com/company/incopet-del-ecuador"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://wa.link/158k5b" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <p className="footerCopyright">
          <small>© 2022 | Web Design MP | All Rights Reserved</small>
        </p>
      </div>
    </div>
  );
}
