# Foton-UI

Clarke's Design System implementation

## Installing the project locally

Run

```shell
yarn install
```

## Running storybook

Run:

```shell
yarn storybook
```

## Integrating into an existing React project

### Prerequisites

- You need to have installed `react`, `tailwindcss`, `heroicons` in your project.

### Plugging into your `tailwind.config.js`

> **NOTE:** Integrating this package into your tailwind configuration might override your previous setup

```javascript
// tailwind.config.js
const fotonTailwind = require('@clarke-energia/foton').fotonTailwind

module.exports = [
  //...
  theme: fotonTailwind.theme,
  safelist: fotonTailwind.safelist,
  plugins: [require('@tailwindcss/forms')], // This is needed
  //...
]
```

You are good to go!

## Tests

```shell
yarn test-storybook
```
