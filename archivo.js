/**
 * @Date:   07-01-2019
 * @Project: Fundamentos de JS
 * @Last modified time: 07-01-2019
 */

 //console.log('Hola mundo JS'); //interactuar con el usuario.
 var nombre;
 nombre = 'Sabina'; //convencion
 var apellido = 'Chambi';
 var edad = 38; // No es tipado
 var peso = '62 kg';
 //writing into the browser console
 console.log('Hola ' + nombre + ' ' + apellido);
 console.log('Tengo ' + edad + ' anios');
 //writing into html output
 document.write('HOLA '+nombre.toUpperCase()+' '+ apellido.toUpperCase());
 //writing into an html element  --VOLVER A QUI NO FUNCIONO
 document.getElementById('saludo').innerHTML = 'HOLA INNER';
 document.getElementById("saludo").innerHTML = 5 + 6;
 //
 window.alert('HOLA ..... ALERT');
 //Strings
 var nombreEnMayusculas = nombre.toUpperCase();
 var apellidoEnMinusculas = apellido.toLowerCase();
 var primeraLetraDelNombre = nombre.charAt(0);
 var cantidadLetrasDelNombre = nombre.length;
 var nombreCompleto = nombre + ' ' + apellido;
 //Interpolacion de texto ``
