import { SITE, IMAGE_SOURCE } from "../lib/config";
import { Icon, ArrowLink, Eyebrow, T } from "../components/ui";
import { StageExplorer, FeaturedMachinery, EditorialGallery, ClosingCta, WorldMap } from "../components/blocks";

type HeroSlide = {
  label: string;
  src: string;
  srcSet?: string;
  w: number;
  h: number;
  alt: string;
  copy: string;
  href: string;
  cta: string;
  video?: string;
  pos?: string;
};
const HERO: HeroSlide[] = [
  {
    label: "Agricultural processing",
    src: "/images/gallery/industrial-processing-hall-equipment.webp",
    srcSet: "/images/gallery/industrial-processing-hall-equipment-900.webp 1350w, /images/gallery/industrial-processing-hall-equipment.webp 1947w",
    w: 1947,
    h: 1083,
    alt: "Large blue processing machine with electric motors inside an industrial hall",
    copy: "From individual equipment to integrated processing systems, explore industrial solutions aligned with your next business ambition.",
    href: "/solutions/",
    cta: "Explore our solutions",
  },
  {
    label: "Industrial machinery",
    src: "/images/hero/industrial-machinery-assembly-line.webp",
    w: 2400,
    h: 1600,
    alt: "Automated industrial assembly line with pneumatic fixtures inside a bright factory hall",
    copy: "Milling, conveying, pneumatic and packaging equipment, with specifications taken from supplier documentation and flagged where they need confirmation.",
    href: "/products/",
    cta: "Explore our machinery",
    pos: "60% 50%",
  },
  {
    label: "Engineering & integration",
    src: "/images/hero/hero-assembly-poster.webp",
    video: "/media/hero-assembly.mp4",
    w: 1920,
    h: 1080,
    alt: "Technician in work gloves assembling a motor on a factory workbench",
    copy: "Processing line configurations, PLC control and equipment integration, discussed around your project requirements.",
    href: "/our-approach/",
    cta: "Explore our approach",
  },
  {
    label: "Precision assembly",
    src: "/images/hero/precision-assembly-engine-technician.webp",
    w: 1958,
    h: 1305,
    alt: "Technician working on an industrial engine assembly in a workshop",
    copy: "Attention to detail in every component: equipment is matched to the process, then confirmed against the supplier's documentation.",
    href: "/products/",
    cta: "Search the catalogue",
    pos: "55% 40%",
  },
  {
    label: "Automation & controls",
    src: "/images/hero/automation-engineers-robotic-arms.webp",
    w: 1958,
    h: 1033,
    alt: "Two engineers reviewing a plan with robotic arms in the background",
    copy: "Automation requirements, PLC controls and equipment integration, reviewed together before anything is specified.",
    href: "/solutions/automation-packaging/",
    cta: "Explore automation",
    pos: "50% 35%",
  },
  {
    label: "Process systems",
    src: "/images/hero/process-systems-valve-technicians.webp",
    w: 1958,
    h: 1305,
    alt: "Two technicians in safety gear working on an industrial valve",
    copy: "Pneumatic, filtration and handling systems that connect each stage of the line, from intake to packaging.",
    href: "/solutions/pneumatic-filtration/",
    cta: "Explore pneumatic systems",
    pos: "50% 40%",
  },
];

const SOLUTION_CARDS = [
  {
    n: "01",
    tag: "Agricultural processing",
    title: "From harvest to\nindustrial value.",
    text: "Explore cassava processing, cleaning, drying, grinding and agricultural equipment configurations.",
    href: "/solutions/cassava-processing/",
    img: "/images/gallery/grain-storage-silos-steel-towers.webp",
    alt: "Steel grain storage silos and processing towers against a blue sky",
    pos: "40% 50%",
  },
  {
    n: "02",
    tag: "Industrial machinery",
    title: "Precision in\nevery process.",
    text: "Explore milling equipment, conveying systems, pneumatic machinery and packaging solutions.",
    href: "/solutions/flour-milling-grinding/",
    img: "/images/gallery/heat-pump-dryer-unit.webp",
    alt: "Industrial heat-pump dryer unit on a factory floor",
    pos: "35% 50%",
  },
  {
    n: "03",
    tag: "Engineering & integration",
    title: "Connecting\nevery stage.",
    text: "Explore processing line configurations, automation requirements, PLC controls and equipment integration.",
    href: "/solutions/automation-packaging/",
    img: "/images/gallery/hot-air-furnace-drying-unit-ducting.webp",
    alt: "Hot-air unit with large ducting feeding a drying line",
    pos: "62% 50%",
  },
];

