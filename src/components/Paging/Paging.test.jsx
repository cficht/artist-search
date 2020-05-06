import React from 'react';
import { shallow } from 'enzyme';
import Paging from './Paging';

describe('Paging component', () => {
  it('renders Paging', () => {
    const wrapper = shallow(<Paging 
      page={0}
      list={[]}
      handlePage={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
