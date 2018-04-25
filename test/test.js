var assert = require('assert');
var RSA = require('encriptacion');

describe('Encriptacion', function() {
  describe('GCD', function() {
    it('Debe retornar 1 para el máximo común divisor entre 5 y 3. ', function() {
      assert.equal(RSA.GCD(5,3), 1);
    });
  });
});

describe('Encriptacion', function() {
  describe('GCD', function() {
    it('Debe retornar 1 para el máximo común divisor entre 571 y 491. ', function() {
      assert.equal(RSA.GCD(571,491), 1);
    });
  });
});

describe('Encriptacion', function() {
  describe('RSAEncrypt', function() {
    it('Debe retornar "w4/Cm8WERw==" al encriptar la palabra "hola". ', function() {
      assert.equal(RSA.RSAEncrypt("hola"), "w4/Cm8WERw==");
    });
  });
});

describe('Encriptacion', function() {
  describe('RSAEncrypt', function() {
    it('Debe retornar "xJTClcKPw5XCm3vClcS0" al encriptar la palabra "Cenfotec". ', function() {
      assert.equal(RSA.RSAEncrypt("Cenfotec"), "xJTClcKPw5XCm3vClcS0");
    });
  });
});

describe('Encriptacion', function() {
  describe('RSADecrypt', function() {
    it('Debe retornar "hola" al encriptar la palabra "w4/Cm8WERw==". ', function() {
      assert.equal(RSA.RSADecrypt("w4/Cm8WERw=="), "hola");
    });
  });
});

describe('Encriptacion', function() {
  describe('RSADecrypt', function() {
    it('Debe retornar "Cenfotec" al encriptar la palabra "xJTClcKPw5XCm3vClcS0". ', function() {
      assert.equal(RSA.RSADecrypt("xJTClcKPw5XCm3vClcS0"), "Cenfotec");
    });
  });
});

describe('Encriptacion', function() {
  describe('RSAEncrypt vs RSADecrypt', function() {
    it('Debe retornar "hola" al encriptar y desencriptar la palabra "hola". ', function() {
      assert.equal(RSA.RSADecrypt(RSA.RSAEncrypt("hola")), "hola");
    });
  });
});

describe('Encriptacion', function() {
  describe('RSAEncrypt vs RSADecrypt', function() {
    it('Debe retornar "Cenfotec" al encriptar y desencriotar la palabra "Cenfotec". ', function() {
      assert.equal(RSA.RSADecrypt(RSA.RSAEncrypt("Cenfotec")), "Cenfotec");
    });
  });
});