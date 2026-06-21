document.addEventListener('DOMContentLoaded', function() {
    console.log("=== SISTEMA INTEGRADO CARREGADO ===");

    // =======================================================
    // 1. MODO ESCURO (Funciona em todas as páginas com o botão)
    // =======================================================
    const botaoTema = document.querySelector('.theme-toggle');
    if (botaoTema) {
        botaoTema.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                botaoTema.textContent = "☀️ Claro";
                localStorage.setItem('tema', 'escuro'); // Salva a preferência
            } else {
                botaoTema.textContent = "🌙 Escuro";
                localStorage.setItem('tema', 'claro');
            }
        });
        // Mantém o tema mesmo se o usuário atualizar a página
        if (localStorage.getItem('tema') === 'escuro') {
            document.body.classList.add('dark-mode');
            botaoTema.textContent = "☀️ Claro";
        }
    }

    // =======================================================
    // 2. CALCULADORA DE MÉDIA (cursos.html)
    // =======================================================
    const formulario = document.getElementById('formMedia');
    const divResultado = document.getElementById('resultadoMedia');
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const n1 = parseFloat(document.getElementById('nota1').value) || 0;
            const n2 = parseFloat(document.getElementById('nota2').value) || 0;
            const n3 = parseFloat(document.getElementById('nota3').value) || 0;
            const mediaFinal = (n1 + n2 + n3) / 3;
            if (divResultado) {
                divResultado.innerHTML = "<p>Sua média é: <strong>" + mediaFinal.toFixed(1) + "</strong></p>";
            }
        });
    }

    // =======================================================
    // 3. FILTRO DE BUSCA DINÂMICA (cursos.html)
    // =======================================================
    const campoBusca = document.getElementById('buscaCurso');
    const itensCursos = document.querySelectorAll('.item-curso');
    if (campoBusca && itensCursos.length > 0) {
        campoBusca.addEventListener('input', function(evento) {
            const textoDigitado = evento.target.value.toLowerCase();
            itensCursos.forEach(function(curso) {
                const textoDoCurso = curso.textContent.toLowerCase();
                if (textoDoCurso.includes(textoDigitado)) {
                    curso.style.display = ""; // Mostra o curso
                } else {
                    curso.style.display = "none"; // Esconde o curso
                }
            });
        });
    }

    // =======================================================
    // 4. LIGHTBOX INTERATIVO (index.html - Galeria)
    // =======================================================
    const imagensGaleria = document.querySelectorAll('.galeria img');
    let caixaLightbox = document.getElementById('lightbox');
    let imagemZoom = document.getElementById('imagemLightbox');
    let botaoFechar = document.getElementById('fecharLightbox');

    // Se o markup do lightbox não existir no HTML, cria dinamicamente
    if (!caixaLightbox && imagensGaleria.length > 0) {
        caixaLightbox = document.createElement('div');
        caixaLightbox.id = 'lightbox';
        caixaLightbox.className = 'lightbox-oculto';

        botaoFechar = document.createElement('span');
        botaoFechar.id = 'fecharLightbox';
        botaoFechar.innerHTML = '&times;';

        imagemZoom = document.createElement('img');
        imagemZoom.id = 'imagemLightbox';
        imagemZoom.alt = 'Zoom da foto';

        caixaLightbox.appendChild(botaoFechar);
        caixaLightbox.appendChild(imagemZoom);
        document.body.appendChild(caixaLightbox);
    }

    if (imagensGaleria.length > 0 && caixaLightbox && imagemZoom && botaoFechar) {
        imagensGaleria.forEach(function(img) {
            img.addEventListener('click', function() {
                imagemZoom.src = img.src; // Copia o caminho da foto clicada
                caixaLightbox.classList.add('mostrar'); // Abre o lightbox
            });
        });
        // Fecha ao clicar no 'X'
        botaoFechar.addEventListener('click', function() {
            caixaLightbox.classList.remove('mostrar');
        });
        // Fecha ao clicar no fundo escuro fora da foto
        caixaLightbox.addEventListener('click', function(e) {
            if (e.target !== imagemZoom) {
                caixaLightbox.classList.remove('mostrar');
            }
        });
    }
});
