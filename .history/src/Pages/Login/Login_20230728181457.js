import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

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
        <div className="flex justify-center items-center h-[740px] bg-teal-50">
            <div className='card shadow-xl'>
                <form className=" w-[500px] pb-5" onSubmit={handleSubmit(handleLogin)}>
                    <h2 className='text-xl font-bold mb-12'>Login</h2>
                    <div className="form-control w-full mb-5">

                        <input type="text"
                            {...register("email", { required: "Email Address is required" })}
                            className="border-b-2 border-neutral bg-secondary w-full focus:outline-none h-10"
                            placeholder='Email Address' />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full mb-5">

                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Must be 6 character or more" },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong"
                                }
                            })}
                            className="border-b-2 border-neutral bg-secondary w-full focus:outline-none h-10"
                            placeholder='Password' />
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                    </div>
                    <br />
                    <input className='btn btn-primary w-full mb-5' type="submit" value="Login" />
                    <p className='text-center'>Don't have an Account? <Link to="/signup" className='text-primary'>Create An Account</Link></p>
                    {/*  <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div> */}
                </form>
                <div className='divider'>OR</div>
                <div className='px-10'>
                    <button className='btn btn-outline hover:bg-primary rounded-3xl w-full'><FcGoogle className='w-10 h-5'></FcGoogle> CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;