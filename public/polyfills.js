if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(stringBuscada, posicion) {
    posicion = posicion || 0;
    return this.indexOf(stringBuscada, posicion) === posicion;
  };
}

if (!Array.prototype.fill) {
Object.defineProperty(Array.prototype, 'fill', {
  value: function(value) {

    // Pasos 1-2.
    if (this == null) {
      throw new TypeError('esto es nulo o no definido');
    }

    var O = Object(this);

    // Pasos 3-5.
    var len = O.length >>> 0;

    // Pasos 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0;

    // Paso 8.
    var k = relativeStart < 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len);

    // Pasos 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ?
      len : end >> 0;

    // Paso 11.
    var final = relativeEnd < 0 ?
      Math.max(len + relativeEnd, 0) :
      Math.min(relativeEnd, len);

    // Paso 12.
    while (k < final) {
      O[k] = value;
      k++;
    }

    // Paso 13.
    return O;
  }
});
}