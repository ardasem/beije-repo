import { createContext, useState } from "react";
import { userData } from "./userData";


//global state icin kullanacagim verileri burada isimlendirdim.
//3 adet slider adi, basliklar icin
//her urun icin miktarlar
//3 kategoriye ayrilmasi sebebiyle conditional renderingde kullanmak icin tab numarasi 0 dan 2 ye kadar
// tab 0 ve 1 arasinda max siparis adedi degistigi icin yine conditional rendering yapabilmek icin max Value
// ve siparis adetleriyle birim fiyatlari carpmak icin kullandigim totaPrice
// birim fiyat datasi context icerisinde prices.ts dosyasindan geliyor.
interface UserDataStateType {
  sliderName1: string;
  sliderName2: string;
  sliderName3: string;

  standardPadValue: number;
  superPadValue: number;
  superPlusPadValue: number;
  dailyPadValue: number;
  superDailyPadValue: number;
  miniTamponValue: number;
  standardTamponValue: number;


  tab: number;
  maxVal:number;
  totalPrice:number;
}

//context type i export etme sebebim state ve setstate bilesenlerini context in oldugu her yerde kullanabilmek.
export interface UserDataContextType {
  userDataState: UserDataStateType;
  setUserDataState: (newState: UserDataStateType) => void;
}


interface UserDataContextProviderProps {
  children: React.ReactNode;
}

//context i burada olusturuyorum
export const UserDataContext = createContext<UserDataContextType>({
  userDataState: {
    sliderName1: "Standart Ped",
    sliderName2: "Süper Ped",
    sliderName3: "Süper+ Ped",
 
    standardPadValue: 0,
    superPadValue: 0,
    superPlusPadValue: 0,
    dailyPadValue: 0,
    superDailyPadValue: 0,
    miniTamponValue: 0,
    standardTamponValue: 0,

    tab: 0,
    maxVal:60,
    totalPrice:0.00
  
  },
  setUserDataState: () => {},
});

//burada ise provider icin gerekli olan kisim var. ChatGPT sablonu uzerinden gittim.
export const UserDataContextProvider: React.FC<
  UserDataContextProviderProps
> = ({ children }) => {
  const [userDataState, setUserDataState] = useState<UserDataStateType>({
    sliderName1: "Standart Ped",
    sliderName2: "Süper Ped",
    sliderName3: "Süper+ Ped",
  
    standardPadValue: 0,
    superPadValue: 0,
    superPlusPadValue: 0,
    dailyPadValue: 0,
    superDailyPadValue: 0,
    miniTamponValue: 0,
    standardTamponValue: 0,

    tab: 0,
    maxVal:60,
    totalPrice:0.00
  });

  const contextValue: UserDataContextType = {
    userDataState,
    setUserDataState,
  };

  return (
    <div>
      <UserDataContext.Provider value={contextValue}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};
