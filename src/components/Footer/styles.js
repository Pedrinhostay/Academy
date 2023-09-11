import styled from "styled-components";

export const Container = styled.footer`
  background-color: #111;
  width: 100%;
  padding: 2rem;
`
export const Content = styled.div`
  display:flex;
  max-width: 1330px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`
export const ContentItem = styled.ul`
  display: flex;
  font-size: 1.3rem;
  flex-direction: column;
  justify-content: center;
  color: #ccc;
  p{
    text-decoration: underline;
  }
  div{
    display: flex;
    align-items: center;
    justify-content:space-around;
  }
  img{
    width: 50px;
    height: 35px;
  }
`