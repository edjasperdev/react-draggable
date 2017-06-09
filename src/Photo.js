import React from 'react';
import PropTypes from 'prop-types';


class Photo extends React.Component{

  render(){
    return(
      <div 
        data-drag-target="true"
        draggable="true"
        className="thumbnail" 
        onMouseUp={this.props.dragEnd}
        onMouseDown={this.props.dragStart}>
          <img draggable src={process.env.PUBLIC_URL + "/images/" + this.props.imagePath} alt={this.props.imagePath}/>
      </div>
    )
  }
}

Photo.propTypes = {
  imagePath: PropTypes.string
}

export default Photo;