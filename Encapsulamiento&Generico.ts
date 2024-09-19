
class Sorteo<T>{

    private tickect?:T;

    constructor(
        private nombre:string
    ){}

    setTickect(tickect:T){
        this.tickect=tickect
    }
    getTickect(){
        return this.tickect 
    }

    public sortear():string{
        return `Para ${this.nombre} el tickect es ${this.tickect}` 
    }

}

let sorteo=new Sorteo<number>('Brayan')
        sorteo.setTickect(8)
        console.log(sorteo.sortear())

        