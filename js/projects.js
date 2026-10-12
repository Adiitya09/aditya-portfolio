/* ============================================================
   PROJECT DATA — Aditya Patil's Portfolio
   Source of Truth for Project Cards & Detail Modal
   ============================================================ */

const PROJECTS = [
  // ── 01. CETCampus ──────────────────────────────────────────
  {
    id: 'cetcampus',
    title: 'CETCampus',
    subtitle: 'Navigate Your Engineering Future',
    category: 'SOFTWARE / WEB / DATA',
    categories: ['software', 'web', 'data', 'data-analytics'],
    filterCategories: ['software', 'web', 'data-analytics'],
    filterTags: ['software', 'web', 'data-analytics', 'python', 'sql'],
    size: 'large',
    visualType: 'screenshot',
    accentColor: 'var(--md-primary)',
    shortDesc: 'Data-driven MHT-CET engineering college recommendation platform evaluating 28,377 verified CAP cutoffs across 326 Maharashtra colleges with transparent Safe, Moderate, and Reach classification.',
    description: 'Data-driven MHT-CET engineering college recommendation platform evaluating 28,377 verified CAP cutoffs across 326 Maharashtra colleges with transparent Safe, Moderate, and Reach classification.',
    techs: ['Python', 'FastAPI', 'Next.js 15', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    technologies: [
      'Next.js 15 (App Router)',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'Python 3.12',
      'Pydantic v2',
      'PostgreSQL (Supabase)',
      'SQLAlchemy 2.0',
      'Uvicorn',
      'Pandas',
      'OpenPyXL',
      'Pytest'
    ],
    techCategories: {
      'Frontend': ['Next.js 15 (App Router)', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
      'Backend': ['Python 3.12', 'FastAPI', 'Pydantic v2', 'SQLAlchemy 2.0', 'Uvicorn'],
      'Database': ['PostgreSQL (Supabase)', 'SQLite (Local Fallback)'],
      'Tools & Pipeline': ['Pandas', 'OpenPyXL', 'Pytest (65 Automated Tests)'],
      'Deployment': ['Render (Backend API)', 'Vercel (Frontend)', 'Supabase (Cloud Database)']
    },
    github: 'https://github.com/Adiitya09/CETCampus.git',
    kpis: [
      { label: 'Cutoff Records', value: '28,377' },
      { label: 'Institutions', value: '326' },
      { label: 'Disciplines', value: '94' },
      { label: 'Seat Quotas', value: '77' }
    ],
    image: 'assets/Projects/cetcampus/cetcampus-home.png',
    images: [
      {
        src: 'assets/Projects/cetcampus/cetcampus-home.png',
        title: 'CETCAMPUS Landing Page & Verified Cutoff Stats',
        caption: 'Data-driven Maharashtra engineering admissions discovery platform featuring instant cutoff evaluation and verified CAP round metrics.'
      },
      {
        src: 'assets/Projects/cetcampus/cetcampus-predictor.png',
        title: '5-Step Guided Recommendation Form',
        caption: 'Student input wizard evaluating percentile scores, official CAP reservation categories, branch interests, and location preferences.'
      },
      {
        src: 'assets/Projects/cetcampus/cetcampus-results.png',
        title: 'Admission Recommendations Engine Results',
        caption: 'Transparent classification into Safe, Moderate, and Reach institutions with recommendation scores, cohort means, and safety margins.'
      },
      {
        src: 'assets/Projects/cetcampus/cetcampus-colleges.png',
        title: '326 Accredited Engineering Institutions Directory',
        caption: 'Faceted institutional directory with real-time filtering across districts, regions, disciplines, and seat allotment quotas.'
      },
      {
        src: 'assets/Projects/cetcampus/cetcampus-compare.png',
        title: 'Multi-College Side-by-Side Comparison Matrix',
        caption: 'Comparative evaluation of institutional cutoff spreads, cohort averages, quota thresholds, and branch offerings.'
      },
      {
        src: 'assets/Projects/cetcampus/cetcampus-college-detail.png',
        title: 'In-Depth College Cutoff & Quota Profile',
        caption: 'Comprehensive branch-by-branch cutoff analytics displaying historical minimum, cohort mean, topper cutoff, and admitted sample size.'
      },
      {
        src: 'assets/Projects/cetcampus/cetcampus-dashboard.png',
        title: 'Candidate Dashboard & Planning Workspace',
        caption: 'Personalized shortlist workspace with saved colleges, custom notes for CAP option form submission, and query re-run history.'
      }
    ],
    overview: 'A full-stack, data-driven engineering college recommendation platform built to help Maharashtra MHT-CET and JEE candidates discover, evaluate, and compare accredited colleges using 28,377 official historical CAP round cutoff records and transparent mathematical classification.',
    problem: 'Maharashtra engineering admissions through the Centralized Admission Process (CAP) involve complex cutoff data across hundreds of colleges, 94 disciplines, and 77 seat categories (GOPENS, LOPENH, TFWS, EWS, AI, etc.). Students rely on fragmented PDFs or misleading commercial counseling that make unrealistic admission claims, creating confusion during option form submission.',
    solution: 'CETCAMPUS provides an auditable, transparent recommendation engine that calculates mathematical cutoff margins (Δ = P_student - Cutoff_min) and cohort averages. It classifies options into Safe, Moderate, and Reach institutions with zero fabricated probabilities, supported by side-by-side college comparisons and personal shortlists.',
    features: [
      {
        num: '01',
        name: 'Student Predictor Engine',
        desc: 'Evaluates percentiles against verified cutoff minimums and cohort means across 77 official seat allotment categories (GOPENS, LOPENH, TFWS, EWS, OBC, SC, ST) with transparent recommendation scoring.'
      },
      {
        num: '02',
        name: '326 Institutions Directory',
        desc: 'Faceted search interface providing real-time filtering across all accredited Maharashtra colleges by name, district, administrative region, branch, and seat quota.'
      },
      {
        num: '03',
        name: 'In-Depth College Profiles',
        desc: 'Granular cutoff matrices for every offered branch showing historical minimum, cohort mean, topper cutoff, admitted sample size, and an integrated eligibility calculator.'
      },
      {
        num: '04',
        name: 'Multi-College Comparison Matrix',
        desc: 'Side-by-side comparative matrix allowing candidates to evaluate 2 to 4 colleges simultaneously across cutoff distributions, offered disciplines, and accreditation status.'
      },
      {
        num: '05',
        name: 'Candidate Planning Dashboard',
        desc: 'Personalized shortlist workspace allowing students to bookmark target colleges, record custom notes for CAP option forms, and review past prediction queries.'
      },
      {
        num: '06',
        name: 'Admin & Ingestion Pipeline',
        desc: 'Real-time dataset distribution analytics with an automated .xlsx ingestion pipeline to validate and process future annual CAP round updates.'
      },
      {
        num: '07',
        name: 'Educational Advisory & Integrity',
        desc: 'Zero fabricated data guarantee — 100% of cutoffs, institutions, and categories are parsed strictly from the audited historical dataset with explicit non-guarantee advisories.'
      }
    ],
    architectureDiagram: [
      {
        layer: 'Frontend Layer',
        title: 'Next.js 15 (App Router) + TypeScript + Tailwind CSS',
        desc: 'Responsive modern UI, reactive client filters, dynamic optgroup selectors, multi-college comparison, and zero SSR hydration mismatches.',
        iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
      },
      {
        layer: 'API & Transport Layer',
        title: 'FastAPI (Python 3.12) + Pydantic v2 + Uvicorn',
        desc: 'Asynchronous REST endpoints (/api/predict, /api/colleges, /api/stats, /api/compare) with strict schema validation and error handling.',
        iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>'
      },
      {
        layer: 'Business Logic & Recommendation Engine',
        title: 'Deterministic Recommendation Service (recommendation_service.py)',
        desc: 'Calculates exact cutoff margins (Δ = P - Cutoff_min), evaluates cohort means, assigns Safe/Moderate/Reach classifications, and computes 0–100 recommendation scores.',
        iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>'
      },
      {
        layer: 'Database & Ingestion Pipeline',
        title: 'PostgreSQL / Supabase + SQLAlchemy 2.0 (SQLite Fallback)',
        desc: 'Normalized relational schema storing 28,377 cutoff records across 326 colleges, 94 branches, and 77 seat types. Ingestion pipeline powered by Pandas & OpenPyXL.',
        iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>'
      }
    ],
    implementation: 'Engineered with clean separation of concerns: the recommendation algorithm is implemented as a pure-Python domain service decoupled from FastAPI, enabling headless batch execution and automated unit testing (65 pytest test suites). The data pipeline extracts, validates, and models 28,377 official CAP cutoff rows from Excel into normalized relational tables. The Next.js 15 frontend communicates via type-safe REST calls, featuring debounced faceted search, responsive side-by-side comparison tables, and local storage state persistence.',
    challenges: 'Normalizing complex multi-quota seat structures across home university (H), other university (O), state level (S), and all-India (AI) categories. Optimizing relational query performance to deliver sub-100ms multi-factor recommendation filtering across tens of thousands of cutoff rows without client-side lag, while guaranteeing complete SSR hydration safety in Next.js 15.',
    learnings: 'Gained practical experience designing a production full-stack analytics platform integrating FastAPI, SQLAlchemy, and Next.js 15 App Router. Learned the critical necessity of algorithmic transparency and deterministic scoring over black-box models in high-stakes educational decision-making.',
    details: {
      overview: 'A full-stack, data-driven engineering college recommendation platform built to help Maharashtra MHT-CET and JEE candidates discover, evaluate, and compare accredited colleges using 28,377 official historical CAP round cutoff records and transparent mathematical classification.',
      problem: 'Maharashtra engineering admissions through the Centralized Admission Process (CAP) involve complex cutoff data across hundreds of colleges, 94 disciplines, and 77 seat categories (GOPENS, LOPENH, TFWS, EWS, AI, etc.). Students rely on fragmented PDFs or misleading commercial counseling that make unrealistic admission claims, creating confusion during option form submission.',
      solution: 'CETCAMPUS provides an auditable, transparent recommendation engine that calculates mathematical cutoff margins (Δ = P_student - Cutoff_min) and cohort averages. It classifies options into Safe, Moderate, and Reach institutions with zero fabricated probabilities, supported by side-by-side college comparisons and personal shortlists.',
      features: [
        {
          num: '01',
          name: 'Student Predictor Engine',
          desc: 'Evaluates percentiles against verified cutoff minimums and cohort means across 77 official seat allotment categories (GOPENS, LOPENH, TFWS, EWS, OBC, SC, ST) with transparent recommendation scoring.'
        },
        {
          num: '02',
          name: '326 Institutions Directory',
          desc: 'Faceted search interface providing real-time filtering across all accredited Maharashtra colleges by name, district, administrative region, branch, and seat quota.'
        },
        {
          num: '03',
          name: 'In-Depth College Profiles',
          desc: 'Granular cutoff matrices for every offered branch showing historical minimum, cohort mean, topper cutoff, admitted sample size, and an integrated eligibility calculator.'
        },
        {
          num: '04',
          name: 'Multi-College Comparison Matrix',
          desc: 'Side-by-side comparative matrix allowing candidates to evaluate 2 to 4 colleges simultaneously across cutoff distributions, offered disciplines, and accreditation status.'
        },
        {
          num: '05',
          name: 'Candidate Planning Dashboard',
          desc: 'Personalized shortlist workspace allowing students to bookmark target colleges, record custom notes for CAP option forms, and review past prediction queries.'
        },
        {
          num: '06',
          name: 'Admin & Ingestion Pipeline',
          desc: 'Real-time dataset distribution analytics with an automated .xlsx ingestion pipeline to validate and process future annual CAP round updates.'
        },
        {
          num: '07',
          name: 'Educational Advisory & Integrity',
          desc: 'Zero fabricated data guarantee — 100% of cutoffs, institutions, and categories are parsed strictly from the audited historical dataset with explicit non-guarantee advisories.'
        }
      ],
      architecture: 'A decoupled three-tier architecture: Next.js 15 App Router frontend communicating via REST JSON with a Python 3.12 FastAPI backend, powered by a pure-Python mathematical recommendation service and PostgreSQL (Supabase) database with SQLAlchemy 2.0 ORM.',
      implementation: 'Engineered with clean separation of concerns: the recommendation algorithm is implemented as a pure-Python domain service decoupled from FastAPI, enabling headless batch execution and automated unit testing (65 pytest test suites). The data pipeline extracts, validates, and models 28,377 official CAP cutoff rows from Excel into normalized relational tables. The Next.js 15 frontend communicates via type-safe REST calls, featuring debounced faceted search, responsive side-by-side comparison tables, and local storage state persistence.',
      challenges: 'Normalizing complex multi-quota seat structures across home university (H), other university (O), state level (S), and all-India (AI) categories. Optimizing relational query performance to deliver sub-100ms multi-factor recommendation filtering across tens of thousands of cutoff rows without client-side lag, while guaranteeing complete SSR hydration safety in Next.js 15.',
      learnings: 'Gained practical experience designing a production full-stack analytics platform integrating FastAPI, SQLAlchemy, and Next.js 15 App Router. Learned the critical necessity of algorithmic transparency and deterministic scoring over black-box models in high-stakes educational decision-making.'
    }
  },

  // ── 02. IPL Analysis Dashboard ─────────────────────────────
  {
    id: 'ipl-analysis',
    title: 'IPL Scores Analysis ',
    subtitle: 'IPL Analysis 2008–2025',
    category: 'DATA ANALYTICS',
    categories: ['data-analytics', 'data', 'analytics'],
    filterCategories: ['data-analytics'],
    filterTags: ['data-analytics', 'power-bi', 'python', 'excel'],
    size: 'medium',
    visualType: 'screenshot',
    accentColor: 'var(--md-primary)',
    shortDesc: 'Interactive Power BI analytics dashboard exploring 18 seasons (2008–2025) of IPL match and ball-by-ball data, tracking team trends, player KPIs, toss decisions, and winning margins.',
    description: 'Interactive Power BI analytics dashboard exploring 18 seasons (2008–2025) of IPL match and ball-by-ball data, tracking team trends, player KPIs, toss decisions, and winning margins.',
    techs: ['Power BI', 'DAX', 'Power Query', 'Data Analysis', 'Python'],
    technologies: [
      'Power BI Desktop',
      'DAX (Data Analysis Expressions)',
      'Power Query',
      'Python 3.x',
      'Pandas',
      'NumPy',
      'Microsoft Excel / CSV',
      'Data Modeling (Star Schema)',
      'Interactive Data Visualization'
    ],
    techCategories: {
      'Dashboard & BI': ['Power BI Desktop', 'DAX Measures & KPIs', 'Data Modeling (Star Schema)'],
      'Data Pipeline & ETL': ['Power Query', 'Python 3.x (Pandas, NumPy)', 'Microsoft Excel / CSV'],
      'Visual Analytics': ['Interactive Slicers', 'Cross-Filtering', 'KPI Cards', 'Drill-Down Matrix']
    },
    github: 'https://github.com/Adiitya09/IPL-Analysis-2008---2025-.git',
    kpis: [
      { label: 'Seasons Analyzed', value: '2008–2025' },
      { label: 'Matches Analyzed', value: '1,000+' },
      { label: 'Ball-by-Ball Rows', value: '250,000+' },
      { label: 'Analytical Engine', value: 'Power BI + DAX' }
    ],
    image: 'assets/Projects/IPL Dashboard- I.png',
    images: [
      {
        src: 'assets/Projects/IPL Dashboard- I.png',
        title: 'IPL Match & Seasonal Trends Overview',
        caption: 'Interactive Power BI dashboard exploring seasonal win trends, toss impact, match venues, and team outcomes.'
      },
      {
        src: 'assets/Projects/IPL Dashboard- II.png',
        title: 'IPL Team & Player Performance Analytics',
        caption: 'Deep-dive player analytics tracking top run scorers, leading wicket takers, strike rates, and economy rates.'
      }
    ],
    overview: 'An interactive Business Intelligence project developed in Microsoft Power BI analyzing 18 seasons (2008–2025) of Indian Premier League cricket data. The dashboard unifies ball-by-ball deliveries, match summaries, century records, player profiles, and team data into dynamic visual intelligence.',
    problem: 'Cricket datasets spanning 18 seasons contain hundreds of thousands of ball-by-ball rows. Without structured data modeling, extracting actionable insights on franchise consistency, toss-outcome correlations, player impact across venues, and seasonal run-rate escalation is extremely difficult.',
    dataWorkflow: 'Raw match data, ball-by-ball records, player rosters, and team datasets were preprocessed and cleaned using Python (Pandas/NumPy in Jupyter notebooks) and Power Query. Built a robust star schema data model linking delivery and match fact tables with player and team dimensions via match_id and entity keys.',
    analysis: 'Authored custom DAX calculations for dynamic metrics: Total Runs, Total Wickets, Win Percentage, Average Runs per Innings, Orange Cap and Purple Cap tracking, and venue-specific scoring rates. Evaluated the strategic impact of toss decisions (batting first vs. chasing) across day and night fixtures.',
    visualizations: [
      'Interactive Season Slicers & Dynamic KPI Cards (Matches Played, Total Runs, Wickets, Season Winner, Runner-Up).',
      'Team Performance & Win-Margin Matrix tracking run-based vs. wicket-based victory distributions.',
      'Player Leaderboard Visuals tracking Orange Cap run-scorers, Purple Cap wicket-takers, boundary counts (4s & 6s), and strike rates.',
      'Toss Match Result Breakdown analyzing win conversion rates when winning the toss vs. batting/bowling first.',
      'Venue-wise Performance Analysis comparing pitch scoring behaviors across international and domestic stadiums.'
    ],
    insights: [
      'Quantified toss decision impact: Chasing teams won over 53% of matches overall, with pronounced advantage in evening matches due to dew factor.',
      'Longitudinal run-rate inflation: Average first-innings team scores rose steadily from ~158 runs in 2008–2010 to over 182 runs in the 2023–2024 seasons.',
      'Franchise consistency analysis revealed that teams with top-3 batting strike rates in powerplays had a 72% higher likelihood of qualifying for playoffs.',
      'Identified top multi-season individual performers holding sustained records across 18 consecutive tournament editions.'
    ],
    learnings: 'Mastered multi-table star schema relational modeling in Power BI Desktop, engineered performant DAX time-intelligence calculations for multi-season slicing, and developed sports analytics storytelling for stakeholder consumption.',
    details: {
      overview: 'An interactive Business Intelligence project developed in Microsoft Power BI analyzing 18 seasons (2008–2025) of Indian Premier League cricket data. The dashboard unifies ball-by-ball deliveries, match summaries, century records, player profiles, and team data into dynamic visual intelligence.',
      problem: 'Cricket datasets spanning 18 seasons contain hundreds of thousands of ball-by-ball rows. Without structured data modeling, extracting actionable insights on franchise consistency, toss-outcome correlations, player impact across venues, and seasonal run-rate escalation is extremely difficult.',
      dataWorkflow: 'Raw match data, ball-by-ball records, player rosters, and team datasets were preprocessed and cleaned using Python (Pandas/NumPy in Jupyter notebooks) and Power Query. Built a robust star schema data model linking delivery and match fact tables with player and team dimensions via match_id and entity keys.',
      analysis: 'Authored custom DAX calculations for dynamic metrics: Total Runs, Total Wickets, Win Percentage, Average Runs per Innings, Orange Cap and Purple Cap tracking, and venue-specific scoring rates. Evaluated the strategic impact of toss decisions (batting first vs. chasing) across day and night fixtures.',
      visualizations: [
        'Interactive Season Slicers & Dynamic KPI Cards (Matches Played, Total Runs, Wickets, Season Winner, Runner-Up).',
        'Team Performance & Win-Margin Matrix tracking run-based vs. wicket-based victory distributions.',
        'Player Leaderboard Visuals tracking Orange Cap run-scorers, Purple Cap wicket-takers, boundary counts (4s & 6s), and strike rates.',
        'Toss Match Result Breakdown analyzing win conversion rates when winning the toss vs. batting/bowling first.',
        'Venue-wise Performance Analysis comparing pitch scoring behaviors across international and domestic stadiums.'
      ],
      insights: [
        'Quantified toss decision impact: Chasing teams won over 53% of matches overall, with pronounced advantage in evening matches due to dew factor.',
        'Longitudinal run-rate inflation: Average first-innings team scores rose steadily from ~158 runs in 2008–2010 to over 182 runs in the 2023–2024 seasons.',
        'Franchise consistency analysis revealed that teams with top-3 batting strike rates in powerplays had a 72% higher likelihood of qualifying for playoffs.',
        'Identified top multi-season individual performers holding sustained records across 18 consecutive tournament editions.'
      ],
      learnings: 'Mastered multi-table star schema relational modeling in Power BI Desktop, engineered performant DAX time-intelligence calculations for multi-season slicing, and developed sports analytics storytelling for stakeholder consumption.'
    }
  },

  // ── 03. PulseTalk — AI-Powered Sentiment Analysis Platform ──
  {
    id: 'pulsetalk',
    title: 'PulseTalk — AI-Powered Sentiment Analysis Platform',
    subtitle: 'Full-Stack NLP Sentiment & Emotion Intelligence',
    category: 'NLP / AI / FULL-STACK',
    categories: ['software', 'web', 'nlp', 'ai', 'machine-learning'],
    filterCategories: ['software', 'web'],
    filterTags: ['software', 'web', 'python', 'react', 'fastapi', 'nlp'],
    size: 'compact',
    visualType: 'bar',
    accentColor: 'var(--md-primary)',
    shortDesc: 'A full-stack sentiment analysis platform that analyzes text and social-media content using NLP models to classify sentiment, detect emotions, generate summaries, and present results through an interactive analytics dashboard.',
    description: 'A full-stack sentiment analysis platform that analyzes text and social-media content using NLP models to classify sentiment, detect emotions, generate summaries, and present results through an interactive analytics dashboard.',
    techs: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'Python', 'FastAPI', 'PyTorch', 'Hugging Face Transformers', 'MongoDB'],
    technologies: [
      'React 18',
      'Tailwind CSS',
      'Node.js 18+',
      'Express.js',
      'Python 3.11+',
      'FastAPI',
      'PyTorch',
      'Hugging Face Transformers',
      'MongoDB (Mongoose)',
      'Chart.js',
      'Framer Motion',
      'JWT Authentication & bcrypt'
    ],
    techCategories: {
      'Frontend & UI': ['React 18', 'Tailwind CSS', 'Vite', 'Chart.js', 'Framer Motion', 'Lucide Icons'],
      'Backend & Gateway': ['Node.js 18+', 'Express.js', 'JWT Authentication', 'bcryptjs', 'Rate Limiting (Helmet, Express-Rate-Limit)', 'Winston Logger', 'Cheerio'],
      'NLP & Machine Learning': ['Python 3.11+', 'FastAPI', 'PyTorch', 'Hugging Face Transformers (DistilBERT SST-2, DistilRoBERTa 7 Emotions, DistilBART CNN)', 'Uvicorn', 'Pydantic v2'],
      'Database & Export': ['MongoDB', 'Mongoose ODM', 'JSON / CSV Export Pipeline']
    },
    github: 'https://github.com/Adiitya09/PulseTalk',
    kpis: [
      { label: 'Emotions Detected', value: '7 Categories' },
      { label: 'Model Stack', value: 'DistilBERT & RoBERTa' },
      { label: 'Batch Processing', value: 'Up to 100 Texts' },
      { label: 'Inference Speed', value: '<50ms Async' }
    ],
    overview: 'PulseTalk is a production-grade full-stack sentiment analysis platform that combines a modern React frontend with a secure Node.js orchestration gateway and a decoupled Python FastAPI machine learning microservice. It analyzes text and social media content, classifies sentiment with confidence scores, detects 7 distinct emotional states, generates summaries, and provides interactive visual analytics with historical export capabilities.',
    problem: 'Evaluating nuanced consumer sentiment and emotional tone across customer feedback and social discourse is difficult with basic rule-based sentiment tools. Organizations need an integrated, multi-tier system that can evaluate direct text and extracted web/social content, distinguish subtle emotions (such as joy, anger, or disgust), process batches efficiently, and export structured audit records.',
    solution: 'PulseTalk solves this with a decoupled three-tier architecture: an interactive React client featuring Chart.js analytics and Framer Motion animations, a secure Node.js/Express API gateway handling authentication and MongoDB data persistence, and an asynchronous Python FastAPI microservice utilizing PyTorch and Hugging Face transformer models (DistilBERT SST-2 for sentiment, DistilRoBERTa for 7 emotions) delivering real-time inferences.',
    features: [
      {
        num: '01',
        name: 'Sentiment Classification',
        desc: 'Classifies text into Positive, Negative, or Neutral with calibrated confidence scores using fine-tuned DistilBERT SST-2 transformer models.'
      },
      {
        num: '02',
        name: '7-Category Emotion Detection',
        desc: 'Identifies granular emotional states (joy, sadness, anger, fear, surprise, disgust, neutral) with individual confidence ratings via DistilRoBERTa.'
      },
      {
        num: '03',
        name: 'Text Summarization',
        desc: 'Generates concise summaries for long-form content using transformer-based abstractive text summarization.'
      },
      {
        num: '04',
        name: 'Batch Processing Engine',
        desc: 'Processes up to 100 text samples in a single asynchronous request with validation and aggregated sentiment distributions.'
      },
      {
        num: '05',
        name: 'Interactive Analytics & Exports',
        desc: 'Visualizes sentiment trends, emotion breakdowns, and historical analysis records with one-click JSON and CSV data exports.'
      }
    ],
    insights: [
      'Decoupling the ML inference service behind a standalone FastAPI microservice preserved Node.js event-loop throughput while allowing PyTorch model weights to remain pre-warmed in memory.',
      'Fine-tuned DistilRoBERTa emotion detection provided actionable behavioral signals that standard binary or ternary sentiment polarities failed to capture.',
      'Asynchronous batching and input sequence truncation capped inference latency at under 50ms per typical query on standard CPU hardware.'
    ],
    challengesTitle: 'System & Engineering Challenges',
    challenges: 'Key technical challenges addressed in the PulseTalk implementation:\n\n1. Asynchronous Service Orchestration: Bridging Node.js/Express API gateway requests with a separate Python FastAPI ML service while ensuring resilient error handling, timeouts, and network failure fallbacks.\n\n2. Transformer Model Cold-Start & Latency: Optimizing model initialization by loading PyTorch Hugging Face weights during FastAPI startup and utilizing lightweight distilled architectures (DistilBERT and DistilRoBERTa) to sustain low-latency inference.\n\n3. Multi-Tier Security: Implementing JWT access and refresh token authentication, bcrypt password hashing, input validation schemas, and rate-limiting to protect endpoints from abuse.\n\n4. Data Integrity & Streaming Exports: Designing clean Mongoose schemas for historical analyses while supporting performant streaming exports to JSON and CSV formats.',
    learnings: 'Practical engineering takeaways demonstrated by the project:\n\n1. Modern Microservice Design: Successfully designed and deployed a decoupled multi-runtime stack combining React, Node.js, and Python FastAPI.\n\n2. NLP Model Serving in Production: Mastered deploying transformer pipelines with Hugging Face, PyTorch, and Pydantic validation for high-throughput text classification.\n\n3. Full-Stack Data Flow & State Management: Coordinated end-to-end data lifecycle from user input, authentication, and database persistence to reactive Chart.js visualization.',
    details: {
      overview: 'PulseTalk is a production-grade full-stack sentiment analysis platform that combines a modern React frontend with a secure Node.js orchestration gateway and a decoupled Python FastAPI machine learning microservice. It analyzes text and social media content, classifies sentiment with confidence scores, detects 7 distinct emotional states, generates summaries, and provides interactive visual analytics with historical export capabilities.',
      problem: 'Evaluating nuanced consumer sentiment and emotional tone across customer feedback and social discourse is difficult with basic rule-based sentiment tools. Organizations need an integrated, multi-tier system that can evaluate direct text and extracted web/social content, distinguish subtle emotions (such as joy, anger, or disgust), process batches efficiently, and export structured audit records.',
      solution: 'PulseTalk solves this with a decoupled three-tier architecture: an interactive React client featuring Chart.js analytics and Framer Motion animations, a secure Node.js/Express API gateway handling authentication and MongoDB data persistence, and an asynchronous Python FastAPI microservice utilizing PyTorch and Hugging Face transformer models (DistilBERT SST-2 for sentiment, DistilRoBERTa for 7 emotions) delivering real-time inferences.',
      features: [
        {
          num: '01',
          name: 'Sentiment Classification',
          desc: 'Classifies text into Positive, Negative, or Neutral with calibrated confidence scores using fine-tuned DistilBERT SST-2 transformer models.'
        },
        {
          num: '02',
          name: '7-Category Emotion Detection',
          desc: 'Identifies granular emotional states (joy, sadness, anger, fear, surprise, disgust, neutral) with individual confidence ratings via DistilRoBERTa.'
        },
        {
          num: '03',
          name: 'Text Summarization',
          desc: 'Generates concise summaries for long-form content using transformer-based abstractive text summarization.'
        },
        {
          num: '04',
          name: 'Batch Processing Engine',
          desc: 'Processes up to 100 text samples in a single asynchronous request with validation and aggregated sentiment distributions.'
        },
        {
          num: '05',
          name: 'Interactive Analytics & Exports',
          desc: 'Visualizes sentiment trends, emotion breakdowns, and historical analysis records with one-click JSON and CSV data exports.'
        }
      ],
      insights: [
        'Decoupling the ML inference service behind a standalone FastAPI microservice preserved Node.js event-loop throughput while allowing PyTorch model weights to remain pre-warmed in memory.',
        'Fine-tuned DistilRoBERTa emotion detection provided actionable behavioral signals that standard binary or ternary sentiment polarities failed to capture.',
        'Asynchronous batching and input sequence truncation capped inference latency at under 50ms per typical query on standard CPU hardware.'
      ],
      challenges: 'Key technical challenges addressed in the PulseTalk implementation:\n\n1. Asynchronous Service Orchestration: Bridging Node.js/Express API gateway requests with a separate Python FastAPI ML service while ensuring resilient error handling, timeouts, and network failure fallbacks.\n\n2. Transformer Model Cold-Start & Latency: Optimizing model initialization by loading PyTorch Hugging Face weights during FastAPI startup and utilizing lightweight distilled architectures (DistilBERT and DistilRoBERTa) to sustain low-latency inference.\n\n3. Multi-Tier Security: Implementing JWT access and refresh token authentication, bcrypt password hashing, input validation schemas, and rate-limiting to protect endpoints from abuse.\n\n4. Data Integrity & Streaming Exports: Designing clean Mongoose schemas for historical analyses while supporting performant streaming exports to JSON and CSV formats.',
      learnings: 'Practical engineering takeaways demonstrated by the project:\n\n1. Modern Microservice Design: Successfully designed and deployed a decoupled multi-runtime stack combining React, Node.js, and Python FastAPI.\n\n2. NLP Model Serving in Production: Mastered deploying transformer pipelines with Hugging Face, PyTorch, and Pydantic validation for high-throughput text classification.\n\n3. Full-Stack Data Flow & State Management: Coordinated end-to-end data lifecycle from user input, authentication, and database persistence to reactive Chart.js visualization.'
    }
  },

  // ── 04. Scanalyze — Smart OMR Sheet Evaluator ───────────────
  {
    id: 'omr-evaluator',
    title: 'Scanalyze — Smart OMR Sheet Evaluator',
    subtitle: 'Automated Computer Vision & Analytics Platform',
    category: 'COMPUTER VISION',
    categories: ['computer-vision', 'vision', 'software'],
    filterCategories: ['computer-vision', 'software'],
    filterTags: ['computer-vision', 'software', 'python'],
    size: 'compact',
    visualType: 'screenshot',
    accentColor: 'var(--md-tertiary)',
    shortDesc: 'Automates the evaluation of optical mark recognition (OMR) answer sheets using an OpenCV computer vision pipeline and FastAPI backend, providing instant bubble grading, student score breakdowns, and teacher analytics.',
    description: 'Automates the evaluation of optical mark recognition (OMR) answer sheets using an OpenCV computer vision pipeline and FastAPI backend, providing instant bubble grading, student score breakdowns, and teacher analytics.',
    techs: ['Python', 'OpenCV', 'FastAPI', 'React', 'MySQL', 'NumPy'],
    technologies: [
      'Python 3.11+',
      'OpenCV (cv2 4.8)',
      'NumPy 1.24',
      'FastAPI',
      'React 18',
      'MySQL 8.0+ / SQLite',
      'SQLAlchemy 2.0',
      'Pillow & pdf2image',
      'Recharts',
      'Tailwind CSS',
      'Pytest',
      'JWT Authentication'
    ],
    techCategories: {
      'Computer Vision': ['OpenCV 4.8', 'NumPy 1.24', 'Adaptive Gaussian Thresholding', 'Contour Geometry & Circularity', 'Pillow', 'pdf2image (300 DPI)'],
      'Backend & API': ['Python 3.11+', 'FastAPI', 'Pydantic v2 Schemas', 'JWT Bearer Auth & RBAC', 'Uvicorn Server', 'Multipart Form Ingestion'],
      'Database & ORM': ['SQLAlchemy 2.0', 'MySQL 8.0+ (PyMySQL)', 'SQLite (Local Dev)', 'Connection Pooling (Pool Size 10)', 'Database Migrations'],
      'Frontend & UI': ['React 18', 'Vite', 'Tailwind CSS', 'Recharts (Pie & Bar Visuals)', 'Axios', 'Heroicons & Lucide Icons'],
      'Testing & DevOps': ['Pytest Automated Suite', 'Docker & Docker Compose', 'Railway (Backend)', 'Vercel (Frontend)']
    },
    github: 'https://github.com/Adiitya09/Scanalyze',
    kpis: [
      { label: 'Vision Stages', value: '5-Stage Pipeline' },
      { label: 'Supported Inputs', value: 'JPG, PNG, PDF' },
      { label: 'Choice Spectrum', value: 'A–H (Up to 8)' },
      { label: 'Database Support', value: 'MySQL / SQLite' }
    ],
    image: 'assets/Projects/omr/4.png',
    images: [
      {
        src: 'assets/Projects/omr/4.png',
        title: 'Teacher Assessment Command Center',
        caption: 'Centralized educator dashboard monitoring total examinations created, active assessments, and enrolled student participation.'
      },
      {
        src: 'assets/Projects/omr/5.png',
        title: 'Exam Creation & Parameter Configuration',
        caption: 'Educator assessment configuration interface supporting question ranges (1–200), custom max marks, and multiple-choice options (A–H).'
      },
      {
        src: 'assets/Projects/omr/6.png',
        title: 'Answer Key Calibration & Presets',
        caption: 'Interactive answer key grid providing manual bubble entry, quick-fill batch patterns (All A through D), and automated random key generation.'
      },
      {
        src: 'assets/Projects/omr/9.png',
        title: 'Drag-and-Drop OMR Ingestion Interface',
        caption: 'Multi-format student upload portal supporting JPG, PNG, and PDF document files (max 10MB) with client-side file integrity validation.'
      },
      {
        src: 'assets/Projects/omr/10.png',
        title: 'Instant Exam Evaluation & Visual Analytics',
        caption: 'Automated evaluation view displaying total score, percentage, grade (A+ through F), pass/fail badge, Recharts distribution pie, and question performance bar chart.'
      },
      {
        src: 'assets/Projects/omr/11.png',
        title: 'Question-wise Answer Comparison Matrix',
        caption: 'Auditable question-level comparison matrix contrasting student choices against official answer keys with correct, wrong, and multiple-marked indicators.'
      },
      {
        src: 'assets/Projects/omr/7.png',
        title: 'Student Portal & Exam Registry',
        caption: 'Student dashboard displaying available teacher exams, completion history, average score percentages, and direct submission links.'
      },
      {
        src: 'assets/Projects/omr/1.png',
        title: 'Role-Based Authentication Gateway',
        caption: 'Dual-persona security portal enforcing strict role-based access control (RBAC) separating educator administrative privileges from student exam submissions.'
      }
    ],
    overview: 'Scanalyze is an end-to-end Optical Mark Recognition (OMR) evaluation platform designed to automate the grading of physical multiple-choice answer sheets. Combining an OpenCV computer vision pipeline with a reactive FastAPI backend and React frontend, the system connects exam creation, answer-key management, multi-format sheet upload (JPG, PNG, PDF), automated bubble detection, instant score generation, and educator analytics.',
    problem: 'Manual evaluation of physical multiple-choice exam sheets is repetitive, time-consuming, and prone to human grading errors during high-volume test cycles. Commercial optical mark reader hardware requires expensive dedicated scanners and proprietary paper formats that create financial barriers for academic departments. Furthermore, manual grading delays result publishing and deprives teachers of question-by-question performance diagnostics needed to identify learning gaps.',
    solution: 'Scanalyze delivers a software-driven, scanner-independent workflow: teachers author exams and calibrate answer keys (manual, batch quick-fill, or random presets); students authenticate via unique roll numbers and upload image or PDF scans; the backend normalizes resolution, performs adaptive Gaussian thresholding and contour analysis, filters bubbles, calculates fill density, and matches choices against stored keys. Instant score summaries, letter grades, Recharts visualizations, and downloadable CSV spreadsheets are generated immediately.',
    pipelineTitle: 'OMR Processing Pipeline',
    pipeline: 'The OMR engine (omr_processor.py) processes submitted documents through 6 sequential computer vision stages: Format & Ingestion Validation → Resolution Normalization (1000px width) → Illumination-Invariant Preprocessing (Adaptive Gaussian Thresholding) → Bubble Contour Extraction & Geometric Filtering → Spatial Clustering & Row Grouping (Δy ≤ 30px) → Density Mask Evaluation & Confidence Scoring.',
    pipelineSteps: [
      {
        num: 1,
        name: 'Document Ingestion & Resolution Normalization',
        tag: 'Ingestion & Scaling',
        technique: 'pdf2image (300 DPI) · cv2.resize (1000px Target Width) · INTER_AREA',
        desc: 'Validates file extensions (.jpg, .jpeg, .png, .pdf) and file size (≤ 10MB). Multi-page PDFs are converted to 300 DPI bitmaps using pdf2image. Input dimensions are normalized to a standard target width of 1000px using cv2.resize (INTER_AREA downscaling or INTER_LINEAR upscaling), guaranteeing that spatial contour filters behave identically regardless of camera megapixel variance.'
      },
      {
        num: 2,
        name: 'Illumination-Invariant Image Preprocessing',
        tag: 'Spatial Filtering',
        technique: 'cv2.cvtColor · cv2.GaussianBlur(5, 5) · cv2.adaptiveThreshold(GAUSSIAN_C, 11, 2)',
        desc: 'Converts color scans to single-channel grayscale and suppresses high-frequency sensor noise using a 5×5 Gaussian blur kernel. Binarizes the image using Adaptive Gaussian Thresholding (block size 11, constant 2, cv2.THRESH_BINARY_INV) to dynamically calculate local thresholds, providing robustness against non-uniform ambient illumination, shadows, and camera angle lighting gradients.'
      },
      {
        num: 3,
        name: 'Morphological Cleanup & Contour Extraction',
        tag: 'Contour Geometry',
        technique: 'cv2.morphologyEx(MORPH_CLOSE, 3x3) · cv2.findContours(RETR_EXTERNAL)',
        desc: 'Applies morphological closing with an elliptical (3, 3) structuring element to seal minor boundary breaks in printed bubble perimeters. Detects external contours using cv2.findContours(RETR_EXTERNAL, CHAIN_APPROX_SIMPLE) and filters candidate shapes through strict geometric criteria: area between 50 and 5,000 px, circularity (4π·area / perimeter²) ≥ 0.25, and bounding box aspect ratio within 0.35 of 1.0.'
      },
      {
        num: 4,
        name: 'Spatial Clustering & Row Grouping',
        tag: 'Centroid Sorting',
        technique: 'Centroid Ordering · Vertical Proximity (Δy ≤ 30px) · Horizontal Choice Sorting',
        desc: 'Sorts valid bubble centroids by vertical coordinate (top-to-bottom). Groups bubbles into cohesive question rows by evaluating vertical centroid proximity within a 30-pixel threshold (Δy ≤ 30px). Within each clustered row, bubbles are sorted along the horizontal x-axis (left-to-right) to index choices corresponding to letters A through H.'
      },
      {
        num: 5,
        name: 'Mask Fill Density & Multiple-Mark Detection',
        tag: 'Answer Evaluation',
        technique: 'cv2.fillPoly Mask · cv2.countNonZero · Threshold = 0.42 · Collision Flag',
        desc: 'Constructs an isolated polygon mask for each bubble and counts non-zero filled pixels against the binarized image to compute fill_ratio. Bubbles exceeding confidence_threshold (0.42) are identified as marked. If multiple bubbles in a single row exceed 0.42, the question is flagged as "MULTIPLE" and graded incorrect. Unmarked questions remain blank; valid single marks are matched against the exam answer key.'
      },
      {
        num: 6,
        name: 'Confidence Scoring & Performance Logging',
        tag: 'Result Generation',
        technique: 'Confidence Metric · Score Calculation · Database Audit Logging',
        desc: 'Computes a composite confidence score: min(1.0, avg_fill_ratio * 0.4 + answer_ratio * 0.4 + detection_ratio * 0.2). Calculates total points, percentage, and letter grade, recording execution duration and detected bubble metadata into the database (omr_processing_logs) to drive real-time teacher and student analytics.'
      }
    ],
    featuresLabel: 'Role-Based Capabilities',
    roleFeatures: {
      teacher: [
        {
          title: 'Custom Exam Authoring',
          desc: 'Create assessments with customized exam ID, title, description, question capacity (1–200), choice range (A through H), and maximum marks.'
        },
        {
          title: 'Flexible Answer Key Calibration',
          desc: 'Configure answer keys via interactive per-question radio inputs, one-click batch quick-fill presets (All A–D), or automated random answer generation.'
        },
        {
          title: 'Educator Command Center',
          desc: 'Monitor total exams created, unique enrolled students, active testing sessions, and recent student submissions in real time.'
        },
        {
          title: 'Exam-Level Performance Analytics',
          desc: 'Access cohort statistics including class average score, highest and lowest scores, pass rate percentage, and question-by-question accuracy percentages.'
        },
        {
          title: 'One-Click CSV Result Exports',
          desc: 'Stream full examination results into formatted CSV spreadsheets containing roll numbers, student names, scores, percentages, and timestamps.'
        },
        {
          title: 'Diagnostic Debug Endpoint',
          desc: 'Utilize /api/omr/debug to troubleshoot student upload issues by inspecting raw contour counts, bounding box coordinates, and bubble fill ratios.'
        }
      ],
      student: [
        {
          title: 'Roll-Number Authentication',
          desc: 'Secure account registration and login bound to a unique institutional roll number (e.g. STU001) with bcrypt password encryption.'
        },
        {
          title: 'Active Assessment Browser',
          desc: 'Explore available examinations with question counts, total marks, and assessment deadlines directly from the student dashboard.'
        },
        {
          title: 'Multi-Format OMR Upload',
          desc: 'Drag-and-drop submission accepting JPG, PNG, and PDF answer sheet scans up to 10MB with instant client-side format and non-empty checks.'
        },
        {
          title: 'Instant Automated Grading',
          desc: 'Sub-second grading pipeline generating total score, percentage, letter grade (A+ through F), and official PASS/FAIL result indicators.'
        },
        {
          title: 'Detailed Answer Breakdown',
          desc: 'Review question-by-question audit table comparing student responses against official keys with correct, incorrect, and multiple-marked indicators.'
        },
        {
          title: 'Interactive Visual Analytics',
          desc: 'Interactive Recharts pie chart depicting correct, incorrect, and unanswered distribution alongside question-level accuracy bar charts.'
        },
        {
          title: 'Submission History & Resubmission',
          desc: 'Track completed exams and average score progress over time, with support for deleting or replacing prior submissions when permitted.'
        }
      ]
    },
    architectureDiagram: [
      {
        layer: 'Presentation Layer',
        title: 'React 18 + Vite + Tailwind CSS + Recharts',
        desc: 'Responsive web client providing role-specific dashboards, drag-and-drop OMR file upload, interactive answer-key matrices, and dynamic performance charts.',
        iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
      },
      {
        layer: 'API & Gateway Layer',
        title: 'FastAPI + Pydantic v2 + OAuth2 JWT Bearer Auth',
        desc: 'Asynchronous REST API orchestrating endpoints (/api/exams, /api/omr/upload, /api/results), validating input schemas, managing CORS, and enforcing role-based access control.',
        iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>'
      },
      {
        layer: 'Computer Vision Processing Engine',
        title: 'OpenCV 4.8 + NumPy + pdf2image + Pillow',
        desc: 'Modular OMR engine executing image normalization (1000px), Gaussian blur filtering, adaptive Gaussian thresholding, morphological closing, contour filtering, and mask fill density calculations.',
        iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>'
      },
      {
        layer: 'Persistence & Analytics Layer',
        title: 'SQLAlchemy 2.0 ORM + MySQL 8.0+ / SQLite',
        desc: 'Relational data persistence across User, Exam, Result, and OMRProcessingLog models with connection pooling (pool_size=10, max_overflow=20), index optimization, and CSV streaming.',
        iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>'
      }
    ],
    implementationLabel: 'Technical Implementation',
    implementation: 'The Scanalyze platform is structured with clean separation of concerns across image processing, API routing, database persistence, and client interfaces. The OpenCV OMR processor is decoupled as a standalone class in omr_processor.py, allowing both synchronous execution inside FastAPI endpoints and headless script execution for unit testing. The FastAPI web service manages authentication, multipart file uploads, and scoring logic, writing audit logs to SQLAlchemy models. The React frontend consumes REST endpoints with Axios, featuring responsive Tailwind layout and interactive Recharts data visualizations.',
    implementationPillars: [
      {
        domain: 'Computer Vision Engine',
        title: 'OpenCV Preprocessing & Contour Detection',
        desc: 'Normalizes input bitmaps to 1000px width. Applies Gaussian blur and adaptive Gaussian thresholding (block size 11, constant 2) to handle uneven illumination. Identifies bubbles using morphological closing (3×3 ellipse) and contour filtering (area 50–5000px, circularity ≥ 0.25, aspect ratio 1.0 ± 0.35). Calculates fill ratio by applying polygon masks and counting non-zero pixel density.',
        verifiedCode: 'backend/omr_processor.py: _preprocess_image, _detect_bubbles, _filter_bubbles, _extract_answers'
      },
      {
        domain: 'Backend & API Architecture',
        title: 'FastAPI REST Service & Role-Based Access',
        desc: 'Built on FastAPI with Pydantic v2 data validation schemas. Enforces role-based security using require_teacher and require_student dependency guards with JWT Bearer tokens. Orchestrates multi-part form file upload, handles UUID file persistence with cleanup on failure, and logs processing times into the database.',
        verifiedCode: 'backend/main.py: @app.post("/api/omr/upload"), @app.post("/api/exams/create"), require_teacher, require_student'
      },
      {
        domain: 'Database & Data Schema',
        title: 'SQLAlchemy 2.0 ORM with MySQL & SQLite',
        desc: 'Supports dual database backends: production MySQL 8.0+ via PyMySQL with connection pooling (pool_size=10, max_overflow=20, pool_recycle=3600) and zero-setup local SQLite. Defines relational entities for User, Exam, Result, and OMRProcessingLog with performance indexes and a SQLite-to-MySQL migration script.',
        verifiedCode: 'backend/models.py: User, Exam, Result, OMRProcessingLog; backend/database.py; backend/migrate_to_mysql.py'
      },
      {
        domain: 'Frontend & Analytics UI',
        title: 'React 18, Tailwind CSS & Recharts',
        desc: 'Interactive single-page application built with React 18 and Vite. Implements teacher workflows (exam creation, answer key calibration, CSV exports) and student workflows (roll number authentication, drag-and-drop OMR upload, grade summaries, and question-by-question Recharts charts).',
        verifiedCode: 'frontend/src/pages: CreateExam.jsx, TeacherDashboard.jsx, UploadOMR.jsx, ViewResult.jsx, ExamStatistics.jsx'
      }
    ],
    evaluation: {
      readmeReported: {
        desc: 'Operational performance figures documented in the Scanalyze repository README.md:',
        metrics: [
          { label: 'OMR Processing Latency', val: '< 30 seconds per image (README-reported)' },
          { label: 'API Response Time', val: '< 200ms average (README-reported)' },
          { label: 'Frontend Production Build', val: '~15 seconds (Vite)' },
          { label: 'Package Footprint', val: '9 frontend packages, 17 backend packages' }
        ]
      },
      verifiedLogging: {
        desc: 'Verified in backend/omr_processor.py and backend/main.py: the backend instruments real execution duration using Python time.time() and records exact floating-point metrics per submission into the omr_processing_logs table:',
        formula: 'processing_time = round(time.time() - start_time, 3)\nconfidence = min(1.0, (avg_fill_ratio * 0.4 + answer_ratio * 0.4 + detection_ratio * 0.2))'
      },
      testSuite: {
        title: 'Automated Test Suite (backend/test_suite.py)',
        desc: 'The repository contains a full Pytest test suite utilizing synthetic OMR sheet image generation (cv2.circle) to programmatically verify system mechanics:',
        verifiedTests: [
          'test_omr_processor_single_marks: Generates synthetic OMR sheets to confirm accurate single-choice detection (A–D) and unanswered question handling.',
          'test_omr_processor_multiple_marks: Confirms that multiple filled bubbles on a single question are safely caught and recorded as "MULTIPLE".',
          'test_student_upload_and_evaluation: End-to-end integration test confirming that correct_answers + wrong_answers + unanswered == total_questions.',
          'test_student_privacy_rbac: Confirms that attempting to view peer results returns HTTP 403 Forbidden.',
          'test_empty_file_upload_rejected: Rejects corrupt or 0-byte file uploads with HTTP 400 Bad Request.'
        ]
      },
      qualityFactors: {
        desc: 'Evaluation fidelity depends on physical scanning conditions and image quality factors rather than a single fixed metric:',
        factors: [
          'Marking Contrast: Intentional marks must be filled solidly (2B pencil or black ink) to reliably surpass the 0.42 confidence fill ratio threshold.',
          'Illumination Uniformity: Adaptive Gaussian thresholding mitigates uneven room lighting, but severe glare or deep shadows may impair contour detection.',
          'Document Alignment: Because the engine clusters rows via vertical centroid proximity (Δy ≤ 30px), scans must be captured reasonably straight without severe perspective keystoning.',
          'Resolution Fidelity: Input scans should maintain clear resolution (normalized to 1000px width) so circularity filtering (≥ 0.25) can differentiate bubbles from print artifacts.'
        ]
      }
    },
    apiEndpoints: [
      {
        method: 'POST',
        route: '/api/auth/login',
        purpose: 'JWT Authentication',
        description: 'Authenticates registered teacher or student credentials against stored bcrypt password hashes, issuing a signed OAuth2 JWT bearer token.',
        requestInfo: '{\n  "username": "teacher",\n  "password": "password"\n}',
        responseInfo: '{\n  "access_token": "eyJhbGciOi...",\n  "token_type": "bearer"\n}'
      },
      {
        method: 'POST',
        route: '/api/exams/create',
        purpose: 'Exam Authoring (Teacher Only)',
        description: 'Creates a new examination with configured question counts (1–200), multiple choices (A–H), custom max marks, and complete answer key.',
        requestInfo: 'Headers: Authorization: Bearer <jwt>\n{\n  "exam_id": "MATH101",\n  "title": "Mathematics Midterm",\n  "total_questions": 10,\n  "number_of_choices": 4,\n  "answer_key": {"1": "A", "2": "B", ...},\n  "max_marks": 20\n}',
        responseInfo: '{\n  "id": 1,\n  "exam_id": "MATH101",\n  "title": "Mathematics Midterm",\n  "teacher_id": 1,\n  "is_active": true\n}'
      },
      {
        method: 'POST',
        route: '/api/omr/upload',
        purpose: 'OMR Ingestion & Evaluation (Student Only)',
        description: 'Accepts multipart/form-data upload of JPG, PNG, or PDF answer sheets. Executes OpenCV pipeline, grades answers against key, and records result.',
        requestInfo: 'Content-Type: multipart/form-data\nHeaders: Authorization: Bearer <jwt>\nFormData:\n  exam_id: "MATH101"\n  file: <omr_scan.png>',
        responseInfo: '{\n  "message": "OMR sheet processed successfully",\n  "result_id": 4,\n  "score": 18.0,\n  "percentage": 90.0,\n  "correct_answers": 9,\n  "wrong_answers": 1,\n  "unanswered": 0,\n  "confidence": 0.94,\n  "is_resubmission": false\n}'
      },
      {
        method: 'GET',
        route: '/api/results/{exam_id}/{roll_number}',
        purpose: 'Granular Result Audit (RBAC Protected)',
        description: 'Retrieves complete exam score, percentage, and question-by-question answer breakdown. Enforces privacy (students can only access their own results).',
        requestInfo: 'Headers: Authorization: Bearer <jwt>\nParams: exam_id="MATH101", roll_number="STU001"',
        responseInfo: '{\n  "roll_number": "STU001",\n  "exam_title": "Mathematics Midterm",\n  "score": 18.0,\n  "percentage": 90.0,\n  "answer_breakdown": [\n    {"question": "1", "correct_answer": "A", "student_answer": "A", "status": "correct"},\n    {"question": "2", "correct_answer": "B", "student_answer": "Multiple Marked", "status": "incorrect"}\n  ]\n}'
      },
      {
        method: 'GET',
        route: '/api/exams/{exam_id}/statistics',
        purpose: 'Cohort Performance Analytics (Teacher Only)',
        description: 'Aggregates diagnostic statistics across all student submissions for an exam, including class average, highest/lowest scores, and question-wise accuracy.',
        requestInfo: 'Headers: Authorization: Bearer <jwt>\nParams: exam_id="MATH101"',
        responseInfo: '{\n  "exam_id": "MATH101",\n  "total_students": 25,\n  "average_score": 14.8,\n  "highest_score": 20.0,\n  "lowest_score": 6.0,\n  "pass_rate": 84.0,\n  "question_wise_accuracy": {"1": 92.0, "2": 68.0, "3": 44.0, ...}\n}'
      },
      {
        method: 'GET',
        route: '/api/exams/{exam_id}/export/csv',
        purpose: 'Stream Results to CSV Spreadsheet',
        description: 'Streams a downloadable CSV spreadsheet containing student roll numbers, names, correct/wrong counts, scores, percentages, and timestamps.',
        requestInfo: 'Headers: Authorization: Bearer <jwt>\nParams: exam_id="MATH101"',
        responseInfo: 'Content-Type: text/csv\nContent-Disposition: attachment; filename="exam_MATH101_results.csv"\n\nRoll Number,Student Name,Correct Answers,Wrong Answers,Unanswered,Score,Max Marks,Percentage,Submission Date\nSTU001,Alex Student,9,1,0,18.0,20,90.00%,2025-10-13 14:30:00'
      }
    ],
    insights: [
      'Adaptive Gaussian Thresholding (block size 11, C=2) provides robust binarization across uneven room lighting and phone camera shadows compared to static thresholding.',
      'Resolution normalization to a 1000px target width standardizes spatial scale, allowing fixed contour area bounds (50–5000px) to function reliably across diverse camera resolutions.',
      'Dual-threshold filtering (confidence_threshold = 0.42, min_fill_threshold = 0.20) coupled with explicit "MULTIPLE" collision flags prevents accidental grading of stray smudges or ambiguous double-fills.',
      'Decoupled architecture enables headless batch execution of the OMR engine for automated Pytest verification without spinning up web server overhead.'
    ],
    challengesTitle: 'Engineering Highlights',
    challenges: 'Key technical challenges addressed in the verified implementation:\n\n1. Illumination Invariance: Variable room lighting and phone casting shadows make global thresholding ineffective. The pipeline resolves this with Adaptive Gaussian Thresholding and morphological closing, calculating localized thresholds dynamically.\n\n2. Smudge & Double-Mark Discrimination: Distinguishing intended pencil fills from eraser smudges or accidental stray pen marks is solved using a 0.42 fill ratio threshold. Multiple bubbles filled above threshold in a row are caught and flagged as "MULTIPLE", ensuring academic integrity.\n\n3. Capture Scale & Distance Variation: Accommodating varying camera distances without hardcoded coordinates by resizing sheets to a reference 1000px width and clustering bubbles into question rows by vertical center proximity (Δy ≤ 30px).\n\n4. Institutional Data Isolation & Privacy: Ensuring strict multi-tenant privacy at the API level so students cannot inspect peers\' submissions, while educators have complete oversight over their own exams and streaming CSV exports.',
    learnings: 'Practical engineering and system architecture takeaways demonstrated by the project:\n\n1. Computer Vision Spatial Filtering: Developed practical mastery in combining morphological closing, contour hierarchy extraction, and polygon mask non-zero pixel density analysis for robust document evaluation.\n\n2. Asynchronous API Orchestration: Implemented clean decoupling between CPU-bound image processing and responsive FastAPI HTTP request/response lifecycles, backed by SQLAlchemy database audit logging.\n\n3. Production RBAC & Data Integrity: Engineered secure role-based access control protecting exam integrity, while enabling seamless educator capabilities like random key generation and live CSV streaming.\n\n4. Verified Implementation Rigor: Learned the critical importance of evaluating system accuracy under real-world physical constraints (lighting, contrast, marking quality) and maintaining rigorous truthfulness between documented and implemented capabilities.',
    details: {
      overview: 'Scanalyze is an end-to-end Optical Mark Recognition (OMR) evaluation platform designed to automate the grading of physical multiple-choice answer sheets. Combining an OpenCV computer vision pipeline with a reactive FastAPI backend and React frontend, the system connects exam creation, answer-key management, multi-format sheet upload (JPG, PNG, PDF), automated bubble detection, instant score generation, and educator analytics.',
      problem: 'Manual evaluation of physical multiple-choice exam sheets is repetitive, time-consuming, and prone to human grading errors during high-volume test cycles. Commercial optical mark reader hardware requires expensive dedicated scanners and proprietary paper formats that create financial barriers for academic departments. Furthermore, manual grading delays result publishing and deprives teachers of question-by-question performance diagnostics needed to identify learning gaps.',
      solution: 'Scanalyze delivers a software-driven, scanner-independent workflow: teachers author exams and calibrate answer keys (manual, batch quick-fill, or random presets); students authenticate via unique roll numbers and upload image or PDF scans; the backend normalizes resolution, performs adaptive Gaussian thresholding and contour analysis, filters bubbles, calculates fill density, and matches choices against stored keys. Instant score summaries, letter grades, Recharts visualizations, and downloadable CSV spreadsheets are generated immediately.',
      pipeline: 'The OMR engine (omr_processor.py) processes submitted documents through 6 sequential computer vision stages: Format & Ingestion Validation → Resolution Normalization (1000px width) → Illumination-Invariant Preprocessing (Adaptive Gaussian Thresholding) → Bubble Contour Extraction & Geometric Filtering → Spatial Clustering & Row Grouping (Δy ≤ 30px) → Density Mask Evaluation & Confidence Scoring.',
      implementation: 'The Scanalyze platform is structured with clean separation of concerns across image processing, API routing, database persistence, and client interfaces. The OpenCV OMR processor is decoupled as a standalone class in omr_processor.py, allowing both synchronous execution inside FastAPI endpoints and headless script execution for unit testing. The FastAPI web service manages authentication, multipart file uploads, and scoring logic, writing audit logs to SQLAlchemy models. The React frontend consumes REST endpoints with Axios, featuring responsive Tailwind layout and interactive Recharts data visualizations.',
      challenges: 'Key technical challenges addressed in the verified implementation:\n\n1. Illumination Invariance: Variable room lighting and phone casting shadows make global thresholding ineffective. The pipeline resolves this with Adaptive Gaussian Thresholding and morphological closing, calculating localized thresholds dynamically.\n\n2. Smudge & Double-Mark Discrimination: Distinguishing intended pencil fills from eraser smudges or accidental stray pen marks is solved using a 0.42 fill ratio threshold. Multiple bubbles filled above threshold in a row are caught and flagged as "MULTIPLE", ensuring academic integrity.\n\n3. Capture Scale & Distance Variation: Accommodating varying camera distances without hardcoded coordinates by resizing sheets to a reference 1000px width and clustering bubbles into question rows by vertical center proximity (Δy ≤ 30px).\n\n4. Institutional Data Isolation & Privacy: Ensuring strict multi-tenant privacy at the API level so students cannot inspect peers\' submissions, while educators have complete oversight over their own exams and streaming CSV exports.',
      learnings: 'Practical engineering and system architecture takeaways demonstrated by the project:\n\n1. Computer Vision Spatial Filtering: Developed practical mastery in combining morphological closing, contour hierarchy extraction, and polygon mask non-zero pixel density analysis for robust document evaluation.\n\n2. Asynchronous API Orchestration: Implemented clean decoupling between CPU-bound image processing and responsive FastAPI HTTP request/response lifecycles, backed by SQLAlchemy database audit logging.\n\n3. Production RBAC & Data Integrity: Engineered secure role-based access control protecting exam integrity, while enabling seamless educator capabilities like random key generation and live CSV streaming.\n\n4. Verified Implementation Rigor: Learned the critical importance of evaluating system accuracy under real-world physical constraints (lighting, contrast, marking quality) and maintaining rigorous truthfulness between documented and implemented capabilities.'
    }
  },

  // ── 05. Swiggy Sales Analysis ──────────────────────────────
  {
    id: 'swiggy-sales',
    title: 'Swiggy Sales Analysis',
    subtitle: 'End-to-End Data Analytics Project',
    category: 'DATA ANALYTICS',
    categories: ['data-analytics', 'data', 'analytics'],
    filterCategories: ['data-analytics'],
    filterTags: ['data-analytics', 'power-bi', 'sql', 'python', 'excel'],
    size: 'compact',
    visualType: 'screenshot',
    accentColor: 'var(--md-primary)',
    shortDesc: 'An end-to-end analysis of Swiggy sales data using Python, SQL, and Power BI to uncover revenue trends, location performance, category-level patterns, and actionable business insights.',
    description: 'An end-to-end analysis of Swiggy sales data using Python, SQL, and Power BI to uncover revenue trends, location performance, category-level patterns, and actionable business insights.',
    techs: ['Python', 'Pandas', 'SQL', 'Power BI', 'DAX'],
    technologies: [
      'Power BI Desktop',
      'DAX',
      'SQL (MySQL / SQLite)',
      'Python 3.x',
      'Pandas',
      'NumPy',
      'Matplotlib'
    ],
    techCategories: {
      'Dashboard & BI': ['Power BI Desktop', 'DAX Measures', 'Executive Visuals'],
      'Database & Modeling': ['SQL (MySQL / SQLite)', 'Relational Schema Design', 'CTEs & Window Functions'],
      'Data Prep & EDA': ['Python (Pandas, NumPy)', 'Feature Engineering', 'Matplotlib']
    },
    github: 'https://github.com/Adiitya09/Swiggy-Sales-Analysis.git',
    kpis: [
      { label: 'Total Revenue', value: '₹53.00M' },
      { label: 'Total Orders', value: '197.4K' },
      { label: 'Avg Order Value', value: '₹268.50' },
      { label: 'Partner Restaurants', value: '993 Active' }
    ],
    image: 'assets/Projects/swiggy-sales-analysis.png',
    images: [
      {
        src: 'assets/Projects/swiggy-sales-analysis.png',
        title: 'Swiggy Sales Analysis Power BI Dashboard',
        caption: 'Authentic executive dashboard tracking total orders, ₹53.00M GMV revenue, ₹268.50 AOV, and top cities.'
      }
    ],
    overview: 'A multi-dimensional sales analysis project built around food delivery data — exploring order volume trends, restaurant performance tiers, city-level distribution, and revenue patterns.',
    problem: 'Food delivery platforms generate massive operational and transactional records that, without structured analysis, obscure top-performing culinary categories, regional delivery latency, and order frequency patterns.',
    dataWorkflow: 'Used Python and SQL to clean, join, and transform the raw dataset. Removed duplicates, handled null values, standardized city names, and modeled data into relational fact-dimension tables for BI consumption.',
    analysis: 'Analyzed order volumes by category and city, computed average order values (AOV), identified peak ordering periods, ranked restaurants by gross merchandise value (GMV), and modeled temporal sales trends.',
    visualizations: [
      'Power BI executive dashboard with interactive slicers for city and cuisine filtering.',
      'Temporal line charts tracking monthly and day-part order velocity trends.',
      'Geographic performance distribution map visualizing delivery metrics across metropolitan regions.',
      'Category share donut charts and top restaurant revenue ranking tables.'
    ],
    insights: [
      'Uncovered key cuisine categories driving over 60% of repeat order volume across metropolitan areas.',
      'Identified delivery latency bottlenecks in specific high-density urban clusters, guiding courier route optimization.',
      'Demonstrated correlation between promotion discounts and basket size expansion across non-peak delivery hours.'
    ],
    learnings: 'Strengthened SQL relational modeling skills, optimized analytical queries for dimensional schemas, and learned how to bridge Python exploratory analysis directly into Power BI executive reports.',
    details: {
      overview: 'A multi-dimensional sales analysis project built around food delivery data — exploring order volume trends, restaurant performance tiers, city-level distribution, and revenue patterns.',
      problem: 'Food delivery platforms generate massive operational and transactional records that, without structured analysis, obscure top-performing culinary categories, regional delivery latency, and order frequency patterns.',
      dataWorkflow: 'Used Python and SQL to clean, join, and transform the raw dataset. Removed duplicates, handled null values, standardized city names, and modeled data into relational fact-dimension tables for BI consumption.',
      analysis: 'Analyzed order volumes by category and city, computed average order values (AOV), identified peak ordering periods, ranked restaurants by gross merchandise value (GMV), and modeled temporal sales trends.',
      visualizations: [
        'Power BI executive dashboard with interactive slicers for city and cuisine filtering.',
        'Temporal line charts tracking monthly and day-part order velocity trends.',
        'Geographic performance distribution map visualizing delivery metrics across metropolitan regions.',
        'Category share donut charts and top restaurant revenue ranking tables.'
      ],
      insights: [
        'Uncovered key cuisine categories driving over 60% of repeat order volume across metropolitan areas.',
        'Identified delivery latency bottlenecks in specific high-density urban clusters, guiding courier route optimization.',
        'Demonstrated correlation between promotion discounts and basket size expansion across non-peak delivery hours.'
      ],
      learnings: 'Strengthened SQL relational modeling skills, optimized analytical queries for dimensional schemas, and learned how to bridge Python exploratory analysis directly into Power BI executive reports.'
    }
  },

  // ── 06. Mobile Sales Dashboard ─────────────────────────────
  {
    id: 'mobile-sales',
    title: 'Mobile Sales Dashboard',
    subtitle: 'Interactive Power BI Sales Analysis',
    category: 'DATA ANALYTICS',
    categories: ['data-analytics', 'data', 'analytics'],
    filterCategories: ['data-analytics'],
    filterTags: ['data-analytics', 'power-bi', 'excel'],
    size: 'compact',
    visualType: 'screenshot',
    accentColor: 'var(--md-secondary)',
    shortDesc: 'Interactive Power BI retail analytics dashboard analyzing mobile device sales, revenue trends, top-selling models, payment channels, and regional demand patterns.',
    description: 'Interactive Power BI retail analytics dashboard analyzing mobile device sales, revenue trends, top-selling models, payment channels, and regional demand patterns.',
    techs: ['Power BI', 'DAX', 'Data Visualization', 'Data Analysis'],
    technologies: [
      'Power BI Desktop',
      'DAX (Custom Measures & KPIs)',
      'Power Query',
      'Microsoft Excel / CSV',
      'Data Modeling',
      'Retail Business Intelligence'
    ],
    techCategories: {
      'Dashboard & BI': ['Power BI Desktop', 'DAX (Measures & Calculations)', 'Data Modeling'],
      'ETL & Transformation': ['Power Query', 'Microsoft Excel / CSV', 'Data Reshaping'],
      'Visual Elements': ['Executive KPI Cards', 'Donut Charts', 'Bar Charts', 'Timeline Slicers']
    },
    github: 'https://github.com/Adiitya09/Mobile-Sales-Dashboard.git',
    kpis: [
      { label: 'Brand Coverage', value: '20+ Brands' },
      { label: 'Payment Types', value: '4 Channels' },
      { label: 'Granularity', value: 'Daily / Monthly' },
      { label: 'BI Platform', value: 'Power BI' }
    ],
    image: 'assets/Projects/Mobile Sales Data.png',
    images: [
      {
        src: 'assets/Projects/Mobile Sales Data.png',
        title: 'Mobile Sales Performance & Market Share Overview',
        caption: 'Comprehensive Power BI retail report analyzing sales across brands, models, and regions with monthly trend tracking.'
      }
    ],
    overview: 'An interactive Power BI business intelligence application that transforms raw transactional mobile sales data into meaningful commercial intelligence. The dashboard empowers stakeholders to monitor revenue velocity, product demand, payment channel distributions, and regional performance trends.',
    problem: 'Mobile retail data scattered across flat spreadsheets makes it difficult for business leaders to track fast-moving product models, identify peak sales periods, assess payment method adoption, or evaluate customer satisfaction trends across cities.',
    dataWorkflow: 'Imported transactional records (brand, model, date, city, quantity, unit price, total sales, payment method, customer rating) into Power BI. Applied Power Query transformations to normalize naming conventions, clean date formats, and build a dedicated date table for temporal intelligence.',
    analysis: 'Formulated custom DAX measures for Total Revenue, Units Sold, Transaction Count, and Average Customer Satisfaction Rating. Segmented sales by brand tiers (flagship vs. mid-range) and analyzed payment method distribution across geographic regions.',
    visualizations: [
      'Executive KPI Cards tracking Total Sales, Total Quantity Sold, Total Transactions, and Average Customer Rating.',
      'Monthly and Daily Sales Trend visual revealing cyclical sales cycles and holiday spikes.',
      'Top 3 Mobile Models comparison bar chart (e.g. OnePlus Nord, Galaxy Note 20) highlighting volume leaders.',
      'Payment Method Distribution donut chart: Credit Card (26.36%), UPI (24.77%), Debit Card (24.69%), Cash (24.18%).',
      'Day-of-Week Purchasing Pattern analysis optimizing inventory replenishment schedules.'
    ],
    insights: [
      'Customer payment adoption is remarkably balanced: Digital payments (UPI + Debit + Credit Card) represent over 75% of transaction volume, demonstrating high digital checkout readiness.',
      'Mid-tier models like OnePlus Nord accounted for the highest single-model unit turnover, while premium flagship devices drove total revenue margin.',
      'Sales volume demonstrated clear weekend spikes, providing retail store managers with empirical rationale for staff scheduling and promotional campaigns.'
    ],
    learnings: 'Mastered DAX time-intelligence calculations, developed executive dashboard design standards with high visual hierarchy, and learned how to translate transactional retail data into strategic merchandising recommendations.',
    details: {
      overview: 'An interactive Power BI business intelligence application that transforms raw transactional mobile sales data into meaningful commercial intelligence. The dashboard empowers stakeholders to monitor revenue velocity, product demand, payment channel distributions, and regional performance trends.',
      problem: 'Mobile retail data scattered across flat spreadsheets makes it difficult for business leaders to track fast-moving product models, identify peak sales periods, assess payment method adoption, or evaluate customer satisfaction trends across cities.',
      dataWorkflow: 'Imported transactional records (brand, model, date, city, quantity, unit price, total sales, payment method, customer rating) into Power BI. Applied Power Query transformations to normalize naming conventions, clean date formats, and build a dedicated date table for temporal intelligence.',
      analysis: 'Formulated custom DAX measures for Total Revenue, Units Sold, Transaction Count, and Average Customer Satisfaction Rating. Segmented sales by brand tiers (flagship vs. mid-range) and analyzed payment method distribution across geographic regions.',
      visualizations: [
        'Executive KPI Cards tracking Total Sales, Total Quantity Sold, Total Transactions, and Average Customer Rating.',
        'Monthly and Daily Sales Trend visual revealing cyclical sales cycles and holiday spikes.',
        'Top 3 Mobile Models comparison bar chart (e.g. OnePlus Nord, Galaxy Note 20) highlighting volume leaders.',
        'Payment Method Distribution donut chart: Credit Card (26.36%), UPI (24.77%), Debit Card (24.69%), Cash (24.18%).',
        'Day-of-Week Purchasing Pattern analysis optimizing inventory replenishment schedules.'
      ],
      insights: [
        'Customer payment adoption is remarkably balanced: Digital payments (UPI + Debit + Credit Card) represent over 75% of transaction volume, demonstrating high digital checkout readiness.',
        'Mid-tier models like OnePlus Nord accounted for the highest single-model unit turnover, while premium flagship devices drove total revenue margin.',
        'Sales volume demonstrated clear weekend spikes, providing retail store managers with empirical rationale for staff scheduling and promotional campaigns.'
      ],
      learnings: 'Mastered DAX time-intelligence calculations, developed executive dashboard design standards with high visual hierarchy, and learned how to translate transactional retail data into strategic merchandising recommendations.'
    }
  },

  // ── 07. MedVision AI ───────────────────────────────────────
  {
    id: 'medvision-ai',
    title: 'MedVision AI',
    subtitle: 'Deep Learning Skin Disease Classification & Explainable AI',
    category: 'COMPUTER VISION / ML',
    categories: ['computer-vision', 'machine-learning', 'python', 'software'],
    filterCategories: ['computer-vision', 'software'],
    filterTags: ['computer-vision', 'python', 'software', 'machine-learning'],
    size: 'compact',
    visualType: 'bar',
    accentColor: 'var(--md-primary)',
    shortDesc: 'Deep learning clinical diagnostics platform using EfficientNetB0 and OpenCV for multi-class skin lesion classification with Grad-CAM explainability heatmaps.',
    description: 'Deep learning clinical diagnostics platform using EfficientNetB0 and OpenCV for multi-class skin lesion classification with Grad-CAM explainability heatmaps.',
    techs: ['Python', 'TensorFlow', 'Keras', 'EfficientNetB0', 'OpenCV', 'Grad-CAM'],
    technologies: [
      'Python 3.10+',
      'TensorFlow 2.x',
      'Keras',
      'EfficientNetB0',
      'OpenCV (cv2)',
      'NumPy',
      'Pandas',
      'Matplotlib & Seaborn',
      'Scikit-learn',
      'Grad-CAM'
    ],
    techCategories: {
      'Deep Learning & Vision': ['EfficientNetB0 Transfer Learning', 'TensorFlow 2.x', 'Keras', 'OpenCV (cv2)', 'Grad-CAM (Explainable AI)'],
      'Data Pipeline & Preprocessing': ['NumPy', 'Pandas', 'Data Augmentation', 'Class Balancing', 'Image Normalization'],
      'Evaluation & Metrics': ['Scikit-learn', 'Confusion Matrix', 'ROC-AUC Curves', 'Precision & Recall', 'Matplotlib & Seaborn']
    },
    github: 'https://github.com/Adiitya09/MedvisionAi-.git',
    kpis: [
      { label: 'Backbone', value: 'EfficientNet' },
      { label: 'Explainability', value: 'Grad-CAM' },
      { label: 'Framework', value: 'TensorFlow' },
      { label: 'Target', value: 'Skin Lesions' }
    ],
    overview: 'An end-to-end deep learning system designed for multi-class dermatological lesion classification with visual explainability to support clinical decision-making.',
    problem: 'Skin disease diagnosis often suffers from subjective evaluation and limited access to dermatological specialists in remote clinics. Standard computer vision models lack interpretability, which prevents medical professionals from trusting diagnostic predictions.',
    solution: 'MedVision AI leverages an EfficientNetB0 deep convolutional neural network fine-tuned on clinical dermoscopy datasets, integrated with Grad-CAM heatmaps that visually highlight the salient pathological regions guiding the model\'s diagnosis.',
    features: [
      {
        num: '01',
        name: 'Transfer Learning Backbone',
        desc: 'Pretrained EfficientNetB0 network delivering high top-1 accuracy with parameter efficiency suitable for medical image classification.'
      },
      {
        num: '02',
        name: 'Grad-CAM Explainable AI',
        desc: 'Generates localized heatmaps overlaying input images to highlight the exact visual features that contributed to the model\'s classification.'
      },
      {
        num: '03',
        name: 'Image Preprocessing Pipeline',
        desc: 'OpenCV-powered preprocessing pipeline with illumination adjustment, noise reduction, and standardized resizing to 224x224.'
      },
      {
        num: '04',
        name: 'Robust Evaluation Suite',
        desc: 'Comprehensive metric tracking across confusion matrices, multi-class ROC curves, sensitivity, and specificity.'
      }
    ],
    insights: [
      'Transfer learning from EfficientNetB0 achieved 94%+ classification accuracy with 65% faster training convergence compared to standard CNNs trained from scratch.',
      'Grad-CAM heatmaps demonstrated strong clinical correlation, focusing on irregular border pigments rather than healthy surrounding skin.',
      'Targeted image augmentations (rotation, zoom, affine transforms) substantially minimized overfitting on minority disease classes.'
    ],
    learnings: 'Engineered an end-to-end medical deep learning pipeline, implemented Grad-CAM explainable AI visualization, and handled real-world class imbalance in clinical image datasets.',
    details: {
      overview: 'An end-to-end deep learning system designed for multi-class dermatological lesion classification with visual explainability to support clinical decision-making.',
      problem: 'Skin disease diagnosis often suffers from subjective evaluation and limited access to dermatological specialists in remote clinics. Standard computer vision models lack interpretability, which prevents medical professionals from trusting diagnostic predictions.',
      solution: 'MedVision AI leverages an EfficientNetB0 deep convolutional neural network fine-tuned on clinical dermoscopy datasets, integrated with Grad-CAM heatmaps that visually highlight the salient pathological regions guiding the model\'s diagnosis.',
      features: [
        {
          num: '01',
          name: 'Transfer Learning Backbone',
          desc: 'Pretrained EfficientNetB0 network delivering high top-1 accuracy with parameter efficiency suitable for medical image classification.'
        },
        {
          num: '02',
          name: 'Grad-CAM Explainable AI',
          desc: 'Generates localized heatmaps overlaying input images to highlight the exact visual features that contributed to the model\'s classification.'
        },
        {
          num: '03',
          name: 'Image Preprocessing Pipeline',
          desc: 'OpenCV-powered preprocessing pipeline with illumination adjustment, noise reduction, and standardized resizing to 224x224.'
        },
        {
          num: '04',
          name: 'Robust Evaluation Suite',
          desc: 'Comprehensive metric tracking across confusion matrices, multi-class ROC curves, sensitivity, and specificity.'
        }
      ],
      insights: [
        'Transfer learning from EfficientNetB0 achieved 94%+ classification accuracy with 65% faster training convergence compared to standard CNNs trained from scratch.',
        'Grad-CAM heatmaps demonstrated strong clinical correlation, focusing on irregular border pigments rather than healthy surrounding skin.',
        'Targeted image augmentations (rotation, zoom, affine transforms) substantially minimized overfitting on minority disease classes.'
      ],
      learnings: 'Engineered an end-to-end medical deep learning pipeline, implemented Grad-CAM explainable AI visualization, and handled real-world class imbalance in clinical image datasets.'
    }
  }
];

/* ── Exports ─────────────────────────────────────────────── */
window.PROJECTS = PROJECTS;
