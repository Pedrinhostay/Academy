import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 7rem 2rem;
  margin: 5rem 0rem;
  h1 {
    text-align: center;
    font-size: 4rem;
    color: #e4e4e4;
  }
`;
export const Content = styled.div`
  max-width: 1330px;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  gap: 3rem;
  justify-content: center;
`;
export const Item = styled.div`
  text-align: center;
  width: 300px;
  cursor: pointer;
  height: 300px;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(120deg, #e46161, #090909);
  color: #e4e4e4;
  animation: left 700ms linear;
  transition: 300ms all linear;
  font-family: "Montserrat", sans-serif;
  &:hover {
    transform: scale(1.1);
  }
  @keyframes left {
    from {
      transform: translateY(100px);
    }
    to {
      transform: translateX(0px);
    }
  }
  p {
    font-size: 1.2rem;
    margin: 2rem 2rem;
  }
  h4 {
    font-size: 1.3rem;
  }

  button {
    padding: 12px 50px;
    border-radius: 6px;
    color: #090909;
    font-weight: 500;
    position: relative;
    border: none;
    font-size: 1.4rem;
    margin-top: 2rem;
    font-weight: 500;
    cursor: pointer;
    background-color: #e1e1e1;
    transition: 300ms all linear;
  }
  & {
    box-shadow: 8px 8px 8px #111;
  }
`;
