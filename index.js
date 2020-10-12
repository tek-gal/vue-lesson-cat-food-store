const app = Vue.createApp({
    data() {
        return {
            sitename: "Vue.js Pet Depot",
            showProduct: true,    
            order: {
                lastName: '',
                firstName: '',
                address: '',
                city: '',
                zip: '',
                state: '',
                sendGift: 'Send a gift',
                dontSendGift: 'Don\'t send a gift',
                gift: 'Send a gift',
                method: 'Home',
                home: 'Home Address',
                business: 'Business Address',
            },
            states: {
                'AL': 'Alabama',
                'AR': 'Arizona',
                'CA': 'California',
                'NV': 'Nevada',
            },
            product: {
                id: 1001,
                rating: 3,
                title: "Cat Food, 25lb bag",
                description:
                    "A 25 pound bag of <em>irresistible</em>, organic godness for your cat",
                price: 2000,
                availableInventory: 5,
                image:
                    "https://aller-petfood.com/wp-content/uploads/2017/02/1142x340_ALL-cats.jpg",
            },
            cart: [],
            products: [],
        };
    },
    computed: {
        cartItemCount: function() {
            return this.cart.length;
        },
    },
    methods: {
        formatPrice: function (price) {
            if (!parseInt(price)) {
                return "";
            }
            if (price > 99999) {
                const priceString = (price / 100).toFixed(2);
                const priceArray = priceString.split("").reverse();
                const index = 3;
                while (priceArray.length > index + 3) {
                    priceArray.splice(index + 3, 0, ",");
                    index += 4;
                }
                return "$" + priceArray.reverse().join("");
            } else {
                return "$" + (price / 100).toFixed(2);
            }
        },
        showCheckout() {
            this.showProduct = !this.showProduct;
        },
        canAddToCart: function(product) {
            return this.cart.length < product.availableInventory;
        },
        addToCart(product) {
        this.cart.push(product.id);
        },
        submitForm() {
            alert('Submitted!');
        },
    },
    created() {
        axios.get('./products.json')
             .then(response => {
                 this.products = response.data.products;
                 console.log(this.products);
             })
    },
}).mount("#app");