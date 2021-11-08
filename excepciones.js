// function f(){
// console.log('Hola');
// }
// try{
//     f();
// }catch(e){
//     console.log('Se ha producido una excepción' + ' ' + e);
// }finally{
//     console.log('El finally se ejecuta sí o sí')
// }

// try {
//     throw 'Error creado por Dios Todopoderoso'; //fuerzas un error con el throw
// } catch (e) {
//     console.log('Se ha producido una excepción: ' + e); //con la e recojo el throw
// } finally {
//     console.log('El finally se ejecuta sí o sí');
// }

// try {
//     throw { toString: function () { return "Error creado por Dios Todopoderoso desde una función anónima";} };
// } catch (e) {
//     console.log('Se ha producido una excepción: ' + e);
// } finally {
//     console.log('El finally se ejecuta sí o sí');
// } 

// try {
//     function f() { 
//         return "'Error creado por Dios Todopoderoso desde una función"; 
//     };
//     throw { toString: f };
// } catch (e) {
//     console.log('Se ha producido una excepción: ' + e);
// } finally {
//     console.log('El finally se ejecuta sí o sí');
// }

// Crea un objeto tipo de UserException
function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}
// Prueba a ver esto para entender prototype: console.log(new UserException);

// Hacer que la excepción se convierta en una cadena con formato cuando se usa como cadena
// (por ejemplo, por la consola de errores)
UserException.prototype.toString = function() {
    return '${this.name}: "${this.message}"';
}

// Crea una instancia del tipo de objeto y tírala
throw new UserException('Valor incorrecto ');

console.log(new UserException);