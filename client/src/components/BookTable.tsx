import { Book } from "@/components/Book";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/types/book";

export function BooksTable({ page }: { page: number }) {
	const { data, isLoading, isError } = useGetBooksQuery(page, {
		pollingInterval: 30000,
	});

	if (isLoading) {
		return <p>Books are loading...</p>;
	}

	if (isError) {
		return <p>Failed to load books.</p>;
	}

	if (!data?.books?.length) {
		return <p>No books available.</p>;
	}

	return (
		<>
			<Table className="">
				{/* <TableCaption>A list of recent books.</TableCaption> */}
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
				<TableBody>
					{!isLoading &&
						data &&
						data.books.map((book: IBook) => {
							return <Book key={book._id} book={book}></Book>;
						})}
				</TableBody>
			</Table>
		</>
	);
}
