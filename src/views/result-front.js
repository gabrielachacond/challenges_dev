function sendForm() {

  const fieldArray1 = document.getElementById("array_one").value;
  const fieldArray2 = document.getElementById("array_Two").value;

  const regex = /^(\d+,)*\d+$/;

  if (regex.test(fieldArray1 | fieldArray2)) {
 
    const ValueOk = campoTexto.split(",");

    console.log(ValueOk); 
  } else {
    alert("Por favor, ingrese valores numéricos separados por comas.");
  }
}
/*

¿por que me falla el front?

Dudas:
1) ¿Despues que construya el array lo puedo enviar en un body?

Alternativa:
1) Cambiar el endpoint de post a get y que no use body sino query paramns y asi puedo usar el string que me llegue del front
Pero tendria que cambiar swagger y los routers, pero me parece too much


2) En el endpoint tiene que llegar 1 array o 2 arrays segun el challenge, 
el formulario no puede ir  directamente a la api porque me lo va a mandar
como un string

Me falta convertir el input text del front en un array y guardar todos los numeros y 
pasarlos en un body como lo espera el endpoint


    <script>
        function convertirInputEnArray() {
            // Obtener el valor del campo de texto
            const campoTexto = document.getElementById("array_one").value;

            // Dividir la cadena en un array usando comas como separadores
            const valoresComoCadena = campoTexto.split(",");

            // Convertir los valores de la cadena a números
            const valoresComoNumeros = valoresComoCadena.map(function(valor) {
                return parseFloat(valor);
            });

            // Mostrar el array resultante en un elemento HTML
            const resultadoDiv = document.getElementById("resultado");
            resultadoDiv.innerHTML = "Array de números: " + valoresComoNumeros;
        }
    </script>


*/