import { goBack } from "../utils/GoBack";

const PageNotFound = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-300 flex-col space-y-4">
            <h2 className="text-2xl text-gray-800 text-center">The route you are trying to access could not be found</h2>
            <button className=" text-xl tracking-wide focus:outline-none text-gray-100 bg-[#2F4858] px-3 py-2 rounded-md hover:bg-[#21344d] transition-colors ease-in-out duration-200 " onClick={goBack()}>Go Back</button>
        </div>
    )
}

export default PageNotFound;