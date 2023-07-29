import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import cross from '../../assets/images/crrose.svg';
import cycle from '../../assets/images/cycle3.jpg';

const Login = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    /*   const { signIn } = useContext(AuthContext);
      const [loginError, setLoginError] = useState('');
      const [loginUserEmail, setLoginUserEmail] = useState('')
      const [token] = useToken(loginUserEmail)
      const location = useLocation();
      const navigate = useNavigate()
      useTitle("Login")
      const from = location.state?.from?.pathname || '/'
  
  
      useEffect(() => {
          if (token) {
              console.log(token)
              navigate(from, { replace: true })
          }
      }, [token]) */

    const handleLogin = (data) => {
        console.log(data)
        /*  setLoginError('')
         signIn(data.email, data.password)
             .then(result => {
                 const user = result.user;
                 console.log(user)
                 setLoginUserEmail(data.email)
                 toast.success("Login Successfully!")
 
             })
             .catch(error => {
                 console.log(error)
                 setLoginError(error.message)
             })
         reset(); */

    }

    return (
        <div className="">
            <div style={{ backgroundImage: `url(${cycle})` }} className="opacity-10 flex justify-center items-center h-[740px]">

            </div>
        </div>

    );
};

export default Login;