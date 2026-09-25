import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import { journey, portfolio, projects, services, skills } from '@/data/portfolio';

export default function Home() {
  const techCount = new Set(skills.flatMap((group) => group.items)).size;

  return (
    <>
      <a className="skip-link" href="#main">ข้ามไปเนื้อหา</a>
      <Navbar />

      <main id="main">
        <section className="hero wrap" id="home">
          <div className="hero-top">
            <span className="eyebrow"><i className="blue-dot" /> PERSONAL PORTFOLIO / V{portfolio.version}</span>
            <span className="hero-coordinate">DESIGN. DEVELOP. REFINE.</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability"><i /> {portfolio.availability}</div>
              <p className="hello">สวัสดีครับ ผม</p>
              <h1>Anuthit<span>Kalachak<span className="period">.</span></span></h1>
              <div className="role"><span />DEVELOPER & DIGITAL CREATOR</div>
              <h2>{portfolio.headline}</h2>
              <p className="intro">{portfolio.intro}</p>
              <div className="actions">
                <a className="button primary" href="#projects">สำรวจผลงาน <span>↗</span></a>
                <a className="button secondary" href={portfolio.facebook} target="_blank" rel="noopener noreferrer">
                  ติดต่อผ่าน Facebook <span>↗</span>
                </a>
              </div>
            </div>

            <div className="identity-wrap">
              <div className="identity-glow" aria-hidden="true" />
              <div className="identity-card">
                <div className="card-top">
                  <span className="mono">&lt;developer /&gt;</span>
                  <span className="card-dots">● ● ●</span>
                </div>
                <div className="monogram" aria-hidden="true">AK<span>.</span></div>
                <div className="identity-bottom">
                  <div>
                    <strong>Anuthit Kalachak</strong>
                    <span>DEVELOPER PORTFOLIO V2</span>
                  </div>
                  <span className="identity-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="card-footer mono">
                  <span>IDEAS → DIGITAL EXPERIENCES</span>
                  <span>02</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <a href="#about">เลื่อนเพื่อรู้จักกัน <span>↓</span></a>
            <span className="mono">BUILT WITH PURPOSE.</span>
          </div>
        </section>

        <div className="ticker">
          <div className="wrap">
            CREATIVE THINKING <span>✳</span>
            THOUGHTFUL DEVELOPMENT <span>✳</span>
            MEANINGFUL EXPERIENCES <span>✳</span>
          </div>
        </div>

        <section className="stats wrap" aria-label="Portfolio summary">
          <div><strong>{projects.length}</strong><span>SELECTED PROJECTS</span></div>
          <div><strong>{skills.length}</strong><span>SKILL GROUPS</span></div>
          <div><strong>{techCount}+</strong><span>TOOLS & TECHNOLOGIES</span></div>
          <div><strong>V2</strong><span>CURRENT PORTFOLIO</span></div>
        </section>

        <section id="about" className="section wrap about">
          <div>
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2 className="section-title">เบื้องหลังโค้ด<br /><span>คือคนที่ชอบสร้าง</span></h2>
          </div>
          <div className="about-copy">
            <p className="lead">ผม Anuthit Kalachak<br />ยินดีที่ได้รู้จักครับ</p>
            <p>ผมสนใจการพัฒนาเว็บไซต์ เว็บแอป ระบบหลังบ้าน และการเชื่อมต่อบริการต่าง ๆ ให้กลายเป็นประสบการณ์ที่ใช้งานง่ายบนอุปกรณ์จริง</p>
            <p>ผมชอบเริ่มจากการทำความเข้าใจปัญหา วางโครงสร้างให้ชัด แล้วค่อยพัฒนาและปรับรายละเอียดให้ระบบพร้อมใช้งานและต่อยอดได้</p>
            <a href={portfolio.github} target="_blank" rel="noopener noreferrer" className="text-link">ดูโปรเจกต์ทั้งหมดบน GitHub ↗</a>
          </div>
        </section>

        <section id="skills" className="section wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SKILLS & TOOLBOX</p>
              <h2 className="section-title">ทักษะและเครื่องมือ<span>ที่ใช้สร้างโปรเจกต์</span></h2>
            </div>
            <p className="section-note">เลือก stack ให้เหมาะกับโจทย์<br />และเน้นระบบที่ดูแลต่อได้</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article key={skill.category} className="skill-card">
                <div className="skill-card-head">
                  <span className="mono">0{index + 1}</span>
                  <span className="skill-mark">+</span>
                </div>
                <h3>{skill.category}</h3>
                <div className="tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2 className="section-title">แนวคิดที่กลายเป็น<span>ผลงานจริง</span></h2>
            </div>
            <a className="text-link" href={portfolio.github} target="_blank" rel="noopener noreferrer">เยี่ยมชม GitHub ↗</a>
          </div>
          <Projects />
        </section>

        <section id="journey" className="section wrap journey">
          <div>
            <p className="eyebrow">04 / THE JOURNEY</p>
            <h2 className="section-title">สร้าง เชื่อมต่อ<span>และปรับให้ดีขึ้น</span></h2>
          </div>
          <div className="journey-list">
            {journey.map((item) => (
              <article key={item.year}>
                <span className="journey-index mono">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">05 / WHAT I BUILD</p>
              <h2 className="section-title">มีไอเดียอะไร<span>อยู่ในใจ?</span></h2>
            </div>
            <p className="section-note">เริ่มจากบทสนทนา<br />เพื่อกำหนดขอบเขตที่เหมาะสม</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span className="service-icon" aria-hidden="true">{service.icon}</span>
                  <span className="mono">/{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a className="text-link" href={portfolio.facebook} target="_blank" rel="noopener noreferrer">พูดคุยรายละเอียด ↗</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap process">
          <div>
            <p className="eyebrow">06 / THE PROCESS</p>
            <h2 className="section-title">เริ่มต้นอย่างชัดเจน<br /><span>ไปด้วยกันทุกขั้นตอน</span></h2>
          </div>
          <ol>
            {[
              ['พูดคุยไอเดีย', 'ทำความเข้าใจเป้าหมาย ปัญหา และสิ่งที่อยากให้เกิดขึ้น'],
              ['วางโครงสร้าง', 'กำหนดขอบเขต เทคโนโลยี และ flow การใช้งานที่เหมาะสม'],
              ['พัฒนาและทดสอบ', 'สร้างระบบ ตรวจรายละเอียด Responsive และทดสอบการใช้งาน'],
              ['ส่งมอบและต่อยอด', 'ส่งมอบงานพร้อมแนวทางดูแลและวางพื้นฐานสำหรับเวอร์ชันถัดไป'],
            ].map(([title, text], index) => (
              <li key={title}>
                <span className="mono">0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="contact-section">
          <div className="wrap">
            <p className="eyebrow">HAVE AN IDEA IN MIND?</p>
            <h2>มาเริ่มสร้าง<br /><span>สิ่งดี ๆ ด้วยกัน</span><span className="contact-star" aria-hidden="true">✳</span></h2>
            <div className="contact-bottom">
              <div>
                <p>มีโปรเจกต์ที่อยากพูดคุย หรืออยากดูงานเพิ่มเติม<br />เลือกช่องทางที่สะดวกได้เลยครับ</p>
                <div className="social-row">
                  <a href={portfolio.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                  <a href={portfolio.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a>
                </div>
              </div>
              <a className="button light" href={portfolio.facebook} target="_blank" rel="noopener noreferrer">
                พูดคุยกับ Anuthit <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <a href="#home" className="brand" aria-label="กลับด้านบน">AK<span>.</span></a>
        <span>© {new Date().getFullYear()} Anuthit Kalachak / Portfolio V{portfolio.version}</span>
        <div>
          <a href={portfolio.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href={portfolio.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a>
          <a href="#home" aria-label="กลับด้านบน">↑</a>
        </div>
      </footer>
    </>
  );
}
