import { Button } from "../ui";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { Dropdown } from "../ui/dropdown";
import { QuestionIcon, SparkleIcon } from "@/assets/icons";
import { Link } from "react-router-dom";
import Template from "../themes/template"

const LinkInBio = () => {
    type Inputs = {
        pageName: string;
    };

    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();
    const onSubmitdata: SubmitHandler<Inputs> = (formData) =>
        console.log(formData);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitdata)} noValidate>
                <div className="container mx-auto px-4 md:px-0">
                    <div className="flex flex-col gap-6 bg-white p-8 md:p-12 dark:bg-[#0D203D] dark:text-white">
                        <Label className="text-4xl font-bold" htmlFor="url">
                            Create a Link-in-bio
                        </Label>
                        <p className="text-gray-600">
                            Build a beautiful page to share and manage all the links that matter to you. Bitly powers
                            hundreds of thousands of Links-in-bios for creators and bussinesses of all kinds. <Link to="/help" className="text-blue-700 underline">Learn more.</Link>
                        </p>
                        <div>
                            <div className="gap-3 flex flex-wrap">
                                <Label htmlFor="url" className="font-bold text-lg my-4">Claim your URL</Label>
                            </div>
                            <div className="gap-2 flex flex-wrap">
                                <Dropdown
                                    options={["bit.ly/", "bit.ly/2", "bit.ly/3"]}
                                    value="bit.ly/"
                                    onChange={(value) => console.log(value)}
                                />
                                <Input
                                    id="pageName"
                                    type="text"
                                    placeholder="your name or business"
                                    {...register("pageName", {
                                        required: "Page name is required",
                                    })}
                                    className="w-1/2"
                                />
                                <Button className="bg-blue-700 rounded-md" onClick={
                                    () => (window.alert("Backend not implemented yet"))
                                }>
                                    Create Page</Button>
                            </div>
                            <div className="w-auto h-auto bg-cyan-100 rounded-lg my-4 flex flex-wrap">
                                <SparkleIcon />
                                <div className="text-cyan-600 text-sm py-4 px-4">
                                    Brand your Link-in-bio with a custom domain! You'll even get a complimentary domain
                                    when you <Link to="/help" className="font-semibold underline" > upgrade your plan</Link>.
                                </div>
                            </div>
                            <p className="text-black text-sm">
                                Your plan includes <b>1</b> more Link-in-bios. <Link to="/help"><QuestionIcon /></Link>
                            </p>
                        </div>

                        <div className="w-full border-t border-gray-300 my-2">
                        </div>

                        <div className="grid gap-3">
                            <h1 className="font-bold text-lg">
                                Share all your links with one URL
                            </h1>
                            <p className="text-gray-600">
                                The Bitly Link-in-bio is an easy-to-read, flexible way to organise and share
                                your content with the power and reliability of Bitly short links. Take a look at these Link-in-bio examples.
                            </p>

                            <Label className="font-bold text-2xl my-5" htmlFor="url">Pick themes</Label>
                            <Template />
                            <Link to="/theme" className="text-blue-700 text-center py-6">View more themes</Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default LinkInBio;