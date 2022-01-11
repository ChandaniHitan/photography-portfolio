import React from "react";
import styled from 'styled-components';

function FooterComponent({history}){
            const date = new Date();
            const year = date.getFullYear();
            return (
                <Footer>
                     <FooterGrid>
                        <div>
                        <A href="/about">About</A>
                        </div>
                        
                        <div>
                        <h5>Follow Along</h5>
                        <SoMe>
                        <div><a href="https://twitter.com/tchandani" className="twitter"><i class="fab fa-twitter" style={{color:"white"}}></i></a></div>
                        <div><a href="https://www.facebook.com/tchandani.daisy" className="facebook"><i class="fab fa-facebook-f" style={{color:"white"}}></i></a></div>
                        <div><a href="https://www.instagram.com/fotobyashish/" className="instagram"><i class="fab fa-instagram" style={{color:"white"}}></i></a></div>
                        <div><a href="https://www.youtube.com/user/amour4us" className="youtube"><i class="fab fa-youtube" style={{color:"white"}}></i></a></div>
                        </SoMe>
                        </div>

                        <div>
                        <h5>Contact</h5>
                        <p class="text-white"><i class="fas fa-home mr-3"></i> Oulu, 9870, Finland</p>
                        <p class="text-white"><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
                        <p class="text-white"><i class="fas fa-phone mr-3"></i> + 358 274 567 90</p>
                        </div>
                    </FooterGrid>
                    <Copyright>Copyright ©{year} All rights reserved</Copyright>
                </Footer>     
        )
} 

const Footer = styled.div`
    background-image: url("https://www.transparenttextures.com/patterns/shattered.png");
    background-color: black;
    color: white;
    position: relative;
    width: 100%;
    bottom: 0;
`
const FooterGrid = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fit);
    grid-gap: 10px;
    justify-content: space-evenly;
    padding: 10px;
    & h5 {
        font-family: "Times New Roman", Times, serif;
    }
    & p {
        color: #808080;
    }
`
const Copyright = styled.p`
    text-align: center;
    padding: 15px;
`
const SoMe = styled.div`
    padding-top: 5px;
    padding-bottom: 15px;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fit, 25px);
`
const A = styled.a`
    color: white;
    text-decoration: none;
    font-family: serif;
    font-size: 20px;
    &: hover {
        color: white;
        text-decoration: none;
        font-family: serif;
        font-size: 20px;
    }
`

export default FooterComponent;
