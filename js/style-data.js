const stylesData = [
  {
    "id": "1",
    "category": "Minimalism & Swiss Style",
    "category_zh": "極簡主義 & 瑞士風格",
    "type": "一般",
    "keywords": "Clean, simple, spacious, functional, white space, high contrast, geometric, sans-serif, grid-based, essential",
    "preview_url": "refstyles/01-minimalism.html",
    "visual": {
      "primary": "Monochromatic, Black #000000, White #FFFFFF",
      "secondary": "Neutral (Beige #F5F1E8, Grey #808080, Taupe #B38B6D), Primary accent",
      "effects": "Subtle hover (200-250ms), smooth transitions, sharp shadows if any, clear type hierarchy, fast loading"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AAA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Enterprise apps (企業應用), dashboards (儀表板), documentation sites (網站), SaaS platforms (SaaS), professional tools (工具)",
      "avoid": "Creative portfolios (創意), entertainment (娛樂), playful brands (品牌), artistic experiments"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, Bootstrap 9/10, MUI 9/10",
      "era": "1950s Swiss"
    }
  },
  {
    "id": "2",
    "category": "Neumorphism",
    "category_zh": "新擬物化",
    "type": "一般",
    "keywords": "Soft UI, embossed, debossed, convex, concave, light source, subtle depth, rounded (12-16px), monochromatic",
    "preview_url": "refstyles/02-neumorphism.html",
    "visual": {
      "primary": "Light pastels: Soft Blue #C8E0F4, Soft Pink #F5E0E8, Soft Grey #E8E8E8",
      "secondary": "Tints/shades (±30%), gradient subtlety, color harmony",
      "effects": "Soft box-shadow (multiple: -5px -5px 15px, 5px 5px 15px), smooth press (150ms), inner subtle shadow"
    },
    "metrics": {
      "performance": "⚡ Good",
      "accessibility": "⚠ Low contrast",
      "darkMode": "◐ Partial",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Health/wellness apps (健康), meditation platforms (平台), fitness trackers, minimal interaction UIs",
      "avoid": "Complex apps (應用程式), critical accessibility (無障礙性), data-heavy dashboards (儀表板), high-contrast required"
    },
    "meta": {
      "frameworks": "Tailwind 8/10, CSS-in-JS 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "3",
    "category": "Glassmorphism",
    "category_zh": "玻璃擬態",
    "type": "一般",
    "keywords": "Frosted glass, transparent, blurred background, layered, vibrant background, light source, depth, multi-layer",
    "preview_url": "refstyles/03-glassmorphism.html",
    "visual": {
      "primary": "Translucent white: rgba(255,255,255,0.1-0.3)",
      "secondary": "Vibrant: Electric Blue #0080FF, Neon Purple #8B00FF, Vivid Pink #FF1493, Teal #20B2AA",
      "effects": "Backdrop blur (10-20px), subtle border (1px solid rgba white 0.2), light reflection, Z-depth"
    },
    "metrics": {
      "performance": "⚠ Good",
      "accessibility": "⚠ Ensure 4.5:1",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Modern SaaS (SaaS), financial dashboards (儀表板), high-end corporate (企業), lifestyle apps (應用程式), modal overlays, navigation",
      "avoid": "Low-contrast backgrounds, critical accessibility (無障礙性), performance-limited (效能), dark text on dark"
    },
    "meta": {
      "frameworks": "Tailwind 9/10, MUI 8/10, Chakra 8/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "4",
    "category": "Brutalism",
    "category_zh": "粗野主義",
    "type": "一般",
    "keywords": "Raw, unpolished, stark, high contrast, plain text, default fonts, visible borders, asymmetric, anti-design",
    "preview_url": "refstyles/04-brutalism.html",
    "visual": {
      "primary": "Primary: Red #FF0000, Blue #0000FF, Yellow #FFFF00, Black #000000, White #FFFFFF",
      "secondary": "Limited: Neon Green #00FF00, Hot Pink #FF00FF, minimal secondary",
      "effects": "No smooth transitions (instant), sharp corners (0px), bold typography (700+), visible grid, large blocks"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AAA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Design portfolios (作品集), artistic projects, counter-culture brands (品牌), editorial/media sites (網站), tech blogs",
      "avoid": "Corporate environments (企業), conservative industries, critical accessibility (無障礙性), customer-facing professional"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, Bootstrap 7/10",
      "era": "1950s Brutalist"
    }
  },
  {
    "id": "5",
    "category": "3D & Hyperrealism",
    "category_zh": "3D & 超寫實主義",
    "type": "一般",
    "keywords": "Depth, realistic textures, 3D models, spatial navigation, tactile, skeuomorphic elements, rich detail, immersive",
    "preview_url": "refstyles/05-3d-hyperrealism.html",
    "visual": {
      "primary": "Deep Navy #001F3F, Forest Green #228B22, Burgundy #800020, Gold #FFD700, Silver #C0C0C0",
      "secondary": "Complex gradients (5-10 stops), realistic lighting, shadow variations (20-40% darker)",
      "effects": "WebGL/Three.js 3D, realistic shadows (layers), physics lighting, parallax (3-5 layers), smooth 3D (300-400ms)"
    },
    "metrics": {
      "performance": "❌ Poor",
      "accessibility": "⚠ Not accessible",
      "darkMode": "◐ Partial",
      "complexity": "High"
    },
    "usage": {
      "bestFor": "Gaming (遊戲), product showcase, immersive experiences, high-end e-commerce (電子商務), architectural viz, VR/AR",
      "avoid": "Low-end mobile (行動), performance-limited (效能), critical accessibility (無障礙性), data tables/forms"
    },
    "meta": {
      "frameworks": "Three.js 10/10, R3F 10/10, Babylon.js 10/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "6",
    "category": "Vibrant & Block-based",
    "category_zh": "活力 & 色塊風格",
    "type": "一般",
    "keywords": "Bold, energetic, playful, block layout, geometric shapes, high color contrast, duotone, modern, energetic",
    "preview_url": "refstyles/06-vibrant-block.html",
    "visual": {
      "primary": "Neon Green #39FF14, Electric Purple #BF00FF, Vivid Pink #FF1493, Bright Cyan #00FFFF, Sunburst #FFAA00",
      "secondary": "Complementary: Orange #FF7F00, Shocking Pink #FF006E, Lime #CCFF00, triadic schemes",
      "effects": "Large sections (48px+ gaps), animated patterns, bold hover (color shift), scroll-snap, large type (32px+), 200-300ms"
    },
    "metrics": {
      "performance": "⚡ Good",
      "accessibility": "◐ Ensure WCAG",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Startups, creative agencies (創意), gaming (遊戲), social media (社交), youth-focused, entertainment (娛樂), consumer",
      "avoid": "Financial institutions, healthcare (健康), formal business, government, conservative, elderly"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, Chakra 9/10, Styled 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "7",
    "category": "Dark Mode (OLED)",
    "category_zh": "深色模式 (OLED)",
    "type": "一般",
    "keywords": "Dark theme, low light, high contrast, deep black, midnight blue, eye-friendly, OLED, night mode, power efficient",
    "preview_url": "refstyles/07-dark-mode-oled.html",
    "visual": {
      "primary": "Deep Black #000000, Dark Grey #121212, Midnight Blue #0A0E27",
      "secondary": "Vibrant accents: Neon Green #39FF14, Electric Blue #0080FF, Gold #FFD700, Plasma Purple #BF00FF",
      "effects": "Minimal glow (text-shadow: 0 0 10px), dark-to-light transitions, low white emission, high readability, visible focus"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AAA",
      "darkMode": "✓ Only",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Night-mode apps (應用程式), coding platforms (平台), entertainment (娛樂), eye-strain prevention, OLED devices, low-light",
      "avoid": "Print-first content, high-brightness outdoor, color-accuracy-critical"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, MUI 10/10, Chakra 10/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "8",
    "category": "Accessible & Ethical",
    "category_zh": "無障礙 & 道德設計",
    "type": "一般",
    "keywords": "High contrast, large text (16px+), keyboard navigation, screen reader friendly, WCAG compliant, focus state, semantic",
    "preview_url": "refstyles/08-accessible.html",
    "visual": {
      "primary": "WCAG AA/AAA (4.5:1 min), simple primary, clear secondary, high luminosity (7:1+)",
      "secondary": "Symbol-based colors (not color-only), supporting patterns, inclusive combinations",
      "effects": "Clear focus rings (3-4px), ARIA labels, skip links, responsive design, reduced motion, 44x44px touch targets"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AAA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Government, healthcare (健康), education, inclusive products (產品), large audience, legal compliance, public",
      "avoid": "None - accessibility universal (無障礙性)"
    },
    "meta": {
      "frameworks": "All frameworks 10/10",
      "era": "Universal"
    }
  },
  {
    "id": "9",
    "category": "Claymorphism",
    "category_zh": "黏土擬態",
    "type": "一般",
    "keywords": "Soft 3D, chunky, playful, toy-like, bubbly, thick borders (3-4px), double shadows, rounded (16-24px)",
    "preview_url": "refstyles/09-claymorphism.html",
    "visual": {
      "primary": "Pastel: Soft Peach #FDBCB4, Baby Blue #ADD8E6, Mint #98FF98, Lilac #E6E6FA, light BG",
      "secondary": "Soft gradients (pastel-to-pastel), light/dark variations (20-30%), gradient subtle",
      "effects": "Inner+outer shadows (subtle, no hard lines), soft press (200ms ease-out), fluffy elements, smooth transitions"
    },
    "metrics": {
      "performance": "⚡ Good",
      "accessibility": "⚠ Ensure 4.5:1",
      "darkMode": "◐ Partial",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Educational apps (應用程式), children's apps (應用程式), SaaS platforms (SaaS), creative tools (創意), fun-focused, onboarding, casual games",
      "avoid": "Formal corporate (企業), professional services, data-critical, serious/medical, legal apps (應用程式), finance (金融)"
    },
    "meta": {
      "frameworks": "Tailwind 9/10, CSS-in-JS 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "10",
    "category": "Aurora UI",
    "category_zh": "極光 UI",
    "type": "一般",
    "keywords": "Vibrant gradients, smooth blend, Northern Lights effect, mesh gradient, luminous, atmospheric, abstract",
    "preview_url": "refstyles/10-aurora-ui.html",
    "visual": {
      "primary": "Complementary: Blue-Orange, Purple-Yellow, Electric Blue #0080FF, Magenta #FF1493, Cyan #00FFFF",
      "secondary": "Smooth transitions (Blue→Purple→Pink→Teal), iridescent effects, blend modes (screen, multiply)",
      "effects": "Large flowing CSS/SVG gradients, subtle 8-12s animations, depth via color layering, smooth morph"
    },
    "metrics": {
      "performance": "⚠ Good",
      "accessibility": "⚠ Text contrast",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Modern SaaS (SaaS), creative agencies (創意), branding, music platforms (平台), lifestyle, premium products (產品), hero sections",
      "avoid": "Data-heavy dashboards (儀表板), critical accessibility (無障礙性), content-heavy where distraction issues"
    },
    "meta": {
      "frameworks": "Tailwind 9/10, CSS-in-JS 10/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "11",
    "category": "Retro-Futurism",
    "category_zh": "復古未來主義",
    "type": "一般",
    "keywords": "Vintage sci-fi, 80s aesthetic, neon glow, geometric patterns, CRT scanlines, pixel art, cyberpunk, synthwave",
    "preview_url": "refstyles/11-retro-futurism.html",
    "visual": {
      "primary": "Neon Blue #0080FF, Hot Pink #FF006E, Cyan #00FFFF, Deep Black #1A1A2E, Purple #5D34D0",
      "secondary": "Metallic Silver #C0C0C0, Gold #FFD700, duotone, 80s Pink #FF10F0, neon accents",
      "effects": "CRT scanlines (::before overlay), neon glow (text-shadow+box-shadow), glitch effects (skew/offset keyframes)"
    },
    "metrics": {
      "performance": "⚠ Moderate",
      "accessibility": "⚠ High contrast/strain",
      "darkMode": "✓ Dark focused",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Gaming (遊戲), entertainment (娛樂), music platforms (平台), tech brands (品牌), artistic projects, nostalgic, cyberpunk",
      "avoid": "Conservative industries, critical accessibility (無障礙性), professional/corporate (企業), elderly, legal/finance (金融)"
    },
    "meta": {
      "frameworks": "Tailwind 8/10, CSS-in-JS 9/10",
      "era": "1980s Retro"
    }
  },
  {
    "id": "12",
    "category": "Flat Design",
    "category_zh": "扁平化設計",
    "type": "一般",
    "keywords": "2D, minimalist, bold colors, no shadows, clean lines, simple shapes, typography-focused, modern, icon-heavy",
    "preview_url": "refstyles/12-flat-design.html",
    "visual": {
      "primary": "Solid bright: Red, Orange, Blue, Green, limited palette (4-6 max)",
      "secondary": "Complementary colors, muted secondaries, high saturation, clean accents",
      "effects": "No gradients/shadows, simple hover (color/opacity shift), fast loading, clean transitions (150-200ms ease), minimal icons"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AAA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Web apps (網頁), mobile apps (行動), cross-platform, startup MVPs, user-friendly, SaaS, dashboards (儀表板), corporate (企業)",
      "avoid": "Complex 3D, premium/luxury, artistic portfolios (作品集), immersive experiences, high-detail"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, Bootstrap 10/10, MUI 9/10",
      "era": "2010s Modern"
    }
  },
  {
    "id": "13",
    "category": "Skeuomorphism",
    "category_zh": "擬物化設計",
    "type": "一般",
    "keywords": "Realistic, texture, depth, 3D appearance, real-world metaphors, shadows, gradients, tactile, detailed, material",
    "preview_url": "refstyles/13-skeuomorphism.html",
    "visual": {
      "primary": "Rich realistic: wood, leather, metal colors, detailed gradients (8-12 stops), metallic effects",
      "secondary": "Realistic lighting gradients, shadow variations (30-50% darker), texture overlays, material colors",
      "effects": "Realistic shadows (layers), depth (perspective), texture details (noise, grain), realistic animations (300-500ms)"
    },
    "metrics": {
      "performance": "❌ Poor",
      "accessibility": "⚠ Textures reduce readability",
      "darkMode": "◐ Partial",
      "complexity": "High"
    },
    "usage": {
      "bestFor": "Legacy apps (應用程式), gaming (遊戲), immersive storytelling, premium products (產品), luxury, realistic simulations, education",
      "avoid": "Modern enterprise, critical accessibility (無障礙性), low-performance (效能), web (use Flat/Modern) (網頁)"
    },
    "meta": {
      "frameworks": "CSS-in-JS 7/10, Custom 8/10",
      "era": "2007-2012 iOS"
    }
  },
  {
    "id": "14",
    "category": "Liquid Glass",
    "category_zh": "液態玻璃",
    "type": "一般",
    "keywords": "Flowing glass, morphing, smooth transitions, fluid effects, translucent, animated blur, iridescent, chromatic aberration",
    "preview_url": "refstyles/14-liquid-glass.html",
    "visual": {
      "primary": "Vibrant iridescent (rainbow spectrum), translucent base with opacity shifts, gradient fluidity",
      "secondary": "Chromatic aberration (Red-Cyan), iridescent oil-spill, fluid gradient blends, holographic effects",
      "effects": "Morphing elements (SVG/CSS), fluid animations (400-600ms curves), dynamic blur (backdrop-filter), color transitions"
    },
    "metrics": {
      "performance": "⚠ Moderate-Poor",
      "accessibility": "⚠ Text contrast",
      "darkMode": "✓ Full",
      "complexity": "High"
    },
    "usage": {
      "bestFor": "Premium SaaS (SaaS), high-end e-commerce (電子商務), creative platforms (創意), branding experiences, luxury portfolios (作品集)",
      "avoid": "Performance-limited (效能), critical accessibility (無障礙性), complex data, budget projects"
    },
    "meta": {
      "frameworks": "Framer Motion 10/10, GSAP 10/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "15",
    "category": "Motion-Driven",
    "category_zh": "動態驅動",
    "type": "一般",
    "keywords": "Animation-heavy, microinteractions, smooth transitions, scroll effects, parallax, entrance anim, page transitions",
    "preview_url": "refstyles/15-motion-driven.html",
    "visual": {
      "primary": "Bold colors emphasize movement, high contrast animated, dynamic gradients, accent action colors",
      "secondary": "Transitional states, success (Green #22C55E), error (Red #EF4444), neutral feedback",
      "effects": "Scroll anim (Intersection Observer), hover (300-400ms), entrance, parallax (3-5 layers), page transitions"
    },
    "metrics": {
      "performance": "⚠ Good",
      "accessibility": "⚠ Prefers-reduced-motion",
      "darkMode": "✓ Full",
      "complexity": "High"
    },
    "usage": {
      "bestFor": "Portfolio sites (網站), storytelling platforms (平台), interactive experiences, entertainment apps (娛樂), creative (創意), SaaS",
      "avoid": "Data dashboards (儀表板), critical accessibility (無障礙性), low-power devices, content-heavy, motion-sensitive"
    },
    "meta": {
      "frameworks": "GSAP 10/10, Framer Motion 10/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "16",
    "category": "Micro-interactions",
    "category_zh": "微互動",
    "type": "一般",
    "keywords": "Small animations, gesture-based, tactile feedback, subtle animations, contextual interactions, responsive",
    "preview_url": "refstyles/16-micro-interactions.html",
    "visual": {
      "primary": "Subtle color shifts (10-20%), feedback: Green #22C55E, Red #EF4444, Amber #F59E0B",
      "secondary": "Accent feedback, neutral supporting, clear action indicators",
      "effects": "Small hover (50-100ms), loading spinners, success/error state anim, gesture-triggered (swipe/pinch), haptic"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ Good",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Mobile apps (行動), touchscreen UIs, productivity tools (工具), user-friendly, consumer apps (應用程式), interactive components",
      "avoid": "Desktop-only, critical performance (效能), accessibility-first (alternatives needed) (無障礙性)"
    },
    "meta": {
      "frameworks": "Framer Motion 10/10, React Spring 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "17",
    "category": "Inclusive Design",
    "category_zh": "包容性設計",
    "type": "一般",
    "keywords": "Accessible, color-blind friendly, high contrast, haptic feedback, voice interaction, screen reader, WCAG AAA, universal",
    "preview_url": "refstyles/17-inclusive-design.html",
    "visual": {
      "primary": "WCAG AAA (7:1+ contrast), avoid red-green only, symbol-based indicators, high contrast primary",
      "secondary": "Supporting patterns (stripes, dots, hatch), symbols, combinations, clear non-color indicators",
      "effects": "Haptic feedback (vibration), voice guidance, focus indicators (4px+ ring), motion options, alt content, semantic"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AAA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Public services, education, healthcare (健康), finance (金融), government, accessible consumer, inclusive",
      "avoid": "None - accessibility universal (無障礙性)"
    },
    "meta": {
      "frameworks": "All frameworks 10/10",
      "era": "Universal"
    }
  },
  {
    "id": "18",
    "category": "Zero Interface",
    "category_zh": "零介面",
    "type": "一般",
    "keywords": "Minimal visible UI, voice-first, gesture-based, AI-driven, invisible controls, predictive, context-aware, ambient",
    "preview_url": "refstyles/18-zero-interface.html",
    "visual": {
      "primary": "Neutral backgrounds: Soft white #FAFAFA, light grey #F0F0F0, warm off-white #F5F1E8",
      "secondary": "Subtle feedback: light green, light red, minimal UI elements, soft accents",
      "effects": "Voice recognition UI, gesture detection, AI predictions (smooth reveal), progressive disclosure, smart suggestions"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ Excellent",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Voice assistants, AI platforms (平台), future-forward UX, smart home, contextual computing, ambient experiences",
      "avoid": "Complex workflows, data-entry heavy, traditional systems, legacy support, explicit control"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, Custom 10/10",
      "era": "2020s AI-Era"
    }
  },
  {
    "id": "19",
    "category": "Soft UI Evolution",
    "category_zh": "柔和 UI 進化版",
    "type": "一般",
    "keywords": "Evolved soft UI, better contrast, modern aesthetics, subtle depth, accessibility-focused, improved shadows, hybrid",
    "preview_url": "refstyles/19-soft-ui-evolution.html",
    "visual": {
      "primary": "Improved contrast pastels: Soft Blue #87CEEB, Soft Pink #FFB6C1, Soft Green #90EE90, better hierarchy",
      "secondary": "Better combinations, accessible secondary, supporting with improved contrast, modern accents",
      "effects": "Improved shadows (softer than flat, clearer than neumorphism), modern (200-300ms), focus visible, WCAG AA/AAA"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AA+",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Modern enterprise apps (企業應用), SaaS platforms (SaaS), health/wellness (健康), modern business tools (工具), professional, hybrid",
      "avoid": "Extreme minimalism, critical performance (效能), systems without modern OS"
    },
    "meta": {
      "frameworks": "Tailwind 9/10, MUI 9/10, Chakra 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "20",
    "category": "Hero-Centric Design",
    "category_zh": "主視覺導向設計",
    "type": "登陸頁面",
    "keywords": "Large hero section, compelling headline, high-contrast CTA, product showcase, value proposition, hero image/video, dramatic visual",
    "preview_url": "refstyles/20-hero-centric.html",
    "visual": {
      "primary": "Brand primary color, white/light backgrounds for contrast, accent color for CTA",
      "secondary": "Supporting colors for secondary CTAs, accent highlights, trust elements (testimonials, logos)",
      "effects": "Smooth scroll reveal, fade-in animations on hero, subtle background parallax, CTA glow/pulse effect"
    },
    "metrics": {
      "performance": "⚡ Good",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "SaaS landing pages (登陸頁面), product launches, service landing pages (登陸頁面), B2B platforms (平台), tech companies",
      "avoid": "Complex navigation, multi-page experiences, data-heavy applications"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, Bootstrap 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "21",
    "category": "Conversion-Optimized",
    "category_zh": "轉換最佳化",
    "type": "登陸頁面",
    "keywords": "Form-focused, minimalist design, single CTA focus, high contrast, urgency elements, trust signals, social proof, clear value",
    "preview_url": "refstyles/21-conversion-optimized.html",
    "visual": {
      "primary": "Primary brand color, high-contrast white/light backgrounds, warning/urgency colors for time-limited offers",
      "secondary": "Secondary CTA color (muted), trust element colors (testimonial highlights), accent for key benefits",
      "effects": "Hover states on CTA (color shift, slight scale), form field focus animations, loading spinner, success feedback"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "E-commerce product pages (電子商務), free trial signups, lead generation, SaaS pricing pages (SaaS), limited-time offers",
      "avoid": "Complex feature explanations, multi-product showcases, technical documentation"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, Bootstrap 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "22",
    "category": "Feature-Rich Showcase",
    "category_zh": "功能豐富展示",
    "type": "登陸頁面",
    "keywords": "Multiple feature sections, grid layout, benefit cards, visual feature demonstrations, interactive elements, problem-solution pairs",
    "preview_url": "refstyles/22-feature-rich.html",
    "visual": {
      "primary": "Primary brand, bright secondary colors for feature cards, contrasting accent for CTAs",
      "secondary": "Supporting colors for: benefits (green), problems (red/orange), features (blue/purple), social proof (neutral)",
      "effects": "Card hover effects (lift/scale), icon animations on scroll, feature toggle animations, smooth section transitions"
    },
    "metrics": {
      "performance": "⚡ Good",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Enterprise SaaS (SaaS), software tools landing pages (登陸頁面), platform services, complex product explanations, B2B products (產品)",
      "avoid": "Simple product pages, early-stage startups with few features, entertainment landing pages (登陸頁面)"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, Bootstrap 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "23",
    "category": "Minimal & Direct",
    "category_zh": "極簡直觀",
    "type": "登陸頁面",
    "keywords": "Minimal text, white space heavy, single column layout, direct messaging, clean typography, visual-centric, fast-loading",
    "preview_url": "refstyles/23-minimal-direct.html",
    "visual": {
      "primary": "Monochromatic primary, white background, single accent color for CTA, black/dark grey text",
      "secondary": "Minimal secondary colors, reserved for critical CTAs only, neutral supporting elements",
      "effects": "Very subtle hover effects, minimal animations, fast page load (no heavy animations), smooth scroll"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AAA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Simple service landing pages (登陸頁面), indie products (產品), consulting services, micro SaaS (SaaS), freelancer portfolios (作品集)",
      "avoid": "Feature-heavy products (產品), complex explanations, multi-product showcases"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, Bootstrap 10/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "24",
    "category": "Social Proof-Focused",
    "category_zh": "社會證明導向",
    "type": "登陸頁面",
    "keywords": "Testimonials prominent, client logos displayed, case studies sections, reviews/ratings, user avatars, success metrics, credibility markers",
    "preview_url": "refstyles/24-social-proof.html",
    "visual": {
      "primary": "Primary brand, trust colors (blue), success/growth colors (green), neutral backgrounds",
      "secondary": "Testimonial highlight colors, logo grid backgrounds (light grey), badge/achievement colors",
      "effects": "Testimonial carousel animations, logo grid fade-in, stat counter animations (number count-up), review star ratings"
    },
    "metrics": {
      "performance": "⚡ Good",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "B2B SaaS (SaaS), professional services, premium products (產品), e-commerce conversion pages (電子商務), established brands (品牌)",
      "avoid": "Startup MVPs, products without users (產品), niche/experimental products (產品)"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, Bootstrap 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "25",
    "category": "Interactive Product Demo",
    "category_zh": "互動產品演示",
    "type": "登陸頁面",
    "keywords": "Embedded product mockup/video, interactive elements, product walkthrough, step-by-step guides, hover-to-reveal features, embedded demos",
    "preview_url": "refstyles/25-interactive-demo.html",
    "visual": {
      "primary": "Primary brand, interface colors matching product, demo highlight colors for interactive elements",
      "secondary": "Product UI colors, tutorial step colors (numbered progression), hover state indicators",
      "effects": "Product animation playback, step progression animations, hover reveal effects, smooth zoom on interaction"
    },
    "metrics": {
      "performance": "⚠ Good (video/interactive)",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "High"
    },
    "usage": {
      "bestFor": "SaaS platforms (SaaS), tool/software products (產品), productivity apps landing pages (登陸頁面), developer tools (工具), productivity software",
      "avoid": "Simple services, consulting, non-digital products (產品), complexity-averse audiences (複雜度)"
    },
    "meta": {
      "frameworks": "Tailwind 9/10, React 10/10, Framer Motion 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "26",
    "category": "Trust & Authority",
    "category_zh": "信任與權威",
    "type": "登陸頁面",
    "keywords": "Certificates/badges displayed, expert credentials, case studies with metrics, before/after comparisons, industry recognition, security badges",
    "preview_url": "refstyles/26-trust-authority.html",
    "visual": {
      "primary": "Professional colors (blue/grey), trust colors, certification badge colors (gold/silver accents)",
      "secondary": "Certificate highlight colors, metric showcase colors, comparison highlight (success green)",
      "effects": "Badge hover effects, metric pulse animations, certificate carousel, smooth stat reveal"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AAA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Healthcare/medical landing pages (登陸頁面), financial services, enterprise software, premium/luxury products (產品), legal services",
      "avoid": "Casual products (產品), entertainment (娛樂), viral/social-first products (社交)"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, Bootstrap 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "27",
    "category": "Storytelling-Driven",
    "category_zh": "故事驅動",
    "type": "登陸頁面",
    "keywords": "Narrative flow, visual story progression, section transitions, consistent character/brand voice, emotional messaging, journey visualization",
    "preview_url": "refstyles/27-storytelling.html",
    "visual": {
      "primary": "Brand primary, warm/emotional colors, varied accent colors per story section, high visual variety",
      "secondary": "Story section color coding, emotional state colors (calm, excitement, success), transitional gradients",
      "effects": "Section-to-section animations, scroll-triggered reveals, character/icon animations, morphing transitions, parallax narrative"
    },
    "metrics": {
      "performance": "⚠ Moderate (animations)",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "High"
    },
    "usage": {
      "bestFor": "Brand/startup stories, mission-driven products (產品), premium/lifestyle brands (品牌), documentary-style products (產品), educational",
      "avoid": "Technical/complex products (unless narrative-driven) (產品), traditional enterprise software"
    },
    "meta": {
      "frameworks": "GSAP 10/10, Framer Motion 9/10, Tailwind 8/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "28",
    "category": "Data-Dense Dashboard",
    "category_zh": "資料密集儀表板",
    "type": "商業智慧/分析",
    "keywords": "Multiple charts/widgets, data tables, KPI cards, minimal padding, grid layout, space-efficient, maximum data visibility",
    "preview_url": "refstyles/28-data-dense-dashboard.html",
    "visual": {
      "primary": "Neutral primary (light grey/white #F5F5F5), data colors (blue/green/red), dark text #333333",
      "secondary": "Chart colors: success (green #22C55E), warning (amber #F59E0B), alert (red #EF4444), neutral (grey)",
      "effects": "Hover tooltips, chart zoom on click, row highlighting on hover, smooth filter animations, data loading spinners"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Business intelligence dashboards (儀表板), financial analytics (分析), enterprise reporting, operational dashboards (儀表板), data warehousing",
      "avoid": "Marketing dashboards (儀表板), consumer-facing analytics (分析), simple reporting"
    },
    "meta": {
      "frameworks": "Recharts 9/10, Chart.js 9/10, D3.js 10/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "29",
    "category": "Heat Map & Heatmap Style",
    "category_zh": "熱圖風格",
    "type": "商業智慧/分析",
    "keywords": "Color-coded grid/matrix, data intensity visualization, geographical heat maps, correlation matrices, cell-based representation, gradient coloring",
    "preview_url": "refstyles/29-heatmap-density.html",
    "visual": {
      "primary": "Gradient scale: Cool (blue #0080FF) to hot (red #FF0000), neutral middle (white/yellow)",
      "secondary": "Support gradients: Light (cool blue) to dark (warm red), divergent for positive/negative data, monochromatic options",
      "effects": "Color gradient transitions on data change, cell highlighting on hover, tooltip reveal on click, smooth color animation"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "⚠ Colorblind considerations",
      "darkMode": "✓ Full (with adjustments)",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Geographical analysis, performance matrices (效能), correlation analysis, user behavior heatmaps, temperature/intensity data",
      "avoid": "Linear data representation, categorical comparisons (use bar charts), small datasets"
    },
    "meta": {
      "frameworks": "D3.js 10/10, Recharts 8/10, Chart.js 8/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "30",
    "category": "Executive Dashboard",
    "category_zh": "高管儀表板",
    "type": "商業智慧/分析",
    "keywords": "High-level KPIs, large key metrics, minimal detail, summary view, trend indicators, at-a-glance insights, executive summary",
    "preview_url": "refstyles/30-executive-summary.html",
    "visual": {
      "primary": "Brand colors, professional palette (blue/grey/white), accent for KPIs, red for alerts/concerns",
      "secondary": "KPI highlight colors: positive (green), negative (red), neutral (grey), trend arrow colors",
      "effects": "KPI value animations (count-up), trend arrow direction animations, metric card hover lift, alert pulse effect"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "C-suite dashboards (儀表板), business summary reports, decision-maker dashboards (儀表板), strategic planning views",
      "avoid": "Detailed analyst dashboards (儀表板), technical deep-dives, operational monitoring (監控)"
    },
    "meta": {
      "frameworks": "Recharts 9/10, Chart.js 9/10, MUI 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "31",
    "category": "Real-Time Monitoring",
    "category_zh": "即時監控",
    "type": "商業智慧/分析",
    "keywords": "Live data updates, status indicators, alert notifications, streaming data visualization, active monitoring, streaming charts",
    "preview_url": "refstyles/31-real-time-monitoring.html",
    "visual": {
      "primary": "Alert colors: critical (red #FF0000), warning (orange #FFA500), normal (green #22C55E), updating (blue animation)",
      "secondary": "Status indicator colors, chart line colors varying by metric, streaming data highlight colors",
      "effects": "Real-time chart animations, alert pulse/glow, status indicator blink animation, smooth data stream updates, loading effect"
    },
    "metrics": {
      "performance": "⚡ Good (real-time load)",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "High"
    },
    "usage": {
      "bestFor": "System monitoring dashboards (儀表板), DevOps dashboards (儀表板), real-time analytics (分析), stock market dashboards (儀表板), live event tracking",
      "avoid": "Historical analysis, long-term trend reports, archived data dashboards (儀表板)"
    },
    "meta": {
      "frameworks": "Recharts 9/10, D3.js 10/10, Socket.io 10/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "32",
    "category": "Drill-Down Analytics",
    "category_zh": "深入分析",
    "type": "商業智慧/分析",
    "keywords": "Hierarchical data exploration, expandable sections, interactive drill-down paths, summary-to-detail flow, context preservation",
    "preview_url": "refstyles/32-drill-down-analytics.html",
    "visual": {
      "primary": "Primary brand, breadcrumb colors, drill-level indicator colors, hierarchy depth colors",
      "secondary": "Drill-down path indicator colors, level-specific colors, highlight colors for selected level, transition colors",
      "effects": "Drill-down expand animations, breadcrumb click transitions, smooth detail reveal, level change smooth, data reload animation"
    },
    "metrics": {
      "performance": "⚡ Good",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "High"
    },
    "usage": {
      "bestFor": "Sales analytics (分析), product analytics (分析), funnel analysis, multi-dimensional data exploration, business intelligence",
      "avoid": "Simple linear data, single-metric dashboards (儀表板), streaming real-time dashboards (儀表板)"
    },
    "meta": {
      "frameworks": "D3.js 10/10, Recharts 8/10, AG Grid 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "33",
    "category": "Comparative Analysis Dashboard",
    "category_zh": "比較分析儀表板",
    "type": "商業智慧/分析",
    "keywords": "Side-by-side comparisons, period-over-period metrics, A/B test results, regional comparisons, performance benchmarks",
    "preview_url": "refstyles/33-comparative-analytics.html",
    "visual": {
      "primary": "Comparison colors: primary (blue), comparison (orange/purple), delta indicator (green/red)",
      "secondary": "Winning metric color (green), losing metric color (red), neutral comparison (grey), benchmark colors",
      "effects": "Comparison bar animations (grow to value), delta indicator animations (direction arrows), highlight on compare"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Period-over-period reporting, A/B test dashboards (儀表板), market comparison, competitive analysis, regional performance (效能)",
      "avoid": "Single metric dashboards (儀表板), future projections (use forecasting), real-time only (no historical)"
    },
    "meta": {
      "frameworks": "Recharts 9/10, Chart.js 9/10, D3.js 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "34",
    "category": "Predictive Analytics",
    "category_zh": "預測分析",
    "type": "商業智慧/分析",
    "keywords": "Forecast lines, confidence intervals, trend projections, scenario modeling, AI-driven insights, anomaly detection visualization",
    "preview_url": "refstyles/34-predictive-analytics.html",
    "visual": {
      "primary": "Forecast line color (distinct from actual), confidence interval shading, anomaly highlight (red alert), trend colors",
      "secondary": "High confidence (dark color), low confidence (light color), anomaly colors (red/orange), normal trend (green/blue)",
      "effects": "Forecast line animation on draw, confidence band fade-in, anomaly pulse alert, smoothing function animations"
    },
    "metrics": {
      "performance": "⚠ Good (computation)",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "High"
    },
    "usage": {
      "bestFor": "Forecasting dashboards (儀表板), anomaly detection systems, trend prediction dashboards (儀表板), AI-powered analytics (分析), budget planning",
      "avoid": "Historical-only dashboards (儀表板), simple reporting, real-time operational dashboards (儀表板)"
    },
    "meta": {
      "frameworks": "D3.js 10/10, Recharts 8/10, TensorFlow.js 8/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "35",
    "category": "User Behavior Analytics",
    "category_zh": "使用者行為分析",
    "type": "商業智慧/分析",
    "keywords": "Funnel visualization, user flow diagrams, conversion tracking, engagement metrics, user journey mapping, cohort analysis",
    "preview_url": "refstyles/35-user-behavior-analytics.html",
    "visual": {
      "primary": "Funnel stage colors: high engagement (green), drop-off (red), conversion (blue), user flow arrows (grey)",
      "secondary": "Stage completion colors (success), abandonment colors (warning), engagement levels (gradient), cohort colors",
      "effects": "Funnel animation (fill-down), flow diagram animations (connection draw), conversion pulse, engagement bar fill"
    },
    "metrics": {
      "performance": "⚡ Good",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Conversion funnel analysis, user journey tracking, engagement analytics (分析), cohort analysis, retention tracking",
      "avoid": "Real-time operational metrics, technical system monitoring (監控), financial transactions"
    },
    "meta": {
      "frameworks": "Recharts 9/10, Chart.js 9/10, D3.js 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "36",
    "category": "Financial Dashboard",
    "category_zh": "財務儀表板",
    "type": "商業智慧/分析",
    "keywords": "Revenue metrics, profit/loss visualization, budget tracking, financial ratios, portfolio performance, cash flow, audit trail",
    "preview_url": "refstyles/36-financial-analytics.html",
    "visual": {
      "primary": "Financial colors: profit (green #22C55E), loss (red #EF4444), neutral (grey), trust (dark blue #003366)",
      "secondary": "Revenue highlight (green), expenses (red), budget variance (orange/red), balance (grey), accuracy (blue)",
      "effects": "Number animations (count-up), trend direction indicators, percentage change animations, profit/loss color transitions"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AAA",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Financial reporting, accounting dashboards (儀表板), portfolio tracking, budget monitoring (監控), banking analytics (分析)",
      "avoid": "Simple business dashboards (儀表板), entertainment/social metrics (娛樂), non-financial data"
    },
    "meta": {
      "frameworks": "Recharts 9/10, Chart.js 9/10, AG Grid 10/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "37",
    "category": "Sales Intelligence Dashboard",
    "category_zh": "銷售智慧儀表板",
    "type": "商業智慧/分析",
    "keywords": "Deal pipeline, sales metrics, territory performance, sales rep leaderboard, win-loss analysis, quota tracking, forecast accuracy",
    "preview_url": "refstyles/37-sales-intelligence.html",
    "visual": {
      "primary": "Sales colors: won (green), lost (red), in-progress (blue), blocked (orange), quota met (gold), quota missed (grey)",
      "secondary": "Pipeline stage colors, rep performance colors, quota achievement colors, forecast accuracy colors",
      "effects": "Deal movement animations, metric updates, leaderboard ranking changes, gauge needle movements, status change highlights"
    },
    "metrics": {
      "performance": "⚡ Good",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "CRM dashboards (儀表板), sales management, opportunity tracking, performance management (效能), quota planning",
      "avoid": "Marketing analytics (分析), customer support metrics, HR dashboards (儀表板)"
    },
    "meta": {
      "frameworks": "Recharts 9/10, Chart.js 9/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "38",
    "category": "Neubrutalism",
    "category_zh": "新粗野主義",
    "type": "一般",
    "keywords": "Bold borders, black outlines, primary colors, thick shadows, no gradients, flat colors, 45° shadows, playful, Gen Z",
    "preview_url": "refstyles/38-neubrutalism.html",
    "visual": {
      "primary": "#FFEB3B (Yellow), #FF5252 (Red), #2196F3 (Blue), #000000 (Black borders)",
      "secondary": "Limited accent colors, high contrast combinations, no gradients allowed",
      "effects": "box-shadow: 4px 4px 0 #000, border: 3px solid #000, no gradients, sharp corners (0px), bold typography"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AAA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Gen Z brands (品牌), startups, creative agencies (創意), Figma-style apps (應用程式), Notion-style interfaces, tech blogs",
      "avoid": "Luxury brands (品牌), finance (金融), healthcare (健康), conservative industries (too playful)"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, Bootstrap 8/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "39",
    "category": "Bento Box Grid",
    "category_zh": "便當盒網格",
    "type": "一般",
    "keywords": "Modular cards, asymmetric grid, varied sizes, Apple-style, dashboard tiles, negative space, clean hierarchy, cards",
    "preview_url": "refstyles/39-bento-box.html",
    "visual": {
      "primary": "Neutral base + brand accent, #FFFFFF, #F5F5F5, brand primary",
      "secondary": "Subtle gradients, shadow variations, accent highlights for interactive cards",
      "effects": "grid-template with varied spans, rounded-xl (16px), subtle shadows, hover scale (1.02), smooth transitions"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Dashboards (儀表板), product pages, portfolios (作品集), Apple-style marketing (行銷), feature showcases, SaaS",
      "avoid": "Dense data tables, text-heavy content, real-time monitoring (監控)"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, CSS Grid 10/10",
      "era": "2020s Apple"
    }
  },
  {
    "id": "40",
    "category": "Y2K Aesthetic",
    "category_zh": "Y2K 美學",
    "type": "一般",
    "keywords": "Neon pink, chrome, metallic, bubblegum, iridescent, glossy, retro-futurism, 2000s, futuristic nostalgia",
    "preview_url": "refstyles/40-y2k-revival.html",
    "visual": {
      "primary": "#FF69B4 (Hot Pink), #00FFFF (Cyan), #C0C0C0 (Silver), #9400D3 (Purple)",
      "secondary": "Metallic gradients, glossy overlays, iridescent effects, chrome textures",
      "effects": "linear-gradient metallic, glossy buttons, 3D chrome effects, glow animations, bubble shapes"
    },
    "metrics": {
      "performance": "⚠ Good",
      "accessibility": "⚠ Check contrast",
      "darkMode": "◐ Partial",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Fashion brands (品牌), music platforms (平台), Gen Z brands (品牌), nostalgia marketing (行銷), entertainment (娛樂), youth-focused",
      "avoid": "B2B enterprise, healthcare (健康), finance (金融), conservative industries, elderly users"
    },
    "meta": {
      "frameworks": "Tailwind 8/10, CSS-in-JS 9/10",
      "era": "Y2K 2000s"
    }
  },
  {
    "id": "41",
    "category": "Cyberpunk UI",
    "category_zh": "賽博龐克 UI",
    "type": "一般",
    "keywords": "Neon, dark mode, terminal, HUD, sci-fi, glitch, dystopian, futuristic, matrix, tech noir",
    "preview_url": "refstyles/41-cyberpunk.html",
    "visual": {
      "primary": "#00FF00 (Matrix Green), #FF00FF (Magenta), #00FFFF (Cyan), #0D0D0D (Dark)",
      "secondary": "Neon gradients, scanline overlays, glitch colors, terminal green accents",
      "effects": "Neon glow (text-shadow), glitch animations (skew/offset), scanlines (::before overlay), terminal fonts"
    },
    "metrics": {
      "performance": "⚠ Moderate",
      "accessibility": "⚠ Limited (dark+neon)",
      "darkMode": "✓ Only",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Gaming platforms (遊戲), tech products (產品), crypto apps (應用程式), sci-fi applications, developer tools (工具), entertainment (娛樂)",
      "avoid": "Corporate enterprise (企業), healthcare (健康), family apps (應用程式), conservative brands (品牌), elderly users"
    },
    "meta": {
      "frameworks": "Tailwind 8/10, Custom CSS 10/10",
      "era": "2020s Cyberpunk"
    }
  },
  {
    "id": "42",
    "category": "Organic Biophilic",
    "category_zh": "有機親生命設計",
    "type": "一般",
    "keywords": "Nature, organic shapes, green, sustainable, rounded, flowing, wellness, earthy, natural textures",
    "preview_url": "refstyles/42-organic-biophilic.html",
    "visual": {
      "primary": "#228B22 (Forest Green), #8B4513 (Earth Brown), #87CEEB (Sky Blue), #F5F5DC (Beige)",
      "secondary": "Natural gradients, earth tones, sky blues, organic textures, wood/stone colors",
      "effects": "Rounded corners (16-24px), organic curves (border-radius variations), natural shadows, flowing SVG shapes"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Wellness apps (應用程式), sustainability brands (品牌), eco products (產品), health apps (健康), meditation, organic food brands (品牌)",
      "avoid": "Tech-focused products (產品), gaming (遊戲), industrial, urban brands (品牌)"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, CSS 10/10",
      "era": "2020s Sustainable"
    }
  },
  {
    "id": "43",
    "category": "AI-Native UI",
    "category_zh": "AI 原生 UI",
    "type": "一般",
    "keywords": "Chatbot, conversational, voice, assistant, agentic, ambient, minimal chrome, streaming text, AI interactions",
    "preview_url": "refstyles/43-ai-native.html",
    "visual": {
      "primary": "Neutral + single accent, #6366F1 (AI Purple), #10B981 (Success), #F5F5F5 (Background)",
      "secondary": "Status indicators, streaming highlights, context card colors, subtle accent variations",
      "effects": "Typing indicators (3-dot pulse), streaming text animations, pulse animations, context cards, smooth reveals"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "AI products (產品), chatbots, voice assistants, copilots, AI-powered tools (工具), conversational interfaces",
      "avoid": "Traditional forms, data-heavy dashboards (儀表板), print-first content"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, React 10/10",
      "era": "2020s AI-Era"
    }
  },
  {
    "id": "44",
    "category": "Memphis Design",
    "category_zh": "孟菲斯設計",
    "type": "一般",
    "keywords": "80s, geometric, playful, postmodern, shapes, patterns, squiggles, triangles, neon, abstract, bold",
    "preview_url": "refstyles/44-memphis-revival.html",
    "visual": {
      "primary": "#FF71CE (Hot Pink), #FFCE5C (Yellow), #86CCCA (Teal), #6A7BB4 (Blue Purple)",
      "secondary": "Complementary geometric colors, pattern fills, contrasting accent shapes",
      "effects": "transform: rotate(), clip-path: polygon(), mix-blend-mode, repeating patterns, bold shapes"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "⚠ Check contrast",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Creative agencies (創意), music sites (網站), youth brands (品牌), event promotion, artistic portfolios (作品集), entertainment (娛樂)",
      "avoid": "Corporate finance (金融), healthcare (健康), legal, elderly users, conservative brands (品牌)"
    },
    "meta": {
      "frameworks": "Tailwind 9/10, CSS 10/10",
      "era": "1980s Postmodern"
    }
  },
  {
    "id": "45",
    "category": "Vaporwave",
    "category_zh": "蒸氣波",
    "type": "一般",
    "keywords": "Synthwave, retro-futuristic, 80s-90s, neon, glitch, nostalgic, sunset gradient, dreamy, aesthetic",
    "preview_url": "refstyles/45-vaporwave.html",
    "visual": {
      "primary": "#FF71CE (Pink), #01CDFE (Cyan), #05FFA1 (Mint), #B967FF (Purple)",
      "secondary": "Sunset gradients, glitch overlays, VHS effects, neon accents, pastel variations",
      "effects": "text-shadow glow, linear-gradient, filter: hue-rotate(), glitch animations, retro scan lines"
    },
    "metrics": {
      "performance": "⚠ Moderate",
      "accessibility": "⚠ Poor (motion)",
      "darkMode": "✓ Dark focused",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Music platforms (平台), gaming (遊戲), creative portfolios (創意), tech startups, entertainment (娛樂), artistic projects",
      "avoid": "Business apps (應用程式), e-commerce (電子商務), education, healthcare (健康), enterprise software"
    },
    "meta": {
      "frameworks": "Tailwind 8/10, CSS-in-JS 9/10",
      "era": "1980s-90s Retro"
    }
  },
  {
    "id": "46",
    "category": "Dimensional Layering",
    "category_zh": "多維層次",
    "type": "一般",
    "keywords": "Depth, overlapping, z-index, layers, 3D, shadows, elevation, floating, cards, spatial hierarchy",
    "preview_url": "refstyles/46-dimensional-layering.html",
    "visual": {
      "primary": "Neutral base (#FFFFFF, #F5F5F5, #E0E0E0) + brand accent for elevated elements",
      "secondary": "Shadow variations (sm/md/lg/xl), elevation colors, highlight colors for top layers",
      "effects": "z-index stacking, box-shadow elevation (4 levels), transform: translateZ(), backdrop-filter, parallax"
    },
    "metrics": {
      "performance": "⚠ Good",
      "accessibility": "⚠ Moderate (SR issues)",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Dashboards (儀表板), card layouts, modals, navigation, product showcases, SaaS interfaces (SaaS)",
      "avoid": "Print-style layouts, simple blogs, low-end devices, flat design requirements"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, MUI 10/10, Chakra 10/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "47",
    "category": "Exaggerated Minimalism",
    "category_zh": "誇張極簡主義",
    "type": "一般",
    "keywords": "Bold minimalism, oversized typography, high contrast, negative space, loud minimal, statement design",
    "preview_url": "refstyles/47-exaggerated-minimalism.html",
    "visual": {
      "primary": "#000000 (Black), #FFFFFF (White), single vibrant accent only",
      "secondary": "Minimal - single accent color, no secondary colors, extreme restraint",
      "effects": "font-size: clamp(3rem 10vw 12rem), font-weight: 900, letter-spacing: -0.05em, massive whitespace"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Fashion, architecture, portfolios (作品集), agency landing pages (登陸頁面), luxury brands (品牌), editorial",
      "avoid": "E-commerce catalogs (電子商務), dashboards (儀表板), forms, data-heavy, elderly users, complex apps (應用程式)"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, Typography.js 10/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "48",
    "category": "Kinetic Typography",
    "category_zh": "動態排版",
    "type": "一般",
    "keywords": "Motion text, animated type, moving letters, dynamic, typing effect, morphing, scroll-triggered text",
    "preview_url": "refstyles/48-kinetic-typography.html",
    "visual": {
      "primary": "Flexible - high contrast recommended, bold colors for emphasis, animation-friendly palette",
      "secondary": "Accent colors for emphasis, transition colors, gradient text fills",
      "effects": "@keyframes text animation, typing effect, background-clip: text, GSAP ScrollTrigger, split text"
    },
    "metrics": {
      "performance": "⚠ Moderate",
      "accessibility": "❌ Poor (motion)",
      "darkMode": "✓ Full",
      "complexity": "High"
    },
    "usage": {
      "bestFor": "Hero sections, marketing sites (行銷), video platforms (平台), storytelling, creative portfolios (創意), landing pages (登陸頁面)",
      "avoid": "Long-form content, accessibility-critical (無障礙性), data interfaces, forms, elderly users"
    },
    "meta": {
      "frameworks": "GSAP 10/10, Framer Motion 10/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "49",
    "category": "Parallax Storytelling",
    "category_zh": "視差滾動故事",
    "type": "一般",
    "keywords": "Scroll-driven, narrative, layered scrolling, immersive, progressive disclosure, cinematic, scroll-triggered",
    "preview_url": "refstyles/49-parallax-storytelling.html",
    "visual": {
      "primary": "Story-dependent, often gradients and natural colors, section-specific palettes",
      "secondary": "Section transition colors, depth layer colors, narrative mood colors",
      "effects": "transform: translateY(scroll), position: fixed/sticky, perspective: 1px, scroll-triggered animations"
    },
    "metrics": {
      "performance": "❌ Poor",
      "accessibility": "❌ Poor (motion)",
      "darkMode": "✓ Full",
      "complexity": "High"
    },
    "usage": {
      "bestFor": "Brand storytelling, product launches, case studies, portfolios (作品集), annual reports, marketing campaigns (行銷)",
      "avoid": "E-commerce (電子商務), dashboards (儀表板), mobile-first (行動), SEO-critical, accessibility-required (無障礙性)"
    },
    "meta": {
      "frameworks": "GSAP ScrollTrigger 10/10, Locomotive Scroll 10/10",
      "era": "2020s Modern"
    }
  },
  {
    "id": "50",
    "category": "Swiss Modernism 2.0",
    "category_zh": "瑞士現代主義 2.0",
    "type": "一般",
    "keywords": "Grid system, Helvetica, modular, asymmetric, international style, rational, clean, mathematical spacing",
    "preview_url": "refstyles/50-swiss-modernism.html",
    "visual": {
      "primary": "#000000, #FFFFFF, #F5F5F5, single vibrant accent only",
      "secondary": "Minimal secondary, accent for emphasis only, no gradients",
      "effects": "display: grid, grid-template-columns: repeat(12 1fr), gap: 1rem, mathematical ratios, clear hierarchy"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AAA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Corporate sites (企業), architecture, editorial, SaaS, museums, professional services, documentation",
      "avoid": "Playful brands (品牌), children's sites (網站), entertainment (娛樂), gaming (遊戲), emotional storytelling"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, Bootstrap 9/10, Foundation 10/10",
      "era": "1950s Swiss + 2020s"
    }
  },
  {
    "id": "51",
    "category": "HUD / Sci-Fi FUI",
    "category_zh": "科幻 HUD / FUI",
    "type": "一般",
    "keywords": "Futuristic, technical, wireframe, neon, data, transparency, iron man, sci-fi, interface",
    "preview_url": "refstyles/51-hud-scifi.html",
    "visual": {
      "primary": "Neon Cyan #00FFFF, Holographic Blue #0080FF, Alert Red #FF0000",
      "secondary": "Transparent Black, Grid Lines #333333",
      "effects": "Glow effects, scanning animations, ticker text, blinking markers, fine line drawing"
    },
    "metrics": {
      "performance": "⚠ Moderate (renders)",
      "accessibility": "⚠ Poor (thin lines)",
      "darkMode": "✓ Full",
      "complexity": "High"
    },
    "usage": {
      "bestFor": "Sci-fi games, space tech, cybersecurity, movie props, immersive dashboards (儀表板)",
      "avoid": "Standard corporate (企業), reading heavy content, accessible public services"
    },
    "meta": {
      "frameworks": "React 9/10, Canvas 10/10",
      "era": "2010s Sci-Fi"
    }
  },
  {
    "id": "52",
    "category": "Pixel Art",
    "category_zh": "像素藝術",
    "type": "一般",
    "keywords": "Retro, 8-bit, 16-bit, gaming, blocky, nostalgic, pixelated, arcade",
    "preview_url": "refstyles/52-pixel-art.html",
    "visual": {
      "primary": "Primary colors (NES Palette), brights, limited palette",
      "secondary": "Black outlines, shading via dithering or block colors",
      "effects": "Frame-by-frame sprite animation, blinking cursor, instant transitions, marquee text"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ Good (if contrast ok)",
      "darkMode": "✓ Full",
      "complexity": "Medium"
    },
    "usage": {
      "bestFor": "Indie games, retro tools (工具), creative portfolios (創意), nostalgia marketing (行銷), Web3/NFT (網頁)",
      "avoid": "Professional corporate (企業), modern SaaS (SaaS), high-res photography sites (網站)"
    },
    "meta": {
      "frameworks": "CSS (box-shadow) 8/10, Canvas 10/10",
      "era": "1980s Arcade"
    }
  },
  {
    "id": "53",
    "category": "Bento Grids",
    "category_zh": "便當盒網格",
    "type": "一般",
    "keywords": "Apple-style, modular, cards, organized, clean, hierarchy, grid, rounded, soft",
    "preview_url": "refstyles/53-bento-grids.html",
    "visual": {
      "primary": "Off-white #F5F5F7, Clean White #FFFFFF, Text #1D1D1F",
      "secondary": "Subtle accents, soft shadows, blurred backdrops",
      "effects": "Hover scale (1.02), soft shadow expansion, smooth layout shifts, content reveal"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Product features, dashboards (儀表板), personal sites (網站), marketing summaries (行銷), galleries",
      "avoid": "Long-form reading, data tables, complex forms"
    },
    "meta": {
      "frameworks": "CSS Grid 10/10, Tailwind 10/10",
      "era": "2020s Apple/Linear"
    }
  },
  {
    "id": "54",
    "category": "Neubrutalism",
    "category_zh": "新粗野主義",
    "type": "一般",
    "keywords": "Bold, ugly-cute, raw, high contrast, flat, hard shadows, distinct, playful, loud",
    "preview_url": "refstyles/54-neubrutalism-v2.html",
    "visual": {
      "primary": "Pop Yellow #FFDE59, Bright Red #FF5757, Black #000000",
      "secondary": "Lavender #CBA6F7, Mint #76E0C2",
      "effects": "Hard hover shifts (4px), marquee scrolling, jitter animations, bold borders"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AAA",
      "darkMode": "✓ Full",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Design tools (工具), creative agencies (創意), Gen Z brands (品牌), personal blogs, gumroad-style",
      "avoid": "Banking, legal, healthcare (健康), serious enterprise, elderly users"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, Plain CSS 10/10",
      "era": "2020s Modern Retro"
    }
  },
  {
    "id": "55",
    "category": "Spatial UI (VisionOS)",
    "category_zh": "空間 UI (VisionOS)",
    "type": "一般",
    "keywords": "Glass, depth, immersion, spatial, translucent, gaze, gesture, apple, vision-pro",
    "preview_url": "refstyles/55-spatial-ui.html",
    "visual": {
      "primary": "Frosted Glass #FFFFFF (15-30% opacity), System White",
      "secondary": "Vibrant system colors for active states, deep shadows for depth",
      "effects": "Parallax depth, dynamic lighting response, gaze-hover effects, smooth scale on focus"
    },
    "metrics": {
      "performance": "⚠ Moderate (blur cost)",
      "accessibility": "⚠ Contrast risks",
      "darkMode": "✓ Full",
      "complexity": "High"
    },
    "usage": {
      "bestFor": "Spatial computing apps (應用程式), VR/AR interfaces, immersive media, futuristic dashboards (儀表板)",
      "avoid": "Text-heavy documents, high-contrast requirements, non-3D capable devices"
    },
    "meta": {
      "frameworks": "SwiftUI, React (Three.js/Fiber)",
      "era": "2024 Spatial Era"
    }
  },
  {
    "id": "56",
    "category": "E-Ink / Paper",
    "category_zh": "電子墨水 / 紙質",
    "type": "一般",
    "keywords": "Paper-like, matte, high contrast, texture, reading, calm, slow tech, monochrome",
    "preview_url": "refstyles/56-e-ink-paper.html",
    "visual": {
      "primary": "Off-White #FDFBF7, Paper White #F5F5F5, Ink Black #1A1A1A",
      "secondary": "Pencil Grey #4A4A4A, Highlighter Yellow #FFFF00 (accent)",
      "effects": "No motion blur, distinct page turns, grain/noise texture, sharp transitions (no fade)"
    },
    "metrics": {
      "performance": "⚡ Excellent",
      "accessibility": "✓ WCAG AAA",
      "darkMode": "✗ Low (inverted only)",
      "complexity": "Low"
    },
    "usage": {
      "bestFor": "Reading apps (應用程式), digital newspapers, minimal journals, distraction-free writing, slow-living brands (品牌)",
      "avoid": "Gaming (遊戲), video platforms (平台), high-energy marketing (行銷), dark mode dependent apps (應用程式)"
    },
    "meta": {
      "frameworks": "Tailwind 10/10, CSS 10/10",
      "era": "2020s Digital Well-being"
    }
  },
  {
    "id": "57",
    "category": "Gen Z Chaos / Maximalism",
    "category_zh": "Z 世代混亂 / 極繁主義",
    "type": "一般",
    "keywords": "Chaos, clutter, stickers, raw, collage, mixed media, loud, internet culture, ironic",
    "preview_url": "refstyles/57-gen-z-chaos.html",
    "visual": {
      "primary": "Clashing Brights: #FF00FF, #00FF00, #FFFF00, #0000FF",
      "secondary": "Gradients, rainbow, glitch, noise, heavily saturated mix",
      "effects": "Marquee scrolls, jitter, sticker layering, GIF overload, random placement, drag-and-drop"
    },
    "metrics": {
      "performance": "⚠ Poor (heavy assets)",
      "accessibility": "❌ Poor",
      "darkMode": "✓ Full",
      "complexity": "High"
    },
    "usage": {
      "bestFor": "Gen Z lifestyle brands (品牌), music artists, creative portfolios (創意), viral marketing (行銷), fashion",
      "avoid": "Corporate (企業), government, healthcare (健康), banking, serious tools (工具)"
    },
    "meta": {
      "frameworks": "CSS-in-JS 8/10",
      "era": "2023+ Internet Core"
    }
  },
  {
    "id": "58",
    "category": "Biomimetic / Organic 2.0",
    "category_zh": "仿生 / 有機 2.0",
    "type": "一般",
    "keywords": "Nature-inspired, cellular, fluid, breathing, generative, algorithms, life-like",
    "preview_url": "refstyles/58-biomimetic-organic.html",
    "visual": {
      "primary": "Cellular Pink #FF9999, Chlorophyll Green #00FF41, Bioluminescent Blue",
      "secondary": "Deep Ocean #001E3C, Coral #FF7F50, Organic gradients",
      "effects": "Breathing animations, fluid morphing, generative growth, physics-based movement"
    },
    "metrics": {
      "performance": "⚠ Moderate",
      "accessibility": "✓ Good",
      "darkMode": "✓ Full",
      "complexity": "High"
    },
    "usage": {
      "bestFor": "Sustainability tech, biotech, advanced health (健康), meditation, generative art platforms (平台)",
      "avoid": "Standard SaaS (SaaS), data grids, strict corporate (企業), accounting"
    },
    "meta": {
      "frameworks": "Canvas 10/10, WebGL 10/10",
      "era": "2024+ Generative"
    }
  }
];