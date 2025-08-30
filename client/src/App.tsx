import { Outlet } from "react-router";
import "./App.css";
import { Toaster } from "sonner";
import { Navbar } from "./components/layout/Navbar";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Toaster position="top-center"></Toaster>
		</>
	);
}

export default App;
