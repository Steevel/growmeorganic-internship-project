import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import Navbar from "./components/Navbar";

function App() {
  const { isUser } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/details"
          element={isUser ? <DetailsPage /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
