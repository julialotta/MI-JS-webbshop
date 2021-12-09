export class Orderinfo {
    product: object;
    fullName: string;
    email: string;
    adress: string;
    city: string;
    cardName: string;
    cardNumber: number;
    expDate: number;
    cvv: number;

        constructor(
            product: object,
            fullName: string,
            email: string,
            adress: string,
            city: string,
            cardName: string,
            cardNumber: number,
            expDate: number,
            cvv: number

        )
        
        {  
            this.product = product;
            this.fullName = fullName;
            this.email = email;
            this.adress = adress;
            this.city = city;
            this.cardName = cardName;
            this.cardNumber = cardNumber;
            this.expDate = expDate;
            this.cvv = cvv;
           
     }};
