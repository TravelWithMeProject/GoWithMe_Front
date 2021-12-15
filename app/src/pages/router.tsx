import loadable from '@loadable/component'

/**
 * 코드 스플리팅(Code splitting) 구현을 위한 loadable
 * 코드 스플리팅이란? 
 * 프로젝트 규모가 커질수록 js 파일 용량도 커질 것이다. 용량이 커지면 당연히 렌더링 속도가 느려질 것이고, 특히 SPA의 특징상 초기 렌더링이 매우 느려짐!
 * 코드 스플리팅을 하게되면, 지금 당장 필요한 코드가 아니라면 따로 분리시켜서, 나중에 필요할 대 불러와서 사용할 수 있다.
 */
export const Home = loadable(() => import('./Home'));
export const Counter = loadable(() => import('./Counter'));
export const ParentNesting = loadable(() => import('./ParentNesting'));
export const ChildNesting = loadable(() => import('./ChildNesting'));