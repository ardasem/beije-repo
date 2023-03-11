import React from "react";
import { useContext } from "react";
import { UserDataContext } from "../context/UserDataContext";

const CartComponent: React.FC = () => {
  const { userDataState, setUserDataState } = useContext(UserDataContext);

  //bu isimlar sadece bu kisma ozgu olarak kullanilmakta bu sebeple burada array olarak tanimlandilar.
  const headerArray = [
    "Ped Paketleri",
    "Günlük Ped Paketleri",
    "Tampon Paketleri",
  ];

  //urun isimlerini state icerisinde tekrar tutmaya gerek duymadigim icin sadece burada kullanmak uzere array olarak tanimladim.
  const padTypesArray = [
    "Standart Ped",
    "Süper Ped",
    "Süper+ Ped",
    "Günlük Ped",
    "Süper Günlük Ped",
    "Mini Tampon",
    "Standart Tampon",
  ];


  //3 farkli kategorude 7 farkli urun bulundugu icin urunleri kategorilerine gore silmek adina 3 farkli fonksiyon yazdim.
  //fonksiyonlar global state e gidip oradaki ilgili urunlerin Value' larini sifirliyor.
  const handleClickTab1 = () => {
    setUserDataState({
      ...userDataState,
      standardPadValue: 0,
      superPadValue: 0,
      superPlusPadValue: 0,
    });
  };
  const handleClickTab2 = () => {
    setUserDataState({
      ...userDataState,
      dailyPadValue: 0,
      superDailyPadValue: 0,
    });
  };
  const handleClickTab3 = () => {
    setUserDataState({
      ...userDataState,
      miniTamponValue: 0,
      standardTamponValue: 0,
    });
  };

  return (
    <div className="cart--info--container">

    <div>
    <h2>
        {userDataState.standardPadValue ||
        userDataState.superPadValue ||
        userDataState.superPlusPadValue
          ? headerArray[0]
          : ""}
      </h2>
      <p style={{ fontWeight: 200 }}>
        {userDataState.standardPadValue
          ? `${userDataState.standardPadValue} ${padTypesArray[0]}`
          : ""}
        {userDataState.superPadValue
          ? ` ${userDataState.superPadValue} ${padTypesArray[1]}`
          : ""}

        {userDataState.superPlusPadValue
          ? ` ${userDataState.superPlusPadValue} ${padTypesArray[2]}`
          : ""}
      </p>
      <p className='delete--button' onClick={handleClickTab1}>
        {userDataState.standardPadValue ||
        userDataState.superPadValue ||
        userDataState.superPlusPadValue
          ? "Paketten Çıkart"
          : ""}
      </p>
    </div>
     

      <h2>
        {userDataState.dailyPadValue || userDataState.superDailyPadValue
          ? headerArray[1]
          : ""}
      </h2>
      <p style={{ fontWeight: 200 }}>
        {userDataState.dailyPadValue
          ? `${userDataState.dailyPadValue} ${padTypesArray[3]}`
          : ""}
        {userDataState.superDailyPadValue
          ? ` ${userDataState.superDailyPadValue} ${padTypesArray[4]}`
          : ""}
      </p>
      <p className='delete--button' onClick={handleClickTab2}>
        {userDataState.dailyPadValue ||
        userDataState.superDailyPadValue
          ? "Paketten Çıkart"
          : ""}
      </p>

      <h2>
        {userDataState.miniTamponValue || userDataState.standardTamponValue
          ? headerArray[2]
          : ""}
      </h2>
      <p style={{ fontWeight: 200 }}>
        {userDataState.miniTamponValue
          ? `${userDataState.miniTamponValue} ${padTypesArray[5]}`
          : ""}
        {userDataState.standardTamponValue
          ? ` ${userDataState.standardTamponValue} ${padTypesArray[6]}`
          : ""}
      </p>
      <p className='delete--button'onClick={handleClickTab3}>
        {userDataState.standardTamponValue ||
        userDataState.miniTamponValue
          ? "Paketten Çıkart"
          : ""}
      </p>
    </div>
  );
};

export default CartComponent;
