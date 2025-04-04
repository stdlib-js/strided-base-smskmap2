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

// MODULES //

var stride2offset = require( '@stdlib/strided-base-stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Applies a binary function to single-precision floating-point strided input arrays and assigns results to a single-precision floating-point strided output array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float32Array} y - input array
* @param {integer} strideY - `y` stride length
* @param {Uint8Array} mask - mask array
* @param {integer} strideMask - `mask` stride length
* @param {Float32Array} z - destination array
* @param {integer} strideZ - `z` stride length
* @param {Function} fcn - binary function to apply
* @returns {Float32Array} `z`
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var Uint8Array = require( '@stdlib/array-uint8' );
* var addf = require( '@stdlib/number-float32-base-add' );
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
*/
function smskmap2( N, x, strideX, y, strideY, mask, strideMask, z, strideZ, fcn ) { // eslint-disable-line max-len
	return ndarray( N, x, strideX, stride2offset( N, strideX ), y, strideY, stride2offset( N, strideY ), mask, strideMask, stride2offset( N, strideMask ), z, strideZ, stride2offset( N, strideZ ), fcn ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = smskmap2;
