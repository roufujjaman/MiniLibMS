import { TableCell, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";
import type { IBook } from "@/types/book";

interface BookProp {
	book: IBook;
}

export const Book = ({ book }: BookProp) => {
	const [deleteBook] = useDeleteBookMutation();

	const handleDelete = async (bookID: string) => {
		toast(`Please confirm your deletion`, {
			description: `Book: ${book.title}`,
			action: {
				label: "Confirm",
				onClick: async () => await deleteBook(bookID),
			},
		});
	};

	return (
		<TableRow className="text-left font-display">
			<TableCell>{book.title}</TableCell>
			<TableCell>{book.author}</TableCell>
			<TableCell>{book.genre}</TableCell>
			<TableCell>{book.isbn}</TableCell>
			<TableCell>{book.copies}</TableCell>
			<TableCell className="m-auto">
				{book.available ? (
					<div className="w-3 h-3 bg-green-400 rounded-full"></div>
				) : (
					<div className="w-3 h-3 bg-red-400 rounded-full"></div>
				)}
			</TableCell>
			<TableCell className="flex gap-2 items-center">
				<Button variant="outline">Edit</Button>
				<Button variant="outline" onClick={() => handleDelete(book._id)}>
					Delete
				</Button>
			</TableCell>
		</TableRow>
	);
};
