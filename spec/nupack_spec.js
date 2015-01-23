var nupack = require( '../src/nupack.js' );

describe( 'NuPack test suite', function() {

  it( 'should return foo', function() {
    expect( nupack.foo() ).toBe( 'foo' );
  });

});
