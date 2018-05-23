import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './index';

import path from 'path'
import fakeProps from 'react-fake-props'

const NavigationPath = path.join(__dirname, './index.js')
const props = fakeProps(NavigationPath, [{ optional: true }])

it('renders Navigation without crashing', () => {
  shallow(<Navigation {...props}/>);
});