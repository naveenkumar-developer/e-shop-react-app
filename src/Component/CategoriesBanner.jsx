import categoryBanner1 from "../assets/img/womenCategoriesBanner1.jpg"
import categoryBanner2 from "../assets/img/womenCategoriesBanner2.jpg"
import categoryBanner3 from "../assets/img/womenCategoriesBanner3.jpg"
import categoryBanner4 from "../assets/img/womenCategoriesBanner4.jpg"
import "../assets/styles/CategoriesBanner.css"
function CategoriesBanner(){

    const womenCategoriesBanner=[
        {
            bannerName: "categoryBanner1",
            imgUrl:categoryBanner1,
            bannerTitle:"Women's Style",
        },
        {
            bannerName: "categoryBanner2",
            imgUrl:categoryBanner2,
            bannerTitle:"Handbag",
        },
        {
            bannerName: "categoryBanner3",
            imgUrl:categoryBanner3,
            bannerTitle:"Watch",
        },
        {
            bannerName: "categoryBanner4",
            imgUrl:categoryBanner4,
            bannerTitle:"Heels",
        }
    ]
    return(
        <>
        <div className="womenBannerCards_container mt-5">
        {
            womenCategoriesBanner.map( (bannerCard)=>(
                <div key={bannerCard.bannerName} className={`bannerCard ${bannerCard.bannerName}`}>
                    <img src={bannerCard.imgUrl} alt="banner card" loading="lazy"/>
                    <div className="bannerCardDetails">
                    <h2>{bannerCard.bannerTitle}</h2>
                    <button type="button" className="shopBtn_WmenCB ">Shop Now</button>
                    </div>
                </div>
            ))
        }
        </div>

        </>
    )
}

export default CategoriesBanner;