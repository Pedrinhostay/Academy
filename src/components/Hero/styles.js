import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 7rem 2rem;
  `
export const Content = styled.div`
  max-width: 1330px;
  text-align: center;
  gap: 5rem;
  margin: 6rem auto;
  position: relative;
`
export const Social = styled.aside`
  position: absolute;
    bottom: 110px;
    right: 0px;
    display: flex;
    flex-direction:column;
    color: #e4e4e4;
    gap: 1rem;
    font-size: 2.2rem;
    cursor: pointer;
`
export const First = styled.div`
  font-size: 3.6rem;
  color: #e4e4e4;
  display: flex;
  flex-direction: column;
  animation: hover 700ms linear;

  h3{
    font-size: 1.8rem;
    font-weight: bold;
    color: #e46161;
  }
  p{
    font-size: 1.3rem;
    color: #ddd;
    margin-top: 1rem;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    gap: 1.5rem;
  }
  span{
    color: transparent;
    font-size: 5rem;
    -webkit-text-stroke: 2px #e46161;
  }
  button{
    padding: 15px 30px;
    border-radius: 6px;
    color: #e4e4e4;
    position: relative;
    border: none;
    font-size: 1.4rem;
    font-weight: 500;
    cursor: pointer;
    background-color: #e46161;
    transition: 300ms all linear;
  }
  button:hover{
    background: linear-gradient(135deg, rgba(255,255,255,0.1),rgba(255,255,255,0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0px 8px 32px 0 rgba(0,0,0,0.37);
  }

  @keyframes hover {
    from{
        transform: translateY(-60px);
    }
    to{
        transform: translateY(0);
    }
  }
` 