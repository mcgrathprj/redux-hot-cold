import React from 'react';
import Adaptor from '../../setupTests';
import { shallow } from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection auralStatus="" guesses={[]} />);
  });
});
