import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Resgister from "../pages/Resgister";
import Chef from "../pages/Chef";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		children: [
			{
				path: '/',
				element: <Home />
			}, {
				path: '/login',
				element: <Login />
			},
			{
				path: '/register',
				element: <Resgister />
			}
			, {
				path: '/chef/:id',
				element: <Chef />
			}
		]
	},
]);

export default router;
