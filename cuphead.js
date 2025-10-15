   
        let vidaJugador = 3;
        let nivel = 1;
        const nivelesTotales = 3;

        console.log("=== Cuphead :D ===");

        
        let opcion = "Jugar";
        switch(opcion) {
            case "Jugar":
                if(nuevaPartida) {
                    console.log("Iniciando nueva partida ");
                    
                } else {
                    console.log("Continuando partida");
                }
                break;
            default:
                console.log("Saliendo del juego");
        }

        console.log("\n--Niveles--");

while(nivel <= nivelesTotales) {
    console.log("\nElige un nivel " + nivel);

   
    for (let ataque = 1; ataque <= 2; ataque++) {
        console.log("¡El villano ataca! (Ataque " + ataque + ")");
        if (ataque === 1) {
            console.log("Esquivaste el ataque!");
        } else {
            console.log("Te golpeó! -1 vida");
            vidaJugador--;
        }
    }

   
    if (vidaJugador > 0) {
        console.log("Nivel " + nivel + " completado!");
        nivel++;
    } else {
        console.log("Has perdido todas tus vidas. Fin del juego.");
        break;
    }
}

console.log("\n--Fin del juego--");
           