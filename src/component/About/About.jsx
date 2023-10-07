import data from './About.data'
import styles from './About.style'

function About() {
	return (
		<section id='about' style={styles.about}>
			<div className='container'>
				<div className='about-section' style={styles.aboutSection}>
					<img src='public/assets/about.jpg' style={styles.aboutImgae} />
					<div style={styles.aboutMe}>
						<h4 style={styles.aboutMeH4}>about me</h4>
						<h2 style={{fontSize: '1.7rem'}}>{data.header}</h2>
						<p style={{fontSize: '1.2rem', color: '#767676'}}>{data.paragraph}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
