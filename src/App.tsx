import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { Button } from "@mui/material";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Button variant="contained">Hello World</Button> */}
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
