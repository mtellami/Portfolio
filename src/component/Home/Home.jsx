import { LuGithub } from "react-icons/lu"
import { TbBrandLinkedin } from "react-icons/tb"
import styles from './Home.style.js'

function Home() {
	const techStack = ['c', 'cpp', 'docker', 'ts', 'react', 'express', 'nest', 'prisma', 'mongo', 'postgres']
	return (
		<section id='home' className='container' style={styles.home}>
			<div className='profile' style={styles.profile}>
				<div className='content' style={{width: '55%'}}>
					<h1 style={{fontSize: '3.5rem'}}>Software Developer</h1>
					<p style={styles.contentP}>Hi, I'm Moad Tellami. A passionate Software Developer based in Morocco, Marrakesh. 📍</p>
					<ul style={{display: 'flex', alignItems: 'center'}}>
						<li style={styles.contentLi} className='hover'>
							<a href="https://www.linkedin.com/in/mtellami" target='_blank'><TbBrandLinkedin /></a>
						</li>
						<li style={styles.contentLi} className='hover'>
							<a href="https://github.com/mtellami" target='_blank'><LuGithub /></a>
						</li>
					</ul>
				</div>
				<img className='floating' src='image.svg' style={styles.floating} />
			</div>
			<div style={styles.stack}>
				<h4 style={styles.stackH4}>Tech Skills</h4>
				<ul className='skills'>
					{techStack.map((item, index) => (
						<img style={styles.stackImg} key={index} src={`https://skillicons.dev/icons?i=${item}`} />
					))}
				</ul>
			</div>
		</section>
	)
}

<img src='https://skillicons.dev/icons?i=postgres' />
export default Home
