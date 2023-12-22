import React from 'react';
import './master.css';

class PhotoEntry extends React.Component {

  render() {

    // console.log("this.props.caption = " + this.props.caption);
    // console.log("this.props.location = " + this.props.location);
    // console.log("this.props.src = " + this.props.src);
    // console.log("-------------------------------");
    //
    // const image_path = "../images/" + this.props.src;

    return <div className="photo-entry-block" >
              <a href="../images/berlin.jpg">
                 <img className="photo-img" src="../images/berlin.jpg" alt="../images/berlin.jpg" />
              </a>
              <h5>The Heart of Europe</h5>
              <h6>Berlin, Germany</h6>
           </div>
  }

}

export default PhotoEntry;
