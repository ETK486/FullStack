let items={"Mustang":10,"Apple":10,"Mango":10,"Pineapple":10};
let p1:string="Mustang";
let p2:string="Apple";
let p3:string="Mango";
let quant:number;
let q1:number=10;
let q2:number=3;
let q3:number=1;
function cart(prod:string,quantity:number){
    switch(prod){
        case "Mustang":
            quant=items.Mustang;
            if (quant>quantity){
                quant=quant-quantity;
                items.Mustang=quant;
            }
            else{
                quant=quantity-quant;
                items.Mustang=quant;
            }
            break;
            case "Apple":
                quant=items.Apple;
                if (quant>quantity){
                    quant=quant-quantity;
                    items.Apple=quant;
                }
                else{
                    quant=quantity-quant;
                    items.Apple=quant;
                }
                break;
            case "Mango":
                quant=items.Mango;
                if (quant>quantity){
                    quant=quant-quantity;
                    items.Mango=quant;
                }
                else{
                    quant=quantity-quant;
                    items.Mango=quant;
                }
                break;
            case "Pineapple":
                quant=items.Pineapple;
                if (quant>quantity){
                    quant=quant-quantity;
                    items.Pineapple=quant;
                }
                else{
                    quant=quantity-quant;
                    items.Pineapple=quant;
                }
                break;
            }
        }
console.log("The items to be added to the cart are....");
console.log(p1,"\t",q1);
console.log(p2,"\t",q2);
console.log(p3,"\t",q3);
cart(p1,q1);
cart(p2,q2);
cart(p3,q3);
console.log("The remaining items are....");
console.log(items);