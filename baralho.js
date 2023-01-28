const baralho = []
let opcao = ""

do {
  opcao = prompt(
    "Cartas no baralho: " + baralho.length +
    "\n\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  )

  switch (opcao){
  case "1":
    const novaCarta = prompt ("Qual é a carta?")
    baralho.push(novaCarta)
    break
  case "2":
    const puxarCarta = baralho.pop()
    if (!puxarCarta){
      alert("Não há nenhuma carta no baralho")
    }else{
      alert("Você puxou um(a) " + puxarCarta)
    }
    break
  case "3":
    alert("Saindo...")
    break
  default:
    alert("Opção inválida!")
  }
} while (opcao !== "3")