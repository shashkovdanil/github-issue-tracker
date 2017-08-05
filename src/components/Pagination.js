import React from 'react';
import { connect } from 'react-redux';

import PerPageAndPagination from './PerPageAndPagination';
import PageUnit from './PageUnit';

import { urlHelper } from '../utils';

const Pagination = ({ pages, query, active, perPage }) => {
  const pagesArr = [];
  for (let i = 1; i <= pages; i += 1) {
    pagesArr.push(i);
  }
  return (
    <PerPageAndPagination>
      {pages &&
        pagesArr.map(pageNum =>
          <PageUnit active={+active === pageNum} key={pageNum} to={urlHelper(query, pageNum, perPage)}>
            {pageNum}
          </PageUnit>
        )}
    </PerPageAndPagination>
  );
};

const mapStateToProps = ({ pages }) => ({ pages });

export default connect(mapStateToProps)(Pagination);
