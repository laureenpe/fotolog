/*function agregaPosteo() {
//escribe aca el codigo
//Rescataremos el contenedor-posteos, el nombre y el comentario del usuario
var containerPosteos = document.getElementById("contenedor-posteos");
var nombreFF = document.getElementById("nombre").value;
var contenidoFF = document.getElementById("cajaposteos").value;
//crear el nodo elemento donde irá nuestro post
var nuevoPost= document.createElement("div");
//crear elementos donde guardar los valores
var contenedorNombre = document.createElement("strong");
var contenedorPost = document.createElement("p");
var separacion = document.createElement("hr");
//crear elemento para corazon
var parrafCorazon = document.createElement('p');
var i = document.createElement('i');
//Asignar padre a icono de corazón
parrafCorazon.appendChild(i);
//Dar atributos a corazón
parrafCorazon.setAttribute("class", "corazon");
i.setAttribute("class", "fa fa-heart");
i.setAttribute("arial-hidden", true);
//TRansformar el nombre a nodo texto
var nodoNombre = document.createTextNode(nombreFF + " escribió : ");
var nodoPosteo = document.createTextNode(contenidoFF);
//Asignar padres a nodos creados
contenedorNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);
//Ahora asignamos padres a nombre y contenido
nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrafCorazon);
nuevo.nodoPost.appendChild(separacion);
//creamos funcion click para el corazon y le asignamos la clase rojo de css
i.addEventListener("click",function(){
    i.classList.toggle('rojo');
    //.addEventListener():es un metodo que agrega un escuchador al elemento, q este atento a la interaccion del usuario
    //.toggle() : si el elemento tiene la clase se la quita, de lo contrario se la agrega

});
//le damos atributos a nuestro post y lo agregamos a nuestro contenedor-posteos
nuevo.nodoPost.setAttribute("class","posteo");
containerPosteos.appendChild(nuevoPost);
//para resetear los campos y dejarlos nuevamente en blanco
document.getElementById("nombre").value = "";

}*/

function agregaPosteo() {
	var containerPosteos = document.getElementById("contenedor-posteos");
	var nombreFF = document.getElementById("nombre").value;
	var contenidoFF = document.getElementById("cajaposteos").value;
	var nuevoPost= document.createElement("div");
	var contenedorNombre = document.createElement("strong");
	var contenedorPost = document.createElement("p");
	var separacion = document.createElement("hr");
	var parrafCorazon = document.createElement('p');
	var i = document.createElement('i');

	parrafCorazon.appendChild(i);
	parrafCorazon.setAttribute("class", "corazon");
	i.setAttribute("class", "fa fa-heart");
	i.setAttribute("arial-hidden", "true");

	var nodoNombre = document.createTextNode(nombreFF + "escribió:");
	var nodoPosteo = document.createTextNode(contenidoFF);

	contenedorNombre.appendChild(nodoNombre);
	contenedorPost.appendChild(nodoPosteo);
	nuevoPost.appendChild(contenedorNombre);
	nuevoPost.appendChild(contenedorPost);
	nuevoPost.appendChild(parrafCorazon);
	nuevoPost.appendChild(separacion);

	i.addEventListener("click", function(){
		i.classList.toggle('rojo');
	});

	nuevoPost.setAttribute("class", "posteo");
	containerPosteos.appendChild(nuevoPost);
	document.getElementById("nombre").value = "";
	document.getElementById("cajaposteos").value ="";


}