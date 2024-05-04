import Home from "pages/home/Home";
import Layout from "./pages/Layout";
import Create from "pages/create/Create";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="craete" element={<Create />} />
    </Route>
  )
);

function App() {
return(
  <RouterProvider router={router} />
)

}

export default App;
