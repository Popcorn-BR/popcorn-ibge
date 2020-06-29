# Popcorn IBGE
![npm](https://img.shields.io/npm/dy/popcorn-ibge)

Popcorn-ibge is a javascript library created to facilitate the use of the IBGE locale api.



## Installation

```sh
$ npm install popcorn-ibge --save
```

## How to use

### ES6

```js
// to import a specific method
import { ufs } from 'popcorn-ibge';

const ibge = ufs();

```
## Methods

> Follow the methods that the library provides.

### ufs()

> Rewind an image by calling this method.



**Example**

```js
  async function getData() {
    const ufs = await ufs();
    console.log(ufs);
  };
```

### municipios()

> Advance an image by calling this method.



**Example**

```js
  async function getData() {
    const municipios = await municipios('mg');
    console.log(municipios);
  };
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

| ![Denner Rondinely](https://avatars0.githubusercontent.com/u/14242874?s=460&v=4)|
|:---------------------:|
|  [Denner Rondinely](https://github.com/dennerrondinely/)   |

See also the list of [contributors](https://github.com/dennerrondinely/popcorn-slide/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
