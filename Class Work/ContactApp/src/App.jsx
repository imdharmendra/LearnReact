import { Route, Routes } from "react-router-dom";
import Header from "./Contact/Header";
import InsertData from "./Contact/InsertData";
import Home from "./Contact/Home";
import ViewData from "./Contact/ViewData";
import Page from "./Contact/Page";
import UpdateData from "./Contact/UpdateData";
import Upage from "./Contact/Upage";
import DeleteData from "./Contact/DeleteData";
import Dpage from "./Contact/Dpage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="insert" element={<InsertData />}></Route>
        <Route path="view" element={<ViewData />}></Route>
        <Route path="page/:id" element={<Page />}></Route>
        <Route path="update" element={<UpdateData />}></Route>
        <Route path="upage/:id" element={<Upage />}></Route>
        <Route path="delete" element={<DeleteData />}></Route>
        <Route path="dpage/:id" element={<Dpage />}></Route>
        <Route path="*" element={<h2>Page Not Found</h2>}></Route>
      </Routes>
    </>
  );
}

export default App;
