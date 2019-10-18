/*
 *
 * MyContainer reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, LOAD_PRODUCT_FALSE } from './constants';

export const initialState = {
  productList: []
};

/* eslint-disable default-case, no-param-reassign */
const myContainerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LOAD_PRODUCT_FALSE:
        draft.productList = action.data;
        break;
    }
  });

export default myContainerReducer;
