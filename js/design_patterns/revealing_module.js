/**
 * Created by Jose on 13/04/2015.
 */

/**
 * Este patrón es una mejora al patrón module original. Consiste en declarar todas
 * las propiedades y métodos en el scope privado, y al final declarar un objeto
 * donde se pondrán como valores aquellas propiedades o métodos que deseen hacerse
 * públicas, y este objeto será devuelto.
 *
 */
var myRevealingModule = (function(){
    /**
     * También se puede utilizar la siguiente notación para indicar cuales propiedades
     * son públicas o privadas.
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