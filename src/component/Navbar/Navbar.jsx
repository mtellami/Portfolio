import styles from './Navbar.style'

function Navbar() {
	return (
		<nav style={styles.navbar}>
			<h3 style={{cursor: 'pointer'}} >Moad.tellami</h3>
			<ul style={styles.sections}>
				<li className='nav-li hover'><a href='#home'>Home</a></li>
				<li className='nav-li hover'><a href='#about'>About</a></li>
				<li className='nav-li hover'><a href='#projects'>Projects</a></li>
				<li className='nav-li hover'><a href='#contact'>Contact</a></li>
			</ul>
		</nav>
	)
}

export default Navbar
