import '../styles/Header.css'

export default function Header(){
    return(
        <header className="header">
            <span className='header-logo'>logo</span>
            <h2>JVP - Music</h2>
            <nav className='nav'>
                <ul>
                    <li>about me</li>
                    <li>contact</li>
                    <li>portfolio</li>
                </ul>
            </nav>

        </header>
    )
}