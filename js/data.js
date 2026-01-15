/* ===========================================
   DATA.JS - Edit this file to update your website
   =========================================== */

const siteData = {

    // =========================================
    // WORKING PAPERS
    // =========================================
    workingPapers: [
        {
            title: "Using did_multiplegt_dyn to Estimate Event-Study Effects in Complex Designs",
            authors: 'with <a href="https://sites.google.com/site/clementdechaisemartin/" target="_blank">Clement de Chaisemartin</a> et al.',
            venue: "",
            links: []
        },
        {
            title: "From Paper to Digital: Understanding the Ecological Impacts of India's Land Records Reform",
            authors: 'with <a href="https://aliztoth.com/" target="_blank">Aliz Toth</a> and <a href="https://saadgulzar.com/" target="_blank">Saad Gulzar</a>',
            venue: "Presented at APSA 2024",
            links: []
        },
        {
            title: "Political Incentives and Environmental Regulation",
            authors: 'with <a href="https://www.annalisapezone.com/" target="_blank">Annalisa Pezone</a>, <a href="https://www.gemmadipoppa.com/" target="_blank">Gemma Dipoppa</a>, and <a href="https://saadgulzar.com/" target="_blank">Saad Gulzar</a>',
            venue: "",
            links: []
        },
        {
            title: "Reassessing the Impact of Democracy on Growth and Environment",
            authors: 'with <a href="https://www.gemmadipoppa.com/" target="_blank">Gemma Dipoppa</a>, <a href="https://saadgulzar.com/" target="_blank">Saad Gulzar</a>, and <a href="https://rodrigogrijalba.github.io/" target="_blank">Rodrigo Grijalba</a>',
            venue: "",
            links: []
        },
        {
            title: "Boundary Discontinuity Design",
            authors: "",
            venue: "",
            links: []
        },
        {
            title: "From Closed Form to Black Box? A Comparison of Debiased vs Automatic Debiased Machine Learning",
            authors: "",
            venue: "",
            links: []
        }
    ],

    // =========================================
    // PUBLICATIONS
    // =========================================
    publications: [],

    // =========================================
    // SOFTWARE
    // =========================================
    software: [
        {
            name: "csdid",
            description: "Difference-in-Differences with multiple time periods (Callaway & Sant'Anna 2021)",
            authors: 'with <a href="https://psantanna.com/" target="_blank">Pedro H.C. Sant\'Anna</a> and <a href="https://alexanderquispe.github.io/" target="_blank">Alexander Quispe</a>',
            downloads: "170,000+",
            links: [
                { text: "GitHub", url: "https://github.com/d2cml-ai/csdid" },
                { text: "PyPI", url: "https://pypi.org/project/csdid/" }
            ]
        },
        {
            name: "did_multiplegt_dyn",
            description: "DiD estimators for intertemporal treatments (R, Stata, Python)",
            authors: 'with <a href="https://sites.google.com/site/clementdechaisemartin/" target="_blank">Clement de Chaisemartin</a>',
            downloads: "",
            links: [
                { text: "GitHub", url: "https://github.com/chaisemartinPackages/did_multiplegt_dyn" }
            ]
        },
        {
            name: "did_had",
            description: "DiD for continuous treatments using quasi-stayers",
            authors: 'with <a href="https://sites.google.com/site/clementdechaisemartin/" target="_blank">Clement de Chaisemartin</a>',
            downloads: "",
            links: [
                { text: "GitHub", url: "https://github.com/chaisemartinPackages/did_had" }
            ]
        },
        {
            name: "npiv",
            description: "Nonparametric instrumental variables estimators",
            authors: 'with <a href="https://economics.yale.edu/people/xiaohong-chen" target="_blank">Xiaohong Chen</a>',
            downloads: "",
            links: [
                { text: "GitHub", url: "https://github.com/d2cml-ai/npiv" }
            ]
        },
        {
            name: "GeoAgent",
            description: "AI agent for geospatial data analysis",
            authors: "with Jesus Gastañaduy",
            downloads: "",
            links: [
                { text: "GitHub", url: "https://github.com/anzonyquispe/GeoAgent" }
            ]
        }
    ],

    // =========================================
    // BOOKS
    // =========================================
    books: [
        {
            title: "Inference on Causal and Structural Parameters using ML and AI",
            authors: 'with <a href="https://alexanderquispe.github.io/" target="_blank">Alexander Quispe</a>',
            venue: "2021 — Course materials for MIT 14.38",
            links: []
        }
    ],

    // =========================================
    // TEACHING
    // =========================================
    teaching: [
        { course: "Python for Finance", institution: "PUCP", years: "2025" },
        { course: "Applied Economics", institution: "PUCP", years: "2022-2024" },
        { course: "General Economics", institution: "UdeSA", years: "2022" },
        { course: "Python Bootcamp", institution: "PUCP", years: "2021-2024" }
    ],

    // =========================================
    // RESEARCH TEAM
    // =========================================
    team: [
        { name: "Karla Vega", affiliation: "UNALM", url: "" },
        { name: "Anthony Quispe", affiliation: "", url: "" },
        { name: "Damian Rojas", affiliation: "", url: "" },
        { name: "Raul Sedano", affiliation: "", url: "https://github.com/raulsedano2410" }
    ],

    // =========================================
    // ONGOING PROJECTS
    // =========================================
    ongoingProjects: [
        {
            title: "Political Random Crime",
            description: "",
            team: ["Karla Vega", "Anthony Quispe", "Damian Rojas", "Raul Sedano"]
        }
    ],

    // =========================================
    // STUDENTS / ALUMNI
    // Organized by course
    // =========================================
    studentsByCourse: [
        {
            course: "Fundamentos de Programación en Python para Finanzas",
            institution: "PUCP",
            year: "2025",
            repoUrl: "https://github.com/anzonyquispe/Python-for-Finance",
            students: [
                { name: "Marcelo Fernando Salazar Lucano", url: "https://marcelosalazarl.github.io/MarceloSalazarL_CV_Website/" },
                { name: "Fabian Hernan Cajavilca Tarazona", url: "https://fabianhernan-catar.github.io/Fabian_Hernan_Cajavilca_Tarazona_CV/#hero" },
                { name: "Juan Diego Inga Gonzales", url: "https://jdstyles01.github.io/" },
                { name: "Luis Enrique Puicon Nolasco", url: "https://luisenrique2206.github.io/Luisenrique2206_CV/" },
                { name: "Josuee Fernando Choque Tintaya", url: "https://fern63422.github.io/Quant-finance-portafolio/" },
                { name: "Luis Enrique Seminario Baca", url: "https://lseminario11.github.io/" },
                { name: "Andre Jonathan Gomez Leon", url: "https://andregomezz.github.io/Final-project/" },
                { name: "Flavio David Vega Matellini", url: "https://flaveg-18.github.io/FlavioDavidVegaMatellini/" },
                { name: "Melany Diana Zavala Huamani", url: "https://melanyzavala.github.io/website/" },
                { name: "Favia Marcela Millones Manayay", url: "https://marce0201.github.io/Website_2026_/" },
                { name: "Andy Jhair Yangali Rodrigo", url: "https://andy18-prog.github.io/andy-yangali/" },
                { name: "Joaquin Sanchez Salazar", url: "https://joaquin-sanchez-salazar.github.io/Personal-Portfolio/" },
                { name: "Joalhe Cevir Yika Medrano", url: "https://joalheyika.github.io/CV_JoalheYika/" },
                { name: "Gabriel Alejandro Rendon Hurtado", url: "https://rendongabriel.github.io/Gabriel-Rendon/" },
                { name: "Sarita Antuane Rivera Esquivel", url: "https://sarita1906.github.io/sarita-rivera-cv/index.html" }
            ]
        }
    ]
};
