import React, { Component } from 'react';
import './InfoIntro.css';

class InfoIntro extends Component {
  render() {
    return(
      <article className="AboutInfo-ArticleBlackSide_wrapper">
            <aside className="ArticleBlackSide-TextItem_left">
                Creativity Konstantin Rudenko is shrouded in myths and mystery.
            </aside>
            <aside className="ArticleBlackSide-TextItem_right">
                The artists life can be divided into three main periods. Held in Perm, St. Petersburg and Moscow.
            </aside>
        </article>
    );
  }
}

export default InfoIntro;
