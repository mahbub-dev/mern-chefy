import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Chef from "../pages/Chef";
import Register from "../pages/Register";
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
				element: <Register />
			}
			, {
				path: '/chef/:id',
				element: <Chef />
			}
		]
	},
]);

export default router;
