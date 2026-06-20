// Aguarda a página carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1️⃣ FUNCIONALIDADE: CALCULADORA DE MÉDIA (cursos.html)
    // ==========================================
    const formMedia = document.getElementById('formMedia');
    const resultadoMedia = document.getElementById('resultadoMedia');

    if (formMedia) {
        formMedia.addEventListener('submit', (e) => {
            e.preventDefault(); // Não recarrega a página

            const n1 = parseFloat(document.getElementById('nota1').value);
            const n2 = parseFloat(document.getElementById('nota2').value);
            const n3 = parseFloat(document.getElementById('nota3').value);

            // Validação extra via JS
            if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
                resultadoMedia.innerHTML = `<p style="color: red;">Nota inválida! Digite valores de 0 a 10.</p>`;
                return;
            }

            const media = (n1 + n2 + n3) / 3;
            let status = media >= 7 ? "Aprovado" : "Recuperação";
            let cor = media >= 7 ? "green" : "red";

            resultadoMedia.innerHTML = `
                <p>Média: <strong style="color: ${cor}">${media.toFixed(1)}</strong></p>
                <p>Status: <strong style="color: ${cor}">${status}</strong></p>
            `;
            console.log(`Cálculo realizado: ${media.toFixed(1)} - ${status}`);
        });
    }

    // ==========================================
    // 2️⃣ FUNCIONALIDADE: FILTRO DE CURSOS / BUSCA (cursos.html)
    // ==========================================
    // Supondo que você crie um <input id="buscaCurso" placeholder="Buscar curso...">
    const buscaCurso = document.getElementById('buscaCurso');
    // Supondo que seus cursos tenham a classe CSS "item-curso"
    const itensCursos = document.querySelectorAll('.item-curso'); 

    if (buscaCurso && itensCursos.length > 0) {
        buscaCurso.addEventListener('input', (e) => {
            const termoBusca = e.target.value.toLowerCase();

            itensCursos.forEach(curso => {
                const textoCurso = curso.textContent.toLowerCase();
                if (textoCurso.includes(termoBusca)) {
                    curso.style.display = "block"; // Mostra
                } else {
                    curso.style.display = "none";  // Esconde
                }
            });
        });
    }

    // ==========================================
    // 3️⃣ FUNCIONALIDADE: VALIDAÇÃO DO CONTATO (contato.html)
    // ==========================================
    const formContato = document.getElementById('formContato'); // Ajuste com o ID do seu form

    if (formContato) {
        formContato.addEventListener('submit', (e) => {
            const nome = document.getElementById('nome')?.value.trim();
            
            if (nome === "") {
                e.preventDefault();
                alert("Por favor, preencha o seu nome antes de enviar!");
                console.log("Tentativa de envio barrada por falta de nome.");
            } else {
                console.log("Formulário de contato validado com sucesso!");
            }
        });
    }
});
