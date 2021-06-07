/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { PermissionConsumer } from './PermissionContext';

export default () => (
  <PermissionConsumer name="third">
    <div>
      <button>Third</button>
    </div>
  </PermissionConsumer>
);
