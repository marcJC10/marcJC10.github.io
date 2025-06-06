// Variables d'estat actual
let currentType = 'coverLetter';
let currentLang = 'ca';
let darkMode = false;

// Text dels botons en funció de la llengua sel·leccionada
const buttonLabels = {
  ca: {
    coverLetter: "Carta de Presentació",
    cv: "Currículum",
    ca: "Català",
    en: "Anglès",
    es: "Castellà"
  },
  en: {
    coverLetter: "Cover Letter",
    cv: "Resume",
    ca: "Catalan",
    en: "English",
    es: "Spanish"
  },
  es: {
    coverLetter: "Carta de Presentación",
    cv: "Currículum",
    ca: "Catalán",
    en: "Inglés",
    es: "Español"
  }
};

// Variables Carta de Presentació 
const coverLetterContent = {
  ca: `<h2>‣ Carta de Presentació</h2>
<p class="date">Barcelona, 2025</p>
<p class="greeting">Sobre mi:</p>
<p>Soc estudiant d'Enginyeria Informàtica i Gestió de Sistemes d'Informació al Tecnocampus (UPF) i actualment estic buscant l'oportunitat de realitzar pràctiques professionals per complementar la meva formació acadèmica.</p>
<p>Al llarg dels meus estudis he desenvolupat habilitats tècniques en diversos llenguatges de programació (Java, Python, JavaScript), tecnologies web (HTML, CSS), gestió de bases de dades (SQL) i sistemes de control de versions (GitHub). També he adquirit coneixements en sistemes operatius, xarxes i seguretat informàtica.</p>
<p>A més de formació tècnica, compto amb experiència laboral en el sector del servei tècnic en sistemes de seguretat i atenció al client. Aquestes experiències m'han permès desenvolupar habilitats de comunicació, treball en equip i resolució de problemes.</p>
<p>Estic especialment interessat en la possibilitat de signar un conveni de pràctiques amb el meu centre universitari per tal de completar la meva formació, i considero que la seva empresa podria ser un bon entorn i una oportunitat per aplicar i ampliar els meus coneixements.</p>
<p>Des d'aquest portafoli podeu accedir al meu currículum més detalladament.</p>
<p class="closing">Salut!</p>
<p class="signature">Marc Jiménez Comí</p>`,
  
  en: `<h2>‣ Cover Letter</h2>
<p class="date">Barcelona, 2025</p>
<p class="greeting">About me:</p>
<p>I am a student of Computer Engineering and Information Systems Management at Tecnocampus (UPF) and I am currently looking for an opportunity to undertake professional internships to complement my academic training.</p>
<p>Through my studies, I have developed technical skills in various programming languages (Java, Python, JavaScript), web technologies (HTML, CSS), database management (SQL), and version control systems (GitHub). I have also acquired knowledge in operating systems, networks, and computer security.</p>
<p>In addition to my technical training, I have work experience in the security systems technical service sector, as well as in customer service. These experiences have allowed me to develop communication skills, teamwork, and problem-solving abilities.</p>
<p>I am particularly interested in the possibility of signing an internship agreement with my university to complete my university studies, and I believe your company could be an appropriate environment to apply and expand my knowledge.</p>
<p>From this portfolio you can access a more detailed CV resume about my experience.</p>
<p class="closing">Sincerely,</p>
<p class="signature">Marc Jiménez Comí</p>`,
  
  es: `<h2>‣ Carta de Presentación</h2>
<p class="date">Barcelona, 2025</p>
<p class="greeting">Sobre mí:</p>
<p>Soy estudiante de Ingeniería Informática y Gestión de Sistemas de Información en Tecnocampus (UPF) y actualmente estoy buscando la oportunidad de realizar prácticas profesionales para complementar mi formación académica.</p>
<p>A lo largo de mis estudios, he desarrollado habilidades técnicas en diversos lenguajes de programación (Java, Python, JavaScript), tecnologías web (HTML, CSS), gestión de bases de datos (SQL) y sistemas de control de versiones (GitHub). También he adquirido conocimientos en sistemas operativos, redes y seguridad informática.</p>
<p>Además de mi formación técnica, cuento con experiencia laboral en el sector del servicio técnico en sistemas de seguridad, así como en atención al cliente. Estas experiencias me han permitido desarrollar habilidades de comunicación, trabajo en equipo y resolución de problemas.</p>
<p>Estoy especialmente interesado en la posibilidad de firmar un convenio de prácticas con mi centro universitario para poner punto final a mi formación universitaria, y considero que su empresa podría ser un entorno adecuado así como una oportunidad de aplicar y ampliar mis conocimientos.</p>
<p>Desde este portafolio pueden acceder a mi currículum con más detalle.</p>
<p class="closing">Atentamente,</p>
<p class="signature">Marc Jiménez Comí</p>`
};

