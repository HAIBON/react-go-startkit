import produce from 'immer';
import { DEFAULT_ACTION, LOAD_PRODUCT_FALSE, LOAD_PRODUCT_DONE, SEARCH_PRODUCT } from './constants';

export const initialState = {
  productList: [],
  searchName : ''
};

/* eslint-disable default-case, no-param-reassign */
const demoContainerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SEARCH_PRODUCT:
          draft.searchName = action.value;
        break;
      case LOAD_PRODUCT_DONE:
        let product = [];
        action.data.forEach(element => {
          product = product.concat(element.child);
        });
        draft.productList = product;
        break;
    }
  });


export default demoContainerReducer;
