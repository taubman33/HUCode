//var assert = require('assert');
var expect = require('chai').expect;
const { JSDOM } = require('jsdom');
const options = {
  resources: 'usable',
  runScripts: 'dangerously',
};

describe('', function() {
    it("task_01__IndexPage_UI - Retrieve information from the server by making a remote HTTP call. Display the retrieved JSON records on HTML page.", (done) =>{
        JSDOM.fromFile('index.html', options).then((dom) => {
            setTimeout(() => {
                var htmlText = dom.window.document.body.textContent;
                console.log(htmlText);
                expect(htmlText).to.contain.oneOf(['The Beatles']);
                done();
            }, 5000);
        });
    }).timeout(8000);

});

