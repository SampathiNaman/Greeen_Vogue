import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

const Login = (props) => {
  const {setLoggedIn} = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const navigate = useNavigate();


  const loginHandler = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError('Enter Credentials');
      return;
    }

    await axios.post("http://localhost:5000/api/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          Cookies.set('refreshToken', res.data.token);
          Cookies.set('role', res.data.role);  
          setError('');
          setLoggedIn(true);
          navigate("/");
        }
      })
      .catch(() => {
          setError('Invalid Credentials');
      });
  };

  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={setEmail}
                />
                <CustomInput
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={setPassword}
                />
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button
                      className="button border-0"
                      type="submit"
                      onClick={loginHandler}
                    >
                      Login
                    </button>
                    <Link to="/signup" className="button signup">
                      SignUp
                    </Link>
                  </div>
                  {error && <p className="text-danger text-center mt-3">{error}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
