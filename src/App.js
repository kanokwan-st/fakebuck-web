import { ToastContainer } from "react-toastify";

import Router from "./routes/Router";
import useLoading from "./hooks/useLoading";
import Spinner from "./components/Spinner";

export default function App() {
  const { loading } = useLoading();
  return (
    <>
      {loading && <Spinner />}
      <Router />;
      <ToastContainer autoClose="1000" theme="light" position="bottom-center" />
    </>
  );
}
