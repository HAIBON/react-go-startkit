import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_PRODUCT_LIST } from './constants';
import request from 'utils/request';

export function* getList() {
  const requestURL = `https://mobileapi.tcbs.com.vn/mobileapi/api/getAdvisorProduct`;
  try {
    const data = yield call(request, requestURL);
    yield put(loadProductListDone(data));
  } catch (err) {
    yield put(repoLoadingError(err));
  }

}

export default function* myContainerSaga() {
  yield takeLatest(LOAD_PRODUCT_LIST, getList);
}
