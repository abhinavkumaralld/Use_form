import ReactDOM from "react-dom/client";
import Form from "./components/Form";
function App() {
  return (
    <div>
      <Form></Form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App());
