import { useState } from 'react';
import { projects } from './data/projects.js';
import ContactForm from './components/ContactForm.jsx';
import ProjectList from './components/ProjectList.jsx';
import TagFilter from './components/TagFilter';
import './index.css';

const tags = [...new Set(
  projects.flatMap((p) => p.tags),
)];

export default function App() {
  const [activeTag, setActiveTag] = useState('all');

  const shown = activeTag === 'all'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <main className="container">
      <section id="projects">
        <h1>Dự án của mình</h1>
        <TagFilter
          tags={tags}
          activeTag={activeTag}
          onChange={setActiveTag}
        />
        <ProjectList projects={shown} />
      </section>
      <section id="contact" style={{ marginTop: '3rem' }}>
        <h2>Liên hệ với mình</h2>
        <ContactForm />
      </section>
    </main>
  );
}