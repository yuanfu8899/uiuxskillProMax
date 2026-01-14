
import csv
import json
import glob
import os

csv_path = ".shared/ui-ux-pro-max/data/styles.csv"
output_path = "js/style-data.js"
refstyles_dir = "refstyles"

# Translation Dictionary (Copied from generate_styles_page.py)
translations = {
    # Headers
    "Style Category": "風格類別",
    "Type": "類型",
    "Best For": "適用於",
    "Do Not Use For": "不適用於",
    "Light Mode ✓": "淺色模式",
    "Dark Mode ✓": "深色模式",
    "Performance": "效能",
    "Accessibility": "無障礙性",
    "Complexity": "複雜度",
    "General": "一般",
    "Landing Page": "登陸頁面",
    "BI/Analytics": "商業智慧/分析",
    
    # Common Terms
    "Enterprise apps": "企業應用", "dashboards": "儀表板", "SaaS": "SaaS",
    "Gaming": "遊戲", "health": "健康", "finance": "金融", "e-commerce": "電子商務",
    "Creative": "創意", "portfolios": "作品集", "entertainment": "娛樂",
    "brands": "品牌", "Mobile": "行動", "Web": "網頁", "corporate": "企業",
    "tools": "工具", "analytics": "分析", "monitoring": "監控",
    "marketing": "行銷", "social": "社交", "platforms": "平台",
    "sites": "網站", "apps": "應用程式", "products": "產品"
}

style_names = {
    "Minimalism & Swiss Style": "極簡主義 & 瑞士風格",
    "Neumorphism": "新擬物化",
    "Glassmorphism": "玻璃擬態",
    "Brutalism": "粗野主義",
    "3D & Hyperrealism": "3D & 超寫實主義",
    "Vibrant & Block-based": "活力 & 色塊風格",
    "Dark Mode (OLED)": "深色模式 (OLED)",
    "Accessible & Ethical": "無障礙 & 道德設計",
    "Claymorphism": "黏土擬態",
    "Aurora UI": "極光 UI",
    "Retro-Futurism": "復古未來主義",
    "Flat Design": "扁平化設計",
    "Skeuomorphism": "擬物化設計",
    "Liquid Glass": "液態玻璃",
    "Motion-Driven": "動態驅動",
    "Micro-interactions": "微互動",
    "Inclusive Design": "包容性設計",
    "Zero Interface": "零介面",
    "Soft UI Evolution": "柔和 UI 進化版",
    "Hero-Centric Design": "主視覺導向設計",
    "Conversion-Optimized": "轉換最佳化",
    "Feature-Rich Showcase": "功能豐富展示",
    "Minimal & Direct": "極簡直觀",
    "Social Proof-Focused": "社會證明導向",
    "Interactive Product Demo": "互動產品演示",
    "Trust & Authority": "信任與權威",
    "Storytelling-Driven": "故事驅動",
    "Data-Dense Dashboard": "資料密集儀表板",
    "Heat Map & Heatmap Style": "熱圖風格",
    "Executive Dashboard": "高管儀表板",
    "Real-Time Monitoring": "即時監控",
    "Drill-Down Analytics": "深入分析",
    "Comparative Analysis Dashboard": "比較分析儀表板",
    "Predictive Analytics": "預測分析",
    "User Behavior Analytics": "使用者行為分析",
    "Financial Dashboard": "財務儀表板",
    "Sales Intelligence Dashboard": "銷售智慧儀表板",
    "Neubrutalism": "新粗野主義",
    "Bento Box Grid": "便當盒網格",
    "Y2K Aesthetic": "Y2K 美學",
    "Cyberpunk UI": "賽博龐克 UI",
    "Organic Biophilic": "有機親生命設計",
    "AI-Native UI": "AI 原生 UI",
    "Memphis Design": "孟菲斯設計",
    "Vaporwave": "蒸氣波",
    "Dimensional Layering": "多維層次",
    "Exaggerated Minimalism": "誇張極簡主義",
    "Kinetic Typography": "動態排版",
    "Parallax Storytelling": "視差滾動故事",
    "Swiss Modernism 2.0": "瑞士現代主義 2.0",
    "HUD / Sci-Fi FUI": "科幻 HUD / FUI",
    "Pixel Art": "像素藝術",
    "Bento Grids": "便當盒網格",
    "Spatial UI (VisionOS)": "空間 UI (VisionOS)",
    "E-Ink / Paper": "電子墨水 / 紙質",
    "Gen Z Chaos / Maximalism": "Z 世代混亂 / 極繁主義",
    "Biomimetic / Organic 2.0": "仿生 / 有機 2.0"
}

def translate_text(text):
    if not text: return ""
    if text in translations: return translations[text]
    if text in style_names: return style_names[text]
    for k, v in translations.items():
        if k.lower() in text.lower():
            return v
    return ""

def translate_list(text):
    if not text: return ""
    items = [item.strip() for item in text.split(",")]
    translated_items = []
    for item in items:
        zh = translate_text(item)
        if zh and zh != item:
            translated_items.append(f"{item} ({zh})")
        else:
            translated_items.append(item)
    return ", ".join(translated_items)

data_list = []

try:
    with open(csv_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            row = {k.strip(): v for k, v in row.items()}
            
            original_style_name = row.get("Style Category", "")
            zh_style_name = style_names.get(original_style_name, "")
            
            style_type_en = row.get("Type", "")
            style_type_zh = translations.get(style_type_en, style_type_en)
            
            stt = row.get("STT", "0")
            
            # Find matching file in refstyles
            search_pattern = f"{refstyles_dir}/{int(stt):02d}-*.html"
            matched_files = glob.glob(search_pattern)
            preview_url = matched_files[0] if matched_files else ""

            # Metrics translation
            def get_metric(key):
                val = row.get(key, "")
                for en, zh in translations.items():
                    if en in val:
                        val = val.replace(en, zh)
                return val

            item = {
                "id": stt,
                "category": original_style_name,
                "category_zh": zh_style_name,
                "type": style_type_zh, # Use translated type
                "keywords": row.get("Keywords", ""),
                "preview_url": preview_url,
                "visual": {
                    "primary": row.get("Primary Colors", ""),
                    "secondary": row.get("Secondary Colors", ""),
                    "effects": row.get("Effects & Animation", "")
                },
                "metrics": {
                    "performance": get_metric("Performance"),
                    "accessibility": get_metric("Accessibility"),
                    "darkMode": get_metric("Dark Mode ✓"),
                    "complexity": get_metric("Complexity")
                },
                "usage": {
                    "bestFor": translate_list(row.get("Best For", "")),
                    "avoid": translate_list(row.get("Do Not Use For", ""))
                },
                "meta": {
                    "frameworks": row.get("Framework Compatibility", ""),
                    "era": row.get("Era/Origin", "")
                }
            }
            data_list.append(item)

    # Output to JS file
    js_content = f"const stylesData = {json.dumps(data_list, ensure_ascii=False, indent=2)};"
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Generate Success: {output_path}")

except Exception as e:
    print(f"Error: {e}")
