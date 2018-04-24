var assert = require('assert');
var RSA = require('encriptacion');

describe('Encritacion', function() {
  describe('GCD', function() {
    it('Debe retornar 1 para el máximo común divisor entre 5 y 3. ', function() {
      assert.equal(RSA.GCD(5,3), 1);
    });
  });
});

describe('Encritacion', function() {
    describe('GCD', function() {
      it('Debe retornar 1 para el máximo común divisor entre 571 y 491. ', function() {
        assert.equal(RSA.GCD(571,491), 1);
      });
    });
  });