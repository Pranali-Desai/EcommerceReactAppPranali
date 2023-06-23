//import { NavLink } from "react-router-dom";
import styled from "styled-components";
//import { Button } from "./Button";

const Wrapper = styled.section` 
padding : 12rem 0;
img{
    width:10rem;
    height:10rem;
}

.hero-section-data{
    p{ 
        margin:2rem 0;
    }

    h1{
    text-transform:capitalize;
    font-weight:bold;
    }

    .intro-data{
      margin-bottom:0;
    }
}
.hero-section-image{
    width:100%;
    height:auto;
    diaplay:flex;
    justify-content:center;
    align_items:center;
}

figure{
 position: relative;

 &::after{
    content:"";
    width:60%;
    height:80%;
    background-color: rgba(81, 56, 238, 0.4);
    position:absolute;
    left:50%;
    top: -5rem;
    z-index: -1;
 }
}

.img-style{
width:100%;
height: auto;
}

@media(max-width:${({ theme }) => theme.media.mobile}){

    .grid{
        gap:10rem;
    }

    figure::after{
        content:"";
        width:50%;
        height:100%;
        left:0;
        top:10%;
        background-color: rgba(81, 56, 238, 0.4);
    }
}
`;

const HeroSection = ({myData}) => {

    //const {name} = myData;

    return <Wrapper>
    <div className="container">
        <div className="grid grid-two-column">
         <div className="hero-section-data">
            <p></p>    
            <h2> Welcome to Saii Traders</h2>       
            <p></p>          
         </div>
         <div className="hero-section-image">
            <figure>
                <img src="images/JK-Cement.jpg" alt="hero-section" className="img-style"></img>
            </figure>
         </div>
        </div>
    </div>
   </Wrapper>;;
  };

  
  export default HeroSection;