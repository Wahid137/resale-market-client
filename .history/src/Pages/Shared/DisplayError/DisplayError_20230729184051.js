import { useNavigate, useRouteError } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

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
        <div className="flex justify-center items-center bg-teal-50 w-[600px] h-[590px]">
            <div>
                <p className="text-red-500">Something went wrong!!</p>
                <p className='text-red-400'>{error.statusText || error.message}</p>
                <h4 className='text-3xl'>Please <button onClick={handleLogOut}> <span className='font-bold'>Sign Out</span> </button> and log back in</h4>
            </div>
        </div>
    );
};

export default DisplayError;