function uno (dos) {
    console.log("uno")
    dos()
}

function dos () {
    console.log("dos")
}

setTimeout(() => uno(dos),5000)


const nombre = function(){
    console.log("nombre")
}

nombre()

const persona = () => console.log("Barbara")

persona();

() => console.log()