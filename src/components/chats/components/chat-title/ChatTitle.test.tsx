
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../../../test/testUtils';
import { ChatTitle } from './ChatTitle';

const defaultProps = {
    chatTitle: ''
};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<ChatTitle {...setupProps} />)
};

describe('<ChatTitle />', () => {
    it('renders title without error when chatTitle prop is empty', () => {
        const wrapper = setup({ chatTitle: '' });
        const title = findByTestAttr(wrapper, 'title-namechat');
        expect(title.text()).toBe('');
    });

    it('renders title correctly when chatTitle prop is non-empty ', () => {
        const wrapper = setup({ chatTitle: 'General Channel' });
        const title = findByTestAttr(wrapper, 'title-namechat');
        expect(title.text()).toBe('General Channel');
    });
})