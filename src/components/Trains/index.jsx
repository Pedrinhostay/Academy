
import data from "../modules/metod.json"
import {Container, Content,Card,Item} from "./styles"

export default function Trains() {
  return (
    <Container id="train">
      <Content>
      <h1>Objetivos</h1>
      <Card>
      {data.map((item) =>(
        <Item key={item.id}>
          <img src={item.thumb} alt="img" />
          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </Item>
      ))}
    </Card>
      </Content>
    </Container>
  )
}
