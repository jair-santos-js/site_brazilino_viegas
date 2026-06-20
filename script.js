// Aguarda o navegador carregar o HTML antes de rodar o JS
document.addEventListener('DOMContentLoaded', function() {
    console.log("=== SCRIPT CARREGADO COM SUCESSO ===");

    // =======================================================
    // 🌙 FUNCIONALIDADE 1: MODO ESCURO (index.html)
    // =======================================================
    const botaoTema = document.querySelector('.theme-toggle');
    
    if (botaoTema) {
        console.log("Botão 'Escuro' detectado!");
        botaoTema.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Alterna o texto do botão visualmente
            if (document.body.classList.contains('dark-mode')) {
                botaoTema.textContent = "☀️ Claro";
                console.log("Modo escuro ativado.");
            } else {
                botaoTema.textContent = "🌙 Escuro";
                console.log("Modo claro ativado.");
            }
        });
    }

    // =======================================================
    // 📝 FUNCIONALIDADE 2: CALCULADORA DE MÉDIA (cursos.html)
    // =======================================================
    const formulario = document.getElementById('formMedia');
    const divResultado = document.getElementById('resultadoMedia');

    if (formulario) {
        console.log("Formulário de média detectado!");
        formulario.addEventListener('submit', function(event) {
            // EVITA O RECARREGAMENTO DA PÁGINA (Sumiço do ?)
            event.preventDefault(); 
            
            const n1 = parseFloat(document.getElementById('nota1').value) || 0;
            const n2 = parseFloat(document.getElementById('nota2').value) || 0;
            const n3 = parseFloat(document.getElementById('nota3').value) || 0;
            
            const mediaFinal = (n1 + n2 + n3) / 3;
            console.log("Cálculo realizado no console: " + mediaFinal.toFixed(1));
            
            if (divResultado) {
                divResultado.innerHTML = "<p>Sua média é: <strong>" + mediaFinal.toFixed(1) + "</strong></p>";
            }
        });
    }
});

// =======================================================
// Atividade de Manipulação do DOM (Untitled-1.html)
// Transfere lógica que estava embutida no HTML para aqui
document.addEventListener('DOMContentLoaded', function() {
    console.log("=== ATIVIDADE DOM CARREGADA ===");

    // 2. SELEÇÃO DE ELEMENTOS DO DOM
    const titulo = document.getElementById('tituloPrincipal');
    const paragrafo = document.querySelector('#paragrafoExemplo');
    const inputUsuario = document.querySelector('#meuInput');
    const botao = document.querySelector('#meuBotao');

    // Garante que os elementos existem na página antes de aplicar as funções
    if (titulo && paragrafo && inputUsuario && botao) {
        // 3. MODIFICAÇÃO DE ESTILO INICIAL VIA JS
        titulo.style.color = "darkblue";

        // 4. RESPOSTA AO EVENTO DE CLIQUE (Modifica Estilo Cor)
        botao.addEventListener('click', function() {
            const cores = ['red', 'green', 'purple', 'orange', 'blue'];
            const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
            titulo.style.color = corAleatoria; 
            console.log("Cor alterada para: " + corAleatoria);
        });

        // 5. RESPOSTA AO EVENTO DE INPUT (Modifica Conteúdo e Estilo de Fundo)
        inputUsuario.addEventListener('input', function(evento) {
            let textoDigitado = evento.target.value;
            
            if (textoDigitado.trim() !== "") {
                paragrafo.textContent = textoDigitado; // Modifica Conteúdo
                paragrafo.style.backgroundColor = "#e0f7fa"; // Modifica Estilo
            } else {
                paragrafo.textContent = "Este é o parágrafo inicial.";
                paragrafo.style.backgroundColor = "transparent";
            }
        });
    }
});
