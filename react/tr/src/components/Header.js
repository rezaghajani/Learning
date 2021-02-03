const Header = (props) => {
    return ( 
        <header>
            <h1>{props.name}</h1>
        </header>
     );
}

Header.defaultProps = { 
    name: 'Ahmad'
}
 
export default Header;