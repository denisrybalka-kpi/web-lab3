import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { login } from "../../utils/requests";
import { useUser } from "../../context/user";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isError, error } = useMutation(login, {
    onSuccess: (response) => {
      setUser(response.user);

      navigate("/profile");
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    mutate({ username, password });
  };

  return (
    <section className='container mt-4' style={{ marginBottom: "100px" }}>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card mb-3'>
            <div className='card-body'>
              <h3 className='card-title'>Login</h3>
              <form onSubmit={handleLogin}>
                <div className='form-group'>
                  <label htmlFor='loginUsername'>Username or Email</label>
                  <input
                    type='text'
                    className='form-control'
                    id='loginUsername'
                    placeholder='Enter your username or email'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='loginPassword'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='loginPassword'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {isError && (
                  <p className='text-danger'>{error.response.data}</p>
                )}
                <button type='submit' className='btn btn-success'>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
