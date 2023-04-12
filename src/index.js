import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Render from "./render";
import Test from "./Test";
import Fetch from "./fetch";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Test" element={<Test />} />
      <Route path="/Render" element={<Render />} />
      <Route path="/fetch" element={<Fetch />} />
    </Routes>
  </BrowserRouter>
);
