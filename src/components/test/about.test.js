import About from '../about';
import React from 'react';
import { shallow } from 'enzyme';

describe('<About>', () => {
  it('Should render without crashing', () => {
    shallow(<About />);
  });
});