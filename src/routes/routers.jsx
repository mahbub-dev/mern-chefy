import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Chef from "../pages/Chef";
import Register from "../pages/Register";
const uid = localStorage.getItem('uid')
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
				element: !uid ? <Login /> : <Navigate to={'/'} />
			},
			{
				path: '/register',
				element: !uid ? <Register /> : <Navigate to={'/'} />
			}
			, {
				path: '/chef/:id',
				element: <Chef />
			}
		]
	},
]);

export default router;
