export default class Cl_Empleado {
    constructor(nombre, sexo, edad) {
        this._nombre = nombre;
        this._sexo = sexo;
        this._edad = edad;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    set edad(edad) {
        this._edad = edad;
    }

    get nombre() {
        return this._nombre;
    }
    get sexo() {
        return this._sexo;
    }
    get edad() {
        return this._edad;
    }
}