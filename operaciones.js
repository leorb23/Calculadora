function escribir(num)
{
	var ant = document.getElementById("resultado").value;
	document.getElementById("resultado").value = ant + num;

}
function eliminarTodo()
{
	document.getElementById("resultado").value = "";
}
function eliminarAnterior()
{
	var ant = document.getElementById("resultado").value;
	var nNum = ant.substring(0,ant.length-1);
	document.getElementById("resultado").value = nNum;
}

function validarSignos(num)
{
	var ant = document.getElementById("resultado").value;
	if( ant == "" )
	{
		document.getElementById("resultado").value = "";
	}
	else
	{
		var ant = document.getElementById("resultado").value;
		document.getElementById("resultado").value = ant + num;
		nuevoRes = document.getElementById("resultado").value;

		record = 0;
		igual = 1;
		var letraRecord
		var b = 0
		var letra = ""
		for ( i = 1; i < nuevoRes.length; i++)
		{
			if( nuevoRes.charAt(i) == "+" || nuevoRes.charAt(i) == "-" || nuevoRes.charAt(i) == "*" || nuevoRes.charAt(i) == "/"){
				igual = igual + 1;
				letra = nuevoRes.charAt(i);
			}
			else{
				if(igual > record){record = igual; letraRecord = letra}
				igual = 1;
			}
			b = i;
		}
		if( igual > record ){
			record = igual;
			letraRecord = letra;
		}
		if( record > 2 ){
			var ant = nuevoRes;
			var nuevoValor = ant.substring(0, ant.length-1);
			document.getElementById("resultado").value = nuevoValor;
			record = 0; b=0; igual=1; letra=""; letraRecord="";
		}

	}
}
function calcular()
{
	var resultado = eval(document.getElementById("resultado").value);
	document.getElementById("resultado").value = resultado;
}

function raizCuadrada() 
{
    var numeros = document.getElementById("resultado").value;
    numeros = Math.sqrt(numeros) //resolver raíz cuadrada.
    document.getElementById("resultado").value = numeros;
}
function potencia()
{
	var exponente = 2;
	var numeros = document.getElementById("resultado").value;
	numeros = Math.pow(numeros,2); 
	document.getElementById("resultado").value = numeros;
}