import React from "react";

function Footer() {
  return (
    
      <div className="footer--container">
        <div className="footer--upper">
          <div className="footer--left">
            
            <div className="keep--in--touch">
              <img
                className="beije--logo--black"
                src="./icons/beije-black-logo.png"
                alt=""
              />
              <h4>Arayı açmayalım!</h4>
              <p>
                Aylık e-gazetemiz döngü, yeni ürün ve gelişmelerden haberdar ol.
              </p>

              <div className="footer--email">
                <textarea
                  className="footer--text--area"
                  placeholder="e-mail adresin"
                ></textarea>
                <button className="button">Gönder</button>
              </div>
            </div>
          </div>

          <div className="footer--right">
            <ul className="footer--list">
              <li className="footer--upper--list--element">
                <a>Paketler</a>
              </li>
              <li className="footer--upper--list--element">
                <a>Deneme Paketi</a>
              </li>
              <li className="footer--upper--list--element">
                <a>Ekibimize Katıl</a>
              </li>
            </ul>

            <ul className="footer--list">
              <li className="footer--upper--list--element">
                <a>Blog</a>
              </li>
              <li className="footer--upper--list--element">
                <a>Sıkça Sorulan Sorular</a>
              </li>
              <li className="footer--upper--list--element">
                <a>Biz Kimiz?</a>
              </li>
            </ul>

            <ul className="footer--list">
              <li className="footer--upper--list--element">
                {" "}
                <img src="./icons/facebook-icon.png" alt="" />
                <a>Facebook</a>
              </li>
              <li className="footer--upper--list--element">
                <img src="./icons/instagram-icon.png" alt="" />
                <a>Instagram</a>
              </li>
              <li className="footer--upper--list--element">
                <img src="./icons/twitter-icon.png" alt="" />
                <a>Twitter</a>
              </li>
              <li className="footer--upper--list--element">
                <img src="./icons/linkedin-icon.png" alt="" />
                <a>Linkedin</a>
              </li>
              <li className="footer--upper--list--element">
                <img src="./icons/spotify-icon.png" alt="" />
                <a>Spotify</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer--info--container">
          <div className="footer--info">
            <>
              <p className="copyright">2023 beije. Tüm hakları saklıdır.</p>
            </>

            <>
              <ul className="footer--info--list ">
                <a className="footer--list--element" href="">
                  KVKK Aydınlatma Metni
                </a>
                <a className="footer--list--element" href="">
                  Üyelik Sözleşmesi
                </a>
                <a className="footer--list--element" href="">
                  Gizlilik Politikası
                </a>
                <a className="footer--list--element" href="">
                  Çerez Politikası
                </a>
                <a className="footer--list--element" href="">
                  Test Sonuçları
                </a>
              </ul>
            </>

            <div className="languages">EN | TR</div>
          </div>
        </div>

        <div className="payment--icons">
          <img
            className="payment-icon"
            src="./icons/mastercard-icon.svg"
            alt=""
          />
          <img className="payment-icon" src="./icons/visa-icon.svg" alt="" />
        </div>
      </div>
    
  );
}

export default Footer;
