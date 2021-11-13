import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

const setup = () => {
  // use mount, because useEffect not called on `shallow`
  return mount(<App />);
}

test('renders without error', () => {
  const wrapper = setup();
  const chatComponent = findByTestAttr(wrapper, 'chat-component');
  expect(chatComponent).toHaveLength(1);
});