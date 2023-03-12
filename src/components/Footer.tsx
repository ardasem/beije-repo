import React from "react";
import {useState} from 'react'

const Footer: React.FC = () => {

  //windowSize degisimini yakalayabilmek icin useState ve useEffect kullandim.
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  React.useEffect(()=>{
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize',handleResize)

  },[]);

  return (
    
      <div className="footer--container">
        {/*footer iki kisimdan olusuyor, upper ve info container seklinde. info container icerisinde footerin cizgisinden asagisi mevcut 
        upper containerinda ise keep in touch kismi, logo  ve 3 ayri liste seklinde navlinkler bulunmakta.
        responsiveness kismini asagidaki style prop'u ile yaptim. one liner if else statement olarak calismakta sayfa 1050den kucukse style degisiyor */}
        <div className="footer--upper" style={windowSize < 1050 ? {textAlign:'center',justifyContent:'center',flexDirection:'column'} : {}}>
          <div className="footer--left">
            

          {/*upper kismi left ve right olarak ikiye ayriliyor, sol tarafta keep in touch division inda :logo,header,p,text area ve button seklinde bir hiyerarsi mevcut
          sag tarafta ise 3 farkli  list menu bulunmakta, stylingleri de footer--upper--list--element seklinde yapilmakta */}
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

            <ul className="footer--list" >
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

          {/* bu kisimda ise footer in ust ve alt kismini ayiran cizgiden en alta kadar olan kisim mevcut */}
        <div className="footer--info--container">
          <div className="footer--info" style={windowSize < 1050 ? {textAlign:'center',alignSelf:'center',flexDirection:'column'} : {}}>
            <>
              <p className="copyright">2023 beije. Tüm hakları saklıdır.</p>
            </>

            <>
              <ul className="footer--info--list " style={windowSize < 1050 ? {alignSelf:'center',flexDirection:'column'} : {}}>
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
