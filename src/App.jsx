import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./Pages/ProfilePage";
import Adminpage from "./Pages/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Adminpage/>} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
