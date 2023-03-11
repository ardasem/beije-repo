import React from "react";
import { useState, useContext } from "react";
import { UserDataContext } from "../context/UserDataContext";
import Slider from "@mui/material/Slider";


function Sliders() {
  const { userDataState, setUserDataState } = useContext(UserDataContext); 

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
        <p>{userDataState.sliderName1}</p>
        <div className="slider--data">
          <p>0</p>

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
          <p>{userDataState.maxVal}</p>
        </div>

        <p>{userDataState.sliderName2}</p>

        <div className="slider--data">
          <p>0</p>
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

          <p>{userDataState.maxVal}</p>
        </div>

        {userDataState.sliderName3 !== "" && (
          <>
            <p>{userDataState.sliderName3}</p>
            <div className="slider--data">
              <p>0</p>
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
              <p>60</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Sliders;
