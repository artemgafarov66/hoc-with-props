# hoc-with-props

> Higher-order component for map object with props

[![NPM](https://img.shields.io/npm/v/hoc-with-props.svg)](https://www.npmjs.com/package/hoc-with-props) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save hoc-with-props
```

## Usage

```js
import * as React from "react";

import { withProps } from "hoc-with-props";

const Component = props => <div {...props}>{"Test component"}</div>;
const ComponentWithProps = withProps({ isTestProp: true })(TestComponent);
const ComponentWithPropsFunc = withProps({ isTestProp: true })(TestComponent);
```

## License

MIT © [artemgafarov66](https://github.com/artemgafarov66)

---

These tools are created using [create-react-hook](https://github.com/hermanya/create-react-hook).
