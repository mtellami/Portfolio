const styles = {
	projectsH3: {
		textTransform: 'uppercase',
		color: '#147efb',
		margin: '5rem 0 1rem 0',
	},
	projectsUl: {
		margin: '3rem 0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '4rem',
	},
	project: {
		width: '100%',
		backgroundColor: '#FFF',
		borderRadius: '15px',
		padding: '1.5rem',
		display: 'flex',
		justifyContent: 'space-between',
	},
	projectImage: {
		flexBasis: '55%',    
		borderRadius: '25px',
		boxShadow: '0 0 10px rgba(0,0,0,.09)',
	},
	projectDescription: {
		flexBasis: '40%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	projectDate: {
		fontSize: '1rem',
		marginLeft: '1rem',
  	color: 'hsla(0,5%,8%,.773)',
	},
	projectParagraph: {
		fontSize: '1.1rem',
		color: '#767676',
		lineHeight: '1.8',
		fontWeight: '500',
	},
	projectStack: {
		padding: '5px 20px',
		boxShadow: '0 0 10px rgba(0,0,0,.1)',
		fontWeight: '600',
		fontSize: '1.1rem',
	},
	projectRepo: {
		margin: '1rem 0',
		fontSize: '1.4rem',
		fontWeight: '500',
		display: 'flex',
		alignItems: 'center',
		gap: '10px',
		cursor: 'pointer',
	}
}

export default styles
