import { useState } from "react";
import Hero from "../components/Hero";

import Plans from "./Plans";
import Services from "./Services";
import Train from "./Training";
import Header from "../components/Header";
import { MenuMobile } from "../components/menu";





export default function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (
    <>
    <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible}/>
    <Hero/>
    <Services/>
    <Train/>
    <Plans/>
    </>
  )
}
