// VERSÃO DE TESTE DIRETO NO CONSOLE
console.log("=== SCRIPT CARREGADO COM SUCESSO ===");

// 1. Teste do Botão de Modo Escuro (index.html)
const botaoTema = document.querySelector('.theme-toggle');
if (botaoTema) {
    console.log("Botão 'Escuro' encontrado no HTML!");
    botaoTema.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        console.log("Clique detectado! Modo escuro alternado.");
    });
} else {
    console.log("Botão de tema não encontrado nesta página.");
}

// 2. Teste da Calculadora de Média (cursos.html)
const formulario = document.getElementById('formMedia');
if (formulario) {
    console.log("Formulário de média encontrado no HTML!");
    formulario.addEventListener('submit', function(event) {
        // ESSA LINHA DIRETAMENTE EVITA A INTERROGAÇÃO (?) NA URL
        event.preventDefault(); 
        
        console.log("Botão Calcular clicado! Executando cálculo...");
        
        const n1 = parseFloat(document.getElementById('nota1').value) || 0;
        const n2 = parseFloat(document.getElementById('nota2').value) || 0;
        const n3 = parseFloat(document.getElementById('nota3').value) || 0;
        
        const mediaFinal = (n1 + n2 + n3) / 3;
        console.log("Resultado do cálculo direto no console: " + mediaFinal.toFixed(1));
        
        const divResultado = document.getElementById('resultadoMedia');
        if (divResultado) {
            divResultado.innerHTML = "<p>Média calculada: <strong>" + mediaFinal.toFixed(1) + "</strong></p>";
        }
    });
} else {
    console.log("Formulário 'formMedia' não encontrado nesta página.");
}
