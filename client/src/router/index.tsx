import App from "@/App";
import { Books } from "@/pages/books";
import { Summary } from "@/pages/summary";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
	{
		path: "",
		Component: App,
		children: [
			{ index: true, Component: Books },
			{ path: "books", Component: Books },
			{ path: "summary", Component: Summary },
		],
	},
]);
