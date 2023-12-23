




let age = prompt ('¿Cuántos años tienes?', 0);

if (age >= 18 ){
    alert(`Tienes la edad suficiente para nuestro navegador`); 
} else{
    alert("No puede acceder a nuestro navegador")
};

let usuarios = [
    { nombre: "Raul",  vueltas: 55},
    { nombre: "Federica", vueltas: 25},
    { nombre: "Joaquina", vueltas: 15},
    { nombre: "Belen", vueltas: 35},
    { nombre: "Mario", vueltas: 47},
    { nombre: "Nala", vueltas: 77},
];

for(let i= 0; i < usuarios.length; i++){
    console.log(usuarios.filter(usuarios => usuarios.vueltas >= 30 && usuarios.vueltas <= 70 )
        
    );

}







let estadoLicuadora = "apagada";

let licuadora = document.getElementById("blender");

function controlarLicuadora(){
    if(estadoLicuadora == "apagada"){
        estadoLicuadora = "encendida";

        licuadora.classList.add("active");
       // console.log("me prendiste");
    } else{
        estadoLicuadora = "apagada"
       
     licuadora.classList.remove("active");
        //console.log("me apagaste");
    }
}
