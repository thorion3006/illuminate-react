import React from 'react';
import { shallow } from 'enzyme';
import NoMatch from './index';

import path from 'path'
import fakeProps from 'react-fake-props'

const NoMatchPath = path.join(__dirname, './index.js')
const props = fakeProps(NoMatchPath, [{ optional: true }])

it('renders NoMatch without crashing', () => {
  shallow(<NoMatch {...props}/>);
});