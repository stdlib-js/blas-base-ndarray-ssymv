<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ssymv

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Perform the matrix-vector operation `y = alpha*A*x + beta*y` for a symmetric matrix `A`.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import ssymv from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ndarray-ssymv@deno/mod.js';
```

#### ssymv( arrays )

Performs the matrix-vector operation `y = alpha*A*x + beta*y`, where `alpha` and `beta` are scalars, `x` and `y` are one-dimensional ndarrays, and `A` is an `N` by `N` symmetric matrix.

<!-- eslint-disable max-len -->

```javascript
import Float32Matrix from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-matrix-float32@deno/mod.js';
import Float32Vector from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-vector-float32@deno/mod.js';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';
import resolveEnum from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-matrix-triangle-resolve-enum@deno/mod.js';

var A = new Float32Matrix( [ [ 1.0, 2.0, 3.0 ], [ 2.0, 1.0, 2.0 ], [ 3.0, 2.0, 1.0 ] ] );
var x = new Float32Vector( [ 1.0, 2.0, 3.0 ] );
var y = new Float32Vector( [ 4.0, 5.0, 6.0 ] );

var uplo = scalar2ndarray( resolveEnum( 'upper' ), {
    'dtype': 'int32'
});
var alpha = scalar2ndarray( 3.0, {
    'dtype': 'float32'
});
var beta = scalar2ndarray( 2.0, {
    'dtype': 'float32'
});

var out = ssymv( [ A, x, y, uplo, alpha, beta ] );
// returns <ndarray>[ 50.0, 40.0, 42.0 ]

var bool = ( out === y );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a two-dimensional input ndarray corresponding to `A`.
    -   a one-dimensional input ndarray corresponding to `x`.
    -   a one-dimensional input/output ndarray corresponding to `y`.
    -   a zero-dimensional ndarray specifying whether the upper or lower triangular part of the symmetric matrix `A` should be referenced.
    -   a zero-dimensional ndarray containing a scalar constant corresponding to `alpha`.
    -   a zero-dimensional ndarray containing a scalar constant corresponding to `beta`.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-discrete-uniform@deno/mod.js';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';
import resolveEnum from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-matrix-triangle-resolve-enum@deno/mod.js';
import striu2tril from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-striu2tril@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import ssymv from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ndarray-ssymv@deno/mod.js';

var opts = {
    'dtype': 'float32'
};

var A = discreteUniform( [ 4, 4 ], 0, 10, opts );
var x = discreteUniform( [ 4 ], 0, 10, opts );
var y = discreteUniform( [ 4 ], 0, 10, opts );

var uplo = scalar2ndarray( resolveEnum( 'upper' ), {
    'dtype': 'int32'
});
var alpha = scalar2ndarray( 3.0, opts );
var beta = scalar2ndarray( 2.0, opts );

var k = scalar2ndarray( 1, {
    'dtype': 'generic'
});
striu2tril( [ A, A, k ] );

var out = ssymv( [ A, x, y, uplo, alpha, beta ] );
console.log( ndarray2array( out ) );
```

</section>

<!-- /.examples -->

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-ndarray-ssymv.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-ndarray-ssymv

[test-image]: https://github.com/stdlib-js/blas-base-ndarray-ssymv/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-ndarray-ssymv/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-ndarray-ssymv/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-ndarray-ssymv?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-ndarray-ssymv.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-ndarray-ssymv/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-ndarray-ssymv/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-ndarray-ssymv/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-ndarray-ssymv/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-ndarray-ssymv/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-ndarray-ssymv/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-ndarray-ssymv/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-ndarray-ssymv/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-ndarray-ssymv/main/LICENSE

</section>

<!-- /.links -->
