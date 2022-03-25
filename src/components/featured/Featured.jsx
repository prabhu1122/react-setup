import './Featured.scss';


const Featured = ({type}) => {
  return (
    <div className="featured">
    {
      type && (
        <div className="catogery">
          <span>{type === 'movie' ? "Movies" : "Series"}</span>
          <select type='gerne' id='gerne'>
            <option>Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="thriller">Thriller</option>
            <option value="documerty">Documentry</option>
            <option value="drama">Drama</option>
            <option value="horrer">Horrer</option>
            <option value="adventure">Adventure</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="animation">Aimation</option>
            
          </select>
        </div>
    )}
      <img width="100%" src="http://m.gettywallpapers.com/wp-content/uploads/2020/04/Iron-Man-best-Wallpaper.jpg" alt="cover pic"/>
      <div className="info">
        <img src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="logo"/>
        <span className="desc">
          The lighter the value of sunlighte the more evaporation will accur and the chances of rain will increase.
        </span>
        <div className="buttons">
          <button className="play">
            <span className="material-icons">play_arrow</span>
            <span>Play</span>
          </button>
          <button className="more">
            <span className="material-icons">info_outline</span>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;