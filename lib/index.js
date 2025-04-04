/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Apply a binary function to single-precision floating-point strided input arrays according to a strided mask array and assign results to a single-precision floating-point strided output array.
*
* @module @stdlib/strided-base-smskmap2
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var Uint8Array = require( '@stdlib/array-uint8' );
* var addf = require( '@stdlib/number-float32-base-add' );
* var smskmap2 = require( '@stdlib/strided-base-smskmap2' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
* var z = new Float32Array( x.length );
*
* smskmap2( x.length, x, 1, y, 1, m, 1, z, 1, addf );
*
* console.log( z );
* // => <Float32Array>[ 2.0, 4.0, 0.0, 8.0, 10.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var Uint8Array = require( '@stdlib/array-uint8' );
* var addf = require( '@stdlib/number-float32-base-add' );
* var smskmap2 = require( '@stdlib/strided-base-smskmap2' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
* var z = new Float32Array( x.length );
*
* smskmap2.ndarray( x.length, x, 1, 0, y, 1, 0, m, 1, 0, z, 1, 0, addf );
*
* console.log( z );
* // => <Float32Array>[ 2.0, 4.0, 0.0, 8.0, 10.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
