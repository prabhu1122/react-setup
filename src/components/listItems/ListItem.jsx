import './ListItem.scss';
import {useState} from 'react';

const ListItem = ({index}) => {
  const [isHovered,setIsHovered] = useState(false);
  const trailerNew = "https://rr2---sn-ci5gup-8one.googlevideo.com/videoplayback?expire=1648223330&ei=ApA9Yv3VAcOJ8wTPvrHQBw&ip=161.0.31.209&id=o-ADf2EH-RFDMCC7Ukj9xt6ktFyR_P-5Z18QWoseNrdHcU&itag=18&source=youtube&requiressl=yes&pcm2=yes&vprv=1&mime=video%2Fmp4&ns=bRQrPPClh3FTM61f2dFgCQ0G&gir=yes&clen=11508782&ratebypass=yes&dur=144.637&lmt=1576488371702387&fexp=24001373,24007246,24162928&c=WEB&txp=5531432&n=6n58ZXVatN_ZPw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgRgviCtmStm_VUT71p4qmvB1Y6DFkxo8iXB1Up2vVQtMCICo9q8PBJyHwA5bMj7va2513e5wayo_5DoAndv_cZxmD&redirect_counter=1&rm=sn-ab5eed7z&req_id=e4a7f34ce808a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=D0&mip=2401:4900:4188:9652:85d0:5390:c8b8:8b8a&mm=31&mn=sn-ci5gup-8one&ms=au&mt=1648201175&mv=u&mvi=2&pl=44&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgdc1hRx2kVZe_P-5sVQUvdKkkhAnu-lG4DtUx20XMbjUCIQCyVLdWq6x9wqno61lWqEli_QzBwEj6UZWy9L0p-ZyL4g%3D%3D";
  return (
    <div className="listItem" 
      style={{left: isHovered && ((index * 130) - 25) + (index * 10)}}
      onMouseEnter={()=>setIsHovered(true)} 
      onMouseLeave={()=>setIsHovered(false)}
    >
      <img 
        src="https://pngbackground.com/download/AqwWyYEBFkljmatPSN6ndkm5VKZsnBkQFGzM9SgWm4UVRuT6y6o8S5f9hjJFwmdehUcD3SKnlzY2rGaCrdXLKIyECjJZzecQkvBARgD09kok8UpsNbr1a2ysFyrEkx8zZhRy6yNTxtGFyljcXXgquxofqXIvf4V5oTTZM5O5mLql9ZfsBvccZjpjKKhUIJKYv7Y4qKyh/large" 
        alt="thumbPic"
      />
      {isHovered && (
        <div>
          <video src={trailerNew} autoPlay = {true} muted controls loop/>
          <div className="itemInfo">
            <div className="icons">
              <span className="material-icons icon">play_arrow</span>
              <span className="material-icons icon">add</span>
              <span className="material-icons icon">thumb_up_alt</span>
              <span className="material-icons icon">thumb_down_alt</span>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 25mins</span>
              <span className="ageLimit">+18</span>
              <span>2010</span>
            </div>
            <div className="desc">
              <span>The last time there is a great cage to other side of the jungle.</span>
            </div>
            <div className="gerne">Action</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListItem;