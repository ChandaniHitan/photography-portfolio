import React, { Component } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'images/child.jpg',
    'images/nature.jpg',
    'images/food.jpg',
    'images/winter.jpg',
    'images/kiminki.jpg'
  ];

  export default class PhotosliderComponent extends Component {
    render(){
      return (
        <div>
            <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
            </div>
          </div>
        </Slide>
        </div>
      )
    }
    
}
