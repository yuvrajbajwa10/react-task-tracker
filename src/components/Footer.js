import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Footer = () => {
    const location = useLocation()

    return (

        <footer>
            <p>Copyright &copy; 2021</p>
            {location.pathname === '/' && <Link to='/about'>About</Link>}
            {location.pathname === '/about' && <Link to='/'>Go Back to App</Link>}    
        </footer>
    )
}

export default Footer
