import React from 'react';
import { shallow } from 'enzyme';
import Login from './index';

import path from 'path'
import fakeProps from 'react-fake-props'

const LoginPath = path.join(__dirname, './index.js')
const props = fakeProps(LoginPath, [{ optional: true }])

it('renders login without crashing', () => {
  shallow(<Login {...props}/>);
});