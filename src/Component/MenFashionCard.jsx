import menFashion_1 from "../assets/img/men_fashion/menFashion_1.webp"
import menFashion_2 from "../assets/img/men_fashion/menFashion_2.webp"
import menFashion_3 from "../assets/img/men_fashion/menFashion_3.webp"
import menFashion_4 from "../assets/img/men_fashion/menFashion_4.webp"
import menFashion_5 from "../assets/img/men_fashion/menFashion_5.webp"
import menFashion_6 from "../assets/img/men_fashion/menFashion_6.webp"
import menFashion_7 from "../assets/img/men_fashion/menFashion_7.webp"
import menFashion_8 from "../assets/img/men_fashion/menFashion_8.webp"
import menFashion_9 from "../assets/img/men_fashion/menFashion_9.webp"
import menFashion_10 from "../assets/img/men_fashion/menFashion_10.webp"
import menFashion_11 from "../assets/img/men_fashion/menFashion_11.webp"
import menFashion_12 from "../assets/img/men_fashion/menFashion_12.webp"
import menFashion_13 from "../assets/img/men_fashion/menFashion_13.webp"
import menFashion_14 from "../assets/img/men_fashion/menFashion_14.webp"
import menFashion_15 from "../assets/img/men_fashion/menFashion_15.webp"


import "../assets/styles/GlobalCards_containerStyles.css"
import ProductCard from "./ProductCard"
function MenFashionCard(){
    const menFashionList =[
        {
            id: 1,
            productName: "menFashion_1",
            imgUrl: menFashion_1,
            productBrand: "U.S.POLO.ASSN",
            productPrice: 1976,
            productModel: "Rheede Sneakers",
          },
          {
            id: 2,
            productName: "menFashion_2",
            imgUrl: menFashion_2,
            productBrand: "Sports",
            productPrice: 993,
            productModel: "Sport Sneaker",
          },
          {
            id: 3,
            productName: "menFashion_3",
            imgUrl: menFashion_3,
            productBrand: "TITAN",
            productPrice: 3165,
            productModel: "Titan mechanical",
          },
          {
            id: 4,
            productName: "menFashion_4",
            imgUrl: menFashion_4,
            productBrand: "FOSSIL",
            productPrice: 5819,
            productModel: "Rhett Analog",
          },
          {
            id: 5,
            productName: "menFashion_5",
            imgUrl: menFashion_5,
            productBrand: "VeBNoR",
            productPrice: 299,
            productModel: "Men Regular Fit",
          },
          {
            id: 6,
            productName: "menFashion_6",
            imgUrl: menFashion_6,
            productBrand: "PROVOGUE",
            productPrice: 499,
            productModel: "Large 35 L Laptop Bag",
          },
          {
            id: 7,
            productName: "menFashion_7",
            imgUrl: menFashion_7,
            productBrand: "BERSACHE",
            productPrice: 1152,
            productModel: "Premium Sports",
          },
          {
            id: 8,
            productName: "menFashion_8",
            imgUrl: menFashion_8,
            productBrand: "Worng",
            productPrice: 699,
            productModel: "Large 40 L Bag",
          },
          {
            id: 9,
            productName: "menFashion_9",
            imgUrl: menFashion_9,
            productBrand: "Sky spirit",
            productPrice: 889,
            productModel: "Large 50 L",
          },
          {
            id: 10,
            productName: "menFashion_10",
            imgUrl: menFashion_10,
            productBrand: "FEEL TRACK",
            productPrice: 549,
            productModel: "Men solid black pant",
          },
          {
            id: 11,
            productName: "menFashion_11",
            imgUrl: menFashion_11,
            productBrand: "AD & AV",
            productPrice: 478,
            productModel: "Men Regular Fit black",
          },
          {
            id: 12,
            productName: "menFashion_12",
            imgUrl: menFashion_12,
            productBrand: "EyeBogler",
            productPrice: 794,
            productModel: "Men Regular Fit blue",
          },
          {
            id: 13,
            productName: "menFashion_13",
            imgUrl: menFashion_13,
            productBrand: "NuVew",
            productPrice: 382,
            productModel: "UV protection Sportglass",
          },
          {
            id: 14,
            productName: "menFashion_14",
            imgUrl: menFashion_14,
            productBrand: "SCOTT FINCHER",
            productPrice: 659,
            productModel: "Men Solid T-shirt",
          },
          {
            id: 15,
            productName: "menFashion_15",
            imgUrl: menFashion_15,
            productBrand: "Force",
            productPrice: 458,
            productModel: "Men solid Green",
          },
        
    ]
    return(
        <>
       
        <div className="product_container mt-5">
            {menFashionList.map( (product)=>(
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </>
    )
}

export default MenFashionCard;