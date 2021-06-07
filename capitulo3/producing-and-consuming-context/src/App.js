/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from 'react';

import First from './First';
import Second from './Second';
import Third from './Third';

export default () => (
  <Fragment>
    <First />
    <Second />
    <Third />
  </Fragment>
);
