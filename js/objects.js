//Casi todos los objetos en JavaScript tienen un prototype
//un prototype es un objeto que cuenta con ciertas propiedades.
//Cuando se solicita a un objeto una propiedad o método que él
//no tiene, se llama a su prototype, y así...

//Prototype base:
//Object.protype, Array.prototype, Function.prototype

var protoRabbit = {
    speak: function(line) {
        console.log("The " + this.type + " rabbit says '" +
        line + "'");
    }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");

var map = {};
function storePhi(event, phi) {
    map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

//Creando una propiedad no enumerable
Object.defineProperty(Object.prototype, "hiddenNonsense",
    {enumerable: false, value: "hi"});
for (var name in map)
    console.log(name);

//Constructores
//En las funciones contructoras, 'this' referencia a un nuevo
//objeto creado y este es devuelto a menos que explícitamente
//se devuelva en la función un objeto diferente
function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);

//Ejemplo devolviendo un objeto específico
function Person(name){
    var object = {
        name:name,
        age:undefined,
        sayName: function()
        {
            console.log('My name is '+this.name)
        }
    };

    return object;
}
var jose = new Person('Jose');
jose.sayName();

//Creando un nuevo objeto sin prototype
var map = Object.create(null);
map["pizza"] = 0.069;
console.log("toString" in map);
console.log("pizza" in map);