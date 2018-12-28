import Input from '../input';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Input />', () => {
  it('Should render without crashing', () => {
    shallow(<Input />);
  });
});