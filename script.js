const contas = [125, 8956420.5, 3411, 15512, 1584, 1514, 4546, 41454, 1545, 15446, 154623, 16615, 6512]
const nomes = ["Ivaldo", "Leonardo", "Ricardo", "Cristiano", "Matheus", "Vinícius", "Neymar", "Thiago", "Pedro", "Rafael", "Felipe", "Richard", "Saullo"]

let conta;
let pos;

function run() {
    requestAnimationFrame(run)
    try {
        let eConta = document.getElementById("conta");
        conta = parseInt(eConta.value);
        pos = Math.min(contas.length, conta) - 1;
        let saldo = contas[pos] || 0;
        let nome = nomes[pos] || "";
        document.getElementById("saldo").value = formatMoney(saldo);
        document.getElementById("nome").value = nome;
    } catch {

    }

}
run()

function formatMoney(txt) {
    return txt.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}

function getMoney(str) {
    return parseFloat(str) || 0;
}

function depositar() {
        const valor = getMoney(document.getElementById("valor").value);
        contas[pos] = contas[pos] + valor;
}

function sacar() {
        const valor = getMoney(document.getElementById("valor").value);
        const resultado = contas[pos] - valor;

        if (resultado >= 0) contas[pos] = resultado;
        else {
            alert("Você não pode sacar esta quantia, pois o saldo foi excedido.")
        }
}