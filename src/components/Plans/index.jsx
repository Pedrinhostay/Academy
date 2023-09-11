import { Container, Content, Item } from "./style";

import data from "../modules/plans.json"
export default function PlansSection() {
  return (
    <Container>
        <h1>Planos</h1>
        <Content>
            {data.map((item) => (
                <Item key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <span>R$ {item.price}</span>
                    <button>Assinar</button>
                </Item>
            ))}
        </Content>
    </Container>
  )
}
