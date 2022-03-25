import './Register.scss';
import {useRef, useState} from 'react';


const Register = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const handleStart =()=>{
    setEmail(emailRef.current.value);
  }
  const handleEnter =()=>{
    setPassword(passwordRef.current.value);
    console.log(password, email);
  }
  
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logoPic" src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="logo"/>
          <button className="loginBtn">Log in</button>
        </div>
      </div>
      
      <div className="container">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere, Cancle anytime.</h2>
        <p>Ready to watch? Enter your email to create or register.</p>
        {
          !email ? (
            <div className="input">
              <input type="email" placeholder="Enter your email" ref= {emailRef}/>
              <button className = "regiBtn" 
                onClick={handleStart}
              >
                Get Started
              </button>
            </div>)
          : (
            <form className="input">
              <input type="password" placeholder="Password" ref = {passwordRef}/>
              <button className = "regiBtn" 
                onClick={handleEnter}
              >
                Let's Enjoy
              </button>
            </form>
          )
        }
      </div>
    </div>
  );
}

export default Register;