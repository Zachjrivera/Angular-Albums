import { IProducts } from "./products";

export class Album implements IProducts{
    product_id : string;
    product_img : string;
    product_name : string;
    product_price : number;
    product_details : string;
    product_quantity : number;
    sample_song : string;
    sample_songnname : string;

}