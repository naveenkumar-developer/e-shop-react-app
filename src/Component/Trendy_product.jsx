import trendyProduct1 from "../assets/img/trendyProduct1.jpg"
import trendyProduct2 from "../assets/img/trendyProduct2.jpg"
import trendyProduct3 from "../assets/img/trendyProduct3.jpg"
import trendyProduct4 from "../assets/img/trendyProduct4.jpg"
import trendyProduct5 from "../assets/img/trendyProduct5.jpg"
import trendyProduct6 from "../assets/img/trendyProduct6.jpg"
import trendyProduct7 from "../assets/img/trendyProduct7.jpg"
import "../assets/styles/GlobalCards_containerStyles.css"
import ProductCard from "./ProductCard";

function TrendyProduct(){
    const trendyProducts =[
         {
            id: 30,
            productName: "trendyProduct1",
            imgUrl: trendyProduct1,
            productBrand: "InkTees",
            productModel: "Rounded neck T-shirt",
            productPrice: 299,
          },
          {
            id: 31,
            productName: "trendyProduct2",
            imgUrl: trendyProduct2,
            productBrand: "BRUTON",
            productModel: "Lite Sports Running Shoe",
            productPrice: 1493,
          },
          {
            id: 32,
            productName: "trendyProduct3",
            imgUrl: trendyProduct3,
            productBrand: "CROSS SPIRIT",
            productModel: "solid men blue sports",
            productPrice: 319,
          },
          {
            id: 33,
            productName: "trendyProduct4",
            imgUrl: trendyProduct4,
            productBrand: "NIKE",
            productModel: "Fly-By",
            productPrice: 4995,
          },
          {
            id: 34,
            productName: "trendyProduct5",
            imgUrl: trendyProduct5,
            productBrand: "Cambridge Store",
            productModel: "Men regular fit",
            productPrice: 982,
          },
          {
            id: 35,
            productName: "trendyProduct6",
            imgUrl: trendyProduct6,
            productBrand: "MOSAC",
            productModel: "women heels dark",
            productPrice: 648,
          },
          {
            id: 36,
            productName: "trendyProduct7",
            imgUrl: trendyProduct7,
            productBrand: "TIMEX",
            productModel: "Classic Dial",
            productPrice: 579,
          },
    ]
    return(
        <>
        <h2 className="mt-5" style={{textAlign: "center", fontSize: "1.3rem", cursor: "not-allowed"}}>Trendy Collections</h2>
        <div className="product_container mt-5">
            {
                trendyProducts.map( (product)=>(
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
        </>
    )
}

export default TrendyProduct;