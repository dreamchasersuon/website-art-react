import React, { Component } from 'react';
import './Main.css';
import NavigationHeader from './NavigationHeader.js';
import InfoIntro from './InfoIntro.js';
import InfoBlock from './InfoBlock.js';

class Main extends Component {
  render() {
    return(
      <div className="BodyDivisor_black">
        <main className="BodyDivisorBlack-MainGroup">
          <NavigationHeader />
            <div className="MainGroup-AboutInfo_wrapper">
              <InfoIntro />
              <InfoBlock />
            </div>
          </main>
          <a href="https://www.facebook.com/profile.php?id=100005225081366&ref=br_rs" rel="noreferrer noopener" target="_blank">
            <div className="frontImg"></div>
          </a>
        <div className="BodyDivisorBlack-TextItem_title">
          Contemporary Russian Artist, Moscow
        </div>
      </div>
    );
  }
}

export default Main;
