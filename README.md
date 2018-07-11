# Redux-Dependency-Inject

React dependency inject enables to inject dependencies to component without import into it

Here is the sample

```js
# Set dependency
import { setDI } from 'react-dependency-inject';

setDI({isFn:(fn) => fn && typeof fn === 'function'});
```

```js
# Inject Dependency

import { withDI } from 'react-dependency-inject';

export default withDI(App);
```
Varghese John:
- [GitHub](https://github.com/varghese88)

## License

[Code licensed with the MIT License (MIT)](/LICENSE). 
