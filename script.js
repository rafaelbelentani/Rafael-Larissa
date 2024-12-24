// Função para calcular o tempo desde a data de 05/10/2020
function calcularTempo() {
    const dataInicio = new Date('2020-10-05'); // Data de início
    const dataAtual = new Date();
    const diffTime = dataAtual - dataInicio; // Diferença em milissegundos
  
    // Convertendo para anos, meses e dias
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = diffDays % 30;
  
    // Exibindo o resultado no formato "X anos Y meses Z dias"
    document.getElementById('tempo').textContent = `${years} anos, ${months} meses, ${days} dias`;
  }
  
  // Função para trocar as fotos a cada 10 segundos
  let fotoIndex = 0;
  function trocarFotos() {
    const fotos = document.querySelectorAll('.foto');
    fotos.forEach((foto, index) => {
      foto.style.display = 'none'; // Esconde todas as fotos
    });
    fotoIndex = (fotoIndex + 1) % fotos.length;
    fotos[fotoIndex].style.display = 'block'; // Exibe a próxima foto
  }
  
  // Inicia a contagem do tempo de relacionamento
  calcularTempo();
  
  // Troca de fotos a cada 10 segundos
  setInterval(trocarFotos, 10000); // 10000 ms = 10 segundos
  