import ReactDOM from "react-dom/client";
import Form from "./components/FormValidation/Form";
import AxiosFile from "./components/Axios/AxiosFile";
import MuiFile from "./components/MUI/MuiFile";
import Error from "./Error";
import CardPage from "./components/MUI/CardPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";
import Navbar from "./components/MUI/Navbar";
function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <MainNavbar />,
      },
      {
        path: "/mui",
        element: <Navbar />,
        children: [
          { path: "", element: <MuiFile /> },
          {
            path: "go",
            element: <CardPage />,
          },
        ],
      },
      {
        path: "axios",
        element: <AxiosFile />,
      },
      {
        path: "form",
        element: <Form />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routes} />);
