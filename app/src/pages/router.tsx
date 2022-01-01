import loadable from '@loadable/component'

export const Home = loadable(() => import('./Home'));
export const Counter = loadable(() => import('./Counter'));
export const Covid = loadable(() => import('./Covid'));