import { Button } from "../ui";
import { Link } from "react-router-dom";

const Campaigns = () => {
  return (
    <div className="bg-[#fff] w-full h-full dark:bg-[#0D203D] dark:text-white">
        <div className="flex flex-col items-center justify-center mt-14 mb-10">
            <img src="https://app.bitly.com/s/bbt2/images/campaigns-empty-state.png" className="w-1/3" />
        </div>
      <h1 className="text-3xl font-bold text-center mb-3">
        Some links belong together
      </h1>
      <h1 className="text-lg text-center mb-6 w-1/2 mx-auto">
        Organize your links in Bitly Campaigns and compare performance across
        channels. Available on the Premium plan.
      </h1>
      <div className="text-center">
        <Button className="bg-blue-700 rounded-md text-center mt-4 mb-6 px-12">View our Plans</Button>
        <br />
        <Link to="/" className="text-blue-700 text-centers">Learn More</Link>
      </div>
    </div>
  );
};

export default Campaigns;