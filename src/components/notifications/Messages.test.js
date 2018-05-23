import React from 'react';
import { shallow } from 'enzyme';
import Messages from './Messages';

import path from 'path'
import fakeProps from 'react-fake-props'

const MessagesPath = path.join(__dirname, './Messages.js')
const props = fakeProps(MessagesPath, [{ optional: true }])

it('renders Messages without crashing', () => {
  shallow(<Messages {...props}/>);
});