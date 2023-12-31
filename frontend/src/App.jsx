import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
// import { useUserContext } from "./contexts/UserContext";
import PrivateRoutes from "./components/PrivateRoutes";
import "./App.css";
import "react-responsive-modal/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./pages/css/modalStyles.css";
import SignUp from "./pages/SignUp";
import Gallery from "./pages/Gallery";
import MyProfile from "./pages/MyProfile";
import Connection from "./pages/Connection";
import Navbar from "./pages/Navbar";
import Logout from "./components/Logout";
import EditMyProfile from "./pages/EditMyProfile";
import ChangePassword from "./components/ChangePassword";
import Admin from "./pages/Admin";
import DrawingDetails from "./pages/DrawingDetails";
import FAQ from "./pages/FAQ";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  // const dispatch = useUserContext()[1];

  // const checkConnection = async () => {
  //   try {
  //     const data = await fetch(
  //       `${import.meta.env.VITE_BACKEND_URL}/api/refreshToken`,
  //       {
  //         method: "GET",
  //         credentials: "include",
  //       }
  //     ).then((result) => result.json());
  //     return dispatch({ type: "SET_USER", payload: data });
  //   } catch (err) {
  //     return alert(err.response.data, "error");
  //   }
  // };

  // useEffect(() => {
  //   checkConnection();
  // }, []);

  return (
    <Router>
      <div className="flex flex-col min-w-min">
        <Navbar />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Connection />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route
            path="/"
            element={<PrivateRoutes authorizedRoles={["admin", "user"]} />}
          >
            <Route path="gallery" element={<Gallery />} />
            <Route path="/gallery/:id" element={<DrawingDetails />} />
            <Route path="my-profile" element={<MyProfile />} />
            <Route path="change-password/:id" element={<ChangePassword />} />
            <Route path="edit-profile/:id" element={<EditMyProfile />} />
            <Route path="logout" element={<Logout />} />
          </Route>

          <Route
            path="/admin"
            element={<PrivateRoutes authorizedRoles={["admin"]} />}
          >
            <Route index element={<Admin />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
