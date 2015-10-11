var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted1.innerHTML, "0.0 Celsius");
        assert.deepEqual(converted2.innerHTML, "273.1 Kelvin");
    });
    test('57F = 287.0 Kelvin', function() {
        original.value = "57F";
        calculate();
        assert.deepEqual(converted2.innerHTML, "287.0 Kelvin");
        assert.deepEqual(converted1.innerHTML, "13.9 Celsius");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted1.innerHTML, "113.0 Farenheit");
        assert.deepEqual(converted2.innerHTML, "318.1 Kelvin");
    });
    test('12C = 285.1 Kelvin', function() {
        original.value = "12C";
        calculate();
        assert.deepEqual(converted2.innerHTML, "285.1 Kelvin");
        assert.deepEqual(converted1.innerHTML, "53.6 Farenheit");
    });
    test('273.15K = 0C', function() {
        original.value = "273.15K";
        calculate();
        assert.deepEqual(converted1.innerHTML, "0.0 Celsius");
        assert.deepEqual(converted2.innerHTML, "32.0 Farenheit");     
    });
    test('304.0K = 87.5 Farenheit', function() {
        original.value = "304.0K";
        calculate();
        assert.deepEqual(converted2.innerHTML, "87.5 Farenheit"); 
        assert.deepEqual(converted1.innerHTML, "30.9 Celsius");   
    });
    test('12C = 285.1 Kelvin', function() {
        original.value = "12C";
        calculate();
        assert.notDeepEqual(converted1.innerHTML, "85.1 Kelvin");
        assert.notDeepEqual(converted2.innerHTML, "253.6 Farenheit");
    });
    test('10X = error', function() {
        original.value = "10X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
    test('Resultado == String', function() {
        insert.value = "-27.18C";
        conversor();
        assert.isString(converted1.innerHTML);
    });
    // Compruebo que el resultado no es de tipo Number
    test('Resultado != Number', function() {
        insert.value = "18.27K";
        conversor();
        assert.isNotNumber(converted2.innerHTML);
    });
});
