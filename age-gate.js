(function () {
    "use strict";
    var CHAVE = "tabaco33_maior_idade_ok";
    if (sessionStorage.getItem(CHAVE) === "1") { return; }

    var style = document.createElement("style");
    style.textContent =
        "#age-gate-overlay{position:fixed;inset:0;z-index:99999;background:rgba(10,8,6,0.97);" +
        "display:flex;align-items:center;justify-content:center;padding:20px;" +
        "font-family:'Georgia',serif;}" +
        "#age-gate-box{max-width:480px;width:100%;background:#150f0a;border:1px solid #d4af37;" +
        "border-radius:16px;padding:45px 35px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.6);}" +
        "#age-gate-box img{width:70px;height:auto;margin-bottom:20px;}" +
        "#age-gate-box h2{color:#d4af37;font-size:1.3em;letter-spacing:1px;text-transform:uppercase;margin:0 0 18px;}" +
        "#age-gate-box p{color:#d4d0c8;font-size:1.02em;line-height:1.7;margin:0 0 28px;}" +
        "#age-gate-box .aviso-legal{color:#948a7a;font-size:0.82em;line-height:1.6;margin-top:22px;}" +
        "#age-gate-botoes{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}" +
        "#age-gate-sim,#age-gate-nao{padding:14px 30px;border-radius:6px;font-size:0.95em;" +
        "letter-spacing:1px;text-transform:uppercase;font-weight:bold;cursor:pointer;border:none;transition:0.25s;}" +
        "#age-gate-sim{background:#d4af37;color:#1a1510;}" +
        "#age-gate-sim:hover{background:#fff;}" +
        "#age-gate-nao{background:transparent;color:#948a7a;border:1px solid #444;}" +
        "#age-gate-nao:hover{border-color:#948a7a;color:#c9bfb0;}";
    document.head.appendChild(style);

    var overlay = document.createElement("div");
    overlay.id = "age-gate-overlay";
    overlay.innerHTML =
        '<div id="age-gate-box">' +
        '<img src="/logo-aguia.jpeg" alt="33 Tabaco" onerror="this.style.display=\'none\'">' +
        "<h2>Confirmação de Idade</h2>" +
        "<p>Este site contém informações sobre produtos de tabaco e fumo artesanal. " +
        "O acesso é destinado exclusivamente a <strong style=\"color:#d4af37;\">maiores de 18 anos</strong>.</p>" +
        '<div id="age-gate-botoes">' +
        '<button id="age-gate-sim">Sim, sou maior de 18</button>' +
        '<button id="age-gate-nao">Não, sou menor de 18</button>' +
        "</div>" +
        '<p class="aviso-legal">O uso de produtos de tabaco pode causar dependência e prejudica a saúde ' +
        "(Lei nº 9.294/96). Venda proibida a menores de idade. Disque Saúde: 136.</p>" +
        "</div>";
    document.documentElement.appendChild(overlay);
    document.body.style.overflow = "hidden";

    document.getElementById("age-gate-sim").addEventListener("click", function () {
        try { sessionStorage.setItem(CHAVE, "1"); } catch (e) {}
        overlay.remove();
        document.body.style.overflow = "";
    });
    document.getElementById("age-gate-nao").addEventListener("click", function () {
        window.location.href = "https://www.gov.br/saude/pt-br";
    });
})();
