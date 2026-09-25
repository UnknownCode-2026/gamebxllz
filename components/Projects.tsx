'use client';
import { useRef, useState } from 'react';
import { projects, type Project } from '@/data/portfolio';

export default function Projects() {
  const [filter, setFilter] = useState('ทั้งหมด');
  const [selected, setSelected] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const categories = ['ทั้งหมด', ...new Set(projects.map((p) => p.category))];

  function show(project: Project) {
    setSelected(project);
    dialog.current?.showModal();
  }

  return (
    <>
      <div className="filters" aria-label="กรองประเภทผลงาน">
        {categories.map((category) => (
          <button
            key={category}
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {projects
          .filter((project) => filter === 'ทั้งหมด' || project.category === filter)
          .map((project, index) => (
            <article key={project.id} className="project-card">
              <div className="project-card-top">
                <span className="project-number">0{index + 1}</span>
                <span className="project-status"><i />{project.status ?? 'PROJECT'}</span>
              </div>
              <div className="project-visual" aria-hidden="true">
                <span>{project.title.slice(0, 2).toUpperCase()}</span>
                <small>{project.category}</small>
              </div>
              <span className="eyebrow">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tags">
                {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <div className="project-links">
                <button className="text-link" onClick={() => show(project)}>ดูรายละเอียด ↗</button>
                {project.source && (
                  <a className="source-link" href={project.source} target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                  </a>
                )}
              </div>
            </article>
          ))}
      </div>

      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="project-title"
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}
        onCancel={() => dialog.current?.close()}
      >
        <button className="dialog-close" autoFocus onClick={() => dialog.current?.close()} aria-label="ปิดรายละเอียด">✕</button>
        {selected && (
          <>
            <div className="dialog-meta">
              <span className="eyebrow">{selected.category}</span>
              <span className="project-status"><i />{selected.status ?? 'PROJECT'}</span>
            </div>
            <h2 id="project-title">{selected.title}</h2>
            <p>{selected.description}</p>
            <h3>สิ่งที่พัฒนา</h3>
            <p>{selected.role}</p>
            <div className="tags">
              {selected.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
            <div className="actions">
              {selected.url && (
                <a className="button primary" href={selected.url} target="_blank" rel="noopener noreferrer">ดูเว็บไซต์ ↗</a>
              )}
              {selected.source && (
                <a className="button secondary" href={selected.source} target="_blank" rel="noopener noreferrer">Source Code ↗</a>
              )}
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
