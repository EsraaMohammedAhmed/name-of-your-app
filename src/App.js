
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import AllToys from "./Pages/AllToys";
import AddToy from "./Pages/AddToy";
import EditToy from "./Pages/EditToy";

 
function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<AllToys />}></Route>
      <Route path="/add-toy" element={<AddToy />}></Route>
      <Route path="/edit-toy/:id" element={<EditToy />}></Route>
      </Routes>
    </Layout>
  ); 
}
export default App;
