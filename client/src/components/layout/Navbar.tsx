import { Link } from "react-router";
import { AddBookModal } from "../AddBookModal";
import { BorrowBookModal } from "../BorrowBookModal";
export const Navbar = () => {
	return (
		<div className="flex justify-between font-display mb-10">
			<img src="logo.png" alt="" className="h-6" />
			<div className="flex gap-3 items-center">
				<Link to={"books"}>Books</Link>
				<Link to={"summary"}>Summary</Link>
				<BorrowBookModal></BorrowBookModal>
				<AddBookModal></AddBookModal>
			</div>
		</div>
	);
};
