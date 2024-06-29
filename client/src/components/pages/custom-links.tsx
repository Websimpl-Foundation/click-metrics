import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CustomLinks = () => {
    return (
        <div className="bg-white h-full flex flex-col items-center w-3/5 mx-auto dark:bg-[#0D203D] dark:text-white">
            <div className="flex flex-col mt-14 mb-10 w-fit">
                <h1 className="text-3xl font-bold mb-3 flex">
                    Brand your links with a custom domain
                </h1>
                <div className="bg-[#ecfdff] rounded-lg flex items-center gap-2 p-5 w-full">
                    <img
                        src="https://app.bitly.com/s/bbt2/images/dashboard-custom-domain.png" 
                        className="w-2/5" 
                        alt="Custom Domain"
                    />
                    <ol className="flex-1">
                        <li>✔ Replace the "bit.ly" in your short links with your own unique domain</li>
                        <li>✔ Help people recognize and trust your links</li>
                        <li>✔ Build brand awareness and get up to 17% more clicks</li>
                    </ol>
                </div>
                <div className="text-left mt-5">
                    <h2 className="text-xl font-semibold mb-2">
                        Find a domain
                    </h2>
                    <div className="flex gap-2 w-full">
                        <Input
                            id="pageName"
                            type="text"
                            placeholder="yourbrand.co"
                            className="w-full"
                        />
                        <Button className="bg-blue-700 px-5">
                            Search
                        </Button>
                    </div>
                    <p className="text-[#526281] text-sm mt-2">
                        Try entering your brand or product name.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CustomLinks;