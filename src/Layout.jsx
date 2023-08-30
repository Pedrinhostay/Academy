import { Outlet } from "react-router-dom";
import Header from "./components/Header/index.jsx";


export default function Layout() {
  return (
    <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <footer>Acabou</footer>
    </>
  )
}
