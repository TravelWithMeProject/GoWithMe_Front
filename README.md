# 🛬 가치가요 프론트 템플릿 및 참고 문서

## 📕 프로젝트 템플릿 행동 수칙
```
  git clone https://github.com/ssi02014/gachigayo_front_template.git
```
1. 로컬에다 각자 작업 폴더에 clone하기
```
  yarn 
    또는
  yarn install
```
2. 패키지 의존성 설치 (밑에 설명하겠지만 npm으로도 패키지 설치가 가능하지만 팀원 모두 yarn으로 통일)

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

## 📕 프로젝트 구조
![image](https://user-images.githubusercontent.com/64779472/147206751-111019ec-3baf-44a2-9b39-ce7ac9681e9f.png)

### (참고) 프로젝트 구조는 프로젝트 진행 중에 추가/수정 될 수 있음.

- .storybook: 스토리북 셋팅 관련 폴더
- api: api 관련 폴더
- components: 컴포넌트 관련 폴더
- config: colorSystem 같은 프로젝트 구성 관련 폴더
- hooks: 커스텀 훅 관련 폴더
- redux: 리덕스 관련 폴더
- static: 정적 파일(이미지, 글로벌 style 등) 관련 폴더
- stories: 스토리북 관련 폴더
- utils: 유틸리티 관련 폴더

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

## 📕 Design Pattern (Container & Presentational)
- <b>Container - Presentational 디자인 패턴의 핵심은 데이터 처리와 데이터 출력을 분리하여 코드를 작성하는 것이다.</b>
- Container: `어떻게 동작하는지, 어떤 로직을 수행하는지에 관련있다.` 상태, 비즈니스 로직들을 모아 놓는다. markup, style을 사용하면 안된다.
- Presentational: Container에서 처리한 상태를 props로 전달받아 상태를 화면에 출력하는 컴포넌트.

<br />

### 디자인 패턴 적용 시 장점
1. 코드의 가독성 증가
2. 재사용성 높일 수 있다.

<br />

### 예제
- Container
```tsx
  const CounterPage = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.count);

    const onIncrease = useCallback((
      e: React.MouseEvent<HTMLElement>
    ) => {
      e.preventDefault();

      dispatch(counterIncrease());
    }, []);

    const onDecrease = useCallback((
      e: React.MouseEvent<HTMLElement>
    ) => {
      e.preventDefault();

      dispatch(counterDecrease());
    }, []);

    const onClear = useCallback((
      e: React.MouseEvent<HTMLElement>
    ) => {
      e.preventDefault();

      dispatch(counterClear());
    }, []);

    return (
      <>
        <Counter 
          count={count}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onClear={onClear}
        />
      </>
    );
  };
```
- Presentational
```tsx
  interface Props {
    count: number;
    onIncrease: (e: React.MouseEvent<HTMLElement>) => void;
    onDecrease: (e: React.MouseEvent<HTMLElement>) => void;
    onClear: (e: React.MouseEvent<HTMLElement>) => void;
  }
  const Counter = ({ count, onIncrease, onDecrease, onClear }: Props) => {
    return (
      <CounterContainer>
        <div>
          <p>카운터</p>
          <button onClick={onIncrease}>증가</button>
          <button onClick={onDecrease}>감소</button>
          <button onClick={onClear}>초기화</button>
        </div>
        <p>{count}</p>
      </CounterContainer>
    );
  };

  export default Counter;
```

<br />

## 📕 프로젝트 참고사항 및 자료
### ✨ 1. react-router-dom
- react-router-dom 라이브러리가 최근 v6으로 버전 업그레이드되면서 많은 부분이 변함.
- [Router v6 참고 자료](https://velog.io/@ksmfou98/React-Router-v6-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EC%A0%95%EB%A6%AC)

<br />

### ✨ 2. 코드 스플리팅
- 코드 스플리팅(Code splitting) 구현을 위한 `loadable 라이브러리` 사용
```
  yarn add @loadable/component
  yarn add @types/loadable__component -D

  (뒤에 -D 를 붙인 이유는 개발모드에서만 사용하기 위함)
```
- 코드 스플리팅이란, 우리가 자바스크립트로 애플리케이션을 만들게되면, 기본적으로 하나의 파일에 모든 로직들이 들어가게 된다. 그럼, 프로젝트의 규모가 커질수록 자바스크립트 파일 용량도 커지게 된다. 용량이 커지면 인터넷이 느린 환경에서는 페이지 로딩이 느려질 것이다.
- 코드 스플리팅을 하게 되면, 지그 당장 필요한 코드가 아니라면 분리시켜서 나중에 필요할 때 불러와서 사용할 수 있다. 즉, `페이지의 로딩 속도를 개선`할 수 있다.

<br />

### ✨ 3. craco를 이용한 절대 경로
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

### ✨ 4. Storybook
- Storybook은 다양한 방식으로 사용되고 있는 `UI 컴포넌트 단위 개발 도구`이다.
- 페지이 단위의 개발이 이루어지던 과거와달리 요즘의 프론트엔드 개발은 주로 컴포넌트 단위로 이루어진다.
- 컴포넌트라는 개념은 사용하는 라이브러리나 프레임워크에 따라 구현 방식은 다르지만, 철학은 거의 동일하다. 컴포넌트는 외부 상태의 영향을 받지않는 독립된 개체로서, 고립된 환경에서도 자신만의 스타일과 상태를 가질 수 있어야 한다. 또한, React의 컴포넌트 정의에 따르면, 컴포넌트가 UI를 독립적이고 재사용 가능한 단위로 분리하고 각 단위의 고립해서 생각할 수 있게 해준다고 설명한다.
- Storybook의 기본 구성 단위는 `스토리(Story)`이며, Story는 해당 UI 컴포넌트가 어떻게 사용될 수 있는지를 보여주는 하나의 예시라고 생각하면 편하다.
- Storybook을 사용하면 UI 컴포넌트가 각각 독립적으로 어떻게 실제로 렌더링되는지 직접 시각적으로 테스트하면서 개발을 진행할 수 있다.
- 해당 UI 라이브러리를 사용하는 개발자 입장에서도 코드를 보지 않고도 미리 각 UI 컴포넌트를 체험해보고 사용할 수 있어 매우 유용하다.
- 결과적으로, 독립적인 컴포넌트 단위 개발과 UI 테스트때 많이 사용한다. 
- [Storybook 공식 사이트](https://storybook.js.org/)
- [Storybook 튜토리얼](https://storybook.js.org/tutorials/intro-to-storybook/react/ko/get-started/)
- [Storybook 입문 가이드](https://hyunseob.github.io/2018/01/08/storybook-beginners-guide/)

<br />

### ✨ 5. TypeScript Type Alias(타입 별칭) vs interface(인터페이스)
```ts
  // type
  type Student = {
    name: string,
    age: number,
  }

  const student: Student = {
    name: "Minjae",
    age: 27
  }
```
```ts
  // interface
  interface Student {
    name: string;
    age: number;
  }

  const student: Student = {
    name: "Minjae",
    age: 27
  }
```
- Type Alias와 Interfaces는 서로 대부분의 기능을 공유하고 있다.

<br /> 

### 차이점
1. <b>확장 상속 방법</b>
```ts
  // interface
  interface Person {
    name: string
    age: number
  }
  interface Student extends Person {
    University: string
  }

  // type
  type Person = {
    name: string
    age: number
  }
  type Student = Person & {
    University: string
  }
```
- interface는 `extends` 키워드를 통해 확장된다.
- Type Alias의 경우 `& (intersection Type)`를 이용한다.

<br />

2. <b>타입 지정 범위</b>
```ts
  type Str = 'Lee';

  // 유니온 타입으로 타입 지정
  type Union = string | null;

  // 함수 유니온 타입으로 타입 지정
  type Func = (() => string) | (() => void);

  // 인터페이스 유니온 타입으로 타입 지정
  type Shape = Square | Rectangle | Circle;

  // 튜플로 타입 지정
  type Tuple = [string, boolean];
```
- interface는 타입만 지정할 수 있지만 Type Alias는 원시값이나 유니온 타입, 튜플 등도 타입으로 지정할 수 있다.

<br />

3. <b>선언적 확장(Declaration Merging), 자동 확장</b>
```ts
  interface Person {
    name: string
    age: number
  }
  interface Person {
    gender: string
  }
```
- interface의 경우 동일한 이름의 인터페이스가 생성되면 자동적으로 확장이 이루어지지만 Type Alias는 확장되지 않는다.

<br />

### 결론
- 프로젝트 내에서 union이나 tuple 등이 필요한 경우를 제외하면 웬만하면 `Interface`를 사용한다.
- Type Alias와 Interface 둘다 기능은 비슷비슷하지만 공식 문서를 보면 일반적으로는 interface를 사용하고 union, tuple 등이 필요한 경우에만 type 별칭을 사용하라는 TypeScript 공식 문서의 내용이 존재한다.

<br />

## ✨ 6. Redux-Saga
- Redux 미들웨어로는 주로 thunk와 saga가 있다.
- saga는 thunk로 못하는 다양한 작업들을 처리할 수 있다.
  1. 비동기 작업을 할 때 기존 요청을 취소 처리할 수 있다.
  2. 특정 액션이 발생했을 때 이에 따라 다른 액션이 디스패치되게끔 하거나, 자바스크립트 코드를 실행 할 수 있습니다.
  3. 웹소켓을 사용하는 경우 Channel 이라는 기능을 사용하여 더욱 효율적으로 코드를 관리 할 수 있습니다
  4. API 요청이 실패했을 때 재요청하는 작업을 할 수 있습니다.
- 이외에도 다양한 까다로운 비동기 작업들을 saga로 처리할 수 있다.

<br />

### Redux-saga Effects
- [Redux-saga Effects 참고 사이트](https://blog.naver.com/ssi02014/222586185773)
- Redux-saga Effects 종류는 아래와 같다.
  1. `all`: 제너레이터 함수를 배열의 형태로 인자로 넣어주면 동시 실행한다.
  2. `fork`: 제너레이터 함수를 호출하는데 사용하는 함수이다. 이때 비동기적인 호출을 한다.
  3. `call`: fork와 같이 제너레이터 함수를 호출하는데 사용한다. 단, 동기적인 호출을 한다.
  4. `put`: 특정 액션의 디스패치하도록 한다. 결과를 스토어에 디스패치한다.
  5. `take`: 1회용 호출용 이다.
  6. `takeEvery`: 액션이 발생하게되면 task를 실행한다. task가 종료되기 전에 또 다른 액션이 발생할 경우, 또 하나의 새로운 task를 실행한다. 즉, 비동기로 실행되는데 만약 실수로 버튼을 2번 눌렀을 때 2번 다 실행된다는 단점이 있다.
  7. `takeLatest`: 액션이 발생하게되면 task를 실행한다. 만약 실행중인 task가 있다면 기존 task를 종료하고 새로운 task를 실행한다. 즉, 항상 최신의 액션이 처리되는 것을 보장한다. `(대부분 takeLatest를 사용)`
  8. `takeLeading`: 액션이 발생하게 되면 task를 실행한다. 해당 task의 실행이 완료되기 전까지 뒤에 오는 이벤트들은 모두 블럭한다. 쉽게 말하면 기존 task가 끝날때까지 동일한 액션에대해 감지를 하지 않고 먼저 호출된 액션을 처리되는 것을 보장한다.
  9. `throttle`: 특정 시간 이내에 요청을 한 번만 보낸다. 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출을 하지 않는다.
  10. `delay`: 설정된 시간 이후에 resolve를 하는 Promise 객체를 리턴한다. 제너레이터를 정지하는데 사용할 수 있다.

<br />

## ✨ 7. immer(도입 고민중)
- immer란? react에서 `불변성을 유지`하는 코드를 작성하기 쉽게 해주는 라이브러리

<br />

### 불변성
- 사전적으로 불변성이란 값이나 상태를 변경할 수 없는 것을 의미한다.

<br />

### react의 기본 속성
- react는 기본적으로 부모 컴포넌트가 리렌더링을 하면 자식 컴포넌트도 리렌더링된다. 즉 `얕은 비교`를 통해 새로운 값인지 아닌지 판단 후에 새로운 값인 경우 리렌더링을 한다.
- 여기서 얕은 비교란 간단히 말하면 객체, 배열, 함수와 같은 참조 타입들을 실제 내부 값까지 비교하지 않고 동일한 참조인지(동일한 메모리 값을 사용하는지)를 비교하는 것을 뜻한다.

<br />

### 얕은 비교 State
- state가 얕은 비교를 통해 컴포넌트가 리렌더링 된다는 말은 굉장히 의미가 있다. 아래의 과정을 보면 왜 react에서 요소를 직접 변경하면 안되는지 알 수 있다.
```
  1. 우리가 컴포넌트를 리렌더링 해야하는 상황이 있다고 가정하고, 타입이 배열인 state를 바꾼다.
  2. 이때, state.push(1)을 통해 state 배열에 직접 접근하여 요소를 추가한다.
  3. 우리는 push 전과 다른 값이라고 생각하지만, react는 state라는 값은 새로운 참조값이 아니기 때문에 이전과 같은 값이라고 인식하고 리렌더링하지 않는다.
```
- 즉 위와 같은 이유로 우리가 state를 바꾸고 DOM을 다시 만들려면, 새로운 객체 or 배열을 만들어 새로운 참조값을 만들고, react에게 이 값은 이전과 다른 참조값임을 알려줘야 한다.

### immer 예제
```js
  const initialState = [
    { name: "minjae", address: { city: "seoul" }}
  ];

  export default function auth(state = initialState, action) {
    switch (action.type) {
      case SET_INFO:
        return {
          ...state,
          name: "manjae",
          address : {
            ...state.address,
            city: "busan"
          },
        };
      case ADD_INFO:
        return {
          ...state,
          { name: "yenojae", address: { city: "seoul" }},
        };
      default:
        return state;
    }
  }
```
- 위 예제는 immer.js를 사용하기 전 redux reducer 코드이다.
- `...(spread 연산자)`로 객체를 depth 1만큼 깊은 복사를 해서 사용하고 있는데, 코드가 난잡하다.

<br />

```js
  const initialState = [
    { name: "minjae", address: { city: "seoul" }}
  ];

  export default function auth(state = initialState, action) {
    produce(state, draft => {
      switch (action.type) {
        case SET_INFO:
          draft[0].name = action.data.name;
          draft[0].address.city = action.data.city;
          break;
        case ADD_INFO:
          draft.push({ name: "yenojae", address: { city: "seoul" }});
        default:
          return state;
      }
    });
  }
```
- 위 코드는 immer를 사용한 reduce 코드이다.
- immer 에서는 `produce` 함수만 알면 된다. 2개의 인자를 가져오고 첫 번째는 수정하고 싶은 객체/배열이고, 두 번째는 첫 번째 인자에 할당된 객체/배열을 바꾸는 함수이다.
- 쉽게 말하면 draft가 state라 생각하고 push나 unshift같은 메서드를 사용해서 객체/배열을 수정한다.

<br />

