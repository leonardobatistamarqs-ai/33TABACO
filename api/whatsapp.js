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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Missing message" });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await response.json();
    const reply = data.content?.[0]?.text ?? "";

    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
