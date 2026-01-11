// src/ai/conversationFlows.js

export const conversationFlows = [
  // ===== FIRST IMPRESSION / ENTRY =====

  {
    id: "start-1",
    question: "This is my first time here… where should I begin?",
    answer:
      "Welcome. You can explore at your own pace — or let us guide you. Based on your style, comfort needs, and lifestyle, we can help you discover the right collection effortlessly.",
    next: ["choose-gender", "explore-collections", "best-sellers"],
  },

  {
    id: "start-2",
    question: "Are your shoes really premium quality?",
    answer:
      "Yes. Every pair is crafted with premium materials, refined detailing, and long-term comfort in mind. We focus on durability, fit, and timeless design — not trends alone.",
    next: ["materials-quality", "warranty-info", "best-sellers"],
  },

  {
    id: "start-3",
    question: "I'm not sure what kind of shoes I should get…",
    answer:
      "That's completely normal. Your lifestyle, daily movement, and comfort preferences matter. We'll help you narrow it down step by step.",
    next: ["usage-daily", "usage-running", "usage-style"],
  },

  // ===== GENDER SELECTION =====

  {
    id: "choose-gender",
    question: "Can I browse by men's or women's collections?",
    answer:
      "Of course. Our men's and women's collections are designed separately to ensure proper fit, structure, and comfort — without compromising style.",
    next: ["men-collection", "women-collection"],
  },

  {
    id: "men-collection",
    question: "What can I expect from the men's collection?",
    answer:
      "The men's collection focuses on strength, balance, and everyday performance — from premium sneakers to versatile daily wear shoes.",
    next: ["men-sneakers", "best-sellers", "size-question"],
  },

  {
    id: "women-collection",
    question: "What makes the women's collection different?",
    answer:
      "The women's collection is designed with lightweight comfort, elegant proportions, and smooth flexibility — built for long wear without fatigue.",
    next: ["women-sneakers", "best-sellers", "size-question"],
  },

  // ===== USAGE BASED INTENT =====

  {
    id: "usage-daily",
    question: "I'm looking for something comfortable for daily use",
    answer:
      "For everyday wear, we recommend shoes that are lightweight, well-cushioned, and breathable — so your feet stay comfortable throughout the day.",
    next: ["men-sneakers", "women-sneakers", "materials-quality"],
  },

  {
    id: "usage-running",
    question: "I need shoes for walking or running",
    answer:
      "For walking or running, proper cushioning, grip, and airflow are essential. Our performance sneakers are designed to support natural movement.",
    next: ["sneakers-collection", "size-question", "materials-quality"],
  },

  {
    id: "usage-style",
    question: "Style matters more to me than anything else",
    answer:
      "Our style-focused designs balance modern aesthetics with premium construction — so you never have to choose between looks and comfort.",
    next: ["featured-products", "best-sellers", "materials-quality"],
  },

  // ===== SNEAKERS =====

  {
    id: "sneakers-collection",
    question: "What makes your sneakers different?",
    answer:
      "Our sneakers are engineered with responsive soles, breathable uppers, and long-lasting materials — built to look refined and feel effortless.",
    next: ["men-sneakers", "women-sneakers", "care-guide"],
  },

  {
    id: "men-sneakers",
    question: "Which men's sneakers are the most popular?",
    answer:
      "Customers gravitate toward designs that combine comfort, minimal aesthetics, and reliable support — these are consistently our top choices.",
    next: ["best-sellers", "size-question", "care-guide"],
  },

  {
    id: "women-sneakers",
    question: "Are women's sneakers comfortable for long wear?",
    answer:
      "Yes. They are designed with soft insoles, balanced cushioning, and lightweight structure — ideal for extended wear.",
    next: ["best-sellers", "size-question", "care-guide"],
  },

  // ===== SIZE & FIT =====

  {
    id: "size-question",
    question: "How can I be sure the size will fit me well?",
    answer:
      "Most of our shoes are true to size. If you're between two sizes, choosing the slightly larger option usually provides better comfort.",
    next: ["return-policy", "fit-feel", "care-guide"],
  },

  {
    id: "fit-feel",
    question: "How will the shoes feel when I wear them?",
    answer:
      "They're designed to feel comfortable from the first wear — soft, supportive, and naturally balanced without stiffness.",
    next: ["materials-quality", "care-guide"],
  },

  // ===== QUALITY & CARE =====

  {
    id: "materials-quality",
    question: "What materials are used in your shoes?",
    answer:
      "We use premium leather, engineered mesh, and high-density rubber soles — chosen for durability, breathability, and comfort.",
    next: ["care-guide", "warranty-info"],
  },

  {
    id: "care-guide",
    question: "How do I keep my shoes looking new?",
    answer:
      "Clean gently with a soft cloth or brush, avoid prolonged water exposure, and store them in a dry place when not in use.",
    next: ["warranty-info", "return-policy"],
  },

  // ===== WARRANTY & RETURNS =====

  {
    id: "warranty-info",
    question: "Is there any warranty coverage?",
    answer:
      "Yes. We offer warranty coverage for manufacturing defects within a specified period to ensure peace of mind.",
    next: ["return-policy", "support-help"],
  },

  {
    id: "return-policy",
    question: "What if the shoes don't feel right?",
    answer:
      "If the product is unused and in original condition, you can return it within the return window for a smooth experience.",
    next: ["support-help", "start-1"],
  },

  // ===== SUPPORT & DISCOVERY =====

  {
    id: "support-help",
    question: "Can I talk to someone directly?",
    answer:
      "Our support team is always available to assist you with any questions or concerns — we're here to help.",
    next: ["start-1", "explore-collections"],
  },

  {
    id: "explore-collections",
    question: "I want to explore everything",
    answer:
      "You can browse all collections freely and discover designs that match your taste and lifestyle.",
    next: ["men-collection", "women-collection", "best-sellers"],
  },

  {
    id: "best-sellers",
    question: "Which products do customers love the most?",
    answer:
      "Our best sellers are chosen by customers for their comfort, design balance, and everyday reliability.",
    next: ["featured-products", "materials-quality", "size-question"],
  },

  {
    id: "featured-products",
    question: "What does 'featured' mean?",
    answer:
      "Featured products are handpicked by our team for their design excellence, innovation, and premium feel.",
    next: ["best-sellers", "materials-quality"],
  },
];







