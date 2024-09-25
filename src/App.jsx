import { Outlet } from "react-router-dom";
import NavBar1 from "./components/NavBar1";
import Footer from "./components/Footer";
// import VideoGame from "./components/VideoGame";

export default function App() {
  return (
    <>
      <NavBar1/>
      <Outlet/>
      <Footer/>
      {/* <VideoGame/> */}
    </>
  );
}