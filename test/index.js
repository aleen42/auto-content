/***********************************************************************
 *                                                                   _
 *       _____  _                           ____  _                 |_|
 *      |  _  |/ \   ____  ____ __ ___     / ___\/ \   __   _  ____  _
 *      | |_| || |  / __ \/ __ \\ '_  \ _ / /    | |___\ \ | |/ __ \| |
 *      |  _  || |__. ___/. ___/| | | ||_|\ \___ |  _  | |_| |. ___/| |
 *      |_/ \_|\___/\____|\____||_| |_|    \____/|_| |_|_____|\____||_| 
 *                                                                      
 *      ================================================================
 *                 More than a coder, More than a designer              
 *      ================================================================
 *
 *
 *      - Document: test.js
 *      - Author: aleen42
 *      - Description: a javascript file for testing
 *      - Create Time: Apr 12th, 2015
 *      - Update Time: Apr 12th, 2015 
 *
 *
 **********************************************************************/

const should = require('chai').should();
const autoContent = require('../lib/index');

/** test case with should syntax provided by the Chai framework */
describe('tests', function () {
	it('test case 1', function () {
		autoContent.printText(3).should.equal(4);
	});
});
