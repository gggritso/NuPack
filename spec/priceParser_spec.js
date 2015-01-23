var parse = require( '../src/priceParser.js' ).parse;

describe( 'PriceParser test suite', function() {

  it( 'should account for dollar sign', function() {

    expect( parse( '$1200' ) ).toEqual( 1200 );
    expect( parse( '1200' ) ).toEqual( 1200 );
  });

  it( 'should work with decimals', function() {

    expect( parse( '$1200.23' ) ).toEqual( 1200.23 );
    expect( parse( '1200.00' ) ).toEqual( 1200 );
  });

  it( 'should work with comma delimiters', function() {
    expect( parse( '$1,200.5' ) ).toEqual( 1200.5 );
  });

});
