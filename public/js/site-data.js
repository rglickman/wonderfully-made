/**
 * ============================================================================
 * WONDERFULLY MADE REFLEXOLOGY — EASY EDIT CONFIGURATION (site-data.js)
 * ============================================================================
 * Want to update a price, phone number, email, or add a blog post?
 * Simply edit the values in this file and save! Every page on the website
 * (Front Page, Pricing, Blog, and Privacy Statement) reads from this file.
 * ============================================================================
 */

window.WONDERFULLY_MADE_DATA = {
  business: {
    name: "Wonderfully Made Reflexology",
    legalName: "Wonderfully Made LLC",
    scriptureQuote: "“...for I am fearfully and wonderfully made.”",
    scriptureRef: "Psalm 139 v14",
    pillars: ["Relax", "Balance", "Heal", "Enjoy"],
    owner: "Jean Glickman",
    credentialsShort: "ARCB Nationally Certified Reflexologist & RAA / NCRA Member",
    phoneDisplay: "678-801-6064",
    phoneHref: "tel:6788016064",
    smsHref: "sms:6788016064",
    email: "jean@wonderfully-made.org",
    emailHref: "mailto:jean@wonderfully-made.org",
    location: "Charlotte, NC",
    regionNote: "Serving Charlotte, NC & surrounding areas • Studio & mobile sessions available"
  },

  /**
   * --------------------------------------------------------------------------
   * PRICING & SERVICES (Used on Pricing page & Home summary)
   * --------------------------------------------------------------------------
   */
  pricing: {
    travelFee: 15,
    travelFeeNote: "$15 travel fee when applicable (for in-home or on-site mobile sessions)",
    giftCertificatesNote: "Gift Certificates Available — thoughtful wellness gifts for birthdays, holidays, mothers-to-be, and loved ones.",
    groupNote: "Also available to do full or mini-sessions for businesses, groups, or parties (2-hour minimum).",
    essentialOilsNote: "Certified Aromatherapy (Zollinger Method) available with or without essential oils at the client's discretion — no extra charge.",

    services: [
      {
        id: "foot-session",
        name: "1 Foot Session",
        displayTitle: "Foot Reflexology Session",
        subtitle: "Western or Thai Foot Reflexology",
        price: 70,
        duration: "60 Minutes",
        badge: "Most Popular",
        featured: false,
        description:
          "Targeted thumb and finger micro-movement techniques across the reflex maps of the feet to relieve stress, improve circulation, encourage lymphatic flow, and support whole-body balance.",
        highlights: [
          "Choice of classic Western Foot Reflexology or Thai Foot Reflexology",
          "Optional Zollinger Method essential oils tailored to your needs",
          "Stimulates neural pathways across all 10 vertical body zones",
          "Promotes deep relaxation, restorative sleep, and natural pain relief"
        ]
      },
      {
        id: "hand-foot-combo",
        name: "Hand & Foot Session",
        displayTitle: "Hand & Foot Complete Session",
        subtitle: "Full-Spectrum Restorative Experience",
        price: 90,
        savingsNote: "Save $20 vs. separate sessions",
        duration: "75–90 Minutes",
        badge: "Best Value • Save $20",
        featured: true,
        description:
          "Our most comprehensive restorative treatment combining complete foot and hand reflexology. Ideal for deep nervous-system reset, chronic tension relief, and full-body circulation.",
        highlights: [
          "Complete reflex point stimulation on both feet and both hands",
          "Saves $20 compared to booking foot ($70) and hand ($40) separately",
          "Optional therapeutic essential oils (Zollinger Method) included",
          "Extended time to focus on problem areas (back, hips, neck, or sleep)"
        ]
      },
      {
        id: "hand-session",
        name: "1 Hand Session",
        displayTitle: "Hand Reflexology Session",
        subtitle: "Gentle & Accessible Reflex Therapy",
        price: 40,
        duration: "30–40 Minutes",
        badge: "Gentle & Focused",
        featured: false,
        description:
          "A soothing, deeply relaxing session working the full anatomical reflex map of the hands. Wonderful as a standalone restorative session, for seniors, or when feet are sensitive.",
        highlights: [
          "Stimulates all 5 vertical zones in each hand and 8 horizontal divisions",
          "Relieves hand/wrist fatigue while supporting whole-body relaxation",
          "Can be performed seated or reclined with optional essential oils",
          "Safe, non-invasive, and comforting for clients of all ages"
        ]
      }
    ],

    groupOffering: {
      title: "Businesses, Groups & Private Parties",
      minimum: "2-Hour Minimum",
      subtitle: "Full or Mini-Sessions On-Site in the Greater Charlotte Area",
      description:
        "Bring restorative wellness to your workplace appreciation day, wellness fair, bridal shower, caregiver support group, or private gathering. Jean provides customizable full or mini foot and hand reflexology sessions on-site.",
      bullets: [
        "Flexible 15-, 20-, or 30-minute mini-sessions or full sessions",
        "Popular for corporate workplace wellness (proven to reduce workplace stress)",
        "Hand or foot reflexology options to suit any venue or seating layout",
        "Custom quote based on group size, duration (2hr min), and location"
      ]
    }
  },

  /**
   * --------------------------------------------------------------------------
   * INTERACTIVE REFLEXOLOGY ANATOMICAL ZONES (Used in Zone Explorer)
   * --------------------------------------------------------------------------
   */
  reflexZones: [
    {
      id: "head-sinuses",
      name: "Head, Brain & Sinuses",
      zoneNumber: "Zones 1–5 (Tips of Toes & Fingers)",
      footLocation: "Pads and tips of the great toe and all toes",
      handLocation: "Tips and upper pads of the thumb and fingers",
      benefits: "Helps calm mental chatter, ease head and sinus tension, and support restful sleep.",
      coordinates: { footX: 34, footY: 13, handX: 48, handY: 14 }
    },
    {
      id: "eyes-ears",
      name: "Eyes, Ears & Neck",
      zoneNumber: "Zones 2–5 (Base of Toes & Fingers)",
      footLocation: "Base of toes 2–5 and neck of the great toe",
      handLocation: "Webbing and base of fingers 2–5 and thumb",
      benefits: "Releases accumulated screen strain, neck stiffness, and upper cervical tension.",
      coordinates: { footX: 60, footY: 22, handX: 62, handY: 28 }
    },
    {
      id: "lungs-chest",
      name: "Lungs, Chest & Shoulders",
      zoneNumber: "Zones 1–5 (Ball of Foot & Upper Palm)",
      footLocation: "Ball of the foot (plantar cushion) beneath the toes",
      handLocation: "Padded mound of the upper palm beneath the fingers",
      benefits: "Encourages deeper, unhurried breathing, oxygenation, and release of shoulder tightness.",
      coordinates: { footX: 62, footY: 36, handX: 58, handY: 44 }
    },
    {
      id: "solar-plexus",
      name: "Solar Plexus & Diaphragm",
      zoneNumber: "Zone 2–3 Central Autonomic Point",
      footLocation: "Natural hollow just below the ball of the foot in the center",
      handLocation: "Central hollow of the palm along the diaphragm line",
      benefits: "Known as the 'stress switch' of reflexology—quiets the sympathetic fight-or-flight response.",
      coordinates: { footX: 48, footY: 44, handX: 47, handY: 53 }
    },
    {
      id: "stomach-digestion",
      name: "Stomach, Liver & Upper Digestion",
      zoneNumber: "Zones 1–4 (Upper Arch)",
      footLocation: "Upper medial arch just below the solar plexus line",
      handLocation: "Mid-palm below the diaphragm ridge",
      benefits: "Supports natural detoxification, digestive harmony, and metabolic balance.",
      coordinates: { footX: 54, footY: 57, handX: 52, handY: 65 }
    },
    {
      id: "spine-pathway",
      name: "Spinal Pathway (Cervical to Sacral)",
      zoneNumber: "Zone 1 (Medial Edge)",
      footLocation: "Entire inner (medial) edge of the foot following the curve of the spine",
      handLocation: "Outer edge of the thumb down to the wrist crease",
      benefits: "Addresses postural fatigue, back discomfort, and central nervous system communication.",
      coordinates: { footX: 29, footY: 55, handX: 24, handY: 56 }
    },
    {
      id: "lower-back-pelvic",
      name: "Lower Back, Hips & Sciatic",
      zoneNumber: "Zones 1–5 (Heel & Ankle Reflexes)",
      footLocation: "Heel pad and band across the lower heel/ankle",
      handLocation: "Base of the palm and inner wrist crease",
      benefits: "Especially soothing for lower back discomfort, hip tension, and leg fatigue after standing or dancing.",
      coordinates: { footX: 50, footY: 79, handX: 49, handY: 79 }
    }
  ],

  /**
   * --------------------------------------------------------------------------
   * CLINICAL ARTICLES & RESEARCH LINKS (All 20 links from original site)
   * --------------------------------------------------------------------------
   */
  organizationLinks: [
    {
      title: "Additional History Info",
      subtitle: "Origins from Ancient Egypt to Zone Therapy",
      url: "https://www.reflexology-usa.org/information/history-of-reflexology/"
    },
    {
      title: "Reflexology Studies",
      subtitle: "Evidence-Based Clinical Research Index",
      url: "https://www.takingcharge.csh.umn.edu/what-does-research-say-about-reflexology"
    },
    {
      title: "ARCB",
      subtitle: "American Reflexology Certification Board",
      url: "https://www.arcb.net/"
    },
    {
      title: "RAA",
      subtitle: "Reflexology Association of America",
      url: "https://www.reflexology-usa.org/"
    },
    {
      title: "NCRE",
      subtitle: "National Council for Reflexology Educators",
      url: "https://www.reflexologyeducators.org/"
    },
    {
      title: "NCRA",
      subtitle: "North Carolina Reflexology Association",
      url: "https://ncreflexology.org/"
    }
  ],

  researchArticles: [
    {
      title: "Contraindications — UMN",
      category: "safety",
      source: "University of Minnesota (Bakken Center)",
      summary: "Important safety overview, circulation & lymphatic considerations, and when to consult your physician.",
      url: "https://www.takingcharge.csh.umn.edu/is-reflexology-safe"
    },
    {
      title: "Studies — Benefits for Various Ailments",
      category: "general",
      source: "Clinical Evidence Overview",
      summary: "Comprehensive summary of international clinical trials across pain, sleep, neuropathy, and recovery.",
      url: "https://www.takingcharge.csh.umn.edu/what-does-research-say-about-reflexology"
    },
    {
      title: "Research Overview",
      category: "general",
      source: "NCCIH / Integrative Health",
      summary: "National Center for Complementary and Integrative Health overview on reflexology studies and mechanisms.",
      url: "https://www.nccih.nih.gov/health/reflexology"
    },
    {
      title: "Research Benefits — UMN",
      category: "general",
      source: "University of Minnesota",
      summary: "How reflexology works with the central nervous system to reduce tension and improve blood supply.",
      url: "https://www.takingcharge.csh.umn.edu/how-does-reflexology-work"
    },
    {
      title: "Health and Healing — UMN",
      category: "general",
      source: "University of Minnesota",
      summary: "Introduction to reflexology maps on the feet, hands, and outer ears for whole-body wellbeing.",
      url: "https://www.takingcharge.csh.umn.edu/reflexology"
    },
    {
      title: "Study — Low Back Pain",
      category: "pain",
      source: "PubMed Central / NIH Clinical Trial",
      summary: "Double-blind clinical trial demonstrating significant reduction in chronic low back pain intensity.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3696219/"
    },
    {
      title: "Cancer Symptoms Support",
      category: "stress",
      source: "National Cancer Institute / Oncology Research",
      summary: "NCI-funded research on reflexology for symptom relief, fatigue reduction, and comfort during care.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3576031/"
    },
    {
      title: "Benefits for Seniors",
      category: "workplace",
      source: "Geriatric & Restorative Wellness",
      summary: "Gentle circulation enhancement, joint comfort, balance support, and sleep quality in older adults.",
      url: "https://pubmed.ncbi.nlm.nih.gov/32310878/"
    },
    {
      title: "High Blood Pressure Overview",
      category: "cardio",
      source: "Cardiovascular Autonomic Regulation",
      summary: "How foot reflexology increases vagal modulation and supports healthy blood pressure regulation.",
      url: "https://pubmed.ncbi.nlm.nih.gov/22181483/"
    },
    {
      title: "Study — High BP & Vital Signs",
      category: "cardio",
      source: "PMC Meta-Analysis of RCTs",
      summary: "Meta-analysis of 13 randomized controlled trials showing positive effects on systolic and diastolic BP.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9489354/"
    },
    {
      title: "Diabetes & Neuropathy Support",
      category: "cardio",
      source: "Complementary Therapies in Clinical Practice",
      summary: "Clinical findings on plantar reflexology for glycemic support and peripheral circulation in diabetes.",
      url: "https://pubmed.ncbi.nlm.nih.gov/24974085/"
    },
    {
      title: "Anxiety & Sleep Relief",
      category: "stress",
      source: "PubMed / Clinical Nursing Research",
      summary: "Evidence showing reduced anxiety scores and improved restorative sleep quality following foot sessions.",
      url: "https://pubmed.ncbi.nlm.nih.gov/25234581/"
    },
    {
      title: "Pain Institute Findings",
      category: "pain",
      source: "Systematic Pain Review",
      summary: "Analysis of bilateral foot reflexology protocols stimulating the solar plexus and target reflex zones.",
      url: "https://www.scielo.br/j/brjp/a/njx6pgYGnvNthbwjqTDGhyH/?lang=en"
    },
    {
      title: "Study — Pain Perception",
      category: "pain",
      source: "PMC / NIH Research",
      summary: "Clinical evaluation of how reflexology reduces musculoskeletal pain perception in high-stress roles.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5114793/"
    },
    {
      title: "Study — Effective Pain Relief",
      category: "pain",
      source: "University of Portsmouth / PubMed",
      summary: "Landmark research finding that reflexology increases pain tolerance and decreases pain sensitivity.",
      url: "https://pubmed.ncbi.nlm.nih.gov/23597624/"
    },
    {
      title: "Stress & Holistic Healing",
      category: "stress",
      source: "University of Minnesota Wellbeing",
      summary: "Understanding the stress-relief mechanism that allows the body's internal systems to regenerate.",
      url: "https://www.takingcharge.csh.umn.edu/how-does-reflexology-work"
    },
    {
      title: "Studies — Benefits in Workplace",
      category: "workplace",
      source: "Occupational Health Research",
      summary: "Workplace reflexology studies showing reduced employee sick days, lower stress, and higher focus.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5114793/"
    },
    {
      title: "Benefit in Workplace Wellness",
      category: "workplace",
      source: "Corporate Wellness & Ergonomics",
      summary: "Why on-site mini reflexology sessions are an effective, non-invasive corporate wellness benefit.",
      url: "https://www.reflexology-usa.org/information/benefits-of-reflexology/"
    },
    {
      title: "History of Reflexology",
      category: "general",
      source: "Historical Archive",
      summary: "From ancient Egyptian physician tombs (2330 BCE) to Dr. William Fitzgerald, Dr. Riley, and Eunice Ingham.",
      url: "https://www.reflexology-usa.org/information/history-of-reflexology/"
    },
    {
      title: "Cramping & Muscular Tension",
      category: "pain",
      source: "PubMed Clinical Study",
      summary: "Clinical research on foot reflexology for relieving muscle cramping, spasms, and cyclical discomfort.",
      url: "https://pubmed.ncbi.nlm.nih.gov/20188760/"
    }
  ],

  /**
   * --------------------------------------------------------------------------
   * CLIENT TESTIMONIALS
   * --------------------------------------------------------------------------
   */
  testimonials: [
    {
      quote:
        "REFLEXOLOGY is the best thing I have ever done. My doctors took me off my arthritis meds because it was causing complications. I can't take anything for the pain. My body has been hurting all over and I have just had to live with it. I woke this morning in NO PAIN. I feel 20 years old and going dancing tonight. This was my first session and I am 100% sold on it.",
      author: "C. Butler",
      tag: "Arthritis & Whole-Body Pain Relief"
    },
    {
      quote:
        "Thank you Jean Glickman for the reflexology session. I've been sleeping so good! The pain in my hip and leg is gone! I'm feeling so much better! She's amazing guys. Message her for an appointment!",
      author: "P. Umphlett",
      tag: "Restorative Sleep & Hip/Leg Relief"
    },
    {
      quote: "An amazing experience!",
      author: "B. Monroe",
      tag: "Deep Relaxation & Balance"
    }
  ],

  /**
   * --------------------------------------------------------------------------
   * OUR TEAM
   * --------------------------------------------------------------------------
   */
  teamQuote: {
    text: "“Unity is strength… when there is teamwork and collaboration wonderful things can be achieved”",
    author: "Mattie Stepanek"
  },

  team: [
    {
      name: "Jean Glickman",
      role: "Owner • Certified Reflexologist",
      credentials: "ARCB Nationally Certified • RAA & NCRA Member • Certified in Aromatherapy",
      bio: "I am a nationally certified reflexologist through ARCB (American Reflexology Certification Board), a member of RAA (Reflexology Association of America), and a member of NCRA (North Carolina Reflexology Association). I was on the board of GRO (Georgia Reflexology Organization) until my move to Charlotte, NC. I was trained under Roz Zollinger in Atlanta and received both my foot reflexology and my advanced foot reflexology at her Heal Center, and have also gone on to learn Thai Reflexology. It is a privilege to practice this amazing modality, and to be a part of health journeys.",
      initials: "JG"
    },
    {
      name: "Ron Glickman",
      role: "Technology",
      credentials: "Digital Operations & Systems",
      bio: "Keeping Wonderfully Made Reflexology connected, streamlined, and accessible so Jean can focus entirely on caring for her clients.",
      initials: "RG"
    },
    {
      name: "Rascal",
      role: "The Real Boss",
      credentials: "Chief Morale & Relaxation Officer",
      bio: "Setting the gold standard for afternoon relaxation, warm welcomes, and stress-free living in our Charlotte home.",
      image: "assets/images/rascal-boss.jpg",
      initials: "🐾"
    }
  ],

  /**
   * --------------------------------------------------------------------------
   * BLOG & NEWS UPDATES
   * --------------------------------------------------------------------------
   */
  blogPosts: [
    {
      id: "charlotte-move",
      title: "Practicing in Our New Home in Charlotte, NC!",
      date: "Recent Update",
      category: "Practice News",
      excerpt:
        "Just moved to Charlotte, NC and looking forward to practicing in my new home! Now welcoming new and returning clients across the Greater Charlotte area.",
      content: [
        "Just moved to Charlotte, NC and looking forward to practicing in my new home!",
        "After serving clients in Georgia and serving on the board of the Georgia Reflexology Organization (GRO), we are thrilled to call Charlotte, North Carolina home. I am now a proud member of the North Carolina Reflexology Association (NCRA) alongside my national certification through the American Reflexology Certification Board (ARCB) and membership in the Reflexology Association of America (RAA).",
        "Whether you are looking for a deeply relaxing Western foot or hand reflexology session, a Thai foot reflexology session, or a Zollinger method session enhanced with certified therapeutic essential oils, I would be honored to be part of your wellness journey. Call or text 678-801-6064 or email jean@wonderfully-made.org to book your appointment."
      ]
    },
    {
      id: "more-to-come",
      title: "More to come!",
      date: "March 6, 2018",
      category: "Announcements",
      excerpt: "Stay tuned for upcoming news regarding Wonderfully Made LLC.",
      content: [
        "Stay tuned for upcoming news regarding Wonderfully Made LLC.",
        "We created Wonderfully Made Reflexology around the timeless truth of Psalm 139:14 — “...for I am fearfully and wonderfully made.” Your body is made to work hard to keep you healthy, and reflexology offers a gentle, non-invasive way to encourage your body to relax, balance, heal, and enjoy."
      ]
    }
  ]
};
