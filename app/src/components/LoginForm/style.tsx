import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  width: 100%;
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;

  input {
    margin-bottom: 5px;
  }
`;

export const LoginSupportContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  margin: 10px 0;
  width: 100%;
  text-align: center;
  > button {
    margin: 5px 0;
  }
`;

export const SocialLoginContainer = styled.div`
  margin: 10px 0;
  width: 100%;
  text-align: center;

  .icons {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    li {
      width: 50px;
      height: 50px;
      background-color: #5a87ff;
      border-radius: 50%;
      margin: 0 10px;
    }
  }
`;
