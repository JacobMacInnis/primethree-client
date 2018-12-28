import InputPage from '../input-page';
import React from 'react';
import { shallow } from 'enzyme';

describe('<InputPage />', () => {
  it('Should render without crashing', () => {
    shallow(<InputPage />);
  });
});