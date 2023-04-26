export default interface ProductType{
    "id"?:number
    "name": string,
    "image": string,
    "tag": boolean,
    "tagName"?: string,
    "price": number,
    "color": string,
    "rating": boolean,
    "sizes"?: string[]
}