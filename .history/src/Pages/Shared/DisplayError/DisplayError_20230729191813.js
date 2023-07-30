import { Link } from "react-router-dom";
import NotFoundImg from "../../../assets/images/bg-notFound.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const DisplayError = () => {



    return (
        <div className="text-center w-full mx-auto py-32 px-10">

            <img className="w-1/3 mx-auto" src={NotFoundImg} alt="Not Found" />
            <Link to="/home">
                <PrimaryButton>Go Home</PrimaryButton>
            </Link>
        </div>
    );
};

export default DisplayError;