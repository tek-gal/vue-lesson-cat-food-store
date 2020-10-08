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
        },
        product: {
            id: 1001,
            title: "Cat Food, 25lb bag",
            description:
                "A 25 pound bag of <em>irresistible</em>, organic godness for your cat",
            price: 2000,
            availableInventory: 5,
            image:
                "https://aller-petfood.com/wp-content/uploads/2017/02/1142x340_ALL-cats.jpg",
        },
        cart: [],
    };
  },
  computed: {
    cartItemCount: function() {
        return this.cart.length;
    },
    canAddToCart: function() {
        return this.cart.length < this.product.availableInventory;
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
    addToCart() {
      this.cart.push(this.product.id);
    },
  },
}).mount("#app");