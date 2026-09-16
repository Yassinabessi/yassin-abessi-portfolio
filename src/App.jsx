 import "./index.css";

function App() {
  return (
    <>
      {/* ================= GLOBAL PHOTO BACKGROUND ================= */}
      <div className="global-photo-background">
        <div className="global-photo-orbit">
          <img src="/assets/Yassin.jpg" alt="" />
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            YASSIN<span>ABESSI</span>
          </a>

          <nav>
            <a href="#home">Accueil</a>
            <a href="#about">À propos</a>
            <a href="#education">Parcours</a>
            <a href="#experience">Expérience</a>
            <a href="#skills">Compétences</a>
            <a href="#projects">Projets</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section id="home" className="hero">
          <div className="hero-background">
            <div className="grid-lines"></div>
            <div className="glow glow-one"></div>
            <div className="glow glow-two"></div>
          </div>

          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-label">
                BUSINESS INTELLIGENCE & DATA ANALYTICS
              </div>

              <h1>
                Transforming Data
                <br />
                Into <span>Intelligent Decisions.</span>
              </h1>

              <p>
                Je transforme les données en informations utiles, puis les
                informations en décisions. Spécialisé en Business Intelligence,
                Data Analytics, Power BI et technologies intelligentes.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-button">
                  Voir mes projets →
                </a>

                <a
                  href="/assets/cv-yassin-abessi.pdf"
                  className="secondary-button"
                  download
                >
                  Télécharger mon CV
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>BI</strong>
                  <span>Business Intelligence</span>
                </div>

                <div>
                  <strong>DATA</strong>
                  <span>Analytics & Reporting</span>
                </div>

                <div>
                  <strong>AI</strong>
                  <span>Intelligent Technologies</span>
                </div>
              </div>
            </div>

            <div className="hero-image-area">
              <div className="image-ring ring-one"></div>
              <div className="image-ring ring-two"></div>

              <div className="portrait-container">
                <img
                  src="/assets/Yassin.jpg"
                  alt="Yassin Abessi"
                  className="portrait"
                />
              </div>

              <div className="floating-card card-top">
                <span>POWER BI</span>
                <strong>DATA VISUALIZATION</strong>
              </div>

              <div className="floating-card card-bottom">
                <span>SQL • PYTHON • ETL</span>
                <strong>DATA ENGINEERING</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section">
          <div className="section-label">01 — À PROPOS</div>

          <div className="section-heading">
            <h2>
              Data-driven.
              <br />
              <span>Business-focused.</span>
            </h2>

            <p>
              Passionné par la donnée et les nouvelles technologies, je
              développe des solutions permettant de transformer des données
              complexes en indicateurs clairs et exploitables.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <h3>Mon approche</h3>

              <p>
                Mon parcours combine Business Intelligence, analyse de données,
                développement informatique et management des technologies
                intelligentes.
              </p>

              <p>
                Mon objectif est de comprendre le besoin métier, structurer les
                données et construire des solutions permettant d'améliorer la
                prise de décision.
              </p>

              <div className="tags">
                <span>Power BI</span>
                <span>Data Analytics</span>
                <span>ETL</span>
                <span>Data Warehouse</span>
                <span>SQL</span>
                <span>Python</span>
                <span>SAP</span>
              </div>
            </div>

            <div className="data-statement">
              <span>DATA IS MORE THAN NUMBERS.</span>

              <p>
                Je transforme les données en informations utiles, puis les
                informations en décisions.
              </p>

              <div className="data-lines">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section id="education" className="section dark-section">
          <div className="section-label">02 — PARCOURS ACADÉMIQUE</div>

          <div className="section-heading">
            <h2>
              Formation &
              <br />
              <span>expertise.</span>
            </h2>

            <p>
              Un parcours académique orienté informatique, Business Intelligence
              et technologies intelligentes.
            </p>
          </div>

          <div className="education-grid">
            <div className="education-card featured">
              <div className="education-image">
                <img src="/assets/Ensit Photo.jpg" alt="ENSIT" />
              </div>

              <div className="education-content">
                <span>2025 — 2027</span>

                <h3>
                  Master Professionnel
                  <br />
                  Management des Technologies Intelligentes et Propriété
                  Industrielle
                </h3>

                <p>ENSIT — École Nationale Supérieure d'Ingénieurs de Tunis</p>

                <strong>Actuellement en 2ème année — M2</strong>
              </div>
            </div>

            <div className="education-card">
              <div className="education-image">
                <img src="/assets/Fseg Jendouba.jpg" alt="FSJEGJ" />
              </div>

              <div className="education-content">
                <span>2022 — 2025</span>

                <h3>
                  Licence Nationale
                  <br />
                  Informatique de Gestion
                </h3>

                <p>Spécialité Business Intelligence — FSJEGJ</p>

                <strong>Mention Très Bien</strong>
              </div>
            </div>

            <div className="education-card">
              <div className="education-image">
                <img src="/assets/Krib.jpg" alt="Lycée El Krib" />
              </div>

              <div className="education-content">
                <span>2019 — 2022</span>

                <h3>
                  Baccalauréat
                  <br />
                  Économie Gestion
                </h3>
                 <p> Lycée Lkrib _ Siliana </p>
                <strong>Mention Passable</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="section">
          <div className="section-label">03 — EXPÉRIENCE</div>

          <div className="section-heading">
            <h2>
              Expérience
              <br />
              <span>professionnelle.</span>
            </h2>

            <p>
              Des expériences combinant analyse de données, logistique,
              Business Intelligence et développement de solutions décisionnelles.
            </p>
          </div>

          <div className="timeline">
            {/* ================= SOTUBI ================= */}
            <div className="timeline-item">
              <div className="timeline-date">
                FÉVRIER 2026 — JUILLET 2026
              </div>

              <div className="timeline-line">
                <span></span>
              </div>

              <div className="timeline-content">
                <img
                  src="/assets/sotubi.jpg"
                  alt="SOTUBI - Saida"
                  className="experience-image"
                />

                <span className="experience-type">
                  CADRE LOGISTIQUE
                </span>

                <h3>Société Tunisienne de Biscuiterie Saida</h3>

                <p>
                  • Analyse des KPI logistiques.
                  <br />
                  • Création de dashboards Power BI.
                  <br />
                  • Suivi des dépenses carburant, maintenance des véhicules.
                  <br />
                  • Contrôle de caisse logistique sur SAP et reporting mensuel /
                  annuel.
                </p>

                <div className="tags">
                  <span>SAP</span>
                  <span>Power BI</span>
                  <span>Excel</span>
                  <span>Stock Management</span>
                  <span>Reporting</span>
                </div>
              </div>
            </div>

            {/* ================= BIAT ================= */}
            <div className="timeline-item">
              <div className="timeline-date">
                MARS 2025 — MAI 2025
              </div>

              <div className="timeline-line">
                <span></span>
              </div>

              <div className="timeline-content">
                <img
                  src="/assets/biat si.jpg"
                  alt="BIAT"
                  className="experience-image"
                />

                <span className="experience-type">
                  STAGE PROJET DE FIN D'ÉTUDES
                </span>

                <h3>BIAT</h3>

                <h4>
                  Impact de l'utilisation des chèques sur les différents
                  moyens de paiement
                </h4>

                <p>
                  • Analyse des moyens de paiement.
                  <br />
                  • Intégration et nettoyage des données.
                  <br />
                  • Conception d'un Data Warehouse.
                  <br />
                  • Développement des dashboards Power BI et réalisation d'une
                  prédiction avec Machine Learning.
                </p>

                <div className="tags">
                  <span>Talend</span>
                  <span>PostgreSQL</span>
                  <span>Power BI</span>
                  <span>Python</span>
                  <span>React.js</span>
                  <span>Express.js</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section dark-section">
          <div className="section-label">04 — COMPÉTENCES</div>

          <div className="section-heading">
            <h2>
              Technical
              <br />
              <span>Expertise</span>
            </h2>

            <p>
              Les technologies que j'utilise pour analyser, transformer,
              visualiser et exploiter les données.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-number">01</div>
              <h3>Business Intelligence</h3>
              <p>
                Power BI, Data Visualization, DAX, KPI, Reporting et analyse
                décisionnelle.
              </p>

              <div className="skill-list">
                <span>Power BI</span>
                <span>DAX</span>
                <span>Reporting</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-number">02</div>
              <h3>Data & Database</h3>
              <p>
                Conception et exploitation de bases de données relationnelles
                et solutions Data Warehouse.
              </p>

              <div className="skill-list">
                <span>SQL</span>
                <span>PostgreSQL</span>
                <span>Data Warehouse</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-number">03</div>
              <h3>ETL & Data Engineering</h3>
              <p>
                Nettoyage, transformation, intégration et préparation des
                données pour l'analyse.
              </p>

              <div className="skill-list">
                <span>Talend</span>
                <span>ETL</span>
                <span>Data Cleaning</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-number">04</div>
              <h3>Programming</h3>
              <p>
                Développement d'applications web et solutions d'analyse
                orientées données.
              </p>

              <div className="skill-list">
                <span>Python</span>
                <span>React.js</span>
                <span>Express.js</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-number">05</div>
              <h3>Enterprise Tools</h3>
              <p>
                Utilisation d'outils professionnels pour le suivi, l'analyse
                et le reporting.
              </p>

              <div className="skill-list">
                <span>SAP</span>
                <span>Excel</span>
                <span>PowerPoint</span>
                <span>Word</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-number">06</div>
              <h3>Intelligent Technologies</h3>
              <p>
                Intérêt pour l'intelligence artificielle, le Machine Learning
                et les nouvelles technologies.
              </p>

              <div className="skill-list">
                <span>Machine Learning</span>
                <span>Python</span>
                <span>AI</span>
              </div>
            </div>
          </div>
        </section>

               {/* ================= PROJECTS ================= */}
        <section id="projects" className="section">
          <div className="section-label">05 — PROJETS</div>

          <div className="section-heading">
            <h2>
              Selected
              <br />
              <span>projects.</span>
            </h2>

            <p>
              Quelques projets qui illustrent mon approche de la donnée, du
              développement et de la création de solutions digitales.
            </p>
          </div>

          <div className="projects-grid">
            {/* ================= PROJECT 01 ================= */}
            <article className="project-card project-main">
              <div className="project-top">
                <span>01 / BIAT</span>
                <span>DATA ANALYTICS</span>
              </div>

              <div className="project-visual payment-visual">
                <div className="chart-bars">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <div className="chart-label">
                  PAYMENT ANALYTICS
                </div>
              </div>

              <div className="project-content">
                <h3>BIAT Payment Analytics</h3>

                <p>
                  Impact de l'utilisation des chèques sur les différents
                  moyens de paiement.
                </p>

                <div className="project-stack">
                  <span>Power BI</span>
                  <span>Talend</span>
                  <span>PostgreSQL</span>
                  <span>Python</span>
                  <span>React.js</span>
                </div>
              </div>
            </article>

            {/* ================= PROJECT 02 ================= */}
            <article className="project-card">
              <div className="project-top">
                <span>02 / FPL</span>
                <span>DATA VISUALIZATION</span>
              </div>

              <div className="project-visual football-visual">
                <div className="football-field">
                  <div className="field-center"></div>
                  <div className="player player-one"></div>
                  <div className="player player-two"></div>
                  <div className="player player-three"></div>
                </div>
              </div>

              <div className="project-content">
                <h3>Fantasy Premier League</h3>

                <p>
                  Analyse et Data Visualization des performances des joueurs
                  2024–2025 avec prédiction Machine Learning.
                </p>

                <div className="project-stack">
                  <span>PostgreSQL</span>
                  <span>Power BI</span>
                  <span>Python</span>
                  <span>React</span>
                  <span>ML</span>
                </div>
              </div>
            </article>

            {/* ================= PROJECT 03 ================= */}
            <article className="project-card">
              <div className="project-top">
                <span>03 / DIGITAL</span>
                <span>DIGITAL CREATION</span>
              </div>

              <div className="project-visual digital-visual">
                <div className="digital-layout">
                  <div className="digital-document">
                    <div className="digital-header"></div>

                    <div className="digital-profile">
                      <div className="digital-avatar"></div>

                      <div className="digital-lines">
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                    </div>

                    <div className="digital-content-lines">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>

                  <div className="digital-label">
                    CV • PORTFOLIO • DESIGN
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>Digital Design & Portfolio</h3>

                <p>
                  Conception de CV professionnels, portfolios personnels,
                  affiches et supports digitaux pour étudiants, jeunes
                  diplômés et professionnels.
                </p>

                <div className="project-stack">
                  <span>Canva</span>
                  <span>Web Design</span>
                  <span>CV Design</span>
                  <span>Portfolio</span>
                  <span>PowerPoint</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ================= PIPELINE ================= */}
        <section className="pipeline-section">
          <div className="section-label">06 — DATA PIPELINE</div>

          <div className="pipeline-title">
            <h2>
              From raw data
              <br />
              to <span>business insight.</span>
            </h2>
          </div>

          <div className="pipeline">
            <div>BUSINESS NEED</div>
            <span>→</span>
            <div>DATA COLLECTION</div>
            <span>→</span>
            <div>DATA CLEANING</div>
            <span>→</span>
            <div>ETL</div>
            <span>→</span>
            <div>DATA WAREHOUSE</div>
            <span>→</span>
            <div>POWER BI</div>
            <span>→</span>
            <div>MACHINE LEARNING</div>
            <span>→</span>
            <div>BUSINESS INSIGHTS</div>
          </div>
        </section>


{/* ================= CERTIFICATIONS ================= */}
<section id="certifications" className="section certifications-section">

  <div className="section-heading">
    <span className="section-number">06</span>
    <h2>CERTIFICATIONS</h2>
    <p>
      Professional certifications and continuous learning.
    </p>
  </div>

  <div className="certifications-grid">

    {/* CISCO */}
    <article className="certification-card">

      <div className="certification-image">
        <img
          src="/assets/cyber.png"
          alt="Cisco Networking Academy - Introduction to Cybersecurity Certificate"
        />
      </div>

      <div className="certification-content">
        <span className="certification-label">
          CISCO NETWORKING ACADEMY
        </span>

        <h3>Introduction to Cybersecurity</h3>

        <p>
          Certificate of Course Completion focused on fundamental
          cybersecurity concepts, threats, vulnerabilities and
          security awareness.
        </p>

        <span className="certification-status">
          ✓ Certificate of Course Completion
        </span>
      </div>

    </article>


    {/* HASHGRAPH */}
    <article className="certification-card">

      <div className="certification-image">
        <img
          src="/assets/hash.png"
          alt="The Hashgraph Association - Hashgraph Developer Certificate"
        />
      </div>

      <div className="certification-content">
        <span className="certification-label">
          THE HASHGRAPH ASSOCIATION
        </span>

        <h3>Hashgraph Developer</h3>

        <p>
          Certificate of Completion covering Hashgraph development,
          distributed ledger technologies and the Hedera ecosystem.
        </p>

        <span className="certification-status">
          ✓ Certificate of Completion
        </span>
      </div>

    </article>

  </div>

</section>

       {/* ================= CONTACT ================= */}
<section id="contact" className="section contact-section">
  <div className="section-label">07 — CONTACT</div>

  <div className="section-heading">
    <h2>
      Let’s connect
      <br />
      <span>and create impact</span>
    </h2>

    <p>
      Vous avez un projet, une opportunité ou simplement une question ?
      N'hésitez pas à me contacter.
    </p>
  </div>

 

    {/* ================= CONTACT INFO ================= */}
    <div className="contact-info">

      <div className="contact-card">
        <span>EMAIL</span>
        <a href="mailto:Yassinabessi844@gmail.com">
          Yassinabessi844@gmail.com
        </a>
      </div>

      <div className="contact-card">
        <span>TÉLÉPHONE</span>
        <a href="tel:+21694408927">
          +216 94 408 927
        </a>
      </div>

      <div className="contact-card">
        <span>LOCATION</span>
        <p>Tunis, Tunisia</p>
      </div>

      {/* ================= SOCIAL MEDIA ================= */}
   <div className="social-links">

  <a
    href="https://www.linkedin.com/in/yassin-abessi-67057627/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="social-link"
  >
    <img src="/assets/linkd.jpg" alt="LinkedIn" />
  </a>

  <a
    href="https://www.instagram.com/yassin__abessi/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="social-link"
  >
    <img src="/assets/insta.jpg" alt="Instagram" />
  </a>

  <a
    href="https://www.facebook.com/share/1C2hbwZfqZ/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="social-link"
  >
    <img src="/assets/facebook.png" alt="Facebook" />
  </a>

</div>

<div className="contact-message">
  <strong>DATA IS MORE THAN NUMBERS.</strong>

  <p>
    Construisons ensemble des solutions basées sur les données.
  </p>
</div>

    {/* ================= CONTACT FORM ================= */}
    <form
      className="contact-form"
      action="https://formsubmit.co/Yassinabessi844@gmail.com"
      method="POST"
    >

      <input
        type="hidden"
        name="_subject"
        value="Nouveau message depuis le Portfolio de Yassin Abessi"
      />

      <input
        type="hidden"
        name="_captcha"
        value="false"
      />

      <input
        type="hidden"
        name="_template"
        value="table"
      />

      <div className="form-group">
        <label htmlFor="name">Nom</label>

        <input
          id="name"
          type="text"
          name="name"
          placeholder="Votre nom"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="votre@email.com"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Sujet</label>

        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="Sujet de votre message"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>

        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Écrivez votre message..."
          required
        ></textarea>
      </div>

      <button type="submit" className="contact-submit">
        Envoyer le message →
      </button>

    </form>

  </div>
         </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div>
          <strong>YASSIN ABESSI</strong>
          <p>Business Intelligence & Data Analyst</p>
        </div>

        <span>© 2026 Yassin Abessi</span>
      </footer>
    </>
  );
}

export default App;