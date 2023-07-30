import { Link } from "react-router-dom";
import NotFoundImg from "../../../assets/images/bg-notFound.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const DisplayError = () => {



    return (
        <div className="text-center w-full bg-teal-50 mx-auto py-32 px-10 h-[800px]">
            <p className="text-red-500">Something went wrong!!</p>
            <img className="w-1/3 mx-auto" src={NotFoundImg} alt="Not Found" />
            <Link to="/">
                <PrimaryButton>Go Home</PrimaryButton>
            </Link>
        </div>
    );
};

export default DisplayError;