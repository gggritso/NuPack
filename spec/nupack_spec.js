var getProjectCostEstimate = require( '../src/nupack.js' ).getProjectCostEstimate;

describe( 'NuPack error suite', function() {

  it( 'should error on no base price', function() {

      expect( function() {
        getProjectCostEstimate();
      }).toThrowError( 'no price specified' );

  });

  it( 'should error on no malformed price', function() {

    expect( function() {
      getProjectCostEstimate({ hey: 'hey' });
    }).toThrowError( 'basePrice should be float or string' );

  });

});

describe( 'NuPack success suite', function() {

  it( 'should calculate food markup successfully', function() {
    expect( getProjectCostEstimate( '$1299.99', 'food', 3 ) ).toEqual( 1591.58 );
  });

  it( 'should calculate food markup successfully from float', function() {
    expect( getProjectCostEstimate( 1299.99, 'food', 3 ) ).toEqual( 1591.58 );
  });

  it( 'should calculate drug markup successfully', function() {
    expect( getProjectCostEstimate( '$5432.00', 'drugs', 1 ) ).toEqual( 6199.81 );
  });

  it( 'should calculate no category markup successfully', function() {
    expect( getProjectCostEstimate( '$12456.95', 'books', 4 ) ).toEqual( 13707.63 );
  });

});
