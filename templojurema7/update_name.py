import os

file_path = r"C:\Users\leona\.gemini\antigravity\scratch\templojurema7\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Substituições
content = content.replace("Templo Jurema 7", "Templo Cabocla Jurema & Boiadeiro Sete Porteiras")
content = content.replace("TEMPLO JUREMA 7", "TEMPLO CABOCLA JUREMA E BOIADEIRO 7 PORTEIRAS")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Nomes atualizados com sucesso!")
