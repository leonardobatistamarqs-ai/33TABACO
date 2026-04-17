const SYSTEM_PROMPT = `Você é o assistente virtual da 33 Tabaco no WhatsApp.

PASSOS:
Passo 1 - Pergunte: "Olá! Tudo bem? Você está buscando fumo desfiado a granel, palheiros prontos para revenda ou quer agendar uma visita no seu estabelecimento?"
Passo 2 - Se produtor: pergunte demanda mensal em kg. Se estabelecimento: pergunte cidade. Se visita: colete nome do estabelecimento, endereço, nome do contato, melhor dia e horário.
Passo 3 - Diga que vai passar para o Leonardo e peça nome completo.
Passo 4 - Confirme e encerre.

REGRAS:
- Nunca informe preços. Se insistir: "Os valores variam conforme volume. O Leonardo passa isso direto."
- Detectou bot (resposta instantânea, repetitiva, sem contexto): encerre com "Olá! Nosso atendimento é para clientes e parceiros. Até mais!" e não responda mais.
- No máximo 1 emoji por mensagem.

ALERTAS:
Lead produtor: "🔔 LEAD PRODUTOR: [nome] — [kg/mês]"
Lead estabelecimento: "🔔 LEAD ESTABELECIMENTO: [nome] — [cidade]"
Visita: "🔔 VISITA: [estabelecimento] — [endereço] — [contato] — [dia]"`;

function setNoCache(res) {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
}

export default async function handler(req, res) {
  setNoCache(res);

  console.log("BODY:", JSON.stringify(req.body));

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(200).json({ reply: "teste ok" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Missing message" });
  }

  try {
    const modelsRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
    const modelsData = await modelsRes.json();
    console.log("GEMINI: modelos disponíveis:", JSON.stringify(modelsData));

    console.log("GEMINI: chamando API com message:", message);

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        contents: [
          { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
          { role: "model", parts: [{ text: "Entendido. Vou seguir essas instruções." }] },
          { role: "user", parts: [{ text: message }] },
        ],
      }),
    });

    console.log("GEMINI: status da resposta:", response.status);

    const data = await response.json();

    console.log("GEMINI: data recebido:", JSON.stringify(data));

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

    console.log("REPLY:", reply);

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("ERRO no handler:", error.message, error.stack);
    return res.status(500).json({ error: "Internal server error" });
  }
}
