import { Link } from "react-router-dom";
import { Container, Content, ContentItem } from "./styles";

export default function Footer() {
  return (
    <Container>
        <Content>
            <ContentItem>
                <h2>Sport Nutrition</h2>
                <Link to="/blog">Sobre</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/blog">Responsabilidade Social</Link>
            </ContentItem>
            <ContentItem>
                <h2>Atendimento</h2>
                <Link to="/blog">Fale Conosco</Link>
                <p>(14) 99789-7239</p>
                <p>SEG / SEX - 05:00h às 23:00h</p>
                <p>SAB - 08:00h às 16:00h</p>
                <p>sportNutrition@gmail.com</p>
            </ContentItem>
            <ContentItem>
                <h2>Privacidade</h2>
                <Link to="/blog">Termos de Uso</Link>
                <Link to="/blog">Política de Contrato</Link>
                <Link to="/blog">Política de Pagamento</Link>
                <Link to="/blog">Privacidade do Cliente</Link>
            </ContentItem>
            <ContentItem>
                <h2>Formas de Pagamento</h2>
                <div> 
                    <img src="/pix.png" alt="" />
                    <img src="/master.png" alt="" />
                    <img src="/boleto.png" alt="" />
                </div>
                </ContentItem>
        </Content>
    </Container>
  )
}
