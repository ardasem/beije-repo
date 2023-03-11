import React, { useState, useContext } from "react";
import Footer from "./Footer";
import { UserDataContext } from "../context/UserDataContext";
import prices from "../context/prices"; //Urun birim fiyatlari sabit oldugu ve baska kisimlarda kullanilma ihtimali oldugu icin disaridan gelen bir dataset olarak hazirladim.
import Sliders from "./Sliders";
import CartComponent from "./CartComponent";


const CustomPacket: React.FC = () => {
  const { userDataState, setUserDataState } = useContext(UserDataContext);
  const [totalPrice, setTotalPrice] = useState(0);

  //responsiveness icin bu veriyi asagida kullaniyorum. sayfanin sag tarafini gizlemek icin, burger menu cikartmak icin.
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  // buradaki effect kullanimi ile global state uzerinde degisen degerleri birim fiyatlariyla carpiyorum.
  React.useEffect(() => {
    setTotalPrice(
        userDataState.standardPadValue * prices.standardPadPrice +
        userDataState.superPadValue * prices.superPadPrice +
        userDataState.superPlusPadValue * prices.superPlusPadPrice +
        userDataState.dailyPadValue * prices.dailyPadPrice +
        userDataState.superDailyPadValue * prices.superDailyPadPrice +
        userDataState.miniTamponValue * prices.miniTamponPrice +
        userDataState.standardTamponValue * prices.standardTamponPrice
    );
  }, [
    userDataState.standardPadValue,
    userDataState.superPadValue,
    userDataState.superPlusPadValue,
    userDataState.dailyPadValue,
    userDataState.superDailyPadValue,
    userDataState.miniTamponValue,
    userDataState.standardTamponValue,
  ]);

  React.useEffect(()=>{
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize',handleResize)

  },[]);
  //herhangi bir urunun sepetteki miktari degistiginde fiyat otomatik olarak guncelleniyor.

  //handle tab change fonksiyonu 3 ana tab uzerindeki sliderlarin basliklarini degistirebilmek icin kullandigim bir fonksiyon oldu.
  //State uzerinde 3 degisken tutarak  baslik degisimlerini handle edebildim.
  const handleTabChange = (buttonID: number) => {
    if (buttonID === 0) {
      setUserDataState({
        ...userDataState,
        sliderName1: "Standart Ped",
        sliderName2: "Süper Ped",
        sliderName3: "Süper+ Ped",
        tab: 0,
        maxVal: 60,
      });
    } else if (buttonID === 1) {
      setUserDataState({
        ...userDataState,
        sliderName1: "Günlük Ped",
        sliderName2: "Süper Günlük Ped",
        sliderName3: "",
        tab: 1,
        maxVal: 100,
      });
    } else {
      setUserDataState({
        ...userDataState,
        sliderName1: "Mini Tampon",
        sliderName2: "Standart Tampon",
        sliderName3: "",
        tab: 2,
        maxVal: 60,
      });
    }
  };

  return (
    //bu wrapper footer ve body yi bir arada tutmami sagliyor ve footer'in hep asagida kalmasina yariyor.
    <div className="wrapper">
      <div>

        <div className="custompacket--container">

        <div className="custompacket--left" style={windowSize < 1050 ? {minWidth:'100%'} : {}}>
          <div className="custompacket--header">
            <h1>Kendi Paketini Oluştur</h1>
            <a>Nasıl Çalışır?</a>
          </div>

          <span className='text--span' >
            Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve 
            miktarlardan, sana özel bir paket oluşturalım.
          </span>

          {/* uc ana kategoriyi burada custom packet sayfasinda tutmaktayim, ayni zamanda bu kategorilerin idlerini de global state imde tab olarak bulabilirsiniz */}
          <div className="category--container">
            <ul className="category--list">
              <li
                className="category--list--item"
                onClick={() => handleTabChange(0)}
              >
                beije Ped
              </li>
              <li
                className="category--list--item"
                onClick={() => handleTabChange(1)}
              >
                beije Günlük Ped
              </li>
              <li
                className="category--list--item"
                onClick={() => handleTabChange(2)}
              >
                beije Tampon
              </li>
            </ul>
          </div>

         
            
          {/*Sliderlari ayri bir component olarak kullandim, o componentin icerisinde yorumlari gorebilirsiniz*/}
         
         
          <div > <Sliders /> </div>

       
          {/* bu kisimda sadece responsiveness ayari yapiyorum, sayfa kuculunce paketini gor butonu gozukuyor */}
          {windowSize < 1050 &&<button className="check-out--button" style={{width:'100%',alignSelf:'center'}}> Paketini Gör</button>}
        </div>

        {/*Bu kisim ekranin sag kisminin bulundugu container, burada da urun isimlerini ve miktarlarini gosterebilmek icin
      ayri bir Cartcomponent icerisine yerlestirdim. 
      
      ayni zamanda responsiveness ayarini buradaki windowSize degiskenine gore ayarliyorum. sayfa ufalinca sol taraftaki component gorunmuyor.

      */}
       {windowSize > 1050 && <div className="custompacket--right">
          <div>
            <h1>Özel Paketin</h1>

            <div className='refresh' >
              <img src="./icons/refresh.png" alt="" />
              <p>2 ayda 1 gönderim</p>
            </div>
            <img src="./icons/packet.webp" alt="" />

            <CartComponent />

            {/* Bu kisimda ise totalPrice a gore buton veya paragraph olarak renderlayacagimi seciyorum. */}
            {totalPrice === 0 ? (
              <p className="addtocart--paragraph">
                Sepete Ekle (₺ {totalPrice.toFixed(2)})
              </p>
            ) : (
              <button className="check-out--button">
                Sepete Ekle (₺{totalPrice.toFixed(2)})
              </button>
            )}
          </div>
        </div>}
          
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default CustomPacket;
