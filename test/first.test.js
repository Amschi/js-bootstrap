const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();
const appFirst = require('../app/first');



    describe('HelloWorld', () => {

        // describe('Constructor', () => {

            it('should be created with three properties: commandLineArgs, greeting, and logger', () => {
                let sut = new HelloWorld();
                expect(sut).to.have.property('commandLineArgs');
                expect(sut).to.have.property('greeting');
                expect(sut).to.have.property('logger');
            });


   // describe('#test avec nombre 3', () => {
        it('should return Fizz', () => {
            //GIVEN
            const expected = "Fizz";

            //WHEN
            const result = appFirst.buzzer(3);

            //THEN
            assert.equal(result, expected);


        })
    });

    // describe('#test avec nombre 5', () => {
    //     it('should return Buzz', () => {
    //         //GIVEN
    //         const expected = "Buzz";
    //
    //         //WHENnpm
    //         const result = appFirst.buzzer(5);
    //
    //         //THEN
    //         assert.equal(result, expected);
    //
    //     })
    // });

  //  describe('#test avec nombre 15', () => {
  //       it('should return Fizz Buzz', () => {
  //           //GIVEN
  //           const expected = "Fizz Buzz";
  //
  //           //WHEN
  //           const result = appFirst.buzzer(15);
  //
  //           //THEN
  //           assert.equal(result, expected);
  //
  //       })
    //});
});