const APPROACH = [
  { n: "01", t: "Understand", d: "Explore the business requirements, project location and production objectives." },
  { n: "02", t: "Configure", d: "Identify relevant equipment and suitable processing configurations." },
  { n: "03", t: "Coordinate", d: "Discuss technical information, sourcing considerations and project requirements." },
  { n: "04", t: "Progress", d: "Support the next steps through focused business communication." },
];

const Star = () => (
  <svg className="marquee__star" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
    <path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7" />
  </svg>
);

export function HomePage() {
  const words = ["Precision", "Processing", "Progress", "Engineering", "Possibilities"];
  return (
    <>
      {/* 01 — CINEMATIC HERO */}
      <section className="hero" aria-roledescription="carousel" aria-label="Featured solutions" data-hero>
        <div className="hero__slides">
          {HERO.map((h, i) => (
            <div
              className={`hero__slide ${i === 0 ? "is-active" : ""}`}
              data-hero-slide
              data-copy={h.copy}
              data-href={h.href}
              data-cta={h.cta}
              data-duration={h.video ? 10000 : 7000}
              aria-hidden={i === 0 ? undefined : "true"}
              key={h.label}
            >
              <img
                src={h.src}
                srcSet={h.srcSet}
                sizes={h.srcSet ? "100vw" : undefined}
                width={h.w}
                height={h.h}
                alt={h.alt}
                loading={i === 0 ? undefined : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
                decoding="async"
                style={h.pos ? { objectPosition: h.pos } : undefined}
              />
              {h.video ? <video className="hero__video" data-hero-video src={h.video} poster={h.src} muted loop playsInline preload="none" tabIndex={-1} aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__top">
            <p className="hero__eyebrow">SMARCTEK LLC · INDUSTRIAL POSSIBILITIES</p>
            <p className="hero__eyebrow hero__eyebrow--right">PRECISION / PROCESSING / PROGRESS</p>
          </div>
          <h1 className="hero__title" id="hero-title">
            <span className="tl">Engineering possibilities.</span>
            <span className="tl">Powering <em>industries.</em></span>
          </h1>
          <div className="hero__bottom">
            <p className="hero__copy" data-hero-copy aria-live="off">{HERO[0].copy}</p>
            <a href={HERO[0].href} className="btn btn--lg hero__cta" data-hero-cta>
              <span>{HERO[0].cta}</span>
              <Icon name="arrow-up-right" size={18} />
            </a>
          </div>
        </div>
        <div className="hero__nav">
          <ol className="hero__tabs" aria-label="Choose a featured solution">
            {HERO.map((h, i) => (
              <li key={h.label}>
                <button type="button" className={`hero__tab ${i === 0 ? "is-active" : ""}`} data-hero-tab aria-current={i === 0 ? "true" : undefined}>
                  <span className="hero__tab-line" aria-hidden="true"><i /></span>
                  <span className="hero__tab-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="hero__tab-label">{h.label}</span>
                </button>
              </li>
            ))}
          </ol>
          <button type="button" className="hero__pause" data-hero-toggle aria-label="Pause automatic slide changes">
            <Icon name="pause" size={16} className="hero__pause-pause" />
            <Icon name="play" size={16} className="hero__pause-play" />
          </button>
        </div>
        <p className="hero__credit">Image: {IMAGE_SOURCE.owner}</p>
      </section>

      {/* 02 — BRAND MARQUEE */}
      <div className="marquee" role="group" aria-label="Precision, Processing, Progress, Engineering, Possibilities">
        <div className="marquee__track" aria-hidden="true">
          {[0, 1].map((k) => (
            <ul className="marquee__list" key={k}>
              {words.map((w) => (
                <li key={w + k}>
                  <span>{w}</span>
                  <Star />
                </li>
              ))}
              {words.map((w) => (
                <li key={w + k + "b"}>
                  <span>{w}</span>
                  <Star />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* 03 — ABOUT: editorial split */}
      <section className="section about" id="about">
        <div className="about__grid">
          <div className="about__media">
            <figure className="about__main img-reveal reveal" data-parallax>
              <img
                src="/images/gallery/industrial-processing-hall-equipment-900.webp"
                width="1350"
                height="751"
                alt="Large blue processing machine with electric motors inside an industrial hall"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Reference photograph · {IMAGE_SOURCE.credit}</figcaption>
            </figure>
            <figure className="about__inset reveal reveal--delay-2">
              <img src="/images/products/quadro-plansifter-ke-8x28.webp" width="479" height="720" alt="Quadro plansifter" loading="lazy" decoding="async" />
            </figure>
          </div>
          <div className="about__text">
            <Eyebrow>More than machinery</Eyebrow>
            <h2 className="reveal"><T>{"Big ambitions.\n_Engineered possibilities._"}</T></h2>
            <p className="about__statement reveal reveal--delay">
              The right equipment makes a difference.
              <br />
              The right approach brings it together.
            </p>
            <div className="about__body reveal reveal--delay-2">
              <p>
                Smarctek LLC brings industrial equipment, agricultural processing systems and international business opportunities into a focused conversation about what your business needs next.
              </p>
              <p>
                Our approach starts with understanding requirements, exploring suitable machinery configurations and connecting the technical details with the broader project objectives.
              </p>
            </div>
            <ArrowLink href="/about-us/">Discover Smarctek</ArrowLink>
          </div>
        </div>
      </section>

      {/* 04 — SOLUTIONS: immersive portrait cards */}
      <section className="section solutions" id="solutions" aria-labelledby="sol-title">
        <div className="container">
          <div className="solutions__head">
            <div>
              <Eyebrow>Industrial solutions. Shared ambitions.</Eyebrow>
              <h2 id="sol-title" className="reveal"><T>{"Built for industry.\n_Designed for what's next._"}</T></h2>
            </div>
            <div className="solutions__aside reveal reveal--delay">
              <p>Industrial equipment and processing configurations, each with machinery, process detail and project enquiry options.</p>
              <ArrowLink href="/solutions/">All solutions</ArrowLink>
            </div>
          </div>
          <ul className="scards">
            {SOLUTION_CARDS.map((c, i) => (
              <li className={`scards__item reveal ${i ? `reveal--delay${i > 1 ? "-2" : ""}` : ""}`} key={c.n}>
                <a href={c.href} className="scard">
                  <img src={c.img} alt={c.alt} loading="lazy" decoding="async" style={{ objectPosition: c.pos }} />
                  <span className="scard__shade" aria-hidden="true" />
                  <span className="scard__top">
                    <span className="scard__n">{c.n}</span>
                    <span className="scard__tag">{c.tag}</span>
                  </span>
                  <span className="scard__bottom">
                    <span className="scard__title"><T>{c.title}</T></span>
                    <span className="scard__text">{c.text}</span>
                  </span>
                  <span className="arrow-orb scard__orb" aria-hidden="true">
                    <Icon name="arrow-up-right" size={22} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 05 — FEATURED CASSAVA CONFIGURATION */}
      <section className="cassava" id="featured" aria-labelledby="cassava-title">
        <div className="cassava__split">
          <div className="cassava__photo">
            <img
              src="/images/gallery/factory-hall-bulk-material-handling.webp"
              width="548"
              height="424"
              alt="People inspecting bulk material inside a large industrial hall"
              loading="lazy"
              decoding="async"
              data-parallax-img
            />
            <span className="cassava__photo-shade" aria-hidden="true" />
            <p className="cassava__credit">{IMAGE_SOURCE.credit}</p>
          </div>
          <div className="cassava__copy">
            <Eyebrow light>Featured processing configuration</Eyebrow>
            <h2 id="cassava-title" className="reveal"><T>{"From the ground.\n_To greater possibilities._"}</T></h2>
            <p className="lead reveal reveal--delay">
              Explore an integrated cassava flour processing configuration, bringing together cleaning, washing, drying, milling and packaging systems.
            </p>
            <div className="cassava__figure reveal reveal--delay-2">
              <p className="cassava__big" aria-label="400-ton">400<span>-ton</span></p>
              <p className="cassava__note">
                Reference proposal presented as a project concept. It is not a completed, commissioned or Smarctek-owned project, and the time basis of the 400-ton figure is not stated.
              </p>
            </div>
            <ArrowLink href="/solutions/cassava-processing/" light>Explore cassava processing</ArrowLink>
          </div>
        </div>
        <div className="container cassava__stages">
          <StageExplorer />
        </div>
      </section>

      {/* 06 — MACHINERY PREVIEW */}
      <section className="section machinery" id="machinery" aria-labelledby="mach-title">
        <div className="container">
          <div className="solutions__head">
            <div>
              <Eyebrow>The technology behind the process</Eyebrow>
              <h2 id="mach-title" className="reveal"><T>{"Purpose-built equipment.\n_Precision at every stage._"}</T></h2>
            </div>
            <div className="solutions__aside reveal reveal--delay">
              <p>Photographs and specifications are drawn from supplier documentation. Prices are not published; request a quote for any machine.</p>
              <ArrowLink href="/products/">Search the full catalogue</ArrowLink>
            </div>
          </div>
        </div>
        <FeaturedMachinery />
      </section>

      {/* 07 — OUR APPROACH */}
      <section className="approach" id="approach" aria-labelledby="approach-title" data-progress-section>
        <div className="approach__grid-bg" aria-hidden="true" />
        <div className="approach__inner">
          <div className="approach__head">
            <Eyebrow light>From requirements to possibilities</Eyebrow>
            <h2 id="approach-title" className="reveal"><T>{"Every project begins\n_with the right conversation._"}</T></h2>
            <ArrowLink href="/our-approach/" light>Our approach</ArrowLink>
          </div>
          <ol className="approach__list">
            <span className="approach__rail" aria-hidden="true"><i data-progress-fill /></span>
            {APPROACH.map((a) => (
              <li className="approach__row reveal" key={a.n}>
                <span className="approach__n" aria-hidden="true">{a.n}</span>
                <div>
                  <h3>{a.t}</h3>
                  <p>{a.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 08 — INDUSTRIAL GALLERY */}
      <section className="section gallery-home" id="gallery" aria-labelledby="gal-title">
        <div className="container">
          <div className="solutions__head">
            <div>
              <Eyebrow>Industrial gallery</Eyebrow>
              <h2 id="gal-title" className="reveal"><T>{"A closer look\n_at industrial possibilities._"}</T></h2>
            </div>
            <div className="solutions__aside reveal reveal--delay">
              <p>Select any photograph to enlarge it.</p>
              <ArrowLink href="/gallery/">Open the gallery</ArrowLink>
            </div>
          </div>
          <EditorialGallery />
          <p className="disclaimer">
            <Icon name="clipboard" size={16} />
            <span>Photographs were supplied by {IMAGE_SOURCE.owner} and are shown as reference images, not Smarctek facilities.</span>
          </p>
        </div>
      </section>

      {/* 09 — INTERNATIONAL BUSINESS */}
      <section className="intl" id="international" aria-labelledby="intl-title">
        <div className="intl__inner">
          <div className="intl__copy">
            <Eyebrow light>International business</Eyebrow>
            <h2 id="intl-title" className="reveal"><T>{"Industrial ambitions.\n_Beyond borders._"}</T></h2>
            <p className="lead reveal reveal--delay">
              Smarctek LLC is based in Glastonbury, Connecticut, and welcomes international equipment sourcing and project discussions.
            </p>
            <dl className="intl__contact reveal reveal--delay-2">
              <div>
                <dt>USA-based company contact</dt>
                <dd>
                  {SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
                </dd>
              </div>
              <div>
                <dt>Opportunities</dt>
                <dd>International equipment sourcing · Project discussions</dd>
              </div>
            </dl>
            <ArrowLink href="/global-business/" light>Discuss international opportunities</ArrowLink>
          </div>
          <div className="intl__map">
            <WorldMap />
            <ul className="intl__legend">
              <li><i className="dot dot--hq" /> Smarctek business contact</li>
              <li><i className="dot" /> Reference project context only</li>
            </ul>
            <p className="intl__note">Türkiye and Angola are shown as the origin and destination of a reference proposal. They do not indicate Smarctek offices or operations.</p>
          </div>
        </div>
      </section>

      {/* 10 — CLOSING CTA */}
      <ClosingCta />
    </>
  );
}
