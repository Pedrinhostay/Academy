import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 7rem 2rem;
  margin: 5rem 0rem;
`
export const Content = styled.div`
  max-width: 1330px;
  margin: 0 auto;
  h1{
    font-size:4rem;
    color: #e4e4e4;
    text-align: center;
    margin-bottom: 2rem;
  }
`
export const Card = styled.div`
  color: #e4e4e4;
  margin-top: 4rem;
  display: flex;
  justify-content:center;
  flex-direction:column;
  gap: 5rem;
  align-items: center;
`
export const Item = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content:center;
  text-align: center;
  flex-direction: column;

  div{
    margin-top:2rem;
    line-height: 2rem
  }
  h2{
    font-size: 3rem;
    color: #e46161;
  }
  img{
    max-width: 1330px;
    height: 500px;
    animation: rotate 1000ms linear;
  }
  p{
    max-width: 1330px;
    font-size: 1.2rem;
    margin: 3rem 3rem;
  }
  @keyframes rotate {
    from{
      transform: translateX(400px);
    }
    to{
      transform: translateY(0);
    }
  }
`