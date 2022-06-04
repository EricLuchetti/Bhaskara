function limpar(){
    document.getElementById('equacao').style.display = "none";
    document.getElementById('calculo').style.display = "none";
    document.getElementById('detalhes').style.display = "none";
}

function formar() {
    try {
        limpar();
        document.getElementById('equacao').style.display = "block";
        let a = document.getElementById('valorA').value;
        let b = document.getElementById('valorB').value;
        let c = document.getElementById('valorC').value;

        let retorno = ``

        retorno += `
        <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <h3>(${a})² + (${b})x + (${c})</h3>
                    <button onclick="calcular()" class="btn btn-warning" id="calcular">Calcular</button>
                </div>
            </div>
        </div>`

        document.getElementById('equacao').innerHTML = retorno;

    } catch(error) {
        alert(error.message);
    }
}

function calcular() {
    try {
        document.getElementById('calculo').style.display = "block";
        let a = document.getElementById('valorA').value;
        let b = document.getElementById('valorB').value;
        let c = document.getElementById('valorC').value;
        
        let b2 = (b) * (b);
        let delta4 = (-4)*(a)*(c);
        let deltaRes = b2 + delta4;

        if (deltaRes < 0) {
            alert(`A equação não tem uma resposta real.`)
            document.getElementById('calculo').style.display = "none"; 
            document.getElementById('detalhes').style.display = "none";

        } else {
            let raiz = Math.sqrt(deltaRes);
            let ba1 = -(b) +  raiz;
            let ba2 = -(b) - raiz;
            let ba3 = 2 * (a);
            let r1 = ba1 / ba3;
            let r2 = ba2 / ba3;
        
            let retorno = ``

            retorno += `
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <h3>Resultado 1: ${r1}</h3>
                        <h3>Resultado 2: ${r2}</h3>
                        <button onclick="detalhes()" class="btn btn-warning" id="detalhesEq">Detalhes das Equações</button>
                    </div>
                </div>
            </div>`

            document.getElementById('calculo').innerHTML = retorno;
        }
    
    } catch(error) {
        alert(error.message);
    }
}

function detalhes() {
    try {
        document.getElementById('detalhes').style.display = "block";
        let a = document.getElementById('valorA').value;
        let b = document.getElementById('valorB').value;
        let c = document.getElementById('valorC').value;
        
        let b2 = (b) * (b);
        let delta4 = (-4)*(a)*(c);
        let deltaRes = b2 + delta4;

        let raiz = Math.sqrt(deltaRes);
        let ba1 = -(b) +  raiz;
        let ba2 = -(b) - raiz;
        let ba3 = 2 * (a);
        let r1 = ba1 / ba3;
        let r2 = ba2 / ba3;

        let retorno = ``

        retorno += `
        <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <h3>Cálculo de Delta:</h3>
                        <p>${b}² + (-4.(${a}).(${c}))</p>
                        <p>${b2} + (${delta4})</p>
                        <p>${deltaRes}</p>
                    <h3>Cálculo de Bhaskara:</h3>
                        <p>-(${b}) + ${raiz} / 2.${a}</p>
                        <p>${ba1} / ${ba3}</p>
                        <p>${r1}</p>
                        <br>
                        <p>-(${b}) - ${raiz} / 2.${a}</p>
                        <p>${ba2} / ${ba3}</p>
                        <p>${r2}</p>
                </div>
            </div>
        </div>`
        
        document.getElementById('detalhes').innerHTML = retorno;

    } catch(error) {
        alert(error.message);
    }
}

