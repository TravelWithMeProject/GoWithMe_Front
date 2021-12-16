import loadable from '@loadable/component'

export const Home = loadable(() => import('./Home'));
export const Counter = loadable(() => import('./Counter'));
export const ParentNesting = loadable(() => import('./ParentNesting'));
export const ChildNesting = loadable(() => import('./ChildNesting'));
export const Covid = loadable(() => import('./Covid'));