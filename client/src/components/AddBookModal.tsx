import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import { useCreateBookMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";

export function AddBookModal() {
	const [open, setOpen] = useState(false);
	const form = useForm();

	const [createTask, { data }] = useCreateBookMutation();

	console.log(data);

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		try {
			await createTask(data).unwrap();
			setOpen(false);
			form.reset();
		} catch (err) {
			toast.error("Failed to create task.");
			console.error(err);
		}
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>Create</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add A Book</DialogTitle>
					<DialogDescription>
						Insert all all the informations. Click save when you&apos;re done.
					</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input
											{...field}
											value={field.value || ""}
											placeholder="Write your title here"
										/>
									</FormControl>
									<FormDescription />
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="author"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Author</FormLabel>
									<FormControl>
										<Input
											{...field}
											value={field.value || ""}
											placeholder="Write author's name here"
										/>
									</FormControl>
									<FormDescription />
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="genre"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Genre</FormLabel>
									<FormControl>
										<Input
											{...field}
											value={field.value || ""}
											placeholder="Write genre here"
										/>
									</FormControl>
									<FormDescription />
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="isbn"
							render={({ field }) => (
								<FormItem>
									<FormLabel>ISBN</FormLabel>
									<FormControl>
										<Input
											{...field}
											value={field.value || ""}
											placeholder="Write the ISBN number here"
										/>
									</FormControl>
									<FormDescription />
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="copies"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Copies</FormLabel>
									<FormControl>
										<Input
											{...field}
											value={field.value || ""}
											placeholder="Write number of copies available here"
										/>
									</FormControl>
									<FormDescription />
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea
											{...field}
											value={field.value || ""}
											placeholder="Write your description here"
										/>
									</FormControl>
									<FormDescription />
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter className="mt-5">
							<DialogClose asChild>
								<Button variant="outline">Cancel</Button>
							</DialogClose>
							<Button type="submit">Save</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
