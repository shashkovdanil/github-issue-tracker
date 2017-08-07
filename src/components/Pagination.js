// @flow
import React from 'react'
import { connect } from 'react-redux'

import PerPageAndPagination from './common/PerPageAndPagination'
import PageUnit from './common/PageUnit'

import { urlHelper } from '../utils'

type Props = {
  pages: number,
  query: string,
  active: string,
  perPage: string
}

const Pagination = ({ pages, query, active, perPage }: Props) => {
  const pagesArr = []
  for (let i = 1; i <= pages; i += 1) {
    pagesArr.push(i)
  }
  return (
    <PerPageAndPagination>
      {pages &&
        pagesArr.map((pageNum) =>
          <PageUnit active={+active === pageNum} key={pageNum} to={urlHelper(query, pageNum, perPage)}>
            {pageNum}
          </PageUnit>
        )}
    </PerPageAndPagination>
  )
}

const mapStateToProps = ({ pages }) => ({ pages })

export default connect(mapStateToProps)(Pagination)