// ===== PART 2 : TRUST · DELIVERY · BRAND · PAYMENT =====

export const conversationFlowsPart2 = [

  // ===== DELIVERY & SHIPPING =====

  {
    id: "delivery-time",
    question: "How long does delivery usually take?",
    answer:
      "Delivery times depend on your location, but most orders are shipped promptly and arrive within a standard delivery window. We prioritize careful handling over speed alone.",
    next: ["shipping-tracking", "international-shipping"],
  },

  {
    id: "shipping-tracking",
    question: "Will I be able to track my order?",
    answer:
      "Yes. Once your order is shipped, you'll receive tracking details so you can follow your package every step of the way.",
    next: ["delivery-time", "support-help"],
  },

  {
    id: "international-shipping",
    question: "Do you ship internationally?",
    answer:
      "Yes. Our products are available to customers worldwide. Shipping availability and delivery times may vary by region.",
    next: ["customs-duties", "delivery-time"],
  },

  {
    id: "customs-duties",
    question: "Will I need to pay customs or extra fees?",
    answer:
      "Customs duties or import fees depend on your country's regulations. These are usually handled locally and are not controlled by us.",
    next: ["payment-security", "support-help"],
  },

  // ===== PAYMENT & SECURITY =====

  {
    id: "payment-security",
    question: "Is it safe to pay on this website?",
    answer:
      "Absolutely. All payments are protected with secure encryption technology to keep your information safe at all times.",
    next: ["payment-methods", "trust-authenticity"],
  },

  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer:
      "We support commonly used secure payment methods so you can choose what feels most convenient and reliable for you.",
    next: ["payment-security", "return-policy"],
  },

  {
    id: "refund-process",
    question: "How does the refund process work?",
    answer:
      "Once a return is approved, refunds are processed smoothly and credited back to your original payment method within the standard timeframe.",
    next: ["return-policy", "support-help"],
  },

  // ===== TRUST & AUTHENTICITY =====

  {
    id: "trust-authenticity",
    question: "How do I know this brand is authentic?",
    answer:
      "Every product is designed, sourced, and quality-checked under strict standards. We focus on long-term trust, not short-term sales.",
    next: ["brand-philosophy", "materials-quality"],
  },

  {
    id: "quality-control",
    question: "Do you inspect products before shipping?",
    answer:
      "Yes. Each pair goes through quality checks to ensure it meets our standards before it reaches you.",
    next: ["materials-quality", "care-guide"],
  },

  {
    id: "reviews-trust",
    question: "Can I trust customer reviews?",
    answer:
      "Customer feedback reflects real experiences. We believe transparency builds trust, even when opinions differ.",
    next: ["best-sellers", "support-help"],
  },

  // ===== BRAND STORY & PHILOSOPHY =====

  {
    id: "brand-philosophy",
    question: "What does your brand stand for?",
    answer:
      "We believe premium products should feel effortless, last longer, and age gracefully — designed for real life, not just display.",
    next: ["design-approach", "sustainability"],
  },

  {
    id: "design-approach",
    question: "How do you approach design?",
    answer:
      "Our design process starts with comfort and function, then refines aesthetics to create timeless pieces rather than short-lived trends.",
    next: ["materials-quality", "best-sellers"],
  },

  {
    id: "sustainability",
    question: "Do you care about sustainability?",
    answer:
      "We aim to use materials and processes that reduce waste and improve durability — buying less, but better.",
    next: ["care-guide", "brand-philosophy"],
  },

  // ===== PRICE & VALUE =====

  {
    id: "price-worth",
    question: "Are your shoes worth the price?",
    answer:
      "Our pricing reflects material quality, craftsmanship, and longevity. The goal is value over time, not just initial cost.",
    next: ["materials-quality", "best-sellers"],
  },

  {
    id: "comparison",
    question: "How are your shoes different from others?",
    answer:
      "We focus on balance — comfort, design, and durability — instead of maximizing one while compromising the others.",
    next: ["design-approach", "quality-control"],
  },

  // ===== USER HESITATION =====

  {
    id: "hesitation-buying",
    question: "I like them, but I'm still not fully sure…",
    answer:
      "That's understandable. Take your time. A good purchase should feel confident, not rushed.",
    next: ["return-policy", "support-help"],
  },

  {
    id: "gift-question",
    question: "Are these suitable as a gift?",
    answer:
      "Yes. Our shoes are designed to be versatile and refined — making them a thoughtful and practical gift.",
    next: ["size-question", "return-policy"],
  },

  // ===== SUPPORT & END =====

  {
    id: "human-support",
    question: "What if I still have questions?",
    answer:
      "Our support team is always ready to help you make the right decision — before and after purchase.",
    next: ["support-help", "start-1"],
  },
];







