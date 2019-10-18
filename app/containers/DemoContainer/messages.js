/*
 * DemoContainer Messages
 *
 * This contains all the text for the DemoContainer container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.DemoContainer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the DemoContainer container!',
  },
});
