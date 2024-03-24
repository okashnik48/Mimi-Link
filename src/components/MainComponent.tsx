import React, { FC } from "react";
import InputForm from "./elements/InputForm";
import Statistics from "./elements/Statistics";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainComponent: FC = () =>{
    return (
        <div >
        <h1 style={{ textAlign: "center" }}>Mini-Link</h1>
        <h2 style={{ textAlign: "center" }}>Create your mini link</h2>
        <div style = {{height: "100px"}}>
        <InputForm />
        </div>
        
        <h1 style={{ textAlign: "center" }}>Stats</h1>
        <Statistics />
        <ToastContainer />
      </div>
    )
}

export default MainComponent