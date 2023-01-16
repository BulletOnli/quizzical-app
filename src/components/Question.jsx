const Question = (props) => {
    return (
        <div className='question'>
            <h3>{props.item.question}</h3>
            <div className="choices-container">
                {props.item.choices.map((choice, index) => (
                    <p key={index}>{choice}</p>
                ))}
            </div>
        </div>
    )
}

export default Question