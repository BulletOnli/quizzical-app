const Header = (props) => {
    return (
        <div className="headerContainer">
            <p>Quizzical</p>
            <small>Scrimba Solo Project</small>
            <button onClick={props.startGame}>Start Quiz</button>
        </div>
    )
}

export default Header