// Variables CV
const cvContent = {
  en: `<h2>‣ Personal Information</h2>
<p>Nationality: Spain<br>Date of Birth: 20/02/2002<br>Gender: Male</p>
<h2>‣ Education</h2>
<ul>
  <li><strong>La Presentació School</strong>, Arenys de Mar, Barcelona
    <ul>
      <li>Primary, Secondary and Scientific-Technological Baccalaureate (Completion - 2020).</li>
    </ul>
  </li>
  <li><strong>Academica International Studies</strong>, Barcelona
    <ul>
      <li>American International High School Diploma (Dual Diploma of English, Academica) (Completion - 2020).</li>
    </ul>
  </li>
  <li><strong>Tecnocampus (UPF)</strong>, Mataró, Barcelona
    <ul>
      <li>Current student of Computer Engineering and Information Systems Management.</li>
    </ul>
  </li>
</ul>
<h2>‣ Certifications</h2>
<ul>
  <li><strong>English Certification 360 LPT B2</strong> (Equivalent to Cambridge FCE) – 2021.</li>
  <li><strong>Dual Diploma Program (American High School)</strong> – 2016 - 2020.</li>
</ul>
<h2>‣ Work Experience</h2>
<ul>
  <li><strong>Private tutoring for over 5 years</strong> – Languages (Catalan, Spanish, English), mathematics and general academic support (Primary, Secondary, Baccalaureate).</li>
  <li><strong>Kitchen staff in a restaurant</strong> – Summer season 2021.</li>
  <li><strong>Waiter</strong> – From May to November 2022.</li>
  <li><strong>Technical support at GSSecurity</strong> – Intrusion systems and CCTV (From June 2023 to present).</li>
</ul>
<h2>‣ Aspiration</h2>
<p>I am a young and proactive person, eager to work to finance my studies, which are currently my main focus during the academic year.<br><br>
I would be delighted to collaborate with your company, bringing my resources, knowledge and motivation to both work and learn, to serve you and your business.<br><br>
<strong>I am currently seeking the opportunity to sign an internship agreement in order to complete my university studies.</strong></p>
<h2>‣ Skills</h2>
<ul>
  <li><strong>Native Languages:</strong>
    <ul>
      <li>Spoken and written <strong>Catalan.</strong> Native level.</li>
      <li>Spoken and written <strong>Spanish.</strong> Native level.</li>
    </ul>
  </li>
  <li><strong>Other Languages:</strong>
    <ul>
      <li>Spoken and written <strong>English.</strong> High level.</li>
      <li>Spoken and written <strong>French.</strong> Very basic level.</li>
    </ul>
  </li>
  <li><strong>Skills and Competencies:</strong>
    <ul>
      <li>Team-oriented professional with strong interpersonal and communication skills.</li>
      <li>Proficiency with computers and other digital devices.</li>
      <li>Experience with Operating Systems: Linux, Windows, macOS, iOS, and Android.</li>
      <li>Positive attitude and willingness to work.</li>
      <li>Java Development.</li>
      <li>Springboot.</li>
      <li>Python Development.</li>
      <li>Github.</li>
      <li>Docker.</li>
      <li>Management, Design, & Creation of relational SQL DB.</li>
      <li>MongoDB.</li>
      <li>WordPress and other CMS.</li>
      <li>HTML, CSS & JavaScript.</li>
      <li>Network Fundamentals, Network Access, IP Connectivity, IP Services, firewalls, DNS, LAN, WAN.</li>
      <li>Familiarity with software implementation methodologies such as Waterfall, Agile, Lean, and Scrum.</li>
    </ul>
  </li>
</ul>`,
  es: `<h2>‣ Información Personal</h2>
<p>Nacionalidad: España<br>Fecha de nacimiento: 20/02/2002<br>Género: Masculino</p>
<h2>‣ Formación</h2>
<ul>
  <li><strong>Escuela La Presentación</strong>, Arenys de Mar, Barcelona
    <ul>
      <li>Primaria, Secundaria y Bachillerato Científico-Tecnológico (Finalización - 2020).</li>
    </ul>
  </li>
  <li><strong>Academica International Studies</strong>, Barcelona
    <ul>
      <li>Bachillerato Internacional Americano (Dual Diploma of English, Academica) (Finalización - 2020).</li>
    </ul>
  </li>
  <li><strong>Tecnocampus (UPF)</strong>, Mataró, Barcelona
    <ul>
      <li>Estudiante actual de Ingeniería Informática y Gestión de Sistemas de Información.</li>
    </ul>
  </li>
</ul>
<h2>‣ Títulos</h2>
<ul>
  <li><strong>Certificación de inglés 360 LPT B2</strong> (equivalente FCE Cambridge) – 2021.</li>
  <li><strong>Dual Diploma Program (Bachillerato Americano)</strong> – 2016 - 2020.</ul>
<h2>‣ Experiencia Laboral</h2>
<ul>
  <li><strong>Clases particulares durante más de 5 años</strong> – Idiomas (Catalán, Castellano, Inglés), matemáticas y apoyo general (Primaria, ESO, Bachillerato).</li>
  <li><strong>Equipo de cocina en un restaurante</strong> – Temporada de verano 2021.</li>
  <li><strong>Camarero</strong> – De mayo a noviembre 2022.</li>
  <li><strong>Servicio técnico en GSSecurity</strong> – Sistemas de intrusión y CCTV (Desde junio 2023 hasta la actualidad).</li>
</ul>
<h2>‣ Aspiración</h2>
<p>Soy una persona joven y con iniciativa, y estoy deseando trabajar para financiar mis estudios, que actualmente son mi actividad principal durante el curso académico.<br><br>
Estaría encantado de poder colaborar con su empresa, poniendo mis recursos, conocimientos y ganas, tanto de trabajar como de aprender, a su servicio y al de su negocio.<br><br>
<strong>Actualmente, estoy buscando la posibilidad de firmar un convenio de prácticas para poder completar mi etapa universitaria.</strong></p>
<h2>‣ Competencias</h2>
<ul>
  <li><strong>Lenguas Maternas:</strong>
    <ul>
      <li><strong>Catalán</strong> hablado y escrito. Nivel nativo.</li>
      <li><strong>Castellano</strong> hablado y escrito. Nivel nativo.</li>
    </ul>
  </li>
  <li><strong>Otros Idiomas:</strong>
    <ul>
      <li><strong>Inglés</strong> hablado y escrito. Nivel alto.</li>
      <li><strong>Francés</strong> hablado y escrito. Nivel muy básico.</li>
    </ul>
  </li>
  <li><strong>Habilidades y Competencias:</strong>
    <ul>
      <li>Trabajo en equipo y buena comunicación.</li>
      <li>Dominio de ordenadores y otros dispositivos informáticos.</li>
      <li>Dominio de los Sistemas Operativos Linux, Windows, MacOS, iOS y Android.</li>
      <li>Actitud positiva y con ganas de trabajar.</li>
      <li>Desarrollo en Java.</li>
      <li>Springboot.</li>
      <li>Desarrollo en Python.</li>
      <li>Github.</li>
      <li>Docker.</li>
      <li>Administración, Diseño y Creación de Bases de datos relacionales SQL.</li>
      <li>MongoDB.</li>
      <li>WordPress y otros CMS.</li>
      <li>HTML, CSS & JavaScript.</li>
      <li>Fundamentos de Redes, Acceso a Redes, Conectividad IP, Servicios IP, firewalls, DNS, LAN, WAN.</li>
      <li>Familiaridad con procesos de implementación de software como Waterfall, Agile, Lean, y Scrum.</li>
    </ul>
  </li>
</ul>`,
  ca: `<h2>‣ Informació Personal</h2>
<p>Nacionalitat: Espanya<br>Data de naixement: 20/02/2002<br>Gènere: Masculí</p>
<h2>‣ Formació</h2>
<ul>
  <li><strong>Escola La Presentació</strong>, Arenys de Mar, Barcelona
    <ul>
      <li>Primària, Secundària i Batxillerat Científic-Tecnològic (Finalització - 2020).</li>
    </ul>
  </li>
  <li><strong>Academica International Studies</strong>, Barcelona
    <ul>
      <li>Batxillerat Internacional Americà (Dual Diploma of English, Academica) (Finalització - 2020).</li>
    </ul>
  </li>
  <li><strong>Tecnocampus (UPF)</strong>, Mataró, Barcelona
    <ul>
      <li>Estudiant actual d'Enginyeria Informàtica i Gestió de Sistemes d'Informació.</li>
    </ul>
  </li>
</ul>
<h2>‣ Títols</h2>
<ul>
  <li><strong>Certificació d'anglès 360 LPT B2</strong> (Equivalent FCE Cambridge) – 2021.</li>
  <li><strong>Dual Diploma Program (Batxillerat Americà)</strong> – 2016 - 2020.</li>
</ul>
<h2>‣ Experiència Laboral</h2>
<ul>
  <li><strong>Classes particulars durant més de 5 anys</strong> – Idiomes (Català, Castellà, Anglès), matemàtiques i suport general (Primària, ESO, Batxillerat).</li>
  <li><strong>Equip de cuina a un restaurant</strong> – Temporada d'Estiu 2021.</li>
  <li><strong>Cambrer</strong> – De maig a novembre 2022.</li>
  <li><strong>Servei tècnic a GSSecurity</strong> – Sistemes d'intrusió i CCTV (Des de juny 2023 fins a l'actualitat).</li>
</ul>
<h2>‣ Aspiració</h2>
<p>Soc una persona jove i amb iniciativa, i estic desitjant treballar per finançar els meus estudis, que actualment són la meva activitat principal durant el curs acadèmic.<br><br>
Estaria encantat de poder col·laborar amb la seva empresa, posant els meus recursos, coneixements i ganes, tant de treballar com d'aprendre, al seu servei i al del seu negoci.<br><br>
<strong>Actualment, estic buscant la possibilitat de signar un conveni de pràctiques per tal de poder completar la meva etapa Universitària.</strong></p>
<h2>‣ Competències</h2>
<ul>
  <li><strong>Llengües Maternes:</strong>
    <ul>
      <li><strong>Català</strong> parlat i escrit. Nivell natiu.</li>
      <li><strong>Castellà</strong> parlat i escrit. Nivell natiu.</li>
    </ul>
  </li>
  <li><strong>Altres Llengües:</strong>
    <ul>
      <li><strong>Anglès</strong> parlat i escrit. Nivell alt.</li>
      <li><strong>Francès</strong> parlat i escrit. Nivell molt bàsic.</li>
    </ul>
  </li>
  <li><strong>Habilitats i Competències:</strong>
    <ul>
      <li>Treball en equip i bona comunicació</li>
      <li>Domini dels ordinadors i altres dispositius informàtics.</li>
      <li>Domini dels Sistemes Operatius Linux, Windows, MacOS, iOS, i Android.</li>
      <li>Actitud positiva i amb ganes de treballar.</li>
      <li>Desenvolupament en Java.</li>
      <li>Springboot.</li>
      <li>Desenvolupament en Python.</li>
      <li>Github.</li>
      <li>Docker.</li>
      <li>Administració, Disseny i creació de Bases de dades relacionals SQL.</li>
      <li>MongoDB.</li>
      <li>WordPress i altres CMS.</li>
      <li>HTML, CSS & JavaScript.</li>
      <li>Network Fundamentals, Network Access, IP Connectivity, IP Services, firewalls, DNS, LAN, WAN.</li>
      <li>Familiaritat amb processos d'implementació de software com Waterfall, Agile, Lean, i Scrum.</li>
    </ul>
  </li>
</ul>`
};

