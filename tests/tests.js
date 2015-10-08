var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted1.innerHTML, "0.0 Celsius");
	    assert.deepEqual(converted2.innerHTML, "273.1 Kelvin");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted1.innerHTML, "113.0 Farenheit");
	    assert.deepEqual(converted2.innerHTML, "318.1 Kelvin");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
});
