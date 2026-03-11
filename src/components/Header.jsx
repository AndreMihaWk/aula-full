function Header(props) {
    return (
        <header>
            <h2>{props.titulo}</h2>
            <p> {props.descricao}</p>
        </header>
    )
}
export default Header