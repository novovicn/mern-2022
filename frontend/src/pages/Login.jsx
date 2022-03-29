import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import { reset, login} from '../features/auth/authSlice';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const { user, success, loading, error, message } = useSelector(
    (state) => state.auth
  );

  const { email, password } = formData;
  const dataChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (error) {
      toast.error(message)
    }
    if (success || user) {
      navigate('/')
    }
    dispatch(reset())
  }, [user, error, success, message, navigate, dispatch])

  const submitHandler = (e) => {
      e.preventDefault();
      
      const userData = {
        email, 
        password
      }

      dispatch(login(userData));

  }

  if(loading){
    return <Spinner />
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
          <button type='submit' className='btn btn-block'>LOGIN</button>
        </form>
      </section>
    </>
  );
}

export default Login;
