import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Loader from "./components/loader";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <App />
      <Loader></Loader>

    </>
  </StrictMode>
);
