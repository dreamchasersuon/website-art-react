import React, { Component } from 'react';
import './GallerySlider.css';
import PropTypes from "prop-types";
import bigUrls from './BigData.js';
const bUrls = bigUrls;

class GallerySlider extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      src: bUrls[0]
    };
  }
 handleClick(event) {
   let check = event.target.src.replace('/small/', '/big/');
   this.setState( { src: check } );
 }

  renderImage(imageUrl) {
    return (
          <div className="Item-Wrapper">
          <img className="Gallery-Item r-3-2 transition"
               src={ imageUrl }
               alt="Art"
               onClick={ this.handleClick }
               />
        </div>
    );
  }
  render() {
    return (
      <div>
        <div className="Feature">
          <img className="Featured-Item r-3-2 transition"
               src={ this.state.src }
               alt="Art"
               />
      </div>
      <div className="Gallery-SliderPreview_wrapper">
        <div className="Gallery-SliderPreview">
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    </div>
    );
  }
}

GallerySlider.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default GallerySlider;
