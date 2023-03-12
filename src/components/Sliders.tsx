import React from "react";
import { useState, useContext } from "react";
import { UserDataContext } from "../context/UserDataContext";
import Slider from "@mui/material/Slider";


function Sliders() {
  const { userDataState, setUserDataState } = useContext(UserDataContext); 

  
//her slider icin farkli bir handler fonksiyonu yazmam gerekti 
//cunku hepsi icin global state uzerinde ayrica tuttugum bir deger var.
//asagidaki 7 fonksiyonun her biri 7 farkli urun icin tutulan verinin degerini degistirmekte

  const handleSlider1Change = (event: Event, newValue: number | number[]) => {
    setUserDataState({
      ...userDataState,
      standardPadValue: newValue as number,
    });
  };
  
  const handleSlider2Change = (event: Event, newValue: number | number[]) => {
    setUserDataState({ ...userDataState, superPadValue: newValue as number });
  };
 
  const handleSlider3Change = (event: Event, newValue: number | number[]) => {
    setUserDataState({
      ...userDataState,
      superPlusPadValue: newValue as number,
    });
  };

  const handleSlider4Change = (event: Event, newValue: number | number[]) => {
    setUserDataState({
      ...userDataState,
      dailyPadValue: newValue as number,
    });
  };

  const handleSlider5Change = (event: Event, newValue: number | number[]) => {
    setUserDataState({
      ...userDataState,
      superDailyPadValue: newValue as number,
    });
  };

  const handleSlider6Change = (event: Event, newValue: number | number[]) => {
    setUserDataState({
      ...userDataState,
      miniTamponValue: newValue as number,
    });
  };

  const handleSlider7Change = (event: Event, newValue: number | number[]) => {
    setUserDataState({
      ...userDataState,
      standardTamponValue: newValue as number,
    });
  };

 
  return (
    <div>
      <div className="slider--container">
         {/* Burada gormus oldugunuz p elementi\ bir ust componentte guncellenen tab datasina gore slider basliklarini degistirmekte , 
         slider 2 ve slider 3 icin de asagida birer p elementi bulunuyor. */}

       
        <div className="slider--data">
        <span>{userDataState.sliderName1}</span>
          
          {/* Burada gormus oldugunuz conditional rendering bir ust componentte guncellenen tab datasina gore sliderlarin gosterecekleri datayi degistiriyor,
          bazi durumda direkt olarak slideri gostermiyor. 
          ilk tab icin 1,2 ve 3 nolu handle fonksiyonlari
          ikinci tab icin 4 ve 5 nolu handle fonksiyonlari
          ucuncu tab icin ise 6 ve 7 nolu handle fonksiyonlari calismakta ve slider value lari da bu sirayla gosterilmekte. */}
          {userDataState.tab == 0 && (
            <Slider
              className="slider"
              id="sliderStandardPad"
              value={userDataState.standardPadValue}
              onChange={handleSlider1Change}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={userDataState.maxVal}
              sx={{
                width: 500,
                color: "grey",
              }}
            />
          )}

          {userDataState.tab == 1 && (
            <Slider
              className="slider"
              id="sliderDailyPad"
              value={userDataState.dailyPadValue}
              onChange={handleSlider4Change}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={userDataState.maxVal}
              sx={{
                width: 500,
                color: "grey",
              }}
            />
          )}

          {userDataState.tab == 2 && (
            <Slider
              className="slider"
              id="sliderMiniTampon"
              value={userDataState.miniTamponValue}
              onChange={handleSlider6Change}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={userDataState.maxVal}
              sx={{
                width: 500,
                color: "grey",
              }}
            />
          )}
          <div className="slider--values"><p>0</p> <p>{userDataState.maxVal}</p></div>
        </div>

       

        <div className="slider--data">
        <p>{userDataState.sliderName2}</p>
        
          {userDataState.tab == 0 && (
            <Slider
              className="slider"
              id="sliderSuperPad"
              value={userDataState.superPadValue}
              onChange={handleSlider2Change}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={userDataState.maxVal}
              sx={{
                width: 500,
                color: "grey",
              }}
            />
          )}
          {userDataState.tab == 1 && (
            <Slider
              className="slider"
              id="sliderSuperDailyPad"
              value={userDataState.superDailyPadValue}
              onChange={handleSlider5Change}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={userDataState.maxVal}
              sx={{
                width: 500,
                color: "grey",
              }}
            />
          )}

          {userDataState.tab == 2 && (
            <Slider
              className="slider"
              id="sliderStandardTampon"
              value={userDataState.standardTamponValue}
              onChange={handleSlider7Change}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={userDataState.maxVal}
              sx={{
                width: 500,
                color: "grey",
              }}
            />
          )}

<div className="slider--values"><p>0</p> <p>{userDataState.maxVal}</p></div>
        </div>

        {userDataState.sliderName3 !== "" && (
          <>
            
            <div className="slider--data">
            <p>{userDataState.sliderName3}</p>
            
              
              {userDataState.tab === 0 && (
                <Slider
                  className="slider"
                  id="sliderSuperPlusPad"
                  value={userDataState.superPlusPadValue}
                  onChange={handleSlider3Change}
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={60}
                  sx={{
                    width: 500,
                    color: "grey",
                  }}
                />
              )}
              <div className="slider--values"><p>0</p> <p>{userDataState.maxVal}</p></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Sliders;
