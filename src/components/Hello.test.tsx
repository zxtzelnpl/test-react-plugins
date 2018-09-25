import * as React from 'react';
import { expect } from 'chai';
import * as Enzyme from 'enzyme';
import * as sinon from 'sinon';
import * as Adapter from 'enzyme-adapter-react-16';

import { Hello } from './Hello';

Enzyme.configure({ adapter: new Adapter() });

describe('<Hello />', () => {
    it('renders one h1 components', () => {
        const wrapper = Enzyme.shallow(<Hello compiler={'typescript'} framework={'react'}/>);
        expect(wrapper.find('h1')).to.have.lengthOf(1);
    });
});
