import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #fff;
    margin-top: 20px;
    font-weight: 900;
  }

  p {
    font-size: 15pt;
    color: #F0F4EF;
  }

  @media (min-width: 600px) {
    margin: 0 100px;
  }
`;

export const PostsContent = styled.div`
  display: flex;
  width: 50vw;
  flex-direction: column;
  justify-content: center;

  h2 {
    display: flex;
    color: #BDDBD0;
  }

  p {
    font-size: 15px;
    color: #F0F4EF;
    margin: 20px 0 20px 0;
  }

  p::first-letter {
    text-transform: uppercase;
  }
  
  a {
    width: 130px;
    color: #6B5CA5;
    padding: 10px;
    transition: 0.3s;
    text-align: center;
    text-decoration: none;

    border-radius: 10px;
    border: 1px solid #6B5CA5;
  }

  a:hover {
    color: #F0F4EF;
    background: #6B5CA5;
  }

  & {
    margin-top: 50px;
    padding-bottom: 50px;
    border-bottom: 1px solid #fff;
  }
`;