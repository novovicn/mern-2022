import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password2: '',
  });

  const { email, password } = formData;
  const dataChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
      e.preventDefault();
      console.log(email, password);
  }

  return (
    <>
      <h1>
        <FaUser /> Login
      </h1>
      <section className="form">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your e-mail"
              onChange={dataChangeHandler}
              name="email"
              value={email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter your password"
              onChange={dataChangeHandler}
              name="password"
              value={password}
            />
          </div>
          <button type='submit' className='btn btn-block'>REGISTER</button>
        </form>
      </section>
    </>
  );
}

export default Login;
