import { Route, Routes } from "react-router-dom";
import Profile from "./profile-components/Profile";
import ListItemsFetch from "./components/ListItemsFetch";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListItemsFetch />} />
        <Route path="/user/:userId" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
