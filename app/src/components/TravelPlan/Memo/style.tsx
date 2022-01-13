import styled from 'styled-components';

export const MemoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
  width: 800px;
  textarea {
    border: none;
    width: calc(100% - 60px);
    margin: auto;
    padding: 5px;
    height: 200px;
    outline-color: white;
  }
`;
