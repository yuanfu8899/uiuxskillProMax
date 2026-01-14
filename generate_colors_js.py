
import csv
import json

csv_path = ".shared/ui-ux-pro-max/data/colors.csv"
output_path = "js/colors-data.js"

data_list = []

try:
    with open(csv_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Clean keys
            row = {k.strip(): v.strip() for k, v in row.items()}
            
            item = {
                "id": row.get("No"),
                "title": row.get("Product Type"),
                "keywords": row.get("Keywords"),
                "colors": {
                    "primary": row.get("Primary (Hex)"),
                    "secondary": row.get("Secondary (Hex)"),
                    "cta": row.get("CTA (Hex)"),
                    "background": row.get("Background (Hex)"),
                    "text": row.get("Text (Hex)"),
                    "border": row.get("Border (Hex)")
                },
                "notes": row.get("Notes")
            }
            data_list.append(item)

    js_content = f"const colorsData = {json.dumps(data_list, ensure_ascii=False, indent=2)};"
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Generate Success: {output_path}")

except Exception as e:
    print(f"Error: {e}")
