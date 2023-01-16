const Question = (props) => {
    function chooseAnswer(event) {
        event.target.style.backgroundColor = '#D6DBF5'
    }

    const choice = props.item.choices.map((choice, index) => {
        const style = {
            backgroundColor: choice === props.item.correctAnswer && !props.gameStatus ? '#94D7A2' : '#F5F7FB' 
        }

        return <p key={index} onClick={chooseAnswer} style={style} >
            {choice}
        </p>
    })

    return (
        <div className='question'>
            <h3>{props.item.question}</h3>
            <div className="choices-container">
                {choice}
            </div>
        </div>
    )
}

export default Question