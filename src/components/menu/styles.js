import styled, { css } from "styled-components";

export const Container = styled.section`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(196,51,22);
background: linear-gradient(90deg, rgba(196,51,22,0.5018382352941176) 26%, rgba(5,5,5,0.7483368347338936) 76%);

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: .5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #e4e4e4;
    transform: rotate(45deg);
    transition: .7s;
  }

  ul{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
  a{
    color: #e4e4e4;
    text-transform: uppercase;
    transition: 300ms all linear;
    font-size: 2.5rem;
  }
  a:hover{
    color: #e46161;
  }

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
      transform: rotate(0deg);
    }

    nav {
      transform: scale(1);
    }
  `}
`;