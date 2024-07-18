/**
 * Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino
(F)emenino), edad. Se desea que determine e imprima: promedio de edad de los hombres y la
mayor edad entre las mujeres procesadas y quien la tiene.
Se dispone de los siguientes datos de varios empleados: (nombre, sexo, edad) (Mary, ‘F’, 43),
(José, ‘M’, 40), (Carlos, ‘M’, 30), (Pedro, ‘M’, 50), (Mery, ‘F’, 45), (Liz, ‘F’, 50)
Promedio de edad de los hombres: 40
Mayor edad entre las mujeres es: 50 y la tiene Liz 

 */

import Cl_Empleado from "./Cl_Empleado.js";
import Cl_Empresa from "./Cl_Empresa.js";

let emp1 = new Cl_Empleado("Mary", "F", 43);
let emp2 = new Cl_Empleado("Jose", "M", 40);
let emp3 = new Cl_Empleado("Carlos", "M", 30);
let emp4 = new Cl_Empleado("Pedro", "M", 50);
let emp5 = new Cl_Empleado("Mery", "F", 45);
let emp6 = new Cl_Empleado("Liz", "F", 50);

let emp = new Cl_Empresa();
emp.procesar(emp1);
emp.procesar(emp2);
emp.procesar(emp3);
emp.procesar(emp4);
emp.procesar(emp5);
emp.procesar(emp6);

let salida = document.getElementById("salida");
salida.innerHTML = `Promedio de edad de los hombres: ${emp.promedio()}<br>
Mayor edad entre las mujeres es: ${emp.mayoreEdad()} y la tiene ${emp.nmbMayorEdad}
`;
