import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => { 

  const theme = {
     colors :{ 
      bg: "#F6F8FA",
      footer_bg :"#0a1435",
      btn :"rgb(98,84,243)",
      border : "rgba(98,84,243,0.5)",
      hr :"#ffffff",
      gradient : "linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow : "rgba(0,0,0,0.02) 0px 1px 3px 0px ,rgb(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport : "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media :{
      mobile :"768px",
      tab :"998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
          <Router>
            <GlobalStyle></GlobalStyle>
            <Header/>
            <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/About" element={<About/>}></Route>
                        <Route path="/Products" element={<Products/>}></Route>
                        <Route path="/SingleProduct/:id" element={<SingleProduct/>}></Route>
                        <Route path="/Contact" element={<Contact></Contact>}></Route>
                        <Route path="/Cart" element={<Cart></Cart>}></Route>
                        <Route path="*" element={<Error></Error>}></Route>
            </Routes>
            <Footer/>
          </Router>       
    </ThemeProvider>
  );
};

export default App;
