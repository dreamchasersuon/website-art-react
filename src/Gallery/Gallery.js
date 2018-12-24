import React, { Component } from 'react';
import './Gallery.css';
import SocialMedia from '../Main/SocialMedia.js';
import GallerySlider from './GallerySlider.js';
import '../Main/Button.css';
import {smallUrls, bigUrls} from './Data.js';
const sUrls = smallUrls;
const bUrls = bigUrls;

class Gallery extends Component {
  handleClick(){
    let background = document.getElementsByClassName('BodyDivisorBlack-MainGroup')[0],
      gallery = document.getElementsByClassName('Gallery')[0];

      gallery.style.display = 'none';
      background.style.filter = 'none';
  }
  render() {
    return(
        <aside className="Gallery">
          <header className="GalleryHeader">
            <SocialMedia />
              <div className="Button_closed" onClick={this.handleClick}>close</div>
            </header>
          <GallerySlider featuredUrl={bUrls} imageUrls={sUrls} />
        </aside>
    );
  }
}

export default Gallery;
