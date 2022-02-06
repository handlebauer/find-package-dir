# find-package-dir

Intended for use in libraries requiring the path of the dependent package.

## Install

```sh
$ npm install @hbauer/find-package-dir
# or
$ yarn add @hbauer/find-package-dir
```

## Objective

```
/
└── Users
    └── handlebauer
      └── project
          └── node_modules
              └── your-library
          └── package.json
```
In the above tree, `find-package-dir` will locate `/Users/handlebauer/project`

## Example

#### ESM

```js
import { findPackageDir } from '@hbauer/find-package-dir'
const packageDir = findPackageDir() // = `/Users/handlebauer/project`
```

#### CommonJS
```js
const { findPackageDir } = require('@hbauer/find-package-dir')
const packageDir = findPackageDir() // = `/Users/handlebauer/project`
```