import css from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<header className={css.header}>			
			<h1 className={css.title}>Awesome Kanban Board</h1>
			<div className={css.sprint}>
				<Link to="/Login" > Login </Link>
			</div>
		</header>
	)
}

export default Header
