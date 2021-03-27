<div align="center">

# Pluralize

A very tiny library to pluralize words!

[![Version][version-badge]][package]
[![Downloads][downloads-badge]][npmtrends]
[![Bundlephobia][bundle-phobia-badge]][bundle-phobia]

[![Star on GitHub][github-star-badge]][github-star]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Twitter Follow][twitter-badge]][twitter]

---

### PRs Welcome 👍✨

</div>

- 📦 [Installation](#installation)
- ℹ️ [Usage](#usage)
- 💡 [Examples](https://pluralize.netlify.app/)

## Motivation

Pluralizing text is a very annoying task & this library aims to provide a lightweight, friendly API to achieve it.

## Installation

```sh
yarn add @daniakash/pluralize

# or

npm i @daniakash/pluralize
```

## Usage

```jsx
import { pluralize } from "@daniakash/pluralize";
```

### Pluralizing words that simply adds 's'

```jsx
pluralize("apple", count); //=> apples
```

### Pluralizing words that add a custom suffix

```jsx
pluralize("child", count, { pluralSuffix: "ren" }); //=> children
```

### Pluralizing words that needs a different word altogether

```jsx
pluralize("sheep", count, { pluralTerm: "sheep" }); //=> sheep
```

## Licenses

MIT © [DaniAkash][twitter]

[example-playground]: https://codesandbox.io/s/lifecycle-hooks-playground-n6qes
[bundle-phobia-badge]: https://badgen.net/bundlephobia/minzip/@daniakash/pluralize
[bundle-phobia]: https://bundlephobia.com/result?p=@daniakash/pluralize
[downloads-badge]: https://img.shields.io/npm/dm/@daniakash/pluralize.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/@daniakash/pluralize
[package]: https://www.npmjs.com/package/@daniakash/pluralize
[version-badge]: https://img.shields.io/npm/v/@daniakash/pluralize.svg?style=flat-square
[twitter]: https://twitter.com/dani_akash_
[twitter-badge]: https://img.shields.io/twitter/follow/dani_akash_?style=social
[github-watch-badge]: https://img.shields.io/github/watchers/DaniAkash/pluralizer.svg?style=social
[github-watch]: https://github.com/DaniAkash/pluralizer/watchers
[github-star-badge]: https://img.shields.io/github/stars/DaniAkash/pluralizer.svg?style=social
[github-star]: https://github.com/DaniAkash/pluralizer/stargazers
