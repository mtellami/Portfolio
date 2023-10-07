import { LuGithub } from "react-icons/lu"
import { TbBrandLinkedin } from "react-icons/tb"
import styles from './Footer.style'

function Footer() {
	return (
		<section id='footer' style={styles.footer}>
			<div style={styles.wraper} className='container'>
				<h3>Copyright © 2023. All rights are reserved</h3>
				<ul style={styles.footerUl}>
					<li style={{transition: '0.2s ease'}}>
						<a href="https://www.linkedin.com/in/mtellami" target='_blank'><TbBrandLinkedin /></a>
					</li>
					<li style={{transition: '0.2s ease'}}>
						<a href="https://github.com/mtellami" target='_blank'><LuGithub /></a>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Footer
