/* ===========================================
   MAIN.JS - Renders content from data.js
   =========================================== */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('current-year').textContent = new Date().getFullYear();

    renderPapers('working-papers', siteData.workingPapers);
    renderPapers('publications', siteData.publications);
    renderPapers('books', siteData.books);
    renderSoftware();
    renderTeam();
    renderProjects();
    renderTeaching();
    renderAlumni();
});

function renderPapers(id, papers) {
    const el = document.getElementById(id);
    if (!el) return;

    if (!papers || papers.length === 0) {
        el.innerHTML = '<li class="empty">Coming soon.</li>';
        return;
    }

    el.innerHTML = papers.map(p => `
        <li>
            <span class="paper-title">${p.title}</span>
            ${p.authors ? `<br><span class="paper-authors">${p.authors}</span>` : ''}
            ${p.venue ? `<br><span class="paper-venue">${p.venue}</span>` : ''}
            ${p.links?.length ? `<div class="paper-links">${p.links.map(l => `[<a href="${l.url}" target="_blank">${l.text}</a>]`).join(' ')}</div>` : ''}
        </li>
    `).join('');
}

function renderSoftware() {
    const el = document.getElementById('software-list');
    if (!el) return;

    if (!siteData.software?.length) {
        el.innerHTML = '<li class="empty">Coming soon.</li>';
        return;
    }

    el.innerHTML = siteData.software.map(s => `
        <li>
            <span class="software-name"><a href="${s.links?.[0]?.url || '#'}" target="_blank">${s.name}</a></span>
            <span class="software-desc"> — ${s.description}</span>
            <br><span class="software-meta">${s.authors}${s.downloads ? ` · <span class="downloads">${s.downloads} downloads</span>` : ''}</span>
            ${s.links?.length ? `<div class="software-links">${s.links.map(l => `[<a href="${l.url}" target="_blank">${l.text}</a>]`).join(' ')}</div>` : ''}
        </li>
    `).join('');
}

function renderTeam() {
    const el = document.getElementById('team-list');
    if (!el) return;

    if (!siteData.team?.length) {
        el.innerHTML = '<p class="empty">Coming soon.</p>';
        return;
    }

    el.innerHTML = siteData.team.map(m => {
        const hasLink = m.url && m.url.trim() !== '';
        return `
            <div class="team-card ${hasLink ? 'has-link' : ''}">
                <span class="team-name">
                    ${hasLink ? `<a href="${m.url}" target="_blank">${m.name}</a>` : m.name}
                </span>
                ${m.affiliation ? `<span class="team-affiliation">${m.affiliation}</span>` : ''}
                ${hasLink ? '<span class="team-link-icon">↗</span>' : ''}
            </div>
        `;
    }).join('');
}

function renderProjects() {
    const el = document.getElementById('projects-list');
    if (!el) return;

    if (!siteData.ongoingProjects?.length) {
        el.innerHTML = '<li class="empty">Coming soon.</li>';
        return;
    }

    el.innerHTML = siteData.ongoingProjects.map(p => `
        <li class="project-item">
            <span class="project-title">${p.title}</span>
            ${p.description ? `<br><span class="project-desc">${p.description}</span>` : ''}
            ${p.team?.length ? `<br><span class="project-team">Team: ${p.team.join(', ')}</span>` : ''}
        </li>
    `).join('');
}

function renderTeaching() {
    const el = document.getElementById('teaching-list');
    if (!el) return;

    if (!siteData.teaching?.length) {
        el.innerHTML = '<li class="empty">Coming soon.</li>';
        return;
    }

    el.innerHTML = siteData.teaching.map(t => `
        <li class="teaching-item">
            <span class="teaching-course">${t.course}</span>
            <span class="teaching-meta">${t.institution}, ${t.years}</span>
        </li>
    `).join('');
}

function renderAlumni() {
    const el = document.getElementById('alumni-list');
    if (!el) return;

    if (!siteData.studentsByCourse?.length) {
        el.innerHTML = '<p class="empty">To be updated.</p>';
        return;
    }

    el.innerHTML = siteData.studentsByCourse.map(course => `
        <div class="course-group">
            <div class="course-header">
                <h3 class="course-title">${course.course}</h3>
                <span class="course-meta">${course.institution}, ${course.year}</span>
                ${course.repoUrl ? `<a href="${course.repoUrl}" target="_blank" class="course-repo">Repository ↗</a>` : ''}
            </div>
            <div class="students-grid">
                ${course.students.map(s => `
                    <a href="${s.url}" target="_blank" class="student-card">
                        <span class="student-name">${s.name}</span>
                        <span class="student-link-icon">↗</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `).join('');
}
