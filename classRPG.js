class newCl{
    constructor(na, age, type, atktype=""){ 
    this.name = na
    this.age = age
    this.job = type

    if (type == "mage"){
        this.atktype = "magic"
    }
    else if (type == "warrior"){
        this.atktype = "sword"
    }
    else if(type == "monk"){
        this.atktype = "martial arts"
    }
    else if (type == "ninja"){
        this.atktype = "shuriken"
    }        
    } 
    attack(){
        console.log(`the ${this.job} attacked using ${this.atktype}`)
    }

}

let Paul123 = new newCl("Paul123", 30, "mage")
Paul123.attack()
let Paul124 = new newCl("Paul124", 18, "warrior")
Paul124.attack()
let Paul125 = new newCl("Paul125", 25, "monk")
Paul125.attack()
let Paul126 = new newCl("Paul126", 21, "ninja")
Paul126.attack()
let Paul127 = new newCl("Paul127", 45, "mage")
Paul127.attack()



    
    

    

