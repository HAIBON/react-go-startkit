// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_PRODUCT_LIST } from './constants';
import request from 'utils/request';
import { loadProductListDone } from './actions';

export function* getProducts() {
  const requestURL = `https://mobileapi.tcbs.com.vn/mobileapi/api/getAdvisorProduct`;
  try {
    const data = yield call(request, requestURL);
    console.log(data);
    
    yield put(loadProductListDone(data.data));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }

}

// Individual exports for testing
export default function* demoContainerSaga() {
  yield takeLatest(LOAD_PRODUCT_LIST, getProducts);
}
