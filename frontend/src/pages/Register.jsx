import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;
  const dataChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
      e.preventDefault();
      console.log(name, email, password, password2);
  }

  return (
    <>
      <h1>
        <FaUser /> Register
      </h1>
      <section className="form">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your name"
              onChange={dataChangeHandler}
              name="name"
              value={name}
            />
          </div>
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
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm your password"
              onChange={dataChangeHandler}
              name="password2"
              value={password2}
            />
          </div>
          <button type='submit' className='btn btn-block'>REGISTER</button>
        </form>
      </section>
    </>
  );
}

export default Register;
