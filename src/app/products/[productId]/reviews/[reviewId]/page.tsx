export default function reviewDetail({params}:{params:{reviewId:string,productId:string}}){
    return <h1>Review Id is {params.reviewId} and product id is {params.productId}</h1>
}
