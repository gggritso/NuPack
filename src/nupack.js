// PUBLIC FUNCTIONS
function getProjectCostEstimate( basePrice, categoryName, requiredPersonnelCount ) {

  // check parameters on API-facing function
  if ( !basePrice ) throw new Error( 'no basePrice specified' );

  if ( typeof basePrice === 'string' ) {
    basePrice = parsePrice( basePrice );
  } else if ( typeof basePrice !== 'number' ) {
    throw new Error( 'basePrice should be float or string' );
  }

  if ( !categoryName ) categoryName = '';
  if ( !requiredPersonnelCount ) requiredPersonnelCount = 1;

  basePrice = basePrice + getFlatMarkup( basePrice );
  var newPrice = basePrice + getPersonnelMarkup( basePrice, requiredPersonnelCount );
  newPrice += getCategoryMarkup( basePrice, categoryName );

  // FIXME: There are bugs in rounding in JavaScript, MDN has a workaround at
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  return roundPrice( newPrice );
}

// PRIVATE FUNCTIONS
var
  parsePrice = require( './priceParser.js' ).parse,
  MARKUPS = require( './markups' );

function getFlatMarkup( basePrice ) {
  return basePrice * MARKUPS.FLAT;
}

function getPersonnelMarkup( basePrice, personnelCount ) {
  return basePrice * ( MARKUPS.PERSONNEL * personnelCount );
}

function getCategoryMarkup( basePrice, categoryName ) {
  categoryName = categoryName.toLowerCase().replace( /\s/g, '' );
  return basePrice * ( MARKUPS.CATEGORIES[ categoryName ] || 0 );
}

function roundPrice( price ) {
  return Math.round( price * 100, 2 ) / 100;
}

// EXPOSURE
module.exports.getProjectCostEstimate = getProjectCostEstimate;
