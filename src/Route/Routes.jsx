import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home.jsx";
import Product from "../Pages/Product/Product";
import Resources from "../Pages/Resources/Resources";
import Service from "../Pages/Service/Service";
import Customer from "../Pages/Customer/Customer";
import About from "../Pages/About/About";
import ErrorPage from "./ErrorPage";

const routes = createBrowserRouter([
	{
	  path: "/",
	  element: <Root></Root>,
	  errorElement: <ErrorPage></ErrorPage>,
	  children: [
		{
			path: "/",
			element: <Home></Home>
		},
		{
			path: "/about",
			element: <About></About>
		},
		{
			path: "/product",
			element: <Product></Product>
		},
		{
			path: "/resources",
			element: <Resources></Resources>
		},
		{
			path: "/Customer",
			element: <Customer></Customer>
		},
		{
			path: "/services",
			element: <Service></Service>
		}
	  ]
	}
  ]);
export default routes;