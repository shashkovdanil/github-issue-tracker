import React from 'react';

import PerPageAndPagination from './PerPageAndPagination';
import PageUnit from './PageUnit';

import { urlHelper } from '../utils';

const PerPageBlock = ({ query, active }) => {
  const perPage = [10, 30, 50];
  return (
    <PerPageAndPagination>
      {perPage.map(qty =>
        <PageUnit active={+active === qty} to={urlHelper(query, 1, qty)} key={qty}>
          {qty}
        </PageUnit>
      )}
    </PerPageAndPagination>
  );
};

export default PerPageBlock;
