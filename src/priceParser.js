var priceRegExp = /^\$?([\d\,\.]+)$/;

module.exports.parse = function( priceString ) {

  var numberString = priceRegExp.exec( priceString )[ 1 ].replace( /,/g, '' );
  return parseFloat( numberString, 10 );
};
