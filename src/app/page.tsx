import Image from "next/image";

const work = [
  {
    src: "/images/editorial-gold.png",
    alt: "Editorial gold leaf and graphic liner makeup",
    title: "Gilded Form",
    category: "Editorial / 2026",
  },
  {
    src: "/images/editorial-blue.png",
    alt: "Sculptural cobalt blue eye makeup",
    title: "Blue Study",
    category: "Beauty / 2026",
  },
  {
    src: "/images/editorial-crimson.png",
    alt: "Romantic crimson beauty makeup",
    title: "Soft Tension",
    category: "Campaign / 2026",
  },
];

const services = [
  ["01", "Editorial", "Concept-led beauty for publications, campaigns, and creative teams."],
  ["02", "Bridal", "Modern, considered beauty that still feels unmistakably like you."],
  ["03", "Events", "Polished makeup for evenings, appearances, and meaningful occasions."],
  ["04", "Creative Direction", "Visual research, makeup design, and complete beauty concepts."],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="site-nav" aria-label="Main navigation">
          <a className="wordmark" href="#home" aria-label="KMUA home">
            KM<span>U</span>A
          </a>
          <div className="nav-links">
            <a href="#work">Selected work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="#contact">Book a session <span>↗</span></a>
        </nav>

        <div className="hero-copy">
          <p className="eyebrow">Jakarta · Indonesia · Available worldwide</p>
          <h1>
            Makeup as<br />
            a living <em>art</em><br />
            form.
          </h1>
          <p className="hero-intro">
            Beauty with instinct. Faces become canvas, texture becomes language,
            and every look tells a story.
          </p>
        </div>

        <div className="hero-image-wrap">
          <Image
            src="/images/editorial-gold.png"
            alt="Avant-garde gold leaf editorial makeup"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
            className="hero-image"
          />
          <span className="image-index">(01)</span>
          <span className="image-caption">Gilded Form — Editorial</span>
        </div>

        <a className="scroll-cue" href="#manifesto">
          <span>Scroll to explore</span><i aria-hidden="true" />
        </a>
      </section>

      <section className="manifesto" id="manifesto">
        <p className="section-kicker">The approach</p>
        <p className="manifesto-copy">
          Beyond trends. Beyond transformation. I create makeup that feels
          <em> alive</em>—an honest meeting of face, light, color, and character.
        </p>
        <div className="manifesto-note">
          <span>✦</span>
          <p>Created with curiosity, intention,<br />and a little beautiful disruption.</p>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="section-kicker light">Selected work</p>
            <h2>Faces, feelings<br />&amp; forms.</h2>
          </div>
          <p>A study in color, character, and the infinite possibilities of beauty.</p>
        </div>

        <div className="work-grid">
          {work.map((item, index) => (
            <article className="work-card" key={item.title}>
              <div className="work-image-wrap">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 34vw"
                  className="work-image"
                />
                <span>0{index + 1}</span>
              </div>
              <div className="work-meta">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="about">
        <div className="services-intro">
          <p className="section-kicker">The practice</p>
          <h2>Beauty,<br /><em>considered.</em></h2>
          <p>From the first reference to the final touch, each collaboration is personal, intuitive, and precise.</p>
        </div>
        <div className="service-list">
          {services.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <b aria-hidden="true">↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-kicker light">Start a conversation</p>
        <h2>Have a face.<br />Have an idea.<br /><em>Let&apos;s make art.</em></h2>
        <a href="mailto:hello@kmua.studio">hello@kmua.studio <span>↗</span></a>
        <footer>
          <span>© 2026 KMUA Studio</span>
          <div><a href="#">Instagram</a><a href="#">Pinterest</a></div>
          <span>Jakarta, ID</span>
        </footer>
      </section>
    </main>
  );
}
