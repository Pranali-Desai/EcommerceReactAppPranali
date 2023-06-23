import styled from "styled-components";
import {FaDiscord} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";

const Wrapper = styled.section`
iSIFGq{margin:0;}

.contact-short{
    max-width:60vw;
    margin:auto;
    padding:5rem 10rem;
    background-color:${({ theme }) => theme.colors.bg};
    border-radius:1rem;
    box-shadow:${({ theme }) => theme.colors.shadowSupport};
    transform:translateY(50%);

    .grid div:last-clild{
        justify-self:end;
        align-self:center;
    }
}

footer{
    padding:6rem 0 4rem 0;
    background-color:black;

h3{
    color:white;
    margin-bottom:2.4rem;
}
p{
    color:white;  
}

.footer-social--icons{
     display:flex;
     gap:2rem;

     div{
        padding:1em;
        border-radius:50%;
        border:2px solid white;

            .icons{
                color:white;
                font-size:2.4rem;
                position:relative;
                cursor:pointer;
            }
        }
    }
}

.footer-bottom--section{
    padding-top:1rem;
    hr{
        margin-bottom:2rem;
        color:${({ theme }) => theme.colors.hr};
        height:0.1px;
    }
}
`;

const Footer = () => {
    return (
    <Wrapper>
    
    <footer>
        <div className="container grid grid-four-column">
            <div className="footer-about">
               <h3>Saii Traders</h3>
            </div>   

            <div className="footer-social">
                 <h3>Follow us</h3>
                 <div className="footer-social--icons">
                    <div>
                        <FaDiscord className="icons"/>
                    </div>
                    <div>
                        <FaInstagram className="icons"/>
                    </div>
                    <div>
                        <a href="/" target="_blank">
                            <FaYoutube className="icons"/>
                        </a>                  
                    </div>
                 </div>
            </div>

            <div className="footer-contact">
                <h3>Call us</h3>
                <h3>+91 09892106103</h3>
            </div>

            <div className="footer-bottom--section">
                <hr/>
                <div className="container grid grid-two-column">
                    <p>@{new Date().getFullYear()} All Rights Reserved By Saii Traders</p>
                    <div>
                        <p>PRIVECY POLICY</p>
                        <p>TERMS AND CONDITIONS</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </Wrapper>
    ); 
};

export default Footer;