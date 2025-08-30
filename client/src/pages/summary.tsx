import {
	Table,
	TableBody,
	TableCaption,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export const Summary = () => {
	return (
		<Table className="">
			<TableCaption>A list of recent books.</TableCaption>

			<TableHeader>
				<TableRow>
					<TableHead>Title</TableHead>
					<TableHead>Author</TableHead>
					<TableHead onClick={() => console.log("head")}>Genre</TableHead>
					<TableHead>ISBN</TableHead>
					<TableHead>Copies</TableHead>
					<TableHead>Available</TableHead>
					<TableHead>Action</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody></TableBody>
		</Table>
	);
};
