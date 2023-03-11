import { createContext, useState } from "react";
import { userData } from "./userData";

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

export interface UserDataContextType {
  userDataState: UserDataStateType;
  setUserDataState: (newState: UserDataStateType) => void;
}

interface UserDataContextProviderProps {
  children: React.ReactNode;
}

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
