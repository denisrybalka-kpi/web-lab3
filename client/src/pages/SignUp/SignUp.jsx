import React, { useState } from "react";
import { register } from "../../utils/requests";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "male",
    birthdate: "",
  });

  const {
    mutate: registerUser,
    isError,
    error,
  } = useMutation(register, {
    onSuccess: () => {
      navigate("/login");
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(formData);
  };

  return (
    <section className='container mt-4' style={{ marginBottom: "100px" }}>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card mb-3'>
            <div className='card-body'>
              <h3 className='card-title'>Registration</h3>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='username'>Username</label>
                  <input
                    type='text'
                    className='form-control'
                    id='username'
                    name='username'
                    placeholder='Enter your username'
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email address</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    placeholder='Enter your email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                    name='password'
                    placeholder='Enter your password'
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='gender'>Gender</label>
                  <select
                    className='form-control'
                    id='gender'
                    name='gender'
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor='birthdate'>Birth Date</label>
                  <input
                    type='date'
                    className='form-control'
                    id='birthdate'
                    name='birthdate'
                    value={formData.birthdate}
                    onChange={handleChange}
                  />
                </div>
                {isError && <p className='text-danger'>{isError}</p>}
                <button type='submit' className='btn btn-success'>
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
