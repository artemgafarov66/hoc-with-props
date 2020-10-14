import { createElement, forwardRef, ElementType } from "react";

declare type Fn = (props: object) => object;

const getDisplayName = (Component: ElementType) =>
  typeof Component === "string"
    ? Component
    : !Component
    ? undefined
    : Component.displayName || Component.name || "Component";

const mapProps = (propsMapper: Fn) => (BaseComponent: ElementType) =>
  forwardRef((props: object, ref) =>
    createElement(BaseComponent, propsMapper({ ...props, ref }))
  );

const withProps = (input: Fn | object) => {
  const result = mapProps(props =>
    typeof input === "function"
      ? { ...props, ...input(props) }
      : {
          ...input,
          ...props
        }
  );

  return (BaseComponent: ElementType) => {
    const hoc = result(BaseComponent);
    hoc.displayName = `withProps(${getDisplayName(BaseComponent)})`;

    return hoc;
  };
};

export { withProps };
