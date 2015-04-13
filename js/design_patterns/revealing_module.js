/**
 * Created by Jose on 13/04/2015.
 */

/**
 * Este patr�n es una mejora al patr�n module original. Consiste en declarar todas
 * las propiedades y m�todos en el scope privado, y al final declarar un objeto
 * donde se pondr�n como valores aquellas propiedades o m�todos que deseen hacerse
 * p�blicas, y este objeto ser� devuelto.
 *
 */
var myRevealingModule = (function(){
    /**
     * Tambi�n se puede utilizar la siguiente notaci�n para indicar cuales propiedades
     * son p�blicas o privadas.
     */
    var privateFruta = 'Manzana',
        publicCiudad = 'Barranquilla';

    function privateLog()
    {
        console.log('Se ha cambiado la fruta a '+privateFruta);
    }

    function publicSetFruta(fruta)
    {
        privateFruta = fruta;
        privateLog();
    }

    function publicGetFruta()
    {
        return privateFruta;
    }

    return {
        ciudad: publicCiudad,
        setFruta: publicSetFruta,
        getFruta: publicGetFruta
    };

})();

console.log(myRevealingModule.ciudad);
console.log(myRevealingModule.getFruta());
myRevealingModule.setFruta('Peach');
console.log(myRevealingModule.getFruta());