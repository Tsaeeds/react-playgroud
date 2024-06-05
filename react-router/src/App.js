import { RouterProvider, createBrowserRouter } from "react-router-dom";


const route = createBrowserRouter([{
  path: "/",
  element: <h1>Home</h1>,
},
{
  path: "/about",
  element: <h1>About</h1>,
}
])

function App() {
  return <RouterProvider router={route} />;
}

export default App;
