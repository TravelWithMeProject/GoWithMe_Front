import Button from '@components/Button';
import CheckBox from '@components/CheckBox';
import Input from '@components/Input';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledLoginForm,
  LoginFormWrapper,
  InputContainer,
  LoginSupportContainer,
  ButtonContainer,
  SocialLoginContainer,
} from './style';

const LoginForm = () => {
  const [data, setData] = useState({
    id: '',
    password: '',
  });

  const { id, password } = data;

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <StyledLoginForm>
      <LoginFormWrapper>
        <InputContainer>
          <Input
            name="id"
            placeholder="아이디"
            value={id}
            onChange={onChange}
          ></Input>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChange}
          ></Input>
        </InputContainer>

        <LoginSupportContainer>
          <CheckBox value="1" onChange={() => {}} key="1">
            자동 로그인
          </CheckBox>
          <div>
            <Link to="/">아이디</Link>
            {' / '}
            <Link to="/">비밀번호 찾기</Link>{' '}
          </div>
        </LoginSupportContainer>

        <ButtonContainer>
          <Button border="round" onClick={() => {}} width="100%" size="large">
            로그인
          </Button>
          <Button
            varient="outlined"
            border="round"
            onClick={() => {}}
            width="100%"
            size="large"
          >
            회원가입
          </Button>
        </ButtonContainer>

        <SocialLoginContainer>
          <p>또는 SNS로 간편하게 로그인 / 회원가입</p>
          <ul className="icons">
            <Link to="/">
              <li></li>
            </Link>
            <Link to="/">
              <li></li>
            </Link>
            <Link to="/">
              <li></li>
            </Link>
          </ul>
        </SocialLoginContainer>
      </LoginFormWrapper>
    </StyledLoginForm>
  );
};

export default LoginForm;
