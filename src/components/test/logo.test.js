import { Logo } from '../logo';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Logo />', () => {
  it('Should render without crashing', () => {
    shallow(<Logo />);
  });
});