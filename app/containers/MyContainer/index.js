/**
 *
 * MyContainer
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMyContainer, { makeSelectProductList } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Row, Col, Input } from 'antd';
const { Search } = Input;

export function MyContainer({ loadProduct }) {
  useInjectReducer({ key: 'myContainer', reducer });
  useInjectSaga({ key: 'myContainer', saga });
  useEffect(() => {
    console.log(11111111111111111, loadProduct);

    // loadProduct();
  }, []);

  return (
    <div>
      <Row>
        <Col span={4}></Col>
        <Col span={12}>
          <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
        </Col>
        <Col span={4}></Col>
      </Row>
    </div>
  );
}

MyContainer.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myContainer: makeSelectMyContainer(),
  products: makeSelectProductList(),
});


export function mapDispatchToProps(dispatch) {
  return {
    loadProduct: evt => dispatch(loadProductList())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MyContainer);
