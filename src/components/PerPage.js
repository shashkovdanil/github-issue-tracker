// @flow
import React from 'react'

import PerPageAndPagination from './common/PerPageAndPagination'
import PageUnit from './common/PageUnit'

import { urlHelper } from '../utils'

type Props = {
  query: string,
  active: string
}

const PerPageBlock = ({ query, active }: Props) => {
  const perPage = [10, 30, 50]
  return (
    <PerPageAndPagination>
      {perPage.map((qty) =>
        <PageUnit active={+active === qty} to={urlHelper(query, 1, qty)} key={qty}>
          {qty}
        </PageUnit>
      )}
    </PerPageAndPagination>
  )
}

export default PerPageBlock
