import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FiMail } from 'react-icons/fi'
import styles from './Contact.style.js'

function Contact() {
	return (
		<section id='contact' style={{backgroundColor: '#FFF', padding: '80px 0'}}>
			<div className='container'>
				<h3 style={styles.contactH3}>contact</h3>
				<h2>Let's build something, great together 👇</h2>
				<ul style={styles.contactUl}>
					<li style={styles.contactLi}>
						<i style={styles.contactIcon}><HiOutlineLocationMarker style={{ fontSize: '2rem'}} /></i>
						<div>
							<h4 style={{fontSize: '1.2rem'}}>Location</h4>
							<p style={{color: '#767676', fontSize: '1.1rem'}}>Morocco, Marrakesh</p>
						</div>
					</li>
					<li style={styles.contactLi}>
						<i style={styles.contactIcon}><FiMail style={{ fontSize: '2rem' }}/></i>
						<div>
							<h4 style={{fontSize: '1.2rem'}}>Mail</h4>
							<p style={{color: '#767676', fontSize: '1.1rem'}}>moadtell@gmail.com</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Contact
