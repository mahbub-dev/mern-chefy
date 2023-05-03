import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Chef from "../pages/Chef";
import Register from "../pages/Register";
const uid = localStorage.getItem('uid')
console.log(import.meta.env.VITE_SERVER_URI)
const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: async () => {
					const res = await fetch(`${import.meta.env.VITE_SERVER_URI}/chef`)
					console.log(res)
					const data = await res.json()
					return data
				}

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
				element: <Chef />,
				loader: async ({ params }) => {
					const res = await fetch(`${import.meta.env.VITE_SERVER_URI}/chef/${params.id}`)
					const chef = await res.json()
					const res2 = await fetch(`${import.meta.env.VITE_SERVER_URI}/recipe/chef/${params.id}`)
					const recipe = await res2.json()

					return { chef, recipe }

				}
			}
		]
	},
]);

export default router;
