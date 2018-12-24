import React, { Component } from 'react';
import './GallerySlider.css';
import PropTypes from "prop-types";

class GallerySlider extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      src: null
    };
  }
 handleClick(imageUrl) {
   this.setState({justClicked: imageUrl});
 }

  renderImage(imageUrl) {
    return (
          <div className="item-wrapper">
          <img className="gallery-item image-holder r-3-2 transition"
               src={imageUrl}
               alt="Art"
               onClick={ this.handleClick}
               />
        </div>
    );
  }
  render() {
    return (
      <div>
        <div className="feature">
          <img className="featured-item image-holder r-3-2 transition"
               src={ this.state }
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
GallerySlider.propTypes = {
  featuredUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default GallerySlider;
