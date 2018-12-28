import LandingPage from '../landing-page';
import React from 'react';
import { shallow } from 'enzyme';

describe('<LandingPage />', () => {
  it('Should render without crashing', () => {
    shallow(<LandingPage />);
  });
});