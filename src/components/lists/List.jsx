import './List.scss';
import ListItem from '../listItems/ListItem'
import {useRef} from 'react';


const List = () => {
  
  const listRef = useRef();
  
  const handleClick =(direction)=>{
    let distance = listRef.current.getBoundingClientRect().x - 10;
    if (direction==="left") {
      listRef.current.stlye.transform= `translateX(${130 + distance}px)`;
    }
    if (direction==="right") {
      listRef.current.stlye.transform= `translateX(${-130 + distance}px)`;
    }
  }
  
  return (
    <div className="list">
      <span className="title">Continue to watch</span>
      <div className="wrapper">
        <span className="material-icons sliderArrow left" onClick={()=>handleClick("left")}>arrow_back_ios</span>
        <div className="container" ref = {listRef}>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </div>
        <span className="material-icons sliderArrow right" onClick={()=>handleClick("right")}>arrow_forward_ios</span>
      </div>
    </div>
  );
}

export default List;