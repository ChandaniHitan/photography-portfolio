

import React from "react";

export default class FooterComponent extends React.Component {
    render(){
            const date = new Date();
            const year = date.getFullYear();
            return (
                <div className="footer" id="contactInfo">
                    <div className="footerGrid">
                        <div>
                        <h4>About</h4>
                        </div>
                        
                        <div>
                        <h4>Services</h4>
                        </div>
                        <div>
                        
                        <h4>Follow Along</h4>
                        <div className="soMe">
                        <div><a href="https://twitter.com/tchandani" className="twitter"><i class="fab fa-twitter" style={{color:"white"}}></i></a></div>
                        <div><a href="https://www.facebook.com/tchandani.daisy" className="facebook"><i class="fab fa-facebook-f" style={{color:"white"}}></i></a></div>
                        <div><a href="https://www.instagram.com/" className="instagram"><i class="fab fa-instagram" style={{color:"white"}}></i></a></div>
                        <div><a href="https://www.youtube.com/user/amour4us" className="youtube"><i class="fab fa-youtube" style={{color:"white"}}></i></a></div>
                        </div>
                        </div>

                        <div>
                        <h4>Contact</h4>
                        <p class="text-white"><i class="fas fa-home mr-3"></i> Oulu, 9870, Finland</p>
                        <p class="text-white"><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
                        <p class="text-white"><i class="fas fa-phone mr-3"></i> + 358 274 567 90</p>
                        </div>
                    </div>
                    <p className="copyright">Copyright ©{year} All rights reserved</p>
                </div>
        )
    }
} 
