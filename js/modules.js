//Las funciones son la única forma en JavaScript de crear nuevos Scopes.
//Entonces, si queremos que nuestros modulos tengan su propio Scope,
//tenemos que basarlos en funciones.

var myModule = function(){

    var bike = {
        brand: 'Raleigh',
        size: '16',
        color: 'Black/Blue'
    }

    return {
        setColor: function(color)
        {
            bike.color = color;
        },
        getColor: function()
        {
            return bike.color;
        },
        describe: function()
        {
            console.log("This is a "+bike.brand+" bike, size "+bike.size+", color "+bike.color);
        }
    }
}();//Los paréntesis ejecutan inmediatamente la expresión y asignan el valor devuelto a la variable

var otherModule = function(){

    var person = {
        name: 'Annie',
        age: 19,
        sex: 'female',
        hairColor: 'black'
    }

    this.setHairColor = function(color)
    {
        person.hairColor = color;
    }
    this.describe = function()
    {
        console.log("Name: "+person.name+", is "+person.age+" years old. Him/her sex is "+person.sex
        +" and him/her hair color is "+person.hairColor);
    }
};//Esto es una pinche clase

var dayName = function() {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    return function(number) {
        return names[number];
    };
}();

myModule.describe();
myModule.setColor('green');
myModule.describe();

console.log(dayName(6));

personContainer = new otherModule();
personContainer.setHairColor('blonde');
personContainer.describe();

//Los paréntesis extra que rodean la expresión, son un truco
//para forzar que la función sea interpretada como una expresión
(function() {
    function square(x) { return x * x; }
    var hundred = 100;

    console.log(square(hundred));
})();

//Una forma de evitar escribir un objeto gigante es recibiendo un parámetro
//y pegar a éste to-do lo que se desee exportar. En los paréntesis finales,
//this representa el scope global, así que la variable que se envíe estará
//disponible globalmente
/**
 * Esta forma, es una variación del patrón llamada Import mixins, y es usada
 * principalmente para utilizar objetos del scope global, por ejemplo, otras
 * librerías.
 */
(function(exports) {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];

    exports.name = function(number) {
        return names[number];
    };
    exports.number = function(name) {
        return names.indexOf(name);
    };
})(this.weekDay = {});

/** Esta última sintaxis es caca, genera un error cuando se corre en consola,
 * pero al parecer esta es la forma que utilizan en jQuery
 */
console.log(weekDay.name(weekDay.number("Saturday")));