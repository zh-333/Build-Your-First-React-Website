import React from 'react';
import PhotoEntry from './PhotoEntry';

class AlbumMaker extends React.Component {

  render() {

    return (
      <div className="flex-container">
        <PhotoEntry src="berlin.jpg" location="Berlin, Germany" caption="Heart of Europe" />
        <PhotoEntry src="beverly-hills.jpg" location="Beverly Hills, USA" caption="Southern California" />
        <PhotoEntry src="maple-leaf.jpg" location="Toronto, Canada" caption="Autumn" />
        <PhotoEntry src="wings.jpg" location="San Francisco, USA" caption="Wanderlust" />
        <PhotoEntry src="hawaii.jpg" location="Kona, Hawaii, USA" caption="Deep Thought" />
        <PhotoEntry src="london.jpg" location="London, UK" caption="Trafalgar Square" />
      </div>
    )

  }

}

export default AlbumMaker;
