function qs (element){// funcion para reutilizar el qs
    return document.querySelector(element)
}

/* elementos capturados */
let $main = qs('.container');
let $h2 = qs('.subtitulo');
let $a = qs('a');
let $p = document.querySelectorAll('p');
let $body = qs.apply('.body')

let userName = prompt('Ingrese su nombre')

userName.trim() !== ""
? ($h2.innerText += `${userName}`)
: ($h2.innerText += "invitado");
$h2.style.textTransform = "uppercase"

$a.style.color = "#e51b3e"

/* fondo */

let background = confirm("¿Desea aplicar un fondo?")

background && $body.classList.add('fondo')

/* parrafos estilos */
for (let i = 0; i < $p.length; i++) {
    if (i % 2 == 0) {
         $p[i].classList.add("destacadoPar") 
    }else{ 
         $p[i].classList.add("destacadoImpar") 
    }
    
}

$main.style.display='block'