function showType(type) {
  // Actualitza l'estil del botó actiu
  document.getElementById('coverLetterBtn').classList.remove('active');
  document.getElementById('cvBtn').classList.remove('active');
  document.getElementById(type + 'Btn').classList.add('active');
  
  // Actualitza el tipus actual
  currentType = type;
  
  // Actualitza el contingut en funció del tipus i llengua actuals
  updateContent();
}

function showLang(lang) {
  // Actualitza l'estil del botó actiu
  document.getElementById('caBtn').classList.remove('active');
  document.getElementById('enBtn').classList.remove('active');
  document.getElementById('esBtn').classList.remove('active');
  document.getElementById(lang + 'Btn').classList.add('active');
  
  // Actualitza la llengua actual
  currentLang = lang;
  
  // Actualitza els textos dels botons
  updateButtonLabels();
  
  // Actualitza el contingut en funció del tipus i llengua actuals
  updateContent();
}

function updateButtonLabels() {
  // Actualitza els textos dels botons segon la llengua actual
  document.getElementById('coverLetterBtn').textContent = buttonLabels[currentLang].coverLetter;
  document.getElementById('cvBtn').textContent = buttonLabels[currentLang].cv;
  document.getElementById('caBtn').textContent = buttonLabels[currentLang].ca;
  document.getElementById('enBtn').textContent = buttonLabels[currentLang].en;
  document.getElementById('esBtn').textContent = buttonLabels[currentLang].es;
}

function updateContent() {
  // Mostra el contingut corresponent al tipus i llengua actuals
  if (currentType === 'cv') {
    document.getElementById('content').innerHTML = cvContent[currentLang];
  } else {
    document.getElementById('content').innerHTML = coverLetterContent[currentLang];
  }
}

// Inicialitza el contingut amb la carta de presentació en català
document.addEventListener('DOMContentLoaded', function() {
  showType('coverLetter');
  showLang('ca');
  updateButtonLabels(); // Assegura que els botons tinguin el text correcte al iniciar el portafoli
});

// Funció per canviar entre mode fosc i clar
function toggleTheme() {
  darkMode = !darkMode;
  
  // Canvia l'atribut de tema al body
  if (darkMode) {
    document.body.setAttribute('data-theme', 'dark');
    document.querySelector('.theme-toggle i').textContent = 'light_mode';
  } else {
    document.body.removeAttribute('data-theme');
    document.querySelector('.theme-toggle i').textContent = 'dark_mode';
  }
  
  // Actualitza el color del tema a la metadata
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', darkMode ? '#3949AB' : '#1A237E');
  }
}
