import CheckIcon from '@mui/icons-material/Check';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import CallIcon from '@mui/icons-material/Call';
import "../assets/styles/FeatureLabel.css"
function FeaturesLabel(){
    const featuresLabels=[
        {   labelName: "checkIcon",
            imgUrl:CheckIcon,
            labelPara: "Quality Product"
        },
        {   labelName: "LocalShippingIcon",
            imgUrl:LocalShippingIcon,
            labelPara: "Free Shipping"
        },
        {   labelName: "ImportExportIcon",
            imgUrl:ImportExportIcon,
            labelPara: "14-Days Return"
        },
        {   labelName: "CallIcon",
            imgUrl:CallIcon,
            labelPara: "24/7 Support"
        },
    ]
    return(
        <>
        <div className="FeaturesLabels_container mt-5">
        {featuresLabels.map( (featureCard)=>(
            <div className="FeatureCard_container" key={featureCard.labelName}>
                <featureCard.imgUrl className='labelIcon'/>
                <p>{featureCard.labelPara}</p>
            </div>
        ))}
        </div>
        </>
    )
}

export default FeaturesLabel;