// =====================================================================
//  CONTINGUT
//  Tot el text del portafoli és aquí, separat per idioma (ca / es / en).
//  Per actualitzar el CV només cal editar aquestes dades.
// =====================================================================

const LINKEDIN_URL = 'https://www.linkedin.com/in/mjimenezco/';
const CISCO_URL = 'https://www.credly.com/badges/af87229f-c94b-4167-ab92-44983c37a5e1';
const PROJECT_URL = 'https://llibreta-ai.vercel.app/';

const content = {
  // ------------------------------------------------------------------ CA
  ca: {
    ui: {
      role: 'Enginyer de Ciberseguretat · Capgemini',
      cv: 'Currículum',
      coverLetter: 'Carta de presentació',
      print: 'Descarrega PDF',
      summary: 'Perfil',
      experience: 'Experiència',
      education: 'Formació',
      certifications: 'Certificacions',
      skills: 'Competències',
      languages: 'Idiomes',
      other: 'Altres experiències',
      project: 'Projecte personal',
      testers: 'Busco testers per publicar-la a Google Play',
      visit: 'Fes-te tester',
      tools: 'Eines'
    },
    summary: `Enginyer de ciberseguretat a <strong>Capgemini</strong> amb un any i mig d'experiència en serveis de seguretat per a clients corporatius. Actualment gestiono el <strong>servei d'excepcions de seguretat</strong> d'un client i porto el seu <strong>servei d'evolució i transformació</strong>. Combino gestió de projectes, automatització de processos (Power Automate) i anàlisi de dades (Power BI) amb una base pràctica en sistemes de seguretat i xarxes. El meu interès professional se centra en l'<strong>arquitectura i l'auditoria de ciberseguretat</strong>, més que no pas en el desenvolupament de software.`,
    experience: [
      {
        company: 'Capgemini',
        meta: 'Barcelona · Híbrid',
        roles: [
          {
            title: 'Enginyer de Ciberseguretat',
            period: 'abr. 2026 – actualitat',
            type: 'Jornada completa',
            current: true,
            bullets: [
              "Gestió del servei d'excepcions de seguretat per a un client corporatiu: anàlisi, tramitació i seguiment de les sol·licituds d'excepció.",
              "Responsable del servei d'evolució i transformació: millora contínua i automatització dels processos del servei.",
              'Seguiment operatiu i reporting amb eines ITSM i dashboards de servei.'
            ],
            tools: ['ITSM', 'Dashboards de servei', 'Power Automate', 'Power BI', 'Microsoft 365']
          },
          {
            title: 'Cybersecurity Trainee',
            period: 'juny 2025 – març 2026',
            type: 'Contracte de pràctiques',
            bullets: [
              "Gestió de projectes de ciberseguretat per a un client dins d'un Centre d'Operacions de Seguretat (SOC).",
              'Desenvolupament d\'una eina d\'automatització amb Power Automate per a la gestió de projectes.',
              'Disseny de dashboards de seguiment i KPIs amb Power BI.'
            ],
            tools: ['Power Automate', 'Power BI', 'Microsoft 365']
          }
        ]
      },
      {
        company: 'GSS Security',
        meta: 'Mataró · Presencial',
        roles: [
          {
            title: 'Servei tècnic',
            period: 'juny 2023 – juny 2025',
            type: 'Jornada parcial',
            bullets: [
              "Suport tècnic a clients i a tècnics de camp en sistemes d'intrusió (alarmes antirobatori) i CCTV.",
              'Instal·lació, manteniment i configuració de sistemes, incloent-hi xarxa i enregistradors (NVR).',
              "Gestió i seguiment d'incidències amb el sistema de tiquets."
            ],
            tools: ['Alarmes', 'CCTV', 'NVR', 'Xarxes', 'Ticketing']
          }
        ]
      }
    ],
    project: {
      name: 'LlibretaAI',
      tagline: "App Android de notes de veu que transcriu i resumeix classes i reunions amb IA que s'executa al mateix dispositiu.",
      bullets: [
        "Arquitectura privada per disseny: l'àudio i les notes no surten mai del mòbil. Sense servidors, comptes, anuncis, seguiment ni analítica.",
        'Funciona sense connexió un cop descarregats els models.',
        'Resums, mapes mentals, llistes de tasques, separació de parlants i preguntes sobre les notes.',
        'En beta tancada a Google Play.'
      ]
    },
    other: 'Classes particulars de llengües i matemàtiques (més de 5 anys) · Hostaleria: cuina (estiu 2021) i sala (maig – nov. 2022).',
    education: [
      {
        title: "Grau en Enginyeria Informàtica i Gestió de Sistemes d'Informació",
        place: 'Tecnocampus (UPF) · Mataró',
        period: '2020 – des. 2026 (previst)',
        note: 'TFG finalitzat.'
      },
      {
        title: 'Batxillerat Científic-Tecnològic',
        place: 'Escola La Presentació · Arenys de Mar',
        period: '2020'
      },
      {
        title: 'Dual Diploma – American High School Diploma',
        place: 'Academica International Studies',
        period: '2016 – 2020'
      }
    ],
    certifications: [
      { title: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco · oct. 2025', url: CISCO_URL },
      { title: 'CompTIA Security+', issuer: 'En preparació', pending: true },
      { title: '360 LPT – Anglès B2', issuer: 'Equivalent a Cambridge FCE · 2021' }
    ],
    skills: [
      { group: 'Ciberseguretat', items: ["Gestió d'excepcions de seguretat", 'Ciberdefensa', 'Seguretat de la informació', 'Seguretat de xarxes'] },
      { group: 'Gestió i servei', items: ['Gestió de projectes', 'Eines ITSM', 'Gestió de serveis', 'Agile / Scrum', 'Lean', 'Waterfall'] },
      { group: 'Automatització i dades', items: ['Power Automate', 'Power BI', 'DAX', 'Power Query (M)', 'Row-Level Security', 'APIs REST', 'ETL'] },
      { group: 'Bases de dades', items: ['SQL', 'MongoDB', 'Disseny relacional i NoSQL'] },
      { group: 'Xarxes i sistemes', items: ['LAN / WAN', 'IP · DNS', 'Linux', 'Windows', 'macOS', 'CCTV / NVR'] },
      { group: 'Desenvolupament', items: ['Java', 'Spring Boot', 'Python', 'HTML / CSS / JavaScript', 'Git / GitHub', 'Docker'] }
    ],
    languages: [
      { name: 'Català', level: 'Nadiu', pct: 100 },
      { name: 'Castellà', level: 'Nadiu', pct: 100 },
      { name: 'Anglès', level: 'Avançat (B2)', pct: 80 },
      { name: 'Francès', level: 'Bàsic', pct: 20 }
    ],
    letter: {
      date: 'Barcelona, 2026',
      greeting: 'Benvolgut/da,',
      body: [
        "Soc <strong>enginyer de ciberseguretat a Capgemini</strong>, on treballo des del juny de 2025. Vaig començar com a trainee en un Centre d'Operacions de Seguretat (SOC), gestionant projectes de ciberseguretat per a un client, i des de l'abril de 2026 formo part de l'equip a jornada completa: gestiono el servei d'excepcions de seguretat d'un client i porto el seu servei d'evolució i transformació.",
        "En aquest temps he après a moure'm entre la part tècnica i la de gestió: coordinar-me amb el client, fer el seguiment del servei amb eines ITSM, i automatitzar processos amb Power Automate i Power BI per reduir feina manual i donar visibilitat a l'estat del servei.",
        "Abans, durant dos anys, vaig fer de servei tècnic a GSS Security, donant suport a clients i a tècnics de camp en sistemes d'alarma, CCTV i xarxa. Aquella etapa em va donar una base pràctica sòlida i molta experiència resolent incidències amb el client al davant.",
        "Estic acabant el grau en Enginyeria Informàtica i Gestió de Sistemes d'Informació al Tecnocampus (UPF), amb el TFG ja finalitzat. He obtingut el <strong>Junior Cybersecurity Analyst Career Path</strong> de Cisco i estic preparant la certificació <strong>CompTIA Security+</strong>.",
        "Pel meu compte he creat <strong>LlibretaAI</strong>, una app Android de notes de veu amb IA que funciona íntegrament al mòbil, dissenyada perquè les dades de l'usuari no surtin mai del dispositiu. Ara és en beta tancada i busco testers per publicar-la a Google Play.",
        "Professionalment, on em vull especialitzar és en l'<strong>arquitectura i l'auditoria de ciberseguretat</strong>, més que no pas en el desenvolupament de software. Al currículum en trobareu el detall."
      ],
      closing: 'Salutacions cordials,'
    }
  },

  // ------------------------------------------------------------------ ES
  es: {
    ui: {
      role: 'Ingeniero de Ciberseguridad · Capgemini',
      cv: 'Currículum',
      coverLetter: 'Carta de presentación',
      print: 'Descargar PDF',
      summary: 'Perfil',
      experience: 'Experiencia',
      education: 'Formación',
      certifications: 'Certificaciones',
      skills: 'Competencias',
      languages: 'Idiomas',
      other: 'Otras experiencias',
      project: 'Proyecto personal',
      testers: 'Busco testers para publicarla en Google Play',
      visit: 'Hazte tester',
      tools: 'Herramientas'
    },
    summary: `Ingeniero de ciberseguridad en <strong>Capgemini</strong> con año y medio de experiencia en servicios de seguridad para clientes corporativos. Actualmente gestiono el <strong>servicio de excepciones de seguridad</strong> de un cliente y llevo su <strong>servicio de evolución y transformación</strong>. Combino gestión de proyectos, automatización de procesos (Power Automate) y análisis de datos (Power BI) con una base práctica en sistemas de seguridad y redes. Mi interés profesional se centra en la <strong>arquitectura y la auditoría de ciberseguridad</strong>, más que en el desarrollo de software.`,
    experience: [
      {
        company: 'Capgemini',
        meta: 'Barcelona · Híbrido',
        roles: [
          {
            title: 'Ingeniero de Ciberseguridad',
            period: 'abr. 2026 – actualidad',
            type: 'Jornada completa',
            current: true,
            bullets: [
              'Gestión del servicio de excepciones de seguridad para un cliente corporativo: análisis, tramitación y seguimiento de las solicitudes de excepción.',
              'Responsable del servicio de evolución y transformación: mejora continua y automatización de los procesos del servicio.',
              'Seguimiento operativo y reporting con herramientas ITSM y dashboards de servicio.'
            ],
            tools: ['ITSM', 'Dashboards de servicio', 'Power Automate', 'Power BI', 'Microsoft 365']
          },
          {
            title: 'Cybersecurity Trainee',
            period: 'jun. 2025 – mar. 2026',
            type: 'Contrato de prácticas',
            bullets: [
              'Gestión de proyectos de ciberseguridad para un cliente dentro de un Centro de Operaciones de Seguridad (SOC).',
              'Desarrollo de una herramienta de automatización con Power Automate para la gestión de proyectos.',
              'Diseño de dashboards de seguimiento y KPIs con Power BI.'
            ],
            tools: ['Power Automate', 'Power BI', 'Microsoft 365']
          }
        ]
      },
      {
        company: 'GSS Security',
        meta: 'Mataró · Presencial',
        roles: [
          {
            title: 'Servicio técnico',
            period: 'jun. 2023 – jun. 2025',
            type: 'Jornada parcial',
            bullets: [
              'Soporte técnico a clientes y a técnicos de campo en sistemas de intrusión (alarmas antirrobo) y CCTV.',
              'Instalación, mantenimiento y configuración de sistemas, incluyendo red y grabadores (NVR).',
              'Gestión y seguimiento de incidencias con el sistema de tickets.'
            ],
            tools: ['Alarmas', 'CCTV', 'NVR', 'Redes', 'Ticketing']
          }
        ]
      }
    ],
    project: {
      name: 'LlibretaAI',
      tagline: 'App Android de notas de voz que transcribe y resume clases y reuniones con IA que se ejecuta en el propio dispositivo.',
      bullets: [
        'Arquitectura privada por diseño: el audio y las notas nunca salen del móvil. Sin servidores, cuentas, anuncios, seguimiento ni analítica.',
        'Funciona sin conexión una vez descargados los modelos.',
        'Resúmenes, mapas mentales, listas de tareas, separación de hablantes y preguntas sobre las notas.',
        'En beta cerrada en Google Play.'
      ]
    },
    other: 'Clases particulares de idiomas y matemáticas (más de 5 años) · Hostelería: cocina (verano 2021) y sala (mayo – nov. 2022).',
    education: [
      {
        title: 'Grado en Ingeniería Informática y Gestión de Sistemas de Información',
        place: 'Tecnocampus (UPF) · Mataró',
        period: '2020 – dic. 2026 (previsto)',
        note: 'TFG finalizado.'
      },
      {
        title: 'Bachillerato Científico-Tecnológico',
        place: 'Escola La Presentació · Arenys de Mar',
        period: '2020'
      },
      {
        title: 'Dual Diploma – American High School Diploma',
        place: 'Academica International Studies',
        period: '2016 – 2020'
      }
    ],
    certifications: [
      { title: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco · oct. 2025', url: CISCO_URL },
      { title: 'CompTIA Security+', issuer: 'En preparación', pending: true },
      { title: '360 LPT – Inglés B2', issuer: 'Equivalente a Cambridge FCE · 2021' }
    ],
    skills: [
      { group: 'Ciberseguridad', items: ['Gestión de excepciones de seguridad', 'Ciberdefensa', 'Seguridad de la información', 'Seguridad de redes'] },
      { group: 'Gestión y servicio', items: ['Gestión de proyectos', 'Herramientas ITSM', 'Gestión de servicios', 'Agile / Scrum', 'Lean', 'Waterfall'] },
      { group: 'Automatización y datos', items: ['Power Automate', 'Power BI', 'DAX', 'Power Query (M)', 'Row-Level Security', 'APIs REST', 'ETL'] },
      { group: 'Bases de datos', items: ['SQL', 'MongoDB', 'Diseño relacional y NoSQL'] },
      { group: 'Redes y sistemas', items: ['LAN / WAN', 'IP · DNS', 'Linux', 'Windows', 'macOS', 'CCTV / NVR'] },
      { group: 'Desarrollo', items: ['Java', 'Spring Boot', 'Python', 'HTML / CSS / JavaScript', 'Git / GitHub', 'Docker'] }
    ],
    languages: [
      { name: 'Catalán', level: 'Nativo', pct: 100 },
      { name: 'Castellano', level: 'Nativo', pct: 100 },
      { name: 'Inglés', level: 'Avanzado (B2)', pct: 80 },
      { name: 'Francés', level: 'Básico', pct: 20 }
    ],
    letter: {
      date: 'Barcelona, 2026',
      greeting: 'Estimado/a:',
      body: [
        'Soy <strong>ingeniero de ciberseguridad en Capgemini</strong>, donde trabajo desde junio de 2025. Empecé como trainee en un Centro de Operaciones de Seguridad (SOC), gestionando proyectos de ciberseguridad para un cliente, y desde abril de 2026 formo parte del equipo a jornada completa: gestiono el servicio de excepciones de seguridad de un cliente y llevo su servicio de evolución y transformación.',
        'En este tiempo he aprendido a moverme entre la parte técnica y la de gestión: coordinarme con el cliente, hacer el seguimiento del servicio con herramientas ITSM, y automatizar procesos con Power Automate y Power BI para reducir trabajo manual y dar visibilidad al estado del servicio.',
        'Antes, durante dos años, trabajé en el servicio técnico de GSS Security, dando soporte a clientes y a técnicos de campo en sistemas de alarma, CCTV y red. Aquella etapa me dio una base práctica sólida y mucha experiencia resolviendo incidencias de cara al cliente.',
        'Estoy terminando el grado en Ingeniería Informática y Gestión de Sistemas de Información en Tecnocampus (UPF), con el TFG ya finalizado. He obtenido el <strong>Junior Cybersecurity Analyst Career Path</strong> de Cisco y estoy preparando la certificación <strong>CompTIA Security+</strong>.',
        'Por mi cuenta he creado <strong>LlibretaAI</strong>, una app Android de notas de voz con IA que funciona íntegramente en el móvil, diseñada para que los datos del usuario nunca salgan del dispositivo. Ahora está en beta cerrada y busco testers para publicarla en Google Play.',
        'Profesionalmente, donde quiero especializarme es en la <strong>arquitectura y la auditoría de ciberseguridad</strong>, más que en el desarrollo de software. En el currículum encontrarán el detalle.'
      ],
      closing: 'Un cordial saludo,'
    }
  },

  // ------------------------------------------------------------------ EN
  en: {
    ui: {
      role: 'Cybersecurity Engineer · Capgemini',
      cv: 'Resume',
      coverLetter: 'Cover letter',
      print: 'Download PDF',
      summary: 'Profile',
      experience: 'Experience',
      education: 'Education',
      certifications: 'Certifications',
      skills: 'Skills',
      languages: 'Languages',
      other: 'Other experience',
      project: 'Personal project',
      testers: 'Looking for testers to publish it on Google Play',
      visit: 'Become a tester',
      tools: 'Tools'
    },
    summary: `Cybersecurity engineer at <strong>Capgemini</strong> with a year and a half of experience delivering security services to enterprise clients. I currently manage a client's <strong>security exception management service</strong> and lead its <strong>evolution and transformation service</strong>. I combine project management, process automation (Power Automate) and data analysis (Power BI) with hands-on experience in security systems and networking. My professional focus is <strong>cybersecurity architecture and auditing</strong>, rather than software development.`,
    experience: [
      {
        company: 'Capgemini',
        meta: 'Barcelona · Hybrid',
        roles: [
          {
            title: 'Cybersecurity Engineer',
            period: 'Apr 2026 – Present',
            type: 'Full-time',
            current: true,
            bullets: [
              'Manage the security exception service for an enterprise client: analysis, processing and follow-up of exception requests.',
              'Lead the evolution and transformation service: continuous improvement and automation of service processes.',
              'Operational tracking and reporting with ITSM tools and service dashboards.'
            ],
            tools: ['ITSM', 'Service dashboards', 'Power Automate', 'Power BI', 'Microsoft 365']
          },
          {
            title: 'Cybersecurity Trainee',
            period: 'Jun 2025 – Mar 2026',
            type: 'Internship',
            bullets: [
              'Cybersecurity project management for a client within a Security Operations Center (SOC).',
              'Built a Power Automate tool to automate project management workflows.',
              'Designed tracking dashboards and KPIs in Power BI.'
            ],
            tools: ['Power Automate', 'Power BI', 'Microsoft 365']
          }
        ]
      },
      {
        company: 'GSS Security',
        meta: 'Mataró · On-site',
        roles: [
          {
            title: 'Technical Support',
            period: 'Jun 2023 – Jun 2025',
            type: 'Part-time',
            bullets: [
              'Technical support for customers and field technicians on intrusion (burglar alarm) and CCTV systems.',
              'Installation, maintenance and configuration of systems, including networking and video recorders (NVR).',
              'Incident management and follow-up through the ticketing system.'
            ],
            tools: ['Alarm systems', 'CCTV', 'NVR', 'Networking', 'Ticketing']
          }
        ]
      }
    ],
    project: {
      name: 'LlibretaAI',
      tagline: 'Android voice-notes app that transcribes and summarizes lectures and meetings with AI running entirely on the device.',
      bullets: [
        'Privacy-by-design architecture: audio and notes never leave the phone. No servers, accounts, ads, tracking or analytics.',
        'Works offline once the models are downloaded.',
        'Summaries, mind maps, task lists, speaker separation and Q&A over your notes.',
        'In closed beta on Google Play.'
      ]
    },
    other: 'Private tutoring in languages and mathematics (5+ years) · Hospitality: kitchen (summer 2021) and waiting staff (May – Nov 2022).',
    education: [
      {
        title: 'BSc in Computer Engineering and Information Systems Management',
        place: 'Tecnocampus (UPF) · Mataró',
        period: '2020 – Dec 2026 (expected)',
        note: 'Bachelor’s thesis completed.'
      },
      {
        title: 'Scientific-Technological Baccalaureate',
        place: 'Escola La Presentació · Arenys de Mar',
        period: '2020'
      },
      {
        title: 'Dual Diploma – American High School Diploma',
        place: 'Academica International Studies',
        period: '2016 – 2020'
      }
    ],
    certifications: [
      { title: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco · Oct 2025', url: CISCO_URL },
      { title: 'CompTIA Security+', issuer: 'In progress', pending: true },
      { title: '360 LPT – English B2', issuer: 'Cambridge FCE equivalent · 2021' }
    ],
    skills: [
      { group: 'Cybersecurity', items: ['Security exception management', 'Cyber defense', 'Information security', 'Network security'] },
      { group: 'Management & service', items: ['Project management', 'ITSM tools', 'Service management', 'Agile / Scrum', 'Lean', 'Waterfall'] },
      { group: 'Automation & data', items: ['Power Automate', 'Power BI', 'DAX', 'Power Query (M)', 'Row-Level Security', 'REST APIs', 'ETL'] },
      { group: 'Databases', items: ['SQL', 'MongoDB', 'Relational & NoSQL design'] },
      { group: 'Networks & systems', items: ['LAN / WAN', 'IP · DNS', 'Linux', 'Windows', 'macOS', 'CCTV / NVR'] },
      { group: 'Development', items: ['Java', 'Spring Boot', 'Python', 'HTML / CSS / JavaScript', 'Git / GitHub', 'Docker'] }
    ],
    languages: [
      { name: 'Catalan', level: 'Native', pct: 100 },
      { name: 'Spanish', level: 'Native', pct: 100 },
      { name: 'English', level: 'Advanced (B2)', pct: 80 },
      { name: 'French', level: 'Basic', pct: 20 }
    ],
    letter: {
      date: 'Barcelona, 2026',
      greeting: 'Dear Hiring Manager,',
      body: [
        'I am a <strong>cybersecurity engineer at Capgemini</strong>, where I have worked since June 2025. I started as a trainee in a Security Operations Center (SOC), managing cybersecurity projects for a client, and since April 2026 I have been a full-time member of the team: I manage a client’s security exception service and lead its evolution and transformation service.',
        'Along the way I have learned to work across both the technical and the management side: coordinating with the client, tracking the service with ITSM tools, and automating processes with Power Automate and Power BI to cut manual work and give clear visibility of the service status.',
        'Before that, I spent two years in technical support at GSS Security, helping customers and field technicians with alarm, CCTV and network systems. That role gave me a solid hands-on foundation and plenty of experience solving incidents directly with customers.',
        'I am completing my degree in Computer Engineering and Information Systems Management at Tecnocampus (UPF), with my bachelor’s thesis already finished. I have earned Cisco’s <strong>Junior Cybersecurity Analyst Career Path</strong> and I am preparing for the <strong>CompTIA Security+</strong> certification.',
        'On my own I built <strong>LlibretaAI</strong>, an Android voice-notes app with AI that runs entirely on the phone, designed so that user data never leaves the device. It is now in closed beta and I am looking for testers to publish it on Google Play.',
        'Professionally, I want to specialize in <strong>cybersecurity architecture and auditing</strong>, rather than software development. You will find the details in my resume.'
      ],
      closing: 'Kind regards,'
    }
  }
};

// =====================================================================
//  RENDERITZAT
// =====================================================================

const state = {
  type: 'cv',
  lang: content[localStorage.getItem('lang')] ? localStorage.getItem('lang') : 'ca'
};

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function renderCV(c) {
  const experience = c.experience.map((job) => `
    <article class="job">
      <header class="job-head">
        <h3>${esc(job.company)}</h3>
        <span class="muted">${esc(job.meta)}</span>
      </header>
      <ol class="timeline">
        ${job.roles.map((r) => `
          <li class="${r.current ? 'current' : ''}">
            <div class="role-head">
              <h4>${esc(r.title)}</h4>
              <span class="period">${esc(r.period)}</span>
            </div>
            <p class="muted small">${esc(r.type)}</p>
            <ul class="bullets">${r.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
            <div class="chips chips-small" aria-label="${esc(c.ui.tools)}">${r.tools.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div>
          </li>`).join('')}
      </ol>
    </article>`).join('');

  const education = c.education.map((e) => `
    <div class="entry">
      <div class="role-head">
        <h4>${esc(e.title)}</h4>
        <span class="period">${esc(e.period)}</span>
      </div>
      <p class="muted small">${esc(e.place)}${e.note ? ' · ' + esc(e.note) : ''}</p>
    </div>`).join('');

  const certs = c.certifications.map((x) => `
    <div class="cert ${x.pending ? 'pending' : ''}">
      <span class="cert-icon" aria-hidden="true">${x.pending ? '◔' : '✓'}</span>
      <div>
        <h4>${x.url ? `<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.title)}</a>` : esc(x.title)}</h4>
        <p class="muted small">${esc(x.issuer)}</p>
      </div>
    </div>`).join('');

  const skills = c.skills.map((g) => `
    <div class="skill-group">
      <h4>${esc(g.group)}</h4>
      <div class="chips">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join('')}</div>
    </div>`).join('');

  const languages = c.languages.map((l) => `
    <div class="lang">
      <div class="lang-row"><span>${esc(l.name)}</span><span class="muted small">${esc(l.level)}</span></div>
      <div class="bar"><span style="width:${l.pct}%"></span></div>
    </div>`).join('');

  return `
    <section class="card">
      <h2>${esc(c.ui.summary)}</h2>
      <p class="lead">${c.summary}</p>
    </section>

    <section class="card">
      <h2>${esc(c.ui.experience)}</h2>
      ${experience}
      <div class="other">
        <h4>${esc(c.ui.other)}</h4>
        <p class="muted small">${esc(c.other)}</p>
      </div>
    </section>

    <section class="card">
      <h2>${esc(c.ui.project)}</h2>
      <div class="project">
        <div class="role-head">
          <h3><a href="${PROJECT_URL}" target="_blank" rel="noopener">${esc(c.project.name)}</a></h3>
          <span class="badge">Beta · Google Play</span>
        </div>
        <p class="muted">${esc(c.project.tagline)}</p>
        <ul class="bullets">${c.project.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
        <a class="cta" href="${PROJECT_URL}" target="_blank" rel="noopener">${esc(c.ui.testers)} → <strong>${esc(c.ui.visit)}</strong></a>
      </div>
    </section>

    <div class="grid-2">
      <section class="card">
        <h2>${esc(c.ui.education)}</h2>
        ${education}
      </section>
      <section class="card">
        <h2>${esc(c.ui.certifications)}</h2>
        ${certs}
      </section>
    </div>

    <section class="card">
      <h2>${esc(c.ui.skills)}</h2>
      <div class="skills-grid">${skills}</div>
    </section>

    <section class="card">
      <h2>${esc(c.ui.languages)}</h2>
      <div class="langs-grid">${languages}</div>
    </section>`;
}

function renderLetter(c) {
  const l = c.letter;
  return `
    <section class="card letter">
      <p class="letter-date muted">${esc(l.date)}</p>
      <p class="letter-greeting">${esc(l.greeting)}</p>
      ${l.body.map((p) => `<p>${p}</p>`).join('')}
      <p class="letter-closing">${esc(l.closing)}</p>
      <p class="letter-signature">Marc Jiménez</p>
      <p class="muted small"><a href="${LINKEDIN_URL}" target="_blank" rel="noopener">linkedin.com/in/mjimenezco</a></p>
    </section>`;
}

function render() {
  const c = content[state.lang];

  document.documentElement.lang = state.lang;
  document.getElementById('heroRole').textContent = c.ui.role;
  document.getElementById('printLabel').textContent = c.ui.print;
  document.getElementById('cvBtn').textContent = c.ui.cv;
  document.getElementById('coverLetterBtn').textContent = c.ui.coverLetter;

  for (const t of ['cv', 'coverLetter']) {
    const btn = document.getElementById(t + 'Btn');
    btn.classList.toggle('active', state.type === t);
    btn.setAttribute('aria-selected', state.type === t);
  }
  for (const l of ['ca', 'es', 'en']) {
    document.getElementById(l + 'Btn').classList.toggle('active', state.lang === l);
  }

  document.getElementById('content').innerHTML =
    state.type === 'cv' ? renderCV(c) : renderLetter(c);
}

function showType(type) {
  state.type = type;
  render();
}

function showLang(lang) {
  state.lang = lang;
  localStorage.setItem('lang', lang);
  render();
}

// =====================================================================
//  TEMA CLAR / FOSC
// =====================================================================

function applyTheme(dark) {
  document.documentElement.toggleAttribute('data-theme-dark', dark);
  document.querySelector('meta[name="theme-color"]').setAttribute('content', dark ? '#0F1220' : '#1A237E');
}

function toggleTheme() {
  const dark = !document.documentElement.hasAttribute('data-theme-dark');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  applyTheme(dark);
}

(function initTheme() {
  const saved = localStorage.getItem('theme');
  const dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(dark);
})();

document.addEventListener('DOMContentLoaded', render);
