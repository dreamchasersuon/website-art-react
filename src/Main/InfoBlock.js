import React, { Component } from 'react';
import './InfoBlock.css';

const InfoMain = ( { title, info } ) => (
  <section>
        <h2>{ info }</h2>
            <p>{ title }</p>
    </section>
)

class InfoBlock extends Component {
  render() {
    return(
      <article className="AboutInfo-ArticleWhiteSide_wrapper">
        <InfoMain title="on the shores of the distant northern sea, he absorbed the perspective, salt and cold of space, which later became the key to many of his works." info="Starting" />
        <InfoMain title="many corners of the globe, Konstantin significantly expanded his understanding of creative tasks, while maintaining a unique internal style of the plot, its mythology and artistic performance - whether it be graphics or oil." info="Visited" />
        <InfoMain title="1995 - the beginning of the “Permian period”, in which Konstantin, in addition to “including” in the Perm artistic environment, was actively involved in creating audio-visual performances together with the PLKN PRNL LMNL grouping, as well as many other artists and musicians who at that time Brut Perm." info="Perm" />
        <InfoMain title="1997 - participation in the iron exhibition in the black hall of the PSU. 1999 - participation in the all-Russian art-forum Cultural Heroes of the 21st Century. 2000 - participation in the exhibition In searсh good, Perm. 2002 - publication of the first collection of graphic works. The author himself speaks about this time as a special period in his life." info="Flow" />
        <InfoMain title="Among the most significant events of recent years, held by the artist in the capital, one can mention participation in the “Exhibition No. 5” (Center of Contemporary Culture “GARAGE”). The artist's works are in private collections, as well as purchased by renowned gallery owner and the founder of Museum Of Everything James Bredd." info="GARAGE" />
        <InfoMain title="To date, Konstantin confidently takes the position of an accomplished author, who has his own unique mythological code. In addition to painting, his creative areas include the creation of sculptures and scenery for filmmakers, the manufacture of authentic objects and the design of design locations." info="Now" />
      </article>
    );
  }
}

export default InfoBlock;
