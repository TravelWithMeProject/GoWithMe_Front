import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  width: 100%;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  margin: 0 20px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;

  input {
    margin: 5px;
  }
`;

export const KeepLoginWrap = styled.div`
  margin: 10px 0;
  width: 50%;
`;

export const FindWrap = styled.div`
  margin: 10px 0;
  width: 50%;
  text-align: right;
`;

export const ButtonWrap = styled.div`
  margin: 10px 0;
  width: 100%;
  text-align: center;
  > button {
    margin: 5px 0;
  }
`;

export const OtherLoginWrap = styled.div`
  margin: 10px 0;
  width: 100%;
  text-align: center;
`;