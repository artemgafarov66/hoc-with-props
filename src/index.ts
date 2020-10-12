import React from "react";

const mapProps = (propsMapper: (props: object) => {} | object) => (
  BaseComponent: string
) => (props: object) => React.createElement(BaseComponent, propsMapper(props));

export const withProps = (input: (props: object) => {} | object) =>
  mapProps(props => ({
    ...props,
    ...(typeof input === "function" ? input(props) : input)
  }));
