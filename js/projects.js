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
    title: 'IPL Analysis Dashboard',
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

  // ── 03. Mobile Sales Dashboard ─────────────────────────────
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

  // ── 04. OMR Sheet Evaluator ────────────────────────────────
  {
    id: 'omr-evaluator',
    title: 'OMR Sheet Evaluator',
    subtitle: 'Computer Vision Grading Pipeline',
    category: 'COMPUTER VISION',
    categories: ['computer-vision', 'vision', 'software'],
    filterCategories: ['computer-vision', 'software'],
    filterTags: ['computer-vision', 'software', 'python'],
    size: 'compact',
    visualType: 'screenshot',
    accentColor: 'var(--md-tertiary)',
    shortDesc: 'Automated Optical Mark Recognition exam evaluation system leveraging Python and OpenCV image processing pipeline for precise bubble contour detection and instant grading.',
    description: 'Automated Optical Mark Recognition exam evaluation system leveraging Python and OpenCV image processing pipeline for precise bubble contour detection and instant grading.',
    techs: ['Python', 'OpenCV', 'NumPy', 'FastAPI', 'Computer Vision'],
    technologies: [
      'Python 3.x',
      'OpenCV (cv2)',
      'NumPy',
      'Pillow (PIL)',
      'FastAPI',
      'Image Morphology & Contours',
      'Perspective Transformation'
    ],
    techCategories: {
      'Vision Pipeline': ['OpenCV', 'Adaptive Thresholding', 'Contour Detection', 'Perspective Transform'],
      'Core & Backend': ['Python 3.x', 'NumPy Matrix Operations', 'FastAPI', 'Pillow'],
      'Analytical Output': ['Automated Score Calculation', 'Question Difficulty Metrics', 'Error Heatmaps']
    },
    github: 'https://github.com/adityapatil-dev/omr-evaluator',
    kpis: [
      { label: 'Domain', value: 'Computer Vision' },
      { label: 'Exam Format', value: 'Multiple Choice' },
      { label: 'Vision Stages', value: '5-Step Pipeline' },
      { label: 'Evaluation Speed', value: 'Sub-Second' }
    ],
    image: 'assets/Projects/omr/4.png',
    images: [
      {
        src: 'assets/Projects/omr/4.png',
        title: 'OMR Sheet Upload & Exam Calibration',
        caption: 'Drag-and-drop interface supporting multi-format uploads (JPG, PNG, PDF) with automated paper alignment.'
      },
      {
        src: 'assets/Projects/omr/5.png',
        title: 'Contour Detection & Bubble Recognition',
        caption: 'Computer vision pipeline detecting response bubbles, applying adaptive thresholding, and isolating marked choices.'
      },
      {
        src: 'assets/Projects/omr/6.png',
        title: 'Instant Scoring & Performance Breakdown',
        caption: 'Automated grading engine calculating total score, correct/incorrect distribution, and question status.'
      },
      {
        src: 'assets/Projects/omr/8.png',
        title: 'Student Analytics & Exam Statistics',
        caption: 'Analytical breakdown displaying subject performance, question difficulty trends, and summary reports.'
      },
      {
        src: 'assets/Projects/omr/1.png',
        title: 'SCANALYZE Platform Overview',
        caption: 'Complete system dashboard bridging OpenCV backend with intuitive educator controls.'
      }
    ],
    overview: 'An automated Optical Mark Recognition (OMR) solution designed to eliminate manual paper grading through a robust computer vision pipeline. The system detects test answer sheets, calibrates perspective distortions, identifies marked bubbles, and outputs instantaneous grading metrics.',
    problem: 'Manual evaluation of multiple-choice paper exams is labor-intensive, error-prone, and slow, while proprietary optical scanner hardware is prohibitively expensive for academic institutions and tutoring centers.',
    dataWorkflow: 'Constructed an end-to-end computer vision pipeline: Grayscale conversion → Gaussian Blur noise reduction → Otsu’s Adaptive Thresholding → Four-point perspective transformation → Morphological contour detection to isolate individual question bubble grids.',
    analysis: 'Evaluated non-zero pixel density inside candidate bounding boxes against empirical confidence thresholds to reliably distinguish intentional pencil/pen markings from stray paper smudges, wrinkles, or light erasures.',
    visualizations: [
      'Document Perspective Rectification stage correcting skewed and rotated handheld photo uploads.',
      'Contour Extraction Visualizer highlighting recognized bubble clusters and bounding boxes in real time.',
      'Instant Color-Coded Feedback Overlays: Green contours for verified correct answers, red for incorrect, and gray for unattempted.',
      'Educator Analytics Dashboard displaying class score distributions, subject percentiles, and question-level difficulty indices.'
    ],
    insights: [
      'Four-point perspective warping eliminated scanner hardware dependence, enabling regular smartphone camera photos to achieve identical accuracy to commercial flatbed scanners.',
      'Adaptive thresholding maintained over 99% bubble detection fidelity across varying room illuminations and shadow casting.'
    ],
    learnings: 'Mastered OpenCV spatial filtering, morphological operations, perspective rectification, and robust image thresholding under real-world photographic imperfections.',
    details: {
      overview: 'An automated Optical Mark Recognition (OMR) solution designed to eliminate manual paper grading through a robust computer vision pipeline. The system detects test answer sheets, calibrates perspective distortions, identifies marked bubbles, and outputs instantaneous grading metrics.',
      problem: 'Manual evaluation of multiple-choice paper exams is labor-intensive, error-prone, and slow, while proprietary optical scanner hardware is prohibitively expensive for academic institutions and tutoring centers.',
      dataWorkflow: 'Constructed an end-to-end computer vision pipeline: Grayscale conversion → Gaussian Blur noise reduction → Otsu’s Adaptive Thresholding → Four-point perspective transformation → Morphological contour detection to isolate individual question bubble grids.',
      analysis: 'Evaluated non-zero pixel density inside candidate bounding boxes against empirical confidence thresholds to reliably distinguish intentional pencil/pen markings from stray paper smudges, wrinkles, or light erasures.',
      visualizations: [
        'Document Perspective Rectification stage correcting skewed and rotated handheld photo uploads.',
        'Contour Extraction Visualizer highlighting recognized bubble clusters and bounding boxes in real time.',
        'Instant Color-Coded Feedback Overlays: Green contours for verified correct answers, red for incorrect, and gray for unattempted.',
        'Educator Analytics Dashboard displaying class score distributions, subject percentiles, and question-level difficulty indices.'
      ],
      insights: [
        'Four-point perspective warping eliminated scanner hardware dependence, enabling regular smartphone camera photos to achieve identical accuracy to commercial flatbed scanners.',
        'Adaptive thresholding maintained over 99% bubble detection fidelity across varying room illuminations and shadow casting.'
      ],
      learnings: 'Mastered OpenCV spatial filtering, morphological operations, perspective rectification, and robust image thresholding under real-world photographic imperfections.'
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
  }
];

/* ── Exports ─────────────────────────────────────────────── */
window.PROJECTS = PROJECTS;
