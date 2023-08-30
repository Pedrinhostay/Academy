import { Container, Content, First, Social } from "./styles"
import { FaInstagram, FaFacebook} from "react-icons/fa"
export default function Hero() {
  return (
    <Container>
      <Content>
        <First>
          <h3>SportNUTRITION</h3>
          <h1>Você Quer ter um fisico <br /><span>ASTHERIC</span><br />NÃO É MESMO?</h1>
          <p>A Disciplina pode te levar a lugares que nunca imaginou.</p>
          <div>
            <button>Veja Mais</button>
            <button>Contratar</button>
          </div>
          </First>
      <Social>
        <span><FaFacebook/></span>
        <span><FaInstagram/></span>
        </Social>
      </Content>
    </Container>
  )
}
