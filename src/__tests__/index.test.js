import * as React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { withProps } from "../";

Enzyme.configure({ adapter: new Adapter() });

const TestComponent = props => <div {...props}>{"Test component"}</div>;

TestComponent.defaultProps = {
  isTestComponent: true
};

const ComponentWithProps = withProps({ isTestProp: true })(TestComponent);
const ComponentWithPropsFunc = withProps(() => ({ isTestProp: true }))(
  TestComponent
);

describe("withProps", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<ComponentWithProps />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("there must be props", () => {
    const wrapper = shallow(<ComponentWithProps />);
    const wrapperFunc = shallow(<ComponentWithPropsFunc />);

    expect(wrapper.prop("isTestProp")).toEqual(true);
    expect(wrapperFunc.prop("isTestProp")).toEqual(true);

    wrapper.unmount();
    wrapperFunc.unmount();
  });
});
