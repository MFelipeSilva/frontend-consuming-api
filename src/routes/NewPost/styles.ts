import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: #fff;
    margin-top: 20px;
  }
`;

export const Formulary = styled.form`
  display: flex;
  width: 50%;
  height: 30em;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  

  div {
    display: flex;
    flex-direction: column;

    label {
      color: #1A1423;
      font-size: 15pt;
      margin: 40px 0 5px 0;
      font-weight: 600;
    }

    input {
      width: 40vw;
      min-height: 3em;
      font-size: 11pt;
      background: #ECF0F1;
      padding-left: 15px;
    }

    textarea {
      width: 40vw;
      font-size: 15pt;
      padding-left: 15px;
      min-height: 20vh;
      background: #ECF0F1;
    }
  }

  input:nth-child(3) {
    width: 15vw;
    height: 3em;
    color: #F0F4EF;
    margin-top: 50px;
    background: none;

    font-weight: 600;
    font-size: 13pt;

    border-radius: 15px;
    border: 3px solid #6B5CA5;
    transition: 0.3s;

    &:hover {
      color: #F0F4EF;
      cursor: pointer;
      background: #6B5CA5;
    }
  }
`;