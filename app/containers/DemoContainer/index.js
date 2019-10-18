/**
 *
 * DemoContainer
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes, { element } from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDemoContainer, { productList } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadProductList, searchProduct } from './actions';

import { Input } from 'antd';

const { Search } = Input;

import './index.scss'

export function DemoContainer({
  onLoadProduct,
  products,
  onSearch
}) {
  useInjectReducer({ key: 'demoContainer', reducer });
  useInjectSaga({ key: 'demoContainer', saga });

  useEffect(() => {
    onLoadProduct();
  }, []);

  return (
    <div>
      <Search placeholder="input search text" onSearch={value => onSearch(value)} enterButton />
      <div className="menu">
        <ul className="list-group">
          {products.map((dom, id) => {
            return (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={id}>
                {dom.bondCode}
                <span className="badge badge-primary badge-pill">{dom.par}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

DemoContainer.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  demoContainer: makeSelectDemoContainer(),
  products: productList(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadProduct: () => dispatch(loadProductList()),
    onSearch: key => dispatch(searchProduct(key)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DemoContainer);
