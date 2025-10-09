let num1 = document.querySelector(".txtn1");
let num2 = document.querySelector(".txtn2");
let num3 = document.querySelector(".txtn3");
let res = document.querySelector(".res");

function somar() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let n3 = Number(num3.value);

    if (n1 == 0 || n2 == 0 || n3 == 0) {
        alert("[ERRO] Confira os valores digitados");
    } else if (n1 < n2) {
        // contagem crescente
        let texto = "Contando: ";
        for (let i = n1; i <= n2; i += n3) {
            texto += i + " \u{1F449} ";
        }
        texto += "\u{1F3C1}";
        res.innerText = texto;
    } else {
        // contagem decrescente
        let texto = "Contando: ";
        for (let i = n1; i >= n2; i -= n3) {
            texto += i + " \u{1F449} ";
        }
        texto += "\u{1F3C1}";
        res.innerText = texto;
    }
}

