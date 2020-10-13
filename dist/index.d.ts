import * as React from "react";
export declare const withProps: (
  input: (props: object) => {} | object
) => (
  BaseComponent: string
) => (props: object) => React.DOMElement<{}, Element>;
