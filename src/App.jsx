import { BrowserRouter, Route, Routes } from "react-router-dom";
import CodeProvider from "./contexts/CodeContext";
import Home from "./pages/Home";
import Verify from "./pages/Verify";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <CodeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/share/:id" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CodeProvider>
    </BrowserRouter>
  )
}