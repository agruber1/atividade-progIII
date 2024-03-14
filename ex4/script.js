function intercalarPalavras() {

  const palavra1 = document.getElementById('palavra1').value;
  const palavra2 = document.getElementById('palavra2').value;


  let intercalada = '';
  const tamanhoMaximo = Math.max(palavra1.length, palavra2.length);
  for (let i = 0; i < tamanhoMaximo; i++) {
    if (i < palavra1.length) {
      intercalada += palavra1[i];
    }
    if (i < palavra2.length) {
      intercalada += palavra2[i];
    }
  }

  document.getElementById('resultado').value = intercalada;
}
