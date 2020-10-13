import { createElement, forwardRef } from "react";

declare type Fn = (props: object) => object;

const mapProps = (propsMapper: Fn) => (BaseComponent: string) =>
  forwardRef((props: object, ref) =>
    createElement(BaseComponent, propsMapper({ ...props, ref }))
  );

const withProps = (input: Fn | object) =>
  mapProps(props => ({
    ...(typeof input === "function" ? input(props) : input),
    ...props
  }));

withProps.displayName = "withProps";

export { withProps };
