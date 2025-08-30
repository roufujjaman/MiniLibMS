import { BooksTable } from "@/components/BookTable";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

export function Books() {
	const [page, setPage] = useState(0);

	return (
		<>
			<BooksTable page={page}></BooksTable>
			<Pagination className="flex">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							href="#"
							onClick={(e) => {
								e.preventDefault();
								if (page > 0) {
									setPage(page - 1);
								}
								console.log(page);
							}}
							className={page === 0 ? "opacity-50 pointer-events-none" : ""}
						/>
					</PaginationItem>

					<PaginationItem>
						<PaginationNext
							onClick={() => {
								console.log(page);
								setPage(page + 1);
							}}
							// className={page === 0 ? "opacity-50 pointer-events-none" : ""}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</>
	);
}
