import './Navbar.scss';
import {useState} from 'react';

const Navbar = () => {
  
  const [isScrolled,setIsScrolled] = useState(false);
  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset===0 ? false : true);
    return () => (window.onscroll== null);
  };
  
  return (
    <div className= {isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="logo"/>
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <span class="material-icons">search</span>
          <p>Kid</p>
          <span class="material-icons">notifications</span>
          <img src="https://www.pexels.com/photo/6866035/download" alt="userlogo"/>
          
          <div className="profile">
            <span class="material-icons">arrow_drop_down</span>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;