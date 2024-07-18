export default class Cl_Empresa {
    constructor() {
        this.hombres = 0;
        this.mujeres = 0;
        this.edadHombres = 0;
        this.mayorEdad = 0;
        this.nmbMayorEdad = "";
    }

    procesar(p) {
        if (p.sexo == "M") {
            this.hombres++;
            this.edadHombres += p.edad;
        } else {
            this.mujeres++;
            if (p.edad > this.mayorEdad) {
                this.mayorEdad = p.edad;
                this.nmbMayorEdad = p.nombre;
            }
        }
    }

    promedio() {
        return this.edadHombres / this.hombres;

        
    }

    mayoreEdad() {
        return this.mayorEdad
    }

    
}