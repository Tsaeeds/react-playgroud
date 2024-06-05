import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";


const route = createBrowserRouter([
{ 
  path: "/",
  element: <RootLayout />,
  errorElement: <Error />,
  children:[
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product",
      element: <Product />,
    }
  ]
}])

function App() {
  return <RouterProvider router={route} />;
}

export default App;
