"use client";

import { useEffect, useState } from "react";

const skills = ["Python", "React.js", "Flutter", "Java", "C", "HTML / CSS / JS"];

const projects = [
  {
    number: "01",
    title: "Finance App",
    type: "Mobil Uygulama",
    stack: ["Flutter", "Java"],
    copy: "Finansal verileri anlaşılır bir mobil deneyime dönüştüren uygulama konsepti.",
    tone: "lime",
  },
  {
    number: "02",
    title: "Ranch Dürüm QR Menü",
    type: "Web Deneyimi",
    stack: ["React.js"],
    copy: "Restoran deneyimini hızlandıran, mobil öncelikli dijital QR menü.",
    tone: "violet",
  },
  {
    number: "03",
    title: "AI & Data Science",
    type: "Algoritma Çalışmaları",
    stack: ["Python", "AI"],
    copy: "Yapay zekâ ve veri bilimi temellerini gerçek problemler üzerinde keşfeden çalışmalar.",
    tone: "blue",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const update = () => setScroll(window.scrollY);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <div className="progress" style={{ transform: `scaleX(${Math.min(scroll / 2400, 1)})` }} />

      <nav className="nav" aria-label="Ana navigasyon">
        <a className="brand" href="#top" aria-label="Arda Tatlı ana sayfa">
          AT<span>.</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Menüyü aç veya kapat"
        >
          <span />
          <span />
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>Hakkımda</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Deneyim</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projeler</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>İletişim ↗</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow reveal delay-1"><i /> Edirne, Türkiye&apos;den merhaba</div>
          <h1 className="reveal delay-2">
            Fikirleri <em>koda,</em><br />
            kodu <span>deneyime</span><br />
            dönüştürüyorum.
          </h1>
          <p className="hero-sub reveal delay-3">
            Mobil, yapay zekâ ve veri bilimi alanlarında üreten<br className="desktop" /> bilgisayar mühendisliği öğrencisi.
          </p>
          <div className="hero-actions reveal delay-4">
            <a className="primary-button" href="#projects">Projelerimi keşfet <b>↘</b></a>
            <a className="text-link" href="mailto:ahmetarda297210@gmail.com">Birlikte çalışalım <span>↗</span></a>
          </div>
        </div>
        <div className="hero-visual reveal delay-3">
          <div className="portrait-frame">
            <div className="status"><i /> Yeni fırsatlara açık</div>
            <img src="/arda-tatli.jpg" alt="Arda Tatlı" />
            <div className="code-card" aria-hidden="true">
              <span>currently_building</span>
              <strong>the future();</strong>
            </div>
          </div>
        </div>
        <a href="#about" className="scroll-cue" aria-label="Aşağı kaydır">
          <span>KEŞFET</span><i>↓</i>
        </a>
      </section>

      <section className="ticker" aria-label="Uzmanlık alanları">
        <div className="ticker-track">
          {[...skills, ...skills].map((skill, i) => <span key={`${skill}-${i}`}>{skill} <b>✦</b></span>)}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-kicker"><span>01</span> HAKKIMDA</div>
        <div className="about-grid">
          <h2>Merak eden.<br /><em>Öğrenen.</em><br />Üreten.</h2>
          <div className="about-copy">
            <p className="lead">Teknolojiyi yalnızca kullanan değil, onunla <strong>anlamlı çözümler</strong> üreten bir geliştiriciyim.</p>
            <p>Trakya Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim. Mobil geliştirme, yapay zekâ ve veri bilimi alanlarında kendimi geliştiriyor; bootcamp&apos;ler, çevrim içi eğitimler ve kendi projelerimle öğrendiklerimi pratiğe dönüştürüyorum.</p>
            <div className="traits">
              <span><b>01</b> Problem çözme odaklı</span>
              <span><b>02</b> Takım çalışmasına uyumlu</span>
              <span><b>03</b> Güçlü iletişim</span>
            </div>
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-kicker light"><span>02</span> DENEYİM & EĞİTİM</div>
        <div className="experience-head">
          <h2>Yolculuk.</h2>
          <p>Her adımda öğreniyor,<br />her projede ilerliyorum.</p>
        </div>
        <div className="timeline">
          <article>
            <div className="date">2025 — DEVAM</div>
            <div><h3>Sponsorluk Takım Lideri</h3><p>GDG Trakya Üniversitesi</p></div>
            <span>Topluluk</span>
          </article>
          <article>
            <div className="date">2025 — 2026</div>
            <div><h3>Mobil Uygulama Geliştirici</h3><p>Trakya Üniversitesi BİDB</p></div>
            <span>Deneyim</span>
          </article>
          <article>
            <div className="date">2024 — DEVAM</div>
            <div><h3>Bilgisayar Mühendisliği</h3><p>Trakya Üniversitesi</p></div>
            <span>Eğitim</span>
          </article>
        </div>
        <div className="learning">
          <div><small>SEÇİLİ EĞİTİMLER</small><p>Huawei AI & Data Science Bootcamp</p><p>BTK Akademi React.js & Flutter</p></div>
          <div><small>DİL</small><p>İngilizce <b>A2 — B1</b></p><p>Berlitz Dil Okulları</p></div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-kicker"><span>03</span> SEÇİLİ PROJELER</div>
        <div className="projects-head"><h2>Ürettiklerim<span>.</span></h2><p>Küçük fikirlerden çalışan ürünlere.</p></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.title} tabIndex={0}>
              <div className="project-top"><span>{project.number}</span><i>↗</i></div>
              <div className="project-art" aria-hidden="true"><b>{project.title.charAt(0)}</b><span /></div>
              <small>{project.type}</small>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              <div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orb" aria-hidden="true" />
        <p>YENİ BİR FİKRİN Mİ VAR?</p>
        <h2>Birlikte<br /><em>üretelim.</em></h2>
        <a href="mailto:ahmetarda297210@gmail.com">ahmetarda297210@gmail.com <span>↗</span></a>
        <div className="contact-meta"><span>Edirne, Türkiye</span><span>0544 310 66 07</span></div>
      </section>

      <footer><a className="brand" href="#top">AT<span>.</span></a><p>© 2026 Arda Tatlı</p><a href="#top">Yukarı dön ↑</a></footer>
    </main>
  );
}
