import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myContainer state domain
 */

const selectMyContainerDomain = state => state.myContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MyContainer
 */

const makeSelectMyContainer = () =>
  createSelector(
    selectMyContainerDomain,
    substate => substate,
  );

const makeSelectProductList = () =>
  createSelector(
    selectMyContainerDomain,
    substate => substate.productList,
  );

export default makeSelectMyContainer;
export { selectMyContainerDomain, makeSelectProductList };
