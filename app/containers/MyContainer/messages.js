/*
 * MyContainer Messages
 *
 * This contains all the text for the MyContainer container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.MyContainer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MyContainer container!',
  },
});
