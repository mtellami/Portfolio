import projects from './Projects.data'
import { LuGithub } from "react-icons/lu"
import styles from './Projects.style'

function Projects() {
	return (
		<section id='projects' className='container'>
			<h3 style={styles.projectsH3}>portfolio</h3>
			<h2>Each project is a unique piece of development 🧩</h2>
			<ul style={styles.projectsUl}>
				{projects.map((project, index) => (
					<li className={`project ${index % 2 ? 'order' : ''}`} key={index} style={styles.project}>
						<div style={styles.projectImage}>
							<img src={project.image} style={{maxWidth: '100%', height: 'auto', display: 'block'}} />
						</div>
						<div style={styles.projectDescription}>
							<h4 style={{fontSize: '1.3rem', textTransform: 'uppercase'}}>{project.title}
								<span style={styles.projectDate}>({project.date})</span>
							</h4>
							<p style={styles.projectParagraph}>{project.description}</p>
							<ul style={{display: 'flex', gap: '1rem'}}>
								{project.technologies.map((tech, techIndex) => (
									<li style={styles.projectStack} key={techIndex}>{tech}</li>
								))}
							</ul>
							<a href={project.repoURL} target='_blank' style={styles.projectRepo}>
								<span className='hover' style={{transition: '0.2s ease'}}>Code</span>
								<LuGithub className='hover' style={{fontSize: '1.7rem', transition: '0.2s ease'}}/>
							</a>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Projects
