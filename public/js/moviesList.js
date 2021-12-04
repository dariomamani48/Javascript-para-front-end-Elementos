/* let $body = document.querySelector('body');
let $h1 = document.querySelector('.moviesListTitulo');

let darkMode = confirm("Desea modo oscuro?");
if(darkMode){
    $body.style.backgroundColor ="#7f7f7f"
    $body.classlist.add("fondoMoviesList")
}
$h1.innerText = "Listado de peliculas"
$h1.style.color = "white";
$h1.style.backgroundColor = "teal";
$h1.style.padding = "20px"; */
function qs(element) {
    return document.querySelector(element);
}

let $body = qs('body');
let $title = qs(".moviesListTitulo");

let darkMode = confirm("¿Desea modo oscuro?");

if(darkMode) {
    $body.style.backgroundColor = '#7f7f7f'
    $body.classList.add('fondoMoviesList')

}

$title.innerText = "LISTADO DE PELÍCULAS"
$title.style.color = "white";
$title.style.backgroundColor = "teal";
$title.style.padding = "20px";
