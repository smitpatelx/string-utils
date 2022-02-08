# String Utils
- A string utility library
- Small size
  - Stat size: 2.33 KB
  - Parsed size: 1.03 KB
  - Gzipped size: 515 B
- Simple

<span class="badge-npmversion"><a href="https://npmjs.org/package/@smitpatelx/string-utils" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@smitpatelx/string-utils.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@smitpatelx/string-utils" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@smitpatelx/string-utils.svg" alt="NPM downloads" /></a></span>

# Install
- NPM  - ```js
          npm i @smitpatelx/string-utils
         ```
- Yarn  - ```js
           yarn add @smitpatelx/string-utils
          ```

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
removeWhiteSpace('111 222 333 444 000')
removeWhiteSpace('  This   \t is awesome   \n\n\t library\n!  ')

// Output
111222333444000
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
