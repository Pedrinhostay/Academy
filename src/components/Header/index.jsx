import { Link } from "react-router-dom"
import {Container,Menu,Navigation} from "./styles"
import {BiMenu} from "react-icons/bi"

export default function Header({ setMenuIsVisible }) {


  return (
    <Container >
        <Navigation>
            <Link className="links logo" to="/">Sport<span>Nutrition</span></Link>
          <ul>
            <li><a href="#header">Inicio</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#train">Treinos</a></li>
            <li><a href="#plans">Planos</a></li>
            <li><a href="#category">Categorias</a></li>
            <li><a href="#personal">Professores</a></li>
            <li><a href="#about">Sobre Nós</a></li>
          </ul>
          <Menu onClick={() => setMenuIsVisible(true)}><BiMenu/></Menu>
          </Navigation>
    </Container>
  )
}
