const styles = {
	home: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	profile: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '80px',
	},
	floating: {
		width: '400px',
  	animationName: 'floating',
  	animationDuration: '3s',
  	animationIterationCount: 'infinite',
  	animationTimingFunction: 'ease-in-out',
	},
	contentP: {
		margin: '10px 0',
		lineHeight: '1.8',
		fontSize: '1.1rem',
	},
	contentLi: {
		margin: '10px 10px 0 0',
		fontSize: '2rem',
		transition: 'all .23s',
	},
	stack: {
		display: 'flex',
		alignItems: 'center',
		marginTop: '50px',
	},
	stackH4: {
		fontWeight: '500',
		fontSize: '1.1rem',
		marginRight: '50px',
		paddingRight: '20px',
		borderRight: '2px solid #2d2e32',
	},
	stackImg: {
		width: '50px',
		marginRight: '10px',
		transition: 'all .3s ease-in-out',
	},
}

export default styles
