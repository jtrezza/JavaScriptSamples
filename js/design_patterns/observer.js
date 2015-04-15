/**
 * Created by Jose on 14/04/2015.
 */

//Ver este ejercicio en funcionamiento en el archivo observer.html en el directorio raíz

/**
 * Clase (que implementa la interfaz de tener un atributo observerList)
 * que será utilizada para crear las listas de 'observadores' de nuestra
 * aplicación.
 * También el mismo 'subject' podría tenerla incorporada, pero las
 * interfaces nos permiten tener un sistema más desacoplado.
 */
function ObserverList()
{
    this.observerList = [];
}
ObserverList.prototype.add = function(obj){
    this.observerList.push(obj);
};
ObserverList.prototype.count = function(){
    return this.observerList.length;
};
ObserverList.prototype.get = function(index){
    if( index >= 0 && index < this.observerList.length){
        return this.observerList[index];
    }
};
ObserverList.prototype.indexOf = function( obj, startIndex ){
    var i = startIndex;

    while( i < this.observerList.length ){
        if( this.observerList[i] === obj ){
            return i;
        }
        i++;
    }

    return -1;
};

ObserverList.prototype.removeAt = function( index ){
    this.observerList.splice( index, 1 );
};
/**
 * La clase del objeto observado
 */
function Subject()
{
    this.observers = new ObserverList();
}
Subject.prototype.addObserver = function(observer){
    this.observers.add(observer);
};
Subject.prototype.removeObserver = function(obj){
    this.observers.removeAt(this.observers.indexOf(obj, 0));
};
Subject.prototype.notify = function( context ){
    var observersCount = this.observers.count();
    for(var i = 0; i < observersCount; i++){
        this.observers.get(i).update( context );
    }
};

function Observer()
{
    this.update = function(){
        //se implementa después
    };
}
// EL RESTO DEL CÓDIGO ESTÁ EN EL ARCHIVO HTML. YA QUE DEBE EJECUTARSE LUEGO DE HABER
// CARGADO EL DOM