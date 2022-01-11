import Button from '@components/Button';
import CheckBox from '@components/CheckBox';
import React from 'react';
import { StyledLoginForm, LoginFormContainer, InputWrap, KeepLoginWrap, FindWrap, ButtonWrap, OtherLoginWrap } from './style';

const LoginForm = () => {

  return (
    <StyledLoginForm>
      <LoginFormContainer>
        <InputWrap>
          <input></input>
          <input></input>
        </InputWrap>
        <KeepLoginWrap>
          <CheckBox value="1" onChange={() => { }} key="1">
            자동 로그인
          </CheckBox>
        </KeepLoginWrap>
        <FindWrap>
          아이디 / 비밀번호 찾기
        </FindWrap>
        <ButtonWrap>
          <Button
            border="round"
            onClick={() => { }}
            width="100%"
            size="large"
          >로그인
          </Button>
          <Button
            varient="outlined"
            border="round"
            onClick={() => { }}
            width="100%"
            size="large"
          >회원가입
          </Button>
        </ButtonWrap>
        <OtherLoginWrap>
          또는 SNS로 간편하게 로그인 / 회원가입
        </OtherLoginWrap>
      </LoginFormContainer>
    </StyledLoginForm>
  );
};

export default LoginForm;