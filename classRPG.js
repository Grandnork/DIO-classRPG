class newCl{
    constructor(na, age, type, atktype=""){ 
    this.name = na
    this.age = age
    this.job = type

    if (type = "mage"){
        this.atktype = "magic"
        }
        else if (type = "warrior"){
        this.atktype = "sword"
        }
        else if(type = "monk"){
        this.atktype = "martial arts"
        }
        else if (type = "ninja"){
        this.atktype = "shuriken"
        }        
    } 
    attack(){
        console.log(`the ${this.job} attacked using ${this.atktype}`)
    }

}

let Paul123 = new newCl("Paul123", 21, "mage")
Paul123.attack()



    
    

    

