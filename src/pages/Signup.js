import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
// import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (name === '' || email === '' || mobile === '' || password === '' || role === '') {
      setError('All fields are required')
      return
    }

    await axios.post("http://localhost:5000/api/user/signup", {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
      role: role
    })
    .then((res) => {
      console.log(res);
      setError('')
      navigate('/')
    })
    .catch((err) => {
      console.log(err);
      setError(err.response.data.message)
    });

  }

  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" onSubmit={submitHandler} className="d-flex flex-column gap-15">
                <CustomInput type="text" name="name" placeholder="Name" value={name} onChange={setName} />
                <CustomInput type="email" name="email" placeholder="Email" value={email} onChange={setEmail} />
                <CustomInput
                  type="tel"
                  name="mobile"
                  value={mobile}
                  placeholder="Mobile Number"
                  onChange={setMobile}
                />
                
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={setPassword}
                />
                <select name='role' id='role' className='form-control'
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value=''>Select Role</option>
                  <option value='buyer'>Buyer</option>
                  <option value='seller'>Seller</option> 
                </select>      
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">Sign Up</button>
                  </div>
                  {error && <p className='text-danger'>{error}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
