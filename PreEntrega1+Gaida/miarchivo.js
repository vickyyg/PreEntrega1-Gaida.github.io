    let saludar = prompt ("Ingrese su edad")
    let edad

    console.log("mi edad es:" + saludar)

    if (saludar > 18){
            edad = "sos mayor, podes seguir navegando";
            console.log(edad);
    }   else {
            edad = "no sos mayor, no podes seguir navegando";
            console.log(edad)
    }


    let productoMin = 0;
    let productoMax = 10;

    while(productoMin < productoMax){
            console.log(productoMin)
            productoMin = productoMin + 1
    }



    function sumar (numa, numb){
            let answer = numa + numb;
            return answer
    }
    let calculo = sumar (10, 10)
    console.log(calculo)