import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const MainLayout = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  overflow: auto;
  background-color: #b9b9b9;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #384457;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const LoginLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  background-color: #f7f7f768;
`;
