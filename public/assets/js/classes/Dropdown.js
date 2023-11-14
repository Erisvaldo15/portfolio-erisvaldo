class Dropdown {

    skills = ['front-end', 'back-end', 'tools']

    toggleSkills(options, span, icon) {
        span.addEventListener('click', () => {
            options.classList.toggle('activate')
            icon.classList.toggle('rotate')
        })
    }

    renderSkills(skills, span) {

        skills.forEach(skill => {

            skill.addEventListener('click', event => {

                span.firstChild.textContent = this.skills[+event.target.getAttribute('data-id')]
                
                document.querySelectorAll('.wrapper').forEach(techs => {
                
                    if(techs.classList.contains(this.skills[+event.target.getAttribute('data-id')].replace('-', ''))) {
                        techs.classList.add('activate')
                        return
                    }
                
                    techs.classList.remove('activate')
                })
            })
        })

    }
}

export default Dropdown 