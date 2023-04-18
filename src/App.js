import { Routes,Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Singin from "./Components/Singin";

function App() {
  return (
    <>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Singin/>}/>
    </Routes>
  
      </>
  );
}

export default App;
