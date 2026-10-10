import os
import re

pages = ['canastreiro', 'catuai27', 'santopalheiro', 'tesouromineiro']

for p in pages:
    path = rf'E:\33tabaco\site-github\{p}\index.html'
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    
    match = re.search(r'\"brand\": {\"@type\": \"Brand\", \"name\": \"([^\"]+)\"}', text)
    if match:
        brand_str = match.group(0)
        replacement = brand_str + ',\n      \"offers\": {\n        \"@type\": \"Offer\",\n        \"url\": \"https://33tabaco.com.br/' + p + '/\",\n        \"priceCurrency\": \"BRL\",\n        \"price\": \"20.00\",\n        \"availability\": \"https://schema.org/InStock\"\n      }'
        text = text.replace(brand_str, replacement)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f'Fixed {p}')
