<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

<!-- lint disable maximum-heading-length -->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# smskmap2

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a binary function to single-precision floating-point strided input arrays according to a strided mask array and assign results to a single-precision floating-point strided output array.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import smskmap2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-smskmap2@v0.1.1-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-smskmap2@v0.1.1-esm/index.mjs';
```

#### smskmap2( N, x, strideX, y, strideY, mask, strideMask, z, strideZ, fcn )

Applies a binary function to single-precision floating-point strided input arrays according to a strided mask array and assigns results to a single-precision floating-point strided output array.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';
import addf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-addf@esm/index.mjs';

var x = new Float32Array( [ -2.0, 1.0, -3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
var y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var z = new Float32Array( x.length );
var m = new Uint8Array( [ 0, 0, 1, 0, 0, 1, 1, 0 ] );

smskmap2( x.length, x, 1, y, 1, m, 1, z, 1, addf );
// z => <Float32Array>[ -1.0, 3.0, 0.0, -1.0, 9.0, 0.0, 0.0, 5.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.
-   **y**: input [`Float32Array`][@stdlib/array/float32].
-   **strideY**: index increment for `y`.
-   **mask**: mask [`Uint8Array`][@stdlib/array/uint8].
-   **strideMask**: index increment for `mask`.
-   **z**: output [`Float32Array`][@stdlib/array/float32].
-   **strideZ**: index increment for `z`.
-   **fcn**: function to apply.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';
import addf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-addf@esm/index.mjs';

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] );

smskmap2( 3, x, 2, y, -1, m, 2, z, 1, addf );
// z => <Float32Array>[ 1.0, 0.0, -4.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float32] views.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';
import addf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-addf@esm/index.mjs';

// Initial arrays...
var x0 = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y0 = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var z0 = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var m0 = new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element
var z1 = new Float32Array( z0.buffer, z0.BYTES_PER_ELEMENT*2 ); // start at 3rd element
var m1 = new Uint8Array( m0.buffer, m0.BYTES_PER_ELEMENT*3 ); // start at 4th element

smskmap2( 3, x1, -2, y1, 1, m1, 1, z1, 1, addf );
// z0 => <Float32Array>[ 0.0, 0.0, -4.0, -1.0, 0.0, 0.0 ]
```

#### smskmap2.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, mask, strideMask, offsetMask, z, strideZ, offsetZ, fcn )

Applies a binary function to single-precision floating-point strided input arrays according to a strided mask array and assigns results to a single-precision floating-point strided output array using alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';
import addf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-addf@esm/index.mjs';

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0 ] );
var z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );

smskmap2.ndarray( x.length, x, 1, 0, y, 1, 0, m, 1, 0, z, 1, 0, addf );
// z => <Float32Array>[ 0.0, -1.0, 0.0, -2.0, -2.0 ]
```

The function accepts the following addfitional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.
-   **offsetMask**: starting index for `mask`.
-   **offsetZ**: starting index for `z`.

While [`typed array`][@stdlib/array/float32] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y` in reverse order,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';
import addf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-addf@esm/index.mjs';

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] );

smskmap2.ndarray( 3, x, 2, 1, y, -1, y.length-1, m, 2, 1, z, 1, 0, addf );
// z => <Float32Array>[ 1.0, -1.0, 0.0, 0.0, 0.0, 0.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

var discreteUniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform' ).factory;
var bernoulli = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-bernoulli' ).factory;
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@esm/index.mjs';
import addf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-addf@esm/index.mjs';
import smskmap2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-smskmap2@v0.1.1-esm/index.mjs';

var x = filledarrayBy( 10, 'float32', discreteUniform( -100, 100 ) );
console.log( x );

var y = filledarrayBy( x.length, 'float32', discreteUniform( -100, 100 ) );
console.log( y );

var m = filledarrayBy( x.length, 'uint8', bernoulli( 0.2 ) );
console.log( m );

var z = new Float32Array( x.length );
console.log( z );

smskmap2.ndarray( x.length, x, 1, 0, y, -1, y.length-1, m, 1, 0, z, 1, 0, addf );
console.log( z );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-smskmap2.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-smskmap2

[test-image]: https://github.com/stdlib-js/strided-base-smskmap2/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/strided-base-smskmap2/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-smskmap2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-smskmap2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-smskmap2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-smskmap2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-smskmap2/tree/deno
[umd-url]: https://github.com/stdlib-js/strided-base-smskmap2/tree/umd
[esm-url]: https://github.com/stdlib-js/strided-base-smskmap2/tree/esm
[branches-url]: https://github.com/stdlib-js/strided-base-smskmap2/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-smskmap2/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/esm

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8/tree/esm

</section>

<!-- /.links -->
