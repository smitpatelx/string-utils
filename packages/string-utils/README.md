# String Utils
- A string utility library
- Small size
  - Stat size: 2.33 KB
  - Parsed size: 1.03 KB
  - Gzipped size: 515 B
- Simple

![VERSION](https://img.shields.io/npm/v/@smitpatelx/string-utils)
![MONTHLY_DOWNLOADS](https://img.shields.io/npm/dm/@smitpatelx/string-utils)
![NPM](https://img.shields.io/npm/l/@smitpatelx/string-utils?color=blue)

# Contribution
This is an open-source project, feel free to contribute to this awesome project.<br/>
Best way to do this: 
  1. Fork the project
  2. Create a branch `<current_version>-<github_username>-<keyword>`. Example: `1.0.0-smitpatelx-changesToIsEmpty`
  3. Make a pull request
  4. Make sure not to change version in package.json (That will be done in next release)

# Installation
- NPM 
```js
  npm i @smitpatelx/string-utils
```
- Yarn
```js
  yarn add @smitpatelx/string-utils
```
- CDN
```html
  <script src="https://cdn.jsdelivr.net/npm/@smitpatelx/string-utils@latest/src/lib/string-utils.js"></script>
```
- [Codepen](https://codepen.io/smitpatelx/full/XWzRovO/)

# Use
```js
import {
    left,
    right,
    camelize,
    capitalize,
    removeWhiteSpace,
    escapeHtml,
    isEmpty,
    slugify
} from '@smitpatelx/string-utils';
```

# Examples
#### Right
```js
right('111 222 333 444 000', 3)

// Output
000
```

#### Left
```js
left('111 222 333 444 000', 3)

// Output
111
```

#### Camelize
```js
camelize('data_rate')
camelize('-git-xyz')

// Output
dataRate
GitXyz
```

#### Capitalize
```js
capitalize('data')
capitalize('aPPLE')

// Output
Data
Apple
```

#### RemoveWhiteSpace
```js
removeWhiteSpace('111\n222\t333\n444\n\t000')
removeWhiteSpace('  This   \t is awesome   \n\n\t library\n!  ')

// Output
111 222 333 444 000
This is awesome library !
```

#### EscapeHtml
```js
escapeHtml('<div>stringUtils</div>')

// Output
&lt;div&gt;stringUtils&lt;/div&gt;
```

#### isEmpty
```js
isEmpty('')
isEmpty('hi')

// Output
true
false
```

#### slugify
```js
slugify('Save earth')
slugify('Crème brûlée')

// Output
save-earth
creme-brulee
```
