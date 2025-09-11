// Calculadora de Despesas em Java Script - Projeto BFD 2025

// Matriz para armazenar as despesas
let despesas = [];

// Função para cadastrar uma despesa

function cadastrarDespesa() {
  let categoria = prompt("Digite a categoria da despesa: Alimentação ou Saúde.");
  if (categoria) {
    categoria = categoria.toLowerCase();
  }

  // Verifica se a categoria é válida
  if (categoria !== "alimentação" && categoria !== "saúde") {
    alert("Você não digitou uma categoria válida.");
    return;
  }

  let valor = Number(prompt("Digite o valor da despesa:"));
  if (isNaN(valor) || valor < 0) {
    alert("Você não digitou um valor válido.");
    return;
  }

  despesas.push({ categoria: categoria, valor: valor });
  alert("Despesa cadastrada com sucesso!");
}

// função para Ver o Resumo das Despesas
function verResumo() {
  if (despesas.length === 0) {
    alert("Nenhuma despesa cadastrada, tente novamente.");
    return;
  }

  // variáveis para armazenar os totais de cada categoria
  let totalAlimentacao = 0;
  let totalSaude = 0;

  // Usa forEach para percorrer e somar as despesas
  despesas.forEach(function(despesa) {
    if (despesa.categoria === "alimentação") {
      totalAlimentacao += despesa.valor;
    } else if (despesa.categoria === "saúde") {
      totalSaude += despesa.valor;
    }
  });

  // Cria a string do resumo e exibir um alerta
  let resumo = "Resumo das Despesas:\n" +
    "Total em Alimentação: R$ " + totalAlimentacao.toFixed(2) + "\n" +
    "Total em Saúde: R$ " + totalSaude.toFixed(2) + "\n" +
    "Total Geral: R$ " + (totalAlimentacao + totalSaude).toFixed(2);

  alert(resumo);
}

// Loop principal
let opcao = "";
while (opcao !== "4") {
  opcao = prompt(
    "Escolha uma opção:\n" +
    "1. Cadastrar Despesas\n" +
    "2. Ver resumo das Despesas\n" +
    "3. Limpar Despesas\n" +
    "4. Fechar Programa"
  );

  switch (opcao) {
    case "1":
      cadastrarDespesa();
      break;
    case "2":
      verResumo();
      break;
    case "3":
      despesas = [];
      alert("Despesas limpas com sucesso!");
      break;
    case "4":
      alert("Encerrando o programa...");
      break;
    default:
      alert("Opção inválida, tente novamente.");
  }
}

// Exibir o resumo final no console
if (despesas.length > 0) {
  let totalAlimentacao = 0;
  let totalSaude = 0;

  despesas.forEach(function(despesa) {
    if (despesa.categoria === "alimentação") {
      totalAlimentacao += despesa.valor;
    } else if (despesa.categoria === "saúde") {
      totalSaude += despesa.valor;
    }
  });

  let resumoFinal = "--- Resumo Final --- \n" +
    "Total em Alimentação: R$ " + totalAlimentacao.toFixed(2) + "\n" +
    "Total em Saúde: R$ " + totalSaude.toFixed(2) + "\n" +
    "Total Geral: R$ " + (totalAlimentacao + totalSaude).toFixed(2);

  console.log(resumoFinal);
}

alert("Programa encerrado.");

// Calculadora de Despesas em Java Script - Projeto BFD 2025
// Desenvolvido pelo Aluno: Samuel Victor da Silva Maia 