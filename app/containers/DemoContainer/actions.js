/*
 *
 * MyContainer actions
 *
 */

import { DEFAULT_ACTION, LOAD_PRODUCT_LIST, LOAD_PRODUCT_DONE, LOAD_PRODUCT_FALSE, SEARCH_PRODUCT } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadProductList() {
  return {
    type: LOAD_PRODUCT_LIST,
  };
}

export function loadProductListDone(data) {
  return {
    type: LOAD_PRODUCT_DONE,
    data
  };
}

export function loadProductListFalse(data) {
  return {
    type: LOAD_PRODUCT_FALSE,
    data
  };
}

export function searchProduct(value) {
  return {
    type: SEARCH_PRODUCT,
    value
  };
}

