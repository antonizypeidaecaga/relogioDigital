function atualizarRelogio() {
  const agora = new Date(); // Cria um objeto Date com a data e hora atuais

  let horas = agora.getHours();      // Pega as horas
  let minutos = agora.getMinutes();  // Pega os minutos
  let segundos = agora.getSeconds(); // Pega os segundos

  // Formatar para sempre ter 2 dígitos
  horas = horas < 10 ? '0' + horas : horas;
  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;

  // Exibir a hora no formato HH:MM:SS
  const formatoHora = `${horas}:${minutos}:${segundos}`;

  // Atualizar o conteúdo do elemento com id "relogio"
  document.getElementById('relogio').textContent = formatoHora;
}

// Atualiza o relógio a cada 1000 milissegundos (1 segundo)
setInterval(atualizarRelogio, 1000);

// Chama a função imediatamente para mostrar a hora ao carregar a página
atualizarRelogio();
