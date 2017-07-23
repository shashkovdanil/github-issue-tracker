import React from 'react';
import { withRouter } from 'react-router-dom'

const IssueDetails = (props) => (
  <div>{props.location.pathname}</div>
);

export default withRouter(IssueDetails);
