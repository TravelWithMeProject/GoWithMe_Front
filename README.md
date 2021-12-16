# 🛬 가치가요 프론트 템플릿 및 참고 문서

## 📕 프로젝트 템플릿 행동 수칙
```
  git clone https://github.com/ssi02014/gachigayo_front_template.git
```
1. 로컬에다 각자 작업 폴더에 clone하기
```
  yarn add
```
2. 패키지 의존성 설치 (밑에 설명하겠지만 npm으로도 패키지 설치가 가능하지만 yarn으로 통일)

<br />

## 📕 프로젝트 구조


<br />


## 📕 리액트 컴포넌트 개발 방식
```js
  // 함수형 컴포넌트
  import React, { useState } from 'react';

  const Test = () => {
    const [data, setData] = useState(0); // Hook의 대표적인 예인 useState
    return (
      <div>
        함수형 컴포넌트 예제
      </div>
    )
  }

  export default Test;
```
- 프로젝트 모든 컴포넌트 개발 방식은 `함수형 컴포넌트`를 사용한다.
- 왜? 과거에는 클래스형 컴포넌트를 많이 사용했지만 `2019년 리액트 v16.8` 부터 함수형 컴포넌트에 `리액트 훅(Hook)`을 지원해 주어서 현재는 리액트 공식 문서에서 함수형 컴포넌트와 훅을 함께 사용해서 프론트엔드 개발하는 것을 권장한다.
- 최근에 클래스형 컴포넌트는 레거시 코드들이 많다.
- [함수형 vs 클래스형 참고 자료](https://velog.io/@sdc337dc/0.%ED%81%B4%EB%9E%98%EC%8A%A4%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8)

<br />

## 🤙 패키지 매니저(Yarn)
- 패키지 설치와 같은 패키지와 관련된 모든 패키지 관리는 `yarn`으로 통일!
- [yarn 공식 홈페이지](https://yarnpkg.com/)
- [yarn 설치 참고 사이트](https://heropy.blog/2017/11/25/yarn/)
- [yarn vs npm 명령어](https://dongmin-jang.medium.com/npm-vs-yarn-7b699c5d6034)

<br />

### yarn이란?
- Facebook에서 만든 자바스크립트 패키지 매니저
- npm과 yarn 모두 package.json에 버전을 명시하고 의존성을 추적 관리하는 패키지 매니저이다. 하지만 혹시 모를 패키지 관련 이슈에 대비해 모든 팀원은 `yarn`으로 통일한다.

<br />

### npm과 yarn의 차이
- 여러 패키지를 설치할 때 npm은 순차적으로 설치되는 반면, yarn은 `병렬`로 처리돼 설치 시간 단축된다.
- yarn은 npm과 달리 패키지를 중복으로 설치하는 경우가 없다.
- npm은 다른 패키지를 즉시 포함시킬 수 있는 코드를 자동으로 실행하므로, 보안 시스템에 여러가지 취약성 발생한다. 반면 yarn은 yarn.lock 또는 package.json 파일에 있는 파일만 설치한다. 따라서 Yarn이 npm보다 보안이 강하다.

<br />

## ✨ 프로젝트 참고사항 및 자료
### 1. react-router-dom
- react-router-dom 라이브러리가 최근 v6으로 버전 업그레이드되면서 많은 부분이 변함.
- [Router v6 참고 자료](https://velog.io/@ksmfou98/React-Router-v6-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EC%A0%95%EB%A6%AC)

<br />

### 2. 코드 스플리팅
- 코드 스플리팅(Code splitting) 구현을 위한 `loadable 라이브러리` 사용
```
  yarn add @loadable/component
  yarn add @types/loadable__component -D

  (뒤에 -D 를 붙인 이유는 개발모드에서만 사용하기 위함)
```
- 코드 스플리팅이란, 우리가 자바스크립트로 애플리케이션을 만들게되면, 기본적으로 하나의 파일에 모든 로직들이 들어가게 된다. 그럼, 프로젝트의 규모가 커질수록 자바스크립트 파일 용량도 커지게 된다. 용량이 커지면 인터넷이 느린 환경에서는 페이지 로딩이 느려질 것이다.
- 코드 스플리팅을 하게 되면, 지그 당장 필요한 코드가 아니라면 분리시켜서 나중에 필요할 때 불러와서 사용할 수 있다. 즉, 페이지의 로딩 속도를 개선할 수 있다.

<br />

### 3. craco를 이용한 절대 경로
```
  yarn add @craco/craco
  yarn add craco-alias -D
```
- 프로젝트 폴더 구조가 겹겹인 경우, import 경로를 상대 경로로하면 코드가 너무 길어지고 보기가 어렵다.
- 이럴 때 tsconfig.json에 paths를 설정해서 절대 경로를 설정할 수 있다. 하지만 yarn start할 때마다 tsconfig.json이 초기화되는 상황이 발생한다. 이럴 때 eject를 해서 숨겨진 webpack의 설정을 바꿔야하는데, 그러기엔 손이 너무 많이 가기 때문에 `craco 라이브러리`를 사용해 편리하게 webpack 설정(Eslint, Babel, Postcss 등)을 바꿀 수 있다.
- [Craco를 이용한 절대 경로 참고 자료](https://www.howdy-mj.me/boilerplate/craco-absolute-paths-setting/)
```js
  // 상대 경로 예시
  import Login from '../../../../../Login'

  // 절대 경로 예시
  import Login from '@components/Login'
```

<br />

### 4. Storybook
- Storybook은 다양한 방식으로 사용되고 있는 UI 컴포넌트 단위 개발 도구이다.
- 페지이 단위의 개발이 이루어지던 과거와달리 요즘의 프론트엔드 개발은 주로 컴포넌트 단위로 이루어진다.
- 컴포넌트라는 개념은 사용하는 라이브러리나 프레임워크에 따라 구현 방식은 다르지만, 철학은 거의 동일하다. 컴포넌트는 외부 상태의 영향을 받지않는 독립된 개체로서, 고립된 환경에서도 자신만의 스타일과 상태를 가질 수 있어야 한다. 또한, React의 컴포넌트 정의에 따르면, 컴포넌트가 UI를 독립적이고 재사용 가능한 단위로 분리하고 각 단위의 고립해서 생각할 수 있게 해준다고 설명한다.
- Storybook의 기본 구성 단위는 스토리(Story)이며, Story는 해당 UI 컴포넌트가 어떻게 사용될 수 있는지를 보여주는 하나의 예시라고 생각하면 편하다.
- Storybook을 사용하면 UI 컴포넌트가 각각 독립적으로 어떻게 실제로 렌더링되는지 직접 시각적으로 테스트하면서 개발을 진행할 수 있다.
- 해당 UI 라이브러리를 사용하는 개발자 입장에서도 코드를 보지 않고도 미리 각 UI 컴포넌트를 체험해보고 사용할 수 있어 매우 유용하다.
- 결과적으로, 독립적인 컴포넌트 단위 개발과 UI 테스트때 많이 사용한다. 
- [Storybook 공식 사이트](https://storybook.js.org/)
- [Storybook 튜토리얼](https://storybook.js.org/tutorials/intro-to-storybook/react/ko/get-started/)
- [Storybook 입문 가이드](https://hyunseob.github.io/2018/01/08/storybook-beginners-guide/)

<br />