import './List.scss';
import ListItem from '../listItems/ListItem'
import {useRef, useState} from 'react';


const List = () => {
  const [slideCount,setSlideCount] = useState(0);
  const listRef = useRef();
  const handleClick=(direction)=>{
    let distance = listRef.current.getBoundingClientRect().x - 20;
    
    if (direction === "left"  && slideCount > 0) {
      
      setSlideCount(slideCount-1);
      listRef.current.style.transform = `translateX(${130+distance+20}px)`;
    }
    
    if (direction === "right" && slideCount < 6) {
      
      setSlideCount(slideCount+1);
      listRef.current.style.transform = `translateX(${-130+distance}px)`;
    }
  }
  
  return (
    <div className="list">
      <span className="title">Continue to watch</span>
      <div className="wrapper">
        <span className="material-icons scroller left" 
          onClick={()=>handleClick("left")}
          style={{display: slideCount === 0 && "none"}}
        >
          arrow_back_ios
        </span>
        <div className="container" ref = {listRef}>
          <ListItem index={0}/>
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
        </div>
        <span className="material-icons scroller right" 
          onClick={()=>handleClick("right")
          }
          style={{display: slideCount === 6 && "none"}}
        >
          arrow_forward_ios
        </span>
      </div>
    </div>
  );
}

export default List;