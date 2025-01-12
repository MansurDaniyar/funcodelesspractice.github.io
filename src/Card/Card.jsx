import './card.less'
import '../mixins.less'

function Card() {
    return (
        <>
            <div className="card_first">
                <h1>Card #1</h1>
                <p>This is a card #1</p>
            </div>
            <div className="card_second">
                <h1>Card #2</h1>
                <p>This is a card #2</p>
            </div>
            <div className="card_third">
                <h1>Card #3</h1>
                <p>This is a card #3</p>
            </div>
        </>
    )
}

export default Card