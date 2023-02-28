import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  width: 100vw;
  min-height: 80px;
  background: #202C39;
  align-items: center;
  padding: 0 60px 0 60px;
  justify-content: space-between;

  h1 {
    
    a {
      color: #fff;
      text-decoration: none;
    };
  };

  ul {
    display: flex;
    align-items: center;
    flex-direction: row;

    li + li {
      margin-left: 30px;
    }

    li {
      list-style: none;

      a {
        color: #fff;
        font-weight: 700;
        text-decoration: none;
      }
    }

    
    li:nth-child(2) {
        padding: 10px;
        text-align: center;
        border-radius: 10px;
        border: 1px solid #fff;
      }
  };

`;
