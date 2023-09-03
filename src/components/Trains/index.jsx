
import { useState } from "react";
import "./style.css";
import { FaBalanceScale, FaTrello, FaSuse } from "react-icons/fa"
export default function Trains() {
  const [tableState, setTableState] = useState(1);
  
      const tableTab = (index) =>{
          setTableState(index)
      }
  return (
    <>
    <h1 className="heading">Objetivos</h1>
        <section className="container" id="train">
            <div className="tabsHead">
                <div 
                className={tableState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => tableTab(1)}>
                  <h2>Musculação</h2>
                  <span><FaSuse/></span>
                </div>
                <div 
                className={tableState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={()=> tableTab(2)}>
                  <h2>Perda de Peso</h2>
                  <span><FaBalanceScale/></span>
                </div>
                <div 
                className={tableState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={()=> tableTab(3)}>
                  <h2>Treinamento funcional</h2>
                  <span><FaTrello/></span>
                </div>
            </div>
            <div className="tabsBody">
                <div className={tableState === 1 ? "content active-content" : "content"}>
                    <h2>Musculação</h2>
                    <p>Personal trainers e profissionais de educação física passam com frequência horas lendo artigos e fazendo pesquisas sobre novos programas de treinamento e ideias de exercícios para o ganho de massa muscular. Entretanto, muito por causa da sua complexidade fisiológica, poucos profissionais estão tão bem informados de como os músculos se adaptam e crescem baseado no aumento progressivo da carga exigente dos exercícios.</p>
                </div>
                <div className={tableState === 2 ? "content active-content" : "content"}>
                    <h2>Perda de Peso</h2>
                    <p>Para emagrecer com saúde, é necessário que o corpo gaste mais calorias do que consome. É por isso que as duas medidas mais importantes para chegar ao peso ideal são ajustar hábitos alimentares e praticar atividades físicas. Mas isso deve ser feito de forma gradativa e com um cardápio saudável e variado. Siga as dicas a seguir para emagrecer de forma saudável. Você já sabe que a obesidade é uma doença crônica, multifatorial e super complexa. A perda de peso está associada a uma série de benefícios para a saúde, mas não é tarefa fácil para quem sofre desse problema.</p>
                </div>
                <div className={tableState === 3 ? "content active-content" : "content"}>
                    <h2>Treino Funcional</h2>
                    <p>Treinamento funcional é uma forma / método de treino que busca utilizar padrões de movimento que se tenha um propósito, uma função. Para a maioria das pessoas, a aplicação prática do treinamento funcional é tornar as atividades diárias mais fáceis de realizar.</p>
                </div>
            </div>
        </section>
    </>
  )
}
