import { useNavigate, useRouteError } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import notfound from "../../../assets/images/notfound.jpg";

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="flex h-[800px] justify-center items-center bg-teal-50">
            <div>
                <img src={notfound} className="w-96 h-72" alt="" />
                <p className="text-red-500">Something went wrong!!</p>
                <h4 className='text-3xl'>Please <button onClick={handleLogOut}> <span className='font-bold'>Sign Out</span> </button> and log back in</h4>
            </div>
        </div>
    );
};

export default DisplayError;