import { Route, Routes } from "react-router-dom";
import Aside from "./User/Aside";
import Header from "./User/Header";
import Home from "./User/Home";
import Insert from "./User/Insert";
import View from "./User/View";
import Page from "./User/Page";
import Upage from "./Upage";
import Dpage from "./User/Dpage";

function App() {
  return (
    <>
      <Header />
      <div className="body">
        <Aside />
        <div className="Data">
          <Routes>
            <Route
              path="/"
              element={<h1>Welcome to Contact App Let's Start...</h1>}
            ></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="insert" element={<Insert />}></Route>
            <Route path="view" element={<View />}></Route>
            <Route path="page/:id" element={<Page />}></Route>
            <Route path="Upage/:id" element={<Upage />}></Route>
            <Route path="Dpage/:id" element={<Dpage />}></Route>
            <Route path="*" element={<h1>Page Not Found</h1>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
