import React from 'react';
import { shallow } from 'enzyme';
import Signup from './index';

import path from 'path'
import fakeProps from 'react-fake-props'

const SignupPath = path.join(__dirname, './index.js')
const props = fakeProps(SignupPath, [{ optional: true }])

it('renders Signup without crashing', () => {
  shallow(<Signup {...props}/>);
});