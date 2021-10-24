# Chef

### Install

```
npm i @ynotrusso/chef
```

### Methods

#### diff

```js
import { diff } from "@ynotrusso/chef";

let a = {
  name: "apple",
  price: 2,
  color: "red"
};

let b = {
  name: "apple",
  price: 3,
  color: "green"
};

diff(a, b);
```

Output

```js
{
  price: 3,
  color: 'green'
}
```
