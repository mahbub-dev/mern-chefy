import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Chef from "../pages/Chef";
import Register from "../pages/Register";
import NotFoundPage from "../pages/NotFoundPage";
const uid = localStorage.getItem('uid')
const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		errorElement: <NotFoundPage />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: async () => {
					try {
						const res = await fetch(`${import.meta.env.VITE_SERVER_URI}/chef`)
						const data = await res.json()
						return data
					} catch (error) {
						console.log(error)
						return []
					}
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
					try {
						const res = await fetch(`${import.meta.env.VITE_SERVER_URI}/chef/${params.id}`)
						const chef = await res.json()
						const res2 = await fetch(`${import.meta.env.VITE_SERVER_URI}/recipe/chef/${params.id}`)
						const recipe = await res2.json()
						return { chef, recipe }

					} catch (error) {
						console.log(error)
						const chef = {}
						const recipe = []
						return { chef, recipe }
					}


				}
			}
		]
	},
]);

export default router;
