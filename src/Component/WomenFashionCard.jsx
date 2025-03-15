import womenFashion_1 from "../assets/img/women_fashion/womenFashion_1.webp"
import womenFashion_2 from "../assets/img/women_fashion/womenFashion_2.webp"
import womenFashion_3 from "../assets/img/women_fashion/womenFashion_3.webp"
import womenFashion_4 from "../assets/img/women_fashion/womenFashion_4.webp"
import womenFashion_5 from "../assets/img/women_fashion/womenFashion_5.webp"
import womenFashion_6 from "../assets/img/women_fashion/womenFashion_6.webp"
import womenFashion_7 from "../assets/img/women_fashion/womenFashion_7.webp"
import womenFashion_8 from "../assets/img/women_fashion/womenFashion_8.webp"
import womenFashion_9 from "../assets/img/women_fashion/womenFashion_9.webp"
import womenFashion_10 from "../assets/img/women_fashion/womenFashion_10.webp"
import womenFashion_11 from "../assets/img/women_fashion/womenFashion_11.webp"
import womenFashion_12 from "../assets/img/women_fashion/womenFashion_12.webp"
import womenFashion_13 from "../assets/img/women_fashion/womenFashion_13.webp"
import womenFashion_14 from "../assets/img/women_fashion/womenFashion_14.webp"

import "../assets/styles/GlobalCards_containerStyles.css"
import ProductCard from "./ProductCard"
function WomenFashionCard(){
    const womenFashionList =[
        
          {
            id: 16,
            productName: "womenFashion_1",
            imgUrl: womenFashion_1,
            productBrand: "Clovia Fashion",
            productPrice: 876,
            productModel: "Pink Shoulder Bag",
          },
          {
            id: 17,
            productName: "womenFashion_2",
            imgUrl: womenFashion_2,
            productBrand: "Hiddle Berg",
            productPrice: 426,
            productModel: "Pink Shoulder Bag",
          },
          {
            id: 18,
            productName: "womenFashion_3",
            imgUrl: womenFashion_3,
            productBrand: "V-MART",
            productPrice: 445,
            productModel: "Regular fit",
          },
          {
            id: 19,
            productName: "womenFashion_4",
            imgUrl: womenFashion_4,
            productBrand: "Alishtezia",
            productPrice: 900,
            productModel: "Women heels shiny Pink",
          },
          {
            id: 20,
            productName: "womenFashion_5",
            imgUrl: womenFashion_5,
            productBrand: "Dressberry",
            productPrice: 1190,
            productModel: "Women heels sandal",
          },
          {
            id: 21,
            productName: "womenFashion_6",
            imgUrl: womenFashion_6,
            productBrand: "RINDAS",
            productPrice: 420,
            productModel: "Women heels sandal",
          },
          {
            id: 22,
            productName: "womenFashion_7",
            imgUrl: womenFashion_7,
            productBrand: "OCHILA",
            productPrice: 245,
            productModel: "UV Production",
          },
          {
            id: 23,
            productName: "womenFashion_8",
            imgUrl: womenFashion_8,
            productBrand: "Youth Club",
            productPrice: 310,
            productModel: "UV Protection",
          },
          {
            id: 24,
            productName: "womenFashion_9",
            imgUrl: womenFashion_9,
            productBrand: "SUNWEAR",
            productPrice: 123,
            productModel: "UV Protection, Polarized",
          },
          {
            id: 25,
            productName: "womenFashion_10",
            imgUrl: womenFashion_10,
            productBrand: "R FASHION",
            productPrice: 451,
            productModel: "Printed Kurta, Churidar",
          },
          {
            id: 26,
            productName: "womenFashion_11",
            imgUrl: womenFashion_11,
            productBrand: "VINCENT CHASE",
            productPrice: 999,
            productModel: "by Lenskart",
          },
          {
            id: 27,
            productName: "womenFashion_12",
            imgUrl: womenFashion_12,
            productBrand: "ESBEDA",
            productPrice: 1110,
            productModel: "Classic Shoulder Bag",
          },
          {
            id: 28,
            productName: "womenFashion_13",
            imgUrl: womenFashion_13,
            productBrand: "Rudra",
            productPrice: 750,
            productModel: "Printed Churidar",
          },
          {
            id: 29,
            productName: "womenFashion_14",
            imgUrl: womenFashion_14,
            productBrand: "N P FASHION",
            productPrice: 669,
            productModel: "Women Viscose Kurta",
          },
        
    ]
    return(
        <>
       
        <div className="product_container mt-5">
            {womenFashionList.map( (product)=>(
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </>
    )
}

export default WomenFashionCard;