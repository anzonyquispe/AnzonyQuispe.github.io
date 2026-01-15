/* ===========================================
   DATA.JS - Edit this file to update your website
   =========================================== */

const siteData = {

    // =========================================
    // WORKING PAPERS
    // =========================================
    workingPapers: [
        {
            title: "Using did_multiplegt_dyn to Estimate Event-Study Effects in Complex Designs: Overview, and Four Examples Based on Real Datasets",
            authors: 'with <a href="https://sites.google.com/site/clementdechaisemartin/" target="_blank">Clement de Chaisemartin</a> et al.',
            venue: "",
            url: "",
            abstract: "This paper provides a comprehensive overview of the did_multiplegt_dyn command for estimating event-study effects in difference-in-differences designs with staggered treatment adoption. We present four detailed examples using real datasets to illustrate the command's flexibility in handling complex research designs, including settings with heterogeneous treatment effects, dynamic effects, and various identification assumptions.",
            links: []
        },
        {
            title: "From Paper to Digital: Understanding the Ecological Impacts of India's Land Records Reform",
            authors: 'with <a href="https://aliztoth.com/" target="_blank">Aliz Toth</a> and <a href="https://saadgulzar.com/" target="_blank">Saad Gulzar</a>',
            venue: "Presented at APSA 2024",
            url: "",
            abstract: "We assess the impact of India's Digital India Land Records Modernization Programme (DILRMP) on deforestation and agricultural outcomes using satellite data. Exploiting the staggered rollout of digitization across districts, we find heterogeneous effects depending on baseline forest cover, land conflicts, protected area status, and proximity to banking districts. Our results suggest that land security reforms can have significant but spatially varied environmental consequences.",
            links: []
        },
        {
            title: "Political Incentives and Environmental Regulation",
            authors: 'with <a href="https://www.annalisapezone.com/" target="_blank">Annalisa Pezone</a>, <a href="https://www.gemmadipoppa.com/" target="_blank">Gemma Dipoppa</a>, and <a href="https://saadgulzar.com/" target="_blank">Saad Gulzar</a>',
            venue: "",
            url: "",
            abstract: "This paper examines how political incentives shape environmental regulation enforcement. We study the relationship between electoral cycles, politician characteristics, and environmental outcomes using administrative data combined with satellite measurements of pollution and deforestation.",
            links: []
        },
        {
            title: "Reassessing the Impact of Democracy on Growth and Environment",
            authors: 'with <a href="https://www.gemmadipoppa.com/" target="_blank">Gemma Dipoppa</a>, <a href="https://saadgulzar.com/" target="_blank">Saad Gulzar</a>, and <a href="https://rodrigogrijalba.github.io/" target="_blank">Rodrigo Grijalba</a>',
            venue: "",
            url: "",
            abstract: "We revisit the relationship between democratic institutions, economic growth, and environmental quality using modern causal inference methods. Our analysis employs difference-in-differences and regression discontinuity designs to address endogeneity concerns in the democracy-development nexus.",
            links: []
        },
        {
            title: "Boundary Discontinuity Design",
            authors: "",
            venue: "",
            url: "",
            abstract: "This paper develops a framework for causal inference using geographic boundary discontinuities. We provide identification conditions, estimation procedures, and inference methods for settings where treatment assignment changes discontinuously at administrative or natural boundaries.",
            links: []
        },
        {
            title: "From Closed Form to Black Box? A Comparison of Debiased vs Automatic Debiased Machine Learning in the Sharing Economy",
            authors: "",
            venue: "",
            url: "",
            abstract: "We compare traditional debiased machine learning estimators with automatic debiased machine learning approaches in the context of the sharing economy. Using data from online platforms, we evaluate the trade-offs between interpretability and flexibility, providing guidance for applied researchers choosing between these methods.",
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
            pypiName: "csdid",
            description: "Difference-in-Differences with multiple time periods (Callaway & Sant'Anna 2021)",
            language: "Python",
            repoUrl: "https://github.com/d2cml-ai/csdid",
            pypiUrl: "https://pypi.org/project/csdid/",
            downloads: "loading..."
        },
        {
            name: "did_multiplegt_dyn",
            pypiName: "py-did-multiplegt-dyn",
            description: "DiD estimators for intertemporal treatments (R, Stata, Python)",
            language: "Python/R/Stata",
            repoUrl: "https://github.com/chaisemartinPackages/did_multiplegt_dyn",
            pypiUrl: "https://pypi.org/project/py-did-multiplegt-dyn/",
            downloads: "loading..."
        },
        {
            name: "did_had",
            pypiName: "did-had",
            description: "DiD for continuous treatments using quasi-stayers",
            language: "Python",
            repoUrl: "https://github.com/chaisemartinPackages/did_had",
            pypiUrl: "https://pypi.org/project/did-had/",
            downloads: "loading...",
            isNew: true  // Remove this flag once package has download stats
        },
        {
            name: "npiv",
            pypiName: "pynpiv",
            description: "Nonparametric instrumental variables estimators",
            language: "Python",
            repoUrl: "https://github.com/d2cml-ai/npiv",
            pypiUrl: "https://pypi.org/project/pynpiv/",
            downloads: "loading..."
        },
        {
            name: "GeoAgent",
            pypiName: null,
            description: "AI agent for geospatial data analysis",
            language: "Python",
            repoUrl: "https://github.com/anzonyquispe/GeoAgent",
            pypiUrl: null,
            downloads: null
        }
    ],

    // =========================================
    // BOOKS
    // =========================================
    books: [
        {
            title: "Difference-in-Differences with Staggered Treatment: Package Comparison",
            description: "A comprehensive comparison of DiD packages across R, Python, and Stata for staggered treatment adoption designs.",
            authors: "Online Book",
            url: "did-book/index.html"
        },
        {
            title: "Inference on Causal and Structural Parameters using ML and AI",
            description: "Course materials for MIT 14.38 covering modern causal inference methods.",
            authors: 'with <a href="https://alexanderquispe.github.io/" target="_blank">Alexander Quispe</a> (2021)',
            url: "https://d2cml-ai.github.io/14.388_r/"
        }
    ],

    // =========================================
    // TEACHING
    // =========================================
    teaching: [
        { course: "Python for Finance", institution: "PUCP", year: "2025" },
        { course: "Applied Economics", institution: "PUCP", year: "2022-2024" },
        { course: "General Economics", institution: "UdeSA", year: "2022" },
        { course: "Python Bootcamp", institution: "PUCP", year: "2021-2024" }
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
                { name: "Marcelo Fernando Salazar Lucano", github: "https://marcelosalazarl.github.io/MarceloSalazarL_CV_Website/" },
                { name: "Fabian Hernan Cajavilca Tarazona", github: "https://fabianhernan-catar.github.io/Fabian_Hernan_Cajavilca_Tarazona_CV/#hero" },
                { name: "Juan Diego Inga Gonzales", github: "https://jdstyles01.github.io/" },
                { name: "Luis Enrique Puicon Nolasco", github: "https://luisenrique2206.github.io/Luisenrique2206_CV/" },
                { name: "Josuee Fernando Choque Tintaya", github: "https://fern63422.github.io/Quant-finance-portafolio/" },
                { name: "Luis Enrique Seminario Baca", github: "https://lseminario11.github.io/" },
                { name: "Andre Jonathan Gomez Leon", github: "https://andregomezz.github.io/Final-project/" },
                { name: "Flavio David Vega Matellini", github: "https://flaveg-18.github.io/FlavioDavidVegaMatellini/" },
                { name: "Melany Diana Zavala Huamani", github: "https://melanyzavala.github.io/website/" },
                { name: "Favia Marcela Millones Manayay", github: "https://marce0201.github.io/Website_2026_/" },
                { name: "Andy Jhair Yangali Rodrigo", github: "https://andy18-prog.github.io/andy-yangali/" },
                { name: "Joaquin Sanchez Salazar", github: "https://joaquin-sanchez-salazar.github.io/Personal-Portfolio/" },
                { name: "Joalhe Cevir Yika Medrano", github: "https://joalheyika.github.io/CV_JoalheYika/" },
                { name: "Gabriel Alejandro Rendon Hurtado", github: "https://rendongabriel.github.io/Gabriel-Rendon/" },
                { name: "Sarita Antuane Rivera Esquivel", github: "https://sarita1906.github.io/sarita-rivera-cv/index.html" }
            ]
        }
    ]
};
