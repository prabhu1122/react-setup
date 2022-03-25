import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logoPic" src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="logo"/>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sing In</h1>
          <div className="email">
            <span className="material-icons">person</span>
            <input type="text" placeholder="Email or Phone number"/>
          </div>
          <div className="pass">
            <span className="material-icons">lock</span>
            <input type="password" placeholder="Password"/>
          </div>
          <button type="submit">Submit</button>
          <span>New on Netflix? <b>SignUp now</b></span>
          <small>This page is protected by reChapcha by google to ensure that you are no a robot <b>Learn more</b></small>
        </form>
      </div>
    </div>
  );
}

export default Login;