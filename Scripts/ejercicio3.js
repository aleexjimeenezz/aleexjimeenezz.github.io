/** Va a crear tantos input type text como el usuario haya indicado */
function crearInputs(){
	// Obtengo el VALOR del campo introducido por el usuario.
	var numInputs = parseInt(document.getElementById("numElementos").value, 10);

	// De esta forma tengo una referencia al formulario, de forma que podré añadir nodos hijos.
	var form = document.getElementById("formDatosLista");

	// Se creará:
	// - Una etiqueta label en la que se indicará al usuario que incluya el texto del elemento de la lista.
	// Además, su atributo 'for' que referenciará al input que se va a crear.
	// - El input que el usuario utilizará para incluir el valor del elemento de la lista, así como el id 'elemento_' + i 
	// - Un salto de línea para que en la siguiente iteración, los nodos aparezcan debajo de los anteriores.
	for (var i=1; i<=numInputs; i++){
		var label = document.createElement("label");
		label.innerHTML = "Introduzca el valor del elemento " + i + ": ";
		label.setAttribute("for", "elemento_" + i);

		var input = document.createElement("input");
		input.setAttribute("type", "text");
		input.setAttribute("id", "elemento_" + i);

		var saltoLinea = document.createElement("br");

		// Añado al formulario los elementos creados (<label>, <input> y <br>)
		form.appendChild(label);
		form.appendChild(input);
		form.appendChild(saltoLinea);
	}

	// A continuación, creo el botón en el que al clickar, se llame a la función de construcción de la lista. 
	// Le añadiré un atributo indicando el evento onclick y la función que se llamará.
	var boton = document.createElement("button");
	boton.setAttribute("type", "button");
	boton.setAttribute("onclick", "javascript:creaLista();");
	boton.innerHTML = "Crear lista";

	// Obtengo una referencia al body y le añado el botón creado.
	var body = document.querySelector("body");
	body.appendChild(boton);
}

/* Creará una lista no ordenada (ul) con tantos elementos (li) como ha indicado el usuario.
*  Tomará los valores de los campos para definir los elementos de la lista
*/
function creaLista(){
	// Creo un elemento lista no ordenada (<ul></ul>)
	var lista = document.createElement("ul");

	// Obtengo una referencia al body para añadir la lista creada y a la que añadiré elementos más adelante.
	var body = document.querySelector("body");
	body.appendChild(lista);

	// Obtengo el valor que ha introducido el usuario.
	var numElementos = parseInt(document.getElementById("numElementos").value, 10);

	// Por cada uno de los elementos que ha introducido el usuario, tomaré su valor y lo añadiré como elemento de la lista (li)
	for (var i=1; i<=numElementos; i++){
		// Como he creado los input anteriormente indicando que su id sería "elemento_" + i,
		// obtengo ahora su valor de la misma manera.
		var valorLista = document.getElementById("elemento_" + i).value;

		// Creo el nuevo item de lista e incluyo el texto indicado por el usuario.
		var elementoLista = document.createElement("li");
		elementoLista.innerHTML = valorLista;

		// Añado a la lista el elemento creado.
		lista.appendChild(elementoLista);
	}
}