import React from "react";
import logo from "./logo.svg";
import "./App.css";
import './styles/BodyStyle.css'
import './styles/HeaderStyle.css'
import './styles/FooterStyle.css'
import './styles/BurgerMenuStyle.css'

import Header from "./components/Header";
import CustomPacket from "./components/CustomPacket";
import { UserDataContextProvider } from "./context/UserDataContext";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <UserDataContextProvider>
        <CustomPacket />
      </UserDataContextProvider>

    </div>
  );
};

export default App;
