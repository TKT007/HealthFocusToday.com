/* Page scripts (extracted from inline) */
(function() {
    (function() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();

        document.getElementById('current-date').textContent = `${month}/${day}/${year}`;
    })();
})();

(function() {
    document.addEventListener("DOMContentLoaded", function() {

        /* ALTERE O VALOR 10 PARA OS SEGUNDOS EM QUE AS SEÇÕES VÃO APARECER */

        var SECONDS_TO_DISPLAY = parseInt(document.body.getAttribute('data-reveal-seconds'), 10) || 3498;
        var CLASS_TO_DISPLAY = ".esconder";

        /* Tempo inicial do cronômetro (em segundos) = 30 minutos */

        var countdownTime1 = 30 * 60;

        var countdownTime2 = 30 * 60;

        var countdownTime3 = 30 * 60;

        var countdownTime4 = 30 * 60;

        /* DAQUI PARA BAIXO NAO PRECISA ALTERAR */

        var attempts = 0;

        var elsHiddenList = [];

        var elsDisplayed = false;

        var elsHidden = document.querySelectorAll(CLASS_TO_DISPLAY);

        var alreadyDisplayedKey = "alreadyElsDisplayed" + SECONDS_TO_DISPLAY;

        var alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

        setTimeout(function() {

            elsHiddenList = Array.prototype.slice.call(elsHidden);

        }, 0);

        var showHiddenElements = function() {

            elsDisplayed = true;

            elsHiddenList.forEach((e) => (e.style.display = "block"));

            localStorage.setItem(alreadyDisplayedKey, true);

            startCountdown1(); // Inicia o cronômetro 1

            startCountdown2(); // Inicia o cronômetro 2

            startCountdown3(); // Inicia o cronômetro 3

            startCountdown4(); // Inicia o cronômetro 4

        };

        var startWatchVideoProgress = function() {

            if (typeof smartplayer === "undefined" || !(smartplayer.instances && smartplayer.instances.length)) {

                if (attempts >= 10) return;

                attempts += 1;

                return setTimeout(function() {

                    startWatchVideoProgress();

                }, 1000);

            }

            smartplayer.instances[0].on("timeupdate", () => {

                if (elsDisplayed || smartplayer.instances[0].smartAutoPlay) return;

                if (smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY) return;

                showHiddenElements();

            });

        };

        if (alreadyElsDisplayed === "true") {

            setTimeout(function() {

                showHiddenElements();

            }, 100);

        } else {

            startWatchVideoProgress();

        }

        /* Função que formata o tempo no formato mm:ss */

        function formatTime(seconds) {

            var minutes = Math.floor(seconds / 60);

            var secs = seconds % 60;

            return (

                (minutes < 10 ? "0" + minutes : minutes) + ":" + (secs < 10 ? "0" + secs : secs)

            );

        }

        /* Função que inicia o cronômetro 1 */

        function startCountdown1() {

            var cronometroDisplay = document.getElementById("cronometro1");

            var interval = setInterval(function() {

                countdownTime1--;

                cronometroDisplay.textContent = formatTime(countdownTime1);

                if (countdownTime1 <= 0) {

                    clearInterval(interval);

                    cronometroDisplay.textContent = "Tempo Esgotado!";

                }

            }, 1000); // Atualiza a cada segundo

        }

        /* Função que inicia o cronômetro 2 */

        function startCountdown2() {

            var cronometroDisplay = document.getElementById("cronometro2");

            var interval = setInterval(function() {

                countdownTime2--;

                cronometroDisplay.textContent = formatTime(countdownTime2);

                if (countdownTime2 <= 0) {

                    clearInterval(interval);

                    cronometroDisplay.textContent = "Tempo Esgotado!";

                }

            }, 1000);

        }

        /* Função que inicia o cronômetro 3 */

        function startCountdown3() {

            var cronometroDisplay = document.getElementById("cronometro3");

            var interval = setInterval(function() {

                countdownTime3--;

                cronometroDisplay.textContent = formatTime(countdownTime3);

                if (countdownTime3 <= 0) {

                    clearInterval(interval);

                    cronometroDisplay.textContent = "Tempo Esgotado!";

                }

            }, 1000);

        }

        /* Função que inicia o cronômetro 4 */

        function startCountdown4() {

            var cronometroDisplay = document.getElementById("cronometro4");

            var interval = setInterval(function() {

                countdownTime4--;

                cronometroDisplay.textContent = formatTime(countdownTime4);

                if (countdownTime4 <= 0) {

                    clearInterval(interval);

                    cronometroDisplay.textContent = "Tempo Esgotado!";

                }

            }, 1000);

        }

    });
})();

(function() {
    // TOQUE EM QUALQUER LUGAR PARA INICIAR O VÍDEO

    let clicado = false;

    function clicar() {

        if (clicado) return;

        clicado = true;

        // Pegar o meio da tela

        const x = window.innerWidth / 2;

        const y = window.innerHeight / 2;

        // Encontrar elemento no meio

        const elemento = document.elementFromPoint(x, y);

        // Clicar nele

        if (elemento) {

            elemento.click();

            console.log('Clicou em:', elemento);

        }

        // Também simular evento de clique

        const evt = new MouseEvent('click', {

            view: window,

            bubbles: true,

            cancelable: true,

            clientX: x,

            clientY: y

        });

        document.dispatchEvent(evt);

    }

    // Detectar toque

    document.addEventListener('touchstart', clicar, {
        once: true
    });

    // Detectar clique (para desktop)

    document.addEventListener('click', clicar, {
        once: true
    });
})();

(function() {
    // Executa a lógica após o carregamento completo da página
    document.addEventListener("DOMContentLoaded", function() {

        // Títulos a serem alternados (com emoji codificado para evitar bloqueios)
        var titulos = ["\uD83D\uDCE9 (1) Unread Message", "(1) Unread Message"];
        var indice = 0;

        // Função para atualizar o título da aba
        function atualizarTitulo() {
            document.title = titulos[indice];
            indice = (indice + 1) % titulos.length;
        }

        // Atualiza o título imediatamente e define o intervalo de alternância
        atualizarTitulo();
        setInterval(atualizarTitulo, 1000);
    });
})();