// ===== PART 3 : OBJECTIONS · EMOTIONS · LONG-TERM VALUE =====

export const conversationFlowsPart3 = [

  // ===== COMPARISON & DOUBT =====

  {
    id: "compare-brands",
    question: "Why should I choose your brand over others?",
    answer:
      "We don't try to be everything to everyone. We focus on balance — comfort, durability, and timeless design — and do that consistently well.",
    next: ["long-term-value", "design-philosophy"],
  },

  {
    id: "cheaper-alternatives",
    question: "I found similar shoes for a lower price.",
    answer:
      "Lower prices often reflect compromises in materials or longevity. We design our products to remain reliable and comfortable over time.",
    next: ["price-worth", "long-term-value"],
  },

  {
    id: "expensive-concern",
    question: "They feel a bit expensive…",
    answer:
      "That's a fair thought. The price reflects how the product performs and ages — not just how it looks on day one.",
    next: ["long-term-value", "return-policy"],
  },

  // ===== LONG-TERM OWNERSHIP =====

  {
    id: "long-term-value",
    question: "How long will these shoes actually last?",
    answer:
      "With regular use and basic care, they're designed to serve you well over a long period — both structurally and aesthetically.",
    next: ["care-guide", "materials-quality"],
  },

  {
    id: "everyday-use",
    question: "Are these meant for everyday wear?",
    answer:
      "Yes. They're designed to adapt naturally to daily routines — comfortable enough for long hours, refined enough for various settings.",
    next: ["comfort-fit", "style-versatility"],
  },

  {
    id: "style-versatility",
    question: "Will they match different outfits?",
    answer:
      "Our designs focus on neutral balance, allowing them to pair effortlessly with both casual and refined looks.",
    next: ["design-approach", "best-sellers"],
  },

  // ===== EMOTIONAL DECISION SUPPORT =====

  {
    id: "confidence-check",
    question: "How will I feel after buying these?",
    answer:
      "Ideally, confident and comfortable — knowing you chose something thoughtfully designed, not impulsively purchased.",
    next: ["hesitation-buying", "return-policy"],
  },

  {
    id: "regret-fear",
    question: "What if I regret the purchase?",
    answer:
      "That's exactly why we offer a clear return policy. You should never feel trapped by a decision.",
    next: ["return-policy", "human-support"],
  },

  {
    id: "overthinking",
    question: "I might be overthinking this.",
    answer:
      "That's normal. When something matters, thinking carefully is a strength — not a weakness.",
    next: ["confidence-check", "support-help"],
  },

  // ===== BRAND CHARACTER =====

  {
    id: "brand-honesty",
    question: "What if these aren't right for me?",
    answer:
      "Then they aren't. We respect honest choices — even when that means waiting or choosing differently.",
    next: ["human-support", "start-1"],
  },

  {
    id: "who-its-for",
    question: "Who are these shoes really for?",
    answer:
      "For people who value comfort, quality, and subtle design — without needing loud branding or trends.",
    next: ["design-approach", "brand-philosophy"],
  },

  // ===== FINAL SOFT CLOSE =====

  {
    id: "final-thought",
    question: "Any final advice before I decide?",
    answer:
      "Choose what feels right long-term. A good product should quietly support your life — not demand attention.",
    next: ["support-help", "start-1"],
  },
];
