import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/index.jsx";


export default function Layout() {
  return (
    <>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}
