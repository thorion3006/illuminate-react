import React from 'react';
import { shallow } from 'enzyme';
import Errors from './Errors';

import path from 'path'
import fakeProps from 'react-fake-props'

const ErrorsPath = path.join(__dirname, './Errors.js')
const props = fakeProps(ErrorsPath, [{ optional: true }])

it('renders Errors without crashing', () => {
  shallow(<Errors {...props}/>);
});