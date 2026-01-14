
import csv
import html
import glob
import os

csv_path = ".shared/ui-ux-pro-max/data/styles.csv"
output_path = "uiuxpro_styles.html"
refstyles_dir = "refstyles"

# Translation Dictionary
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

# Style Names Mapping (Simplified for brevity, can be expanded)
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
    # Check exact match
    if text in translations: return translations[text]
    if text in style_names: return style_names[text]
    
    # Check partial
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

html_content = """<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UI/UX Pro 設計風格庫 (Styles)</title>
    <style>
        :root {
            --bg-color: #f8fafc;
            --text-color: #1e293b;
            --card-bg: #ffffff;
            --border-color: #e2e8f0;
            --primary-color: #3b82f6;
            --tag-bg: #f1f5f9;
            --tag-text: #475569;
        }
        body {
            font-family: "PingFang TC", "Microsoft JhengHei", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 2rem;
            line-height: 1.6;
        }
        header {
            text-align: center;
            margin-bottom: 3rem;
        }
        h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }
        p.subtitle {
            color: #64748b;
            font-size: 1.1rem;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
            gap: 2rem;
            max-width: 1800px;
            margin: 0 auto;
        }
        .card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s, box-shadow 0.2s;
            display: flex;
            flex-direction: column;
        }
        .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 20px -3px rgba(0, 0, 0, 0.1);
        }
        .card-header {
            margin-bottom: 1.5rem;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 1rem;
        }
        .style-type {
            display: inline-block;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--primary-color);
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        .card-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0;
            color: var(--text-color);
            line-height: 1.2;
        }
        .card-title .zh-title {
            display: block;
            font-size: 1rem;
            font-weight: 500;
            color: #64748b;
            margin-top: 0.25rem;
        }
        .keywords {
            margin-top: 0.5rem;
            font-size: 0.9rem;
            color: #64748b;
        }
        .preview-container {
            margin-bottom: 1.5rem;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            overflow: hidden;
            height: 300px;
            background: #f1f5f9;
        }
        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
        .section-title {
            font-size: 0.85rem;
            font-weight: 700;
            color: #94a3b8;
            text-transform: uppercase;
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
            letter-spacing: 0.05em;
        }
        .content-block {
            font-size: 0.95rem;
            color: #334155;
        }
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-top: 1.5rem;
            background: #f8fafc;
            padding: 1rem;
            border-radius: 8px;
        }
        .metric {
            display: flex;
            flex-direction: column;
        }
        .metric-label {
            font-size: 0.75rem;
            color: #64748b;
            font-weight: 600;
        }
        .metric-value {
            font-size: 0.9rem;
            font-weight: 600;
            color: #334155;
        }
        .usage-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            margin-top: 1.5rem;
            padding-top: 1.5rem;
            border-top: 1px dashed var(--border-color);
        }
        .usage-block h4 {
            font-size: 0.9rem;
            margin: 0 0 0.5rem 0;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .good-use { color: #16a34a; }
        .bad-use { color: #dc2626; }
        .usage-text {
            font-size: 0.85rem;
            line-height: 1.4;
            color: #475569;
        }
        .fullscreen-link {
            display: inline-block;
            margin-top: 0.5rem;
            font-size: 0.85rem;
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 500;
        }
        .fullscreen-link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <header>
        <h1>UI/UX Pro 設計風格庫</h1>
        <p class="subtitle">58 種現代 UI/UX 設計風格、應用場景與實作指南</p>
    </header>
    <div class="grid">
"""

try:
    with open(csv_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            row = {k.strip(): v for k, v in row.items()}
            
            # Fields
            original_style_name = row.get("Style Category", "")
            zh_style_name = style_names.get(original_style_name, "")
            
            style_type_en = row.get("Type", "")
            style_type_zh = translations.get(style_type_en, style_type_en)
            
            stt = row.get("STT", "0")
            
            # Find matching file in refstyles
            search_pattern = f"{refstyles_dir}/{int(stt):02d}-*.html"
            matched_files = glob.glob(search_pattern)
            
            iframe_html = ""
            if matched_files:
                file_path = matched_files[0]
                relative_path = file_path
                iframe_html = f"""
                <div class="preview-container">
                    <iframe src="{relative_path}" loading="lazy" title="{original_style_name} Preview"></iframe>
                </div>
                <div style="text-align: right;">
                    <a href="{relative_path}" target="_blank" class="fullscreen-link">在新視窗開啟範例 ↗</a>
                </div>
                """
            
            # Helper for metrics
            def get_metric(key):
                val = row.get(key, "")
                for en, zh in translations.items():
                    if en in val:
                        val = val.replace(en, zh)
                return val

            html_content += f"""
        <div class="card">
            <div class="card-header">
                <span class="style-type">{html.escape(style_type_zh)}</span>
                <h2 class="card-title">
                    {html.escape(original_style_name)}
                    <span class="zh-title">{html.escape(zh_style_name)}</span>
                </h2>
                <div class="keywords">{html.escape(row.get("Keywords", ""))}</div>
            </div>

            {iframe_html}

            <div>
                <div class="section-title">視覺特徵 (Visual Characteristics)</div>
                <div class="content-block">
                    <strong>主要顏色:</strong> {html.escape(row.get("Primary Colors", ""))}<br>
                    <strong>次要顏色:</strong> {html.escape(row.get("Secondary Colors", ""))}<br>
                    <strong>特效與動畫:</strong> {html.escape(row.get("Effects & Animation", ""))}
                </div>
            </div>

            <div class="metrics-grid">
                <div class="metric">
                    <span class="metric-label">效能 (Performance)</span>
                    <span class="metric-value">{html.escape(get_metric("Performance"))}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">無障礙 (Accessibility)</span>
                    <span class="metric-value">{html.escape(get_metric("Accessibility"))}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">深色模式 (Dark Mode)</span>
                    <span class="metric-value">{html.escape(get_metric("Dark Mode ✓"))}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">複雜度 (Complexity)</span>
                    <span class="metric-value">{html.escape(get_metric("Complexity"))}</span>
                </div>
            </div>

            <div class="usage-section">
                <div class="usage-block">
                    <h4 class="good-use">✓ 適用於 (Best For)</h4>
                    <div class="usage-text">{html.escape(translate_list(row.get("Best For", "")))}</div>
                </div>
                <div class="usage-block">
                    <h4 class="bad-use">✗ 不適用於 (Do Not Use For)</h4>
                    <div class="usage-text">{html.escape(translate_list(row.get("Do Not Use For", "")))}</div>
                </div>
            </div>

            <div style="margin-top: 1.5rem; font-size: 0.85rem; color: #94a3b8;">
                <strong>框架相容性:</strong> {html.escape(row.get("Framework Compatibility", ""))} <br>
                <strong>年代/起源:</strong> {html.escape(row.get("Era/Origin", ""))}
            </div>
        </div>
"""

    html_content += """
    </div>
</body>
</html>
"""

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"Generate Success: {output_path}")

except Exception as e:
    print(f"Error: {e}")
