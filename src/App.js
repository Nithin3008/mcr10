import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Department from "./pages/Department";
import ProductPage from "./pages/ProductPage";
import NavMenu from "./components/NavMenu";
import NewItem from "./pages/NewItem";

function App() {
  return (
    <div className="App flex gap-10">
      <div className="h-screen bg-black sticky top-0 bottom-0">
        <NavMenu></NavMenu>
      </div>

      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/Department" element={<Department />}></Route>
        <Route path="/Productpage" element={<ProductPage />}></Route>
        <Route path="/Newitem" element={<NewItem />}></Route>
      </Routes>
    </div>
  );
}

export default App;
