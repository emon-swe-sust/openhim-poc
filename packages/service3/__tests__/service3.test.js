'use strict';

const service3 = require('..');
const assert = require('assert').strict;

assert.strictEqual(service3(), 'Hello from service3');
console.info('service3 tests passed');
