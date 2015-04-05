//Aquí hacemos uso de un módulo (ver archivo 'modules.js')
(function(exports) {
    var number = undefined;

    //Cuando una función es parte de un objeto, en este caso 'exports'
    //es invocada como un método, y es posible acceder al objeto del
    //que hace parte usando 'this'
    exports.setNumber = function(n)
    {
        number = n;
        return this;
    }
    exports.sumar = function(n)
    {
        number += n;
        return this;
    }
    exports.restar = function(n)
    {
        number -= n;
        return this;
    }
    exports.multiplicar = function(n)
    {
        number *= n;
        return this;
    }
    exports.dividir = function(n)
    {
        number /= n;
        return this;
    }
    exports.logNumber = function()
    {
        console.log(number);
    }
})(this.App = {})

//Cada método nos devuelve una referencia al mismo objeto
App.setNumber(2).sumar(4).multiplicar(5).dividir(3).logNumber();