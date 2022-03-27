import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import { reset, register} from '../features/auth/authSlice';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, success, loading, error, message } = useSelector(
    (state) => state.auth
  );

  const { name, email, password, password2 } = formData;

  useEffect(() => {
    if(error){
      toast.error(message);
    }

    if(user || success) {
      navigate('/');
    }

    dispatch(reset());
  }, [error, user, success, message, navigate, dispatch])

  const dataChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error('Passwords do not match');
    }

    const userData = {
      name,
      email,
      password,
    };

    dispatch(register(userData));

    console.log(name, email, password, password2);
  };

  if(loading){
    return <Spinner/>
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
          <button type="submit" className="btn btn-block">
            REGISTER
          </button>
        </form>
      </section>
    </>
  );
}

export default Register;
