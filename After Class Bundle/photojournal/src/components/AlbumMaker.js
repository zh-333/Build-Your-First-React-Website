import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from './data/photo-entries';

class AlbumMaker extends React.Component {

  render() {

    var radius = 56;
    const pi = 3.14;
    debugger;
    const area = radius ** 2 * pi;

    return (
      <div className="flex-container">
        {
          entries.itemlist.map((photo) =>
            { return <PhotoEntry key={photo.src} src={photo.src} location={photo.location} caption={photo.caption} /> }
          )
        }
        {/* <PhotoEntry src="berlin.jpg" location="Berlin, Germany" caption="Heart of Europe" /> */}
      </div>
    )

  }

}

export default AlbumMaker;
