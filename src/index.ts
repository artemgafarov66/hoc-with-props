import {
  createElement,
  forwardRef,
  ComponentClass,
  FunctionComponent
} from "react";

declare type Fn = (props: object) => object;
declare type Component = string | ComponentClass | FunctionComponent;

const getDisplayName = (Component: Component) => {
  if (typeof Component === "string") {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || "Component";
};

const mapProps = (propsMapper: Fn) => (BaseComponent: Component) =>
  forwardRef((props: object, ref) => {
    return createElement(BaseComponent, propsMapper({ ...props, ref }));
  });

const withProps = (input: Fn | object) => {
  const hoc = mapProps(props => ({
    ...(typeof input === "function" ? input(props) : input),
    ...props
  }));

  return (BaseComponent: Component) => {
    BaseComponent["displayName"] = `withProps(${getDisplayName(
      BaseComponent
    )})`;

    return hoc(BaseComponent);
  };
};

export { withProps };
