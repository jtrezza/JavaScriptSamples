/**
 * Created by Jose on 13/04/2015.
 */
/** Este patr�n se usa cuando necesitamos una sola instancia del objeto a lo largo
 * de to-do el programa. Se diferencia de una clase est�tica porque permite ser constru�do
 * de manera perezosa (no ocupa memoria hasta que se inicializa).
 * N�tese que se usa un m�dulo para crear el singleton
 */

var mySingleton = (function(){

    var instance;

    function privateGetInstance()
    {

        var randomNumber = Math.random();

        return {
            host: 'localhost',
            db:   'test',
            user: 'root',
            pass: '123456',
            rand: randomNumber
        }
    }

    return {
        getInstance: function()
        {
            if(typeof instance === "undefined"){
                instance = privateGetInstance();
            }
            return instance;
        }
    }
})();

console.log(mySingleton.getInstance().rand);
console.log(mySingleton.getInstance().host);
/** Si los objetos fueran distintos, ser�a casi imposible que el n�mero
 * aleatorio fuera el mismo.
 */
console.log(mySingleton.getInstance().rand);