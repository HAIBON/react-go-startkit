/**
 *
 * Asynchronously loads the component for DemoContainer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
