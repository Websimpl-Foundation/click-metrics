import LineChart from "../charts/line_chart";
import PieChart from "../charts/pie_chart";
import DateFilter from "../charts/date_filter";
import CountCard from "../charts/count_card";
import BarChart from "../charts/bar_chart";
import GeoChart from "../charts/geo_chart";
import { Button } from "../ui";
import LocationCard from "../charts/location_card";
const Analytics = () => {
  return (
    <div className="-ml-2 dark:bg-[#0A192F] dark:text-white">
      <div className="bg-[#f4f6fa] ">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold p-2 ml-3 mb-3">Analytics</h1>
          <Button className="mr-10">Add Modules</Button>
        </div>
        <div className="ml-5 ">
          <div className="bg-[#0fbecf] pl-1 rounded-lg">
            <div className="bg-[#ecfeff] p-3">
              <h1 className="text-[#006e7d] text-xl font-bold">
                ✨ Free preview
              </h1>
              <p className="ml-8 text-[#007c8c]">
                This is an example of our new Analytics dashboard using sample
                Data.{" "}
                <a href="" className="underline">
                  Upgrade
                </a>{" "}
                to display your data in real time and make this report
                actionable.
              </p>
            </div>
          </div>
        </div>
        <DateFilter
          className={
            "flex items-center rounded-lg  overflow-hidden ml-4 border-4  "
          }
        >
          <div className="bg-[#f4f6fa] w-full h-full ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 items-start ">
              <div className="grid grid-flow-row gap-0  items-center">
                <CountCard
                  className={
                    "bg-[#ffffff] rounded-lg overflow-hidden shadow-lg hover:shadow-xl m-1 "
                  }
                />
                <LineChart
                  className={
                    " bg-[#ffffff] rounded-lg overflow-hidden shadow-lg hover:shadow-xl m-1  "
                  }
                />
                <GeoChart
                  className={
                    "bg-[#ffffff] rounded-lg overflow-hidden shadow-lg hover:shadow-xl m-1"
                  }
                />
              </div>

              <div className="grid grid-flow-row gap-0">
                <PieChart
                  className={
                    "bg-[#ffffff] rounded-lg overflow-hidden shadow-lg hover:shadow-xl m-1"
                  }
                />
                <BarChart
                  className={
                    "bg-[#ffffff] rounded-lg overflow-hidden shadow-lg hover:shadow-xl m-1"
                  }
                />
                <LocationCard
                  className={
                    "bg-[#ffffff] rounded-lg overflow-hidden shadow-lg hover:shadow-xl m-1"
                  }
                />
              </div>
            </div>
            {/* <ClicksCount start_date={new Date("2024-03-09")}/> */}
          </div>
        </DateFilter>
      </div>
    </div>
  );
};

export default Analytics;
