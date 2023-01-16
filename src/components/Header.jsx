const Header = (props) => {
    return (
        <div className="headerContainer">
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button onClick={props.startGame}>Start Quiz</button>
        </div>
    )
}

export default Header