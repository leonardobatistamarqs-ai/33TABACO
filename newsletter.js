/**
 * 33 Tabaco — Mini-formulário de newsletter no rodapé.
 * Injeta uma faixa de captura de email logo antes do <footer> de qualquer
 * página que carregue este script. Não injeta na home (que já tem a seção
 * completa "Fique por dentro") — detecta pelo id formNewsletter.
 */
(function () {
    "use strict";
    var NEWSLETTER_URL = "https://script.google.com/macros/s/AKfycbwqHxhr75m6Yjgb7FuR71udc0Aa4Ic6NA16IEr1lvSmu1QCQK4dxP-cqEkBKX4_TarE/exec";

    function init() {
        // Se a página já tem o formulário completo (home), não faz nada.
        if (document.getElementById("formNewsletter")) return;
        if (document.getElementById("formNewsletterMini")) return;
        var footer = document.querySelector("footer");
        if (!footer) return;

        var origem = (location.pathname || "site").replace(/^\/+|\/+$/g, "") || "home";

        var sec = document.createElement("section");
        sec.style.cssText = "background:#15100c; border-top:1px solid #2c241c; padding:50px 20px; text-align:center; font-family:'Georgia',serif;";
        sec.innerHTML =
            '<div style="max-width:560px; margin:auto;">' +
            '<h2 style="color:#d4af37; font-size:1.2em; letter-spacing:2px; text-transform:uppercase; margin:0 0 12px; border:none;">📧 Receba novidades no email</h2>' +
            '<p style="color:#c9bfb0; font-size:1em; line-height:1.6; margin:0 0 22px;">Fumo desfiado, dicas de palheiro e conteúdo novo do blog. Sem spam.</p>' +
            '<form id="formNewsletterMini" style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap; max-width:460px; margin:auto;">' +
            '<input type="email" id="emailNewsletterMini" required placeholder="Seu melhor email" style="flex:1; min-width:200px; padding:14px 16px; border-radius:8px; border:1px solid #3a2f22; background:#221b14; color:#e4dccf; font-family:inherit; font-size:1em;">' +
            '<button type="submit" id="btnNewsletterMini" style="background:#d4af37; color:#1a1510; border:none; padding:14px 28px; border-radius:8px; font-weight:bold; text-transform:uppercase; letter-spacing:1px; font-size:0.9em; cursor:pointer; font-family:inherit; transition:0.25s;">Quero receber</button>' +
            "</form>" +
            '<p id="msgNewsletterMini" style="color:#b8d4a0; font-size:0.92em; margin:16px 0 0; min-height:18px;"></p>' +
            "</div>";

        footer.parentNode.insertBefore(sec, footer);

        var btn = document.getElementById("btnNewsletterMini");
        btn.addEventListener("mouseover", function () { btn.style.background = "#fff"; });
        btn.addEventListener("mouseout", function () { btn.style.background = "#d4af37"; });

        document.getElementById("formNewsletterMini").addEventListener("submit", function (e) {
            e.preventDefault();
            var email = document.getElementById("emailNewsletterMini").value.trim();
            var msg = document.getElementById("msgNewsletterMini");
            if (!email) return;
            btn.disabled = true;
            btn.textContent = "Enviando...";
            var dados = new URLSearchParams({ email: email, origem: origem });
            fetch(NEWSLETTER_URL, { method: "POST", mode: "no-cors", body: dados })
                .then(function () {
                    msg.style.color = "#b8d4a0";
                    msg.textContent = "Pronto! Você está na lista. Obrigado. 🌿";
                    document.getElementById("formNewsletterMini").reset();
                    try { gtag("event", "newsletter_inscricao", { event_category: "newsletter", event_label: origem }); } catch (err) {}
                })
                .catch(function () {
                    msg.style.color = "#c98a8a";
                    msg.textContent = "Ops, algo deu errado. Tente de novo em instantes.";
                })
                .finally(function () {
                    btn.disabled = false;
                    btn.textContent = "Quero receber";
                });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
