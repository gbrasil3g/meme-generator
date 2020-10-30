import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;

  button {
    border: 1px solid black;
    padding: 10px;
    margin-top: 200px;

    transition: background .2s ease-in;

    &:hover {
      background: black;
      color: white
    }
  }
`;