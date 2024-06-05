import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";


const route = createBrowserRouter([
{ 
  path: "/",
  element: <RootLayout />,
  errorElement: <Error />,
  children:[
    {
      path: "",
      element: <Home />,
    },
    { // "/product: absolute path" "product: relative path"
      path: "product",
      element: <Product />,
    },
    {
      path: "product/:productId",
      element: <ProductDetails />,
    }
  ]
}])

function App() {
  return <RouterProvider router={route} />;
}

export default App;
