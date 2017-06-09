import React from 'react';
import Photo from './Photo';
let placeholder = document.createElement("li");
placeholder.className = "placeholder";


class PhotoList extends React.Component{
  constructor(props){
    super(props);
    this.images = []
    this.state={
      dragging: false,
      photosList: ["dsc_6001.jpg", "dsc_6081.jpg", "dsc_6013.jpg", "dsc_6268.jpg", 
              "dsc_6397.jpg", "dsc_6345.jpg", "dsc_6378.jpg", "dsc_6413.jpg", 
              "dsc_6417.jpg"]
    };
   
    this.dragOver = this.dragOver.bind(this);
    this.dragStart = this.dragStart.bind(this);

  }

  dragStart(e){
    console.log('dragStart')
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
  }

  dragEnd(e){
    this.dragged.style.display = "block";
    this.dragged.parentNode.parentNode.removeChild(placeholder);

    let list = this.state.photosList;
    let start = Number(this.dragged.dataset.id);
    let end = Number(this.over.dataset.id);
      if(start < end) --end;
      if(this.nodePlacement === "after") ++end;
      list.splice(end, 0, list.splice(start, 1)[0]);
      this.setState({photosList: list});
  }

  dragOver(e){
    console.log('dragOver')
    e.preventDefault();
    let rel = e.pageY;
    let height = e.target.offsetHeight/2;
    let parent = e.target.parentNode;

    if(rel > height) {
      this.nodePlacement = "after";
      parent.insertBefore(placeholder, e.target.nextElementSibling);
    }
    else if(rel < height) {
      this.nodePlacement = "before"
      parent.insertBefore(placeholder, e.target);
    }
  }


  render(){
    return(
      <div className='photo-list' onDragOver={this.dragOver}>
        <section>
          {this.state.photosList.map((photoItem, i) => {
            return <Photo imagePath={photoItem} 
                  data-id={i}
                  key={i} 
                  onMouseUp={this.dragEnd}
                  onMouseDown={this.dragStart}
                /> 
          })}
          
        </section>
      </div>
    )
  }
}

export default PhotoList;

