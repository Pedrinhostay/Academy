import { Container, Content, Item } from "./styles";
import service from "../modules/services.json"
import { Link } from "react-router-dom"

export default function ServicesContainer() {
    return (
      <Container id="services">
        <h1>Serviços</h1>
        <Content>
            {service.map((ser) => (
                <Item key={ser.id}>
                    <div>
                    <h2>{ser.title}</h2>
                    <p>{ser.description}</p>
                    <Link className="archor" to={ser.url}>Saiba Mais</Link>
                </div>
                </Item>
            ))}
        </Content>
      </Container>
    )
  }
  