import ReactDOM from "react-dom/client";
import Form from "./components/Form";
import AxiosFile from "./components/AxiosFile";
function App() {
  return (
    <div>
      {/* <Form></Form> */}
      <AxiosFile />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App());
