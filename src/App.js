import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Inventory from "./Pages/Inventory/Inventory";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import AddItem from "./Pages/AddItem/AddItem";
import MyItem from "./Pages/MyItem/MyItem";
import Blogs from "./Pages/Blogs/Blogs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register.js/Register";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer pauseOnHover />
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        />
        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItem />
            </RequireAuth>
          }
        />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
