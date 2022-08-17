var gTerra = 9.807;
var gJupiter= 24.79;
var gMarte= 3.711; 
var gSaturno= 10.44;
var gMercurio= 3.7;
var gVênus= 8.87;
var gUrano= 8.69;
var gNetuno=11.15;

var massa = prompt("qual sua massa em kg?");
var planeta = prompt ("Qual Planeta você quer saber o peso (Em newton)");
var resultado;

if (planeta== "Terra","terra") {
    resultado = massa * gTerra;
    document.write (`O peso na Terra é: ${resultado}N`);

} else if (planeta== "Jupiter","jupiter") {
    resultado = massa * gJupiter;
    document.write(`O peso em Jupiter é: ${resultado}N`);

} else if (planeta=='Saturno','saturn') {
    resultado = massa * gSaturno;
    document.write(`o peso em Saturno é: ${resultado}N`);

} else if (planeta=='Mercurio','mercurio') {
    resultado = massa * gMercurio;
    document.write(`o peso em Mercurio é: ${resultado}N`);

} else if (planeta=='Urano','urano') {
    resultado = massa * gUrano;
    document.write(`o peso em Urano é: ${resultado}N`);

} else if (planeta=='Vênus','Venus','vênus','venus') {
    resultado = massa * gVênus;
    document.write(`o peso em Vênus é: ${resultado}N`);

} else if (planeta=='Netuno', 'netuno') {
    resultado = massa * gNetuno;
    document.write(`o peso em Vênus é: ${resultado}N`);

} else if (planeta=="marte", "Marte") {
    resultado= massa * gMarte;
    document.write(`O peso em Marte é: ${resultado}`);
}