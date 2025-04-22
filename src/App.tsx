import { ToastContainer } from "react-toastify";
import Router from "./router";
import { CompareProvider } from "./components/context/compare";
function App() {
  return (
    <div>
      <>
        <Router />
      </>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
