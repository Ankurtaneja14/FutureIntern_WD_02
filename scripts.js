document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('#skills li');

    skills.forEach(skill => {
        skill.addEventListener('mouseover', () => {
            skill.style.transform = 'scale(1.1)';
            skill.style.transition = 'transform 0.2s';
        });
        skill.addEventListener('mouseout', () => {
            skill.style.transform = 'scale(1)';
        });
    });

    // Advanced JS concept: Intersection Observer for section reveal animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
        section.classList.add('hidden');
    });
});
