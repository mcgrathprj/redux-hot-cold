import React from 'react';
import Adaptor from '../../setupTests';
import { shallow } from 'enzyme';

import InfoSection from './info-section';

describe('<InfoSection />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoSection />);
  });
});
