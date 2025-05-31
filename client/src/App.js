import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import { useEffect, useState } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading, RefetchData } from "./redux/rootSlice";
import Admin from "./pages/Admin";
import Login from "./pages/Admin/Login";
import Signup from "./pages/Admin/Signup";

function App() {

  const {loading, portfolioData, refetchData}=useSelector(state=>state.root);
  const dispatch=useDispatch();

  const getPortfolioData = async()=>{
    try{
        dispatch(ShowLoading());
        const response = await axios.get('/api/portfolio/get-portfolio-data');
        dispatch(SetPortfolioData(response.data));
        dispatch(RefetchData(false));
        dispatch(HideLoading());
    }catch(e){
      console.error(e);
      dispatch(HideLoading);
    }
  }

  useEffect(()=>{
    if(!portfolioData || refetchData){
      getPortfolioData();
    }
  },[portfolioData, refetchData])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
