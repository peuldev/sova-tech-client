import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" h-[100vh] flex justify-center items-center container mx-auto">
      <div className="text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <h3 className="my-5 text-4xl font-semibold">Page Not found</h3>
        <p className=" inline py-2 px-4 bg-custom_blue hover:bg-custom_yellow hover:text-custom_white  rounded-full cursor-pointer">
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
