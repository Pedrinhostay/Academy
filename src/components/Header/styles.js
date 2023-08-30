import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 1rem;
`
export const Navigation = styled.nav`
  max-width: 1330px;
  font-size: 1.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  a{
    color: #e4e4e4;
    text-transform: uppercase;
    transition: 300ms all linear;
  }
  a:hover{
    color: #e46161;
  }
`