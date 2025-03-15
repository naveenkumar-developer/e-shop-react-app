import newsLetterBanner from "../assets/img/newsLetterBanner.png"
import "../assets/styles/NewsLetter.css"
function NewsLetter(){
    return(
        <>
        <div className="newsLetter_container mt-5">
        <div className="img_container">
                <img src={newsLetterBanner} alt="news letter banner" />
            </div>
            <div className="newsLetter_details">
                <h2>SUBSCRIBE TO THE  NEWS</h2>
                <p>Be aware of all discounts.Don't miss your benefits!💖</p>
            <div className="subScribeBtn_inputGroup">
                <input type="email" placeholder="Enter your email" />
                <button type="button" className="subscribeBtn">SubScribe</button>
            </div>
            </div>

        </div>
        </>
    )
}

export default NewsLetter;