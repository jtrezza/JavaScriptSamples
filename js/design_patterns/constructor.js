/**
 * Created by jtrezza on 12/04/15.
 */

/**
 * Cuando se llama a una función usando la palabra 'new', JavaScript
 * crea un nuevo objeto y utiliza dicha función para inicializarlo. Al actuar
 * como constructor, una función puede acceder a ese nuevo objeto mediante 'this'.
 *
 * En los constructores las propiedades son públicas, y cada propiedad y
 * y función es redefinida en cada nueva instancia creada.
 */
function Computer(processor, memory, disk_space)
{
    this.processor = processor;
    this.memory = memory;
    this.disk_space = disk_space;

    this.toString = function()
    {
        return 'This computer have '+this.processor+' Ghz of processor velocity, '
        +this.memory+' GB of memory and '+this.disk_space+' GB of disk space.';
    }
}
/** Todas las instancias tienen acceso a las propiedades del prototipo del objeto,
 * por tanto, podemos definir propiedades comunes en el prototipo y no se creará
 * una nueva por cada nueva instancia
 */
Computer.prototype.runProcess = function(num_of_calcs)
{
    return 'The computer has made '+num_of_calcs+' of calculations!';
}

var myComputer = new Computer(1.93, 8, 256);
console.log(myComputer.toString());
console.log(myComputer.runProcess(1000000));