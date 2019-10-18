/**
 *
 * Asynchronously loads the component for MyContainer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
