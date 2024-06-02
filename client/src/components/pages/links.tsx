import { Button } from "../ui";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SubmitHandler, useForm } from "react-hook-form";

const Links = () => {
	type Inputs = {
		url: string;
		title?: string;
		description?: string;
		custom?: string;
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmitdata: SubmitHandler<Inputs> = (formData) =>
		console.log(formData);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmitdata)} noValidate>
				<div className="container mx-auto px-4 md:px-0">
					<div className="flex flex-col gap-6  p-8 md:p-12">
						<Label className="text-4xl font-semibold" htmlFor="url">
							Create New
						</Label>
						<div>
							<div className="grid gap-3">
								<Label htmlFor="url">Destination</Label>
								<Input
									id="url"
									type="text"
									placeholder="http://www.example.com"
									{...register("url", {
										required: "Destination URL is required",
										pattern: {
											value: /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i,
											message: "Enter a valid URL",
										},
									})}
								/>
								<p className="text-red-500 text-sm">
									{errors.url && errors.url.message}
								</p>
							</div>
							<span>
								You can create 12 more links this month.
							</span>
						</div>

						<div className="grid gap-3">
							<Label htmlFor="title" className="font-semibold">
								Title (optional)
							</Label>
							<Input
								type="text"
								id="title"
								className="border p-2 w-full"
								placeholder="My First Blog"
								{...register("title")}
							/>
							<Button>Pick a random title</Button>
						</div>
						<div className="grid gap-3">
							<Label
								htmlFor="description"
								className="font-smeibold"
							>
								Description (optional)
							</Label>
							<Textarea
								placeholder="Type your description here."
								id="description"
								{...register("description")}
							/>
						</div>

						<h1 className="text-2xl font-bold mt-5">
							Ways to share
						</h1>
						<div className="grid gap-3">
							<Label className="font-semibold text-xl">
								Short link
							</Label>
							<div className="flex mb-8">
								<p className="text-2xl font-bold flex items-center">
									click.me/
								</p>
								<Input
									type="text"
									id="custom"
									className="border p-2 w-full md:w-80 ml-2"
									placeholder="my-first-blog"
									{...register("custom")}
								/>
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default Links;
