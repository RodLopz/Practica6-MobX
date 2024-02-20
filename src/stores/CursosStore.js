import { makeObservable, observable, action, computed, reaction } from 'mobx';

class CursosStore {
    
    constructor() {
        this.cursos = [];
        // Fix for shadowing the name `localStorage`
        const storedCursos = localStorage.getItem('cursos');
        if (storedCursos) {
            this.cursos = JSON.parse(storedCursos);
        }

        // Initialize makeObservable in the constructor
        makeObservable(this, {
            cursos: observable,
            agregarCurso: action,
            borrarCurso: action,
            numeroCursos: computed,
        });
    }
    agregarCurso = (curso) => {
        this.cursos.push(curso);
    };
    get numeroCursos() {
        // Corrected typo from 'lenght' to 'length'
        return this.cursos.length;
    };
    borrarCurso = () => {
        this.cursos = [];
    };
}

const cursosStore = new CursosStore();

reaction(
    () => JSON.stringify(cursosStore.cursos),
    cursosStr => {
        localStorage.setItem('cursos', cursosStr);
    }
);

export default cursosStore;
