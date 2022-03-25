import './ListItem.scss';
import {useState} from 'react';

const ListItem = ({index}) => {
  const [isHovered,setIsHovered] = useState(false);
  const trailers = [
    "https://rr4---sn-ci5gup-8one.googlevideo.com/videoplayback?expire=1648194379&ei=6x49YuyGB42xkgbOi62gAw&ip=205.185.223.166&id=o-AE3kYgp8gC8xP52dPlIQzWzwrusFMXcNRXi1xtkyKWIE&itag=18&source=youtube&requiressl=yes&spc=4ocVC3Vlgrpa0FnoxQHN3Pk3N_LK&vprv=1&mime=video%2Fmp4&ns=EZkCO-kyMZte7OXighz_X3YG&gir=yes&clen=9342870&ratebypass=yes&dur=146.192&lmt=1630337979117242&fexp=24001373,24007246,24162928&c=WEB&txp=5510222&n=HS54c4d-S5mKXQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgWw0piKcbuiXUzfSTuLBlKiDusjpvh72vEyt5PR1ohtsCIQDvKs1XQomrh2Iu2eORgdrj_1HbkgRMRzCV-s5we1a7fA%3D%3D&redirect_counter=1&rm=sn-nx5ze7z&req_id=13a7be595c56a3ee&cms_redirect=yes&ipbypass=yes&mh=7T&mip=2401:4900:4188:9652:85d0:5390:c8b8:8b8a&mm=31&mn=sn-ci5gup-8one&ms=au&mt=1648178929&mv=m&mvi=4&pl=44&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAPOSUTJSFpzyJt7f7Evsu2YZqe52psNTg3tjdgBpo3iqAiEAtBfilL79nL4bF-tj7YJ8AaU9pYB2PRcmw9XlqsWgNsc%3D",
    "https://rr9---sn-ci5gup-qxar.googlevideo.com/videoplayback?expire=1648195326&ei=niI9YqqwJ5GvkAS1ub7QDw&ip=216.131.107.46&id=o-ADpV-KJ4YPpqLXRCxxrkTQ_qYOFuA6YCgTBVC6Ujcza8&itag=18&source=youtube&requiressl=yes&spc=4ocVC1HxJ7aKBbk0RFKCDBgOmuXL&vprv=1&mime=video%2Fmp4&ns=tozaykiDbgx8UpGbSrDL7_4G&gir=yes&clen=10640360&ratebypass=yes&dur=151.417&lmt=1524506668091733&fexp=24001373,24007246,24162928&c=WEB&n=mH0GBz9dIhn9Mw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAPNsVkleD59UV0T97v-GJKch24Q2h0y2BPw96m7SxVgcAiAL-k-pZ-2WwLFYkS1lvdrOq47jwPxpFEULwGO7rDVI2Q%3D%3D&rm=sn-vgqese76&req_id=ebd93741642ca3ee&redirect_counter=2&cm2rm=sn-ci5gup-8one76&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=8O&mip=2401:4900:4188:9652:85d0:5390:c8b8:8b8a&mm=29&mn=sn-ci5gup-qxar&ms=rdu&mt=1648181808&mv=m&mvi=9&pcm2cms=yes&pl=44&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRQIgPQbqRDN1tXzfxa5KCCbrNbam1aFqWAy2MBb5g69J0nECIQCgy4ky1r9m0Wpy8qz29UCoRpPgfeDWo-zxh_B90AfADg%3D%3D"
  ]
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
          <video src={trailers[1]} autoPlay = {true} muted controls loop/>
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