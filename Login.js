import React, { useState } from "react";
import "./Login.css";
import "./Registration.css";
const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      <div>
        {isLoginForm ? (
          <div className="form">
            <form>
              <h1>
                <b>Login</b>
              </h1>
              <br />
              <input
                id="user"
                type="text"
                className="form__input"
                placeholder="Username"
                required
              />
              <br />
              <br />
              <input
                id="pass"
                type="password"
                className="form__input"
                placeholder="Password"
                required
              />
              <br />
              <br />
              <input
                id="email"
                type="email"
                className="form__input"
                placeholder="Email"
                required
              />
              <br />
              <br />
              <input type="submit" value="Login" className="btn-1" />
              <input type="reset" value="Reset" className="btn-2" />
              <div className="row">
                <p>
                  Don't have an account?{" "}
                  <a href="#" onClick={toggleForm}>
                    Register Here
                  </a>
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="blurr">
            <form className="form2" onSubmit={(e) => e.preventDefault()}>
              <h1 className="title">Create an account</h1>
              <div className="input-group">
                <hr />
                <br />
                <input
                  className="string outline"
                  type="text"
                  placeholder="Full name"
                  required
                />
                <br />
                <input
                  className="string outline"
                  type="text"
                  placeholder="User name"
                  required
                />
                <br />
                <input
                  className="string outline"
                  type="text"
                  placeholder="Email"
                  required
                />
                <br />
                <input
                  className="string outline"
                  type="password"
                  placeholder="Password"
                  required
                />
                <br />
                <label className="a" htmlFor="birthday">
                  Birthday:
                </label>
                <br />
                <br />
                <input
                  className="string outline"
                  type="date"
                  id="birthday"
                  name="birthday"
                  required
                />
                <br />
                <label className="a" htmlFor="gender">
                  Gender:
                </label>
                <br />
                <br />
                <input type="radio" id="male" name="gender" />
                <label className="a" htmlFor="gender">
                  Male
                </label>
                <input type="radio" id="female" name="gender" />
                <label className="a" htmlFor="gender">
                  Female
                </label>
                <br />
                <br />
                <br />
              </div>
              <input className="btn-3" type="submit" value="Create Account" />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
