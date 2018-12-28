import HomePage from '../home-page';
import React from 'react';
import { shallow } from 'enzyme';

describe('<HomePage />', () => {
  it('Should render without crashing', () => {
    shallow(<HomePage />);
  });
});