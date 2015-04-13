/**
 * Created by jtrezza on 12/04/15.
 */
/** Hay varias formas de implementar módulos en JavaScript, en este archivo
 usaremos obejct literal notation y module pattern */

/**
 * Object literal notation
 * En este tipo de notación, totas las propiedades tienen un efecto 'público'
 * ya que todas son visibles (y manipulables) desde el exterior del objeto
 */
var myModule = {
    myProperty: 'Some value',

    myConfig: {
        cache: true,
        lang: 'es',
        greeting: '¡Hola a todos!'
    },

    saySomething: function()
    {
        console.log(this.myConfig.greeting);
    },

    updateConfig: function(newConfig)
    {
        if(typeof newConfig === "object"){
            this.myConfig = newConfig;
        }
    }
};

myModule.saySomething();
myModule.updateConfig({cache: true, lang:'en', greeting:'Hello everybody!'});
myModule.saySomething();

/**
 * Ejemplo de module pattern tomado de Learning JavaScript design patterns
 * Esta forma nos permite tener variables y funciones privadas, que solo
 * pueden ser usadas dentro de nuestro módulo
 */
var testModule = (function () {

    var counter = 0;

    return {

        incrementCounter: function () {
            return counter++;
        },

        resetCounter: function () {
            console.log( "counter value prior to reset: " + counter );
            counter = 0;
        }
    };

})();

// Usage:

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();

/**
 * Podemos utilizar la variación 'exports', para evitar escribir un objeto gigante
 * directamente. En su lugar declaramos un objeto vacío, al que iremos agregando
 * funciones y propiedades, el cual luego exportaremos (return)
 */
var myModule = (function () {

    // Module object
    var module = {},
        privateVariable = "Hello World";

    function privateMethod() {
        // ...
    }

    module.publicProperty = "Foobar";
    module.publicMethod = function () {
        console.log( privateVariable );
    };

    return module;

})();