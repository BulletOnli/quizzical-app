const Question = (props) => {
    function chooseAnswer(event) {
        event.target.style.backgroundColor = '#D6DBF5'

        if (event.target.innerText === props.item.correctAnswer) {
            props.setscore(prev => prev + 1)
        }
    }

    const choice = props.item.choices.map((choice, index) => {
        const style = {
            backgroundColor: choice === props.item.correctAnswer && !props.isRunning ? '#94D7A2' : '#F5F7FB' 
        }

        return <p key={index} onClick={chooseAnswer} style={style}>{choice}</p>
    })

    return (
        <div className='question'>
            <h2>{props.item.question}</h2>
            <div className="choices-container">{choice}</div>
        </div>
    )
}

export default Question