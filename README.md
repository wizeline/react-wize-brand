# react-wize-brand

React components for Wizeline logos

## Install

`yarn add https://github.com/wizeline/react-wize-brand#release`

## Dependency

This component requires `styled-components` to work, so if your project does not have `styled-components` yet, please install it:

`yarn add styled-components` or `npm install styled-components`



## Usage

``` javascript
import { Loader } from "react-wize-brand";

function App() {
  return (
    <div className="App">
        <Loader svg={true} />
    </div>
  );
}
```

## Props:

| Name      | Type    | Default     | Description             |
| --------- | ------- | ----------- | ----------------------- |
| **svg**   | boolean | **false**   | Show logo as SVG or PNG |
| **width** | string  | **'100px'** | Set logo's width        |

## Demo:

https://wizeline.github.io/react-wize-brand/?path=/story/react-wize-brand--svg