import { Metadata } from "next"
type Props = {
    params:{
        productId : string
    }
}
export const generateMetadata = ({params}:Props):Metadata =>{
    return {
        title:`Product ${params.productId}`
    }
}
export default function ProductDetails({params}:{params:{productId:string}}){
    return <h1>Product Details {params.productId}</h1>
}