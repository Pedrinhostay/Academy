import  styled  from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 7rem 2rem;
  margin: 5rem 0rem;
  h1{
    text-align: center;
    font-size: 4rem;
    color: #e4e4e4;
  }
`
export const Content = styled.div`
  max-width: 1330px;
  margin: 2rem auto;
  display: flex;
  align-items:center;
  gap: 3rem;
  justify-content: center;
`
export const Item = styled.div`
  text-align: center;
  width: 300px;
  cursor: pointer;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items:center;
  text-align: center;
  background: linear-gradient(60deg,#e46161 40%, #090909);
  color: #e4e4e4;
  animation: left 700ms linear;
  transition: 300ms all linear;
  font-family:'Montserrat', sans-serif;
  &:hover{
    transform: scale(1.1);
  }
  @keyframes left {
    from{
      transform: translateY(60px);
    }
    to{
      transform: translateX(0px);
    }
  }
  p{
    font-size: 1.2rem;
    margin:2rem 2rem;
    }
`