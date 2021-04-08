app.component('product-display', {
    props:{
        premium:{
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/
    `<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-sm-1">
                <div>
                    <p class="color-circle" v-for="(varient, index) in varients" :key="varient.id" v-on:mouseover="updateVarient(index)" :style="{ backgroundColor: varient.color }"></p>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="product-display rounded border shadow">
                        <div class="product-image" align="center">
                            <a><img width="300" :src="image" :class="{ outOfStockImg: !inStock }"></a>
                            <!-- 
                            <a v-if="!inStock" :href="image"><img width="300" :src="outOfStockImg"></a>
                            <a v-else :href="image"><img width="300" :src="image"></a>
                             -->
                        </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="product-description">
                    <h4>{{ title }} <sup class="onSale" v-show="onSale">On sale!</sup></h4>
                    <p>{{ Desc }}</p>
                    <p v-if="inStock > 10">In Stock</p>
                    <p v-else-if="inStock < 5 && inStock > 0">Almost Sold Out!</p>
                    <p v-else>Out of stock</p>
                    <!-- <p v-show="onSale">On sale</p> -->
                    <ul>
                        <li class="list-unstyled" v-for="detail in details">- {{ detail }}</li>
                    </ul>

                    <p>Shipping: {{ shipping }}</p>
            
            
                    <div>
                        <select name="" id="">
                            <option v-for="size in sizes" :key="size.id" value="">{{ size.varient }}</option>
                        </select>
                    </div>
            
                    <div>
                        <!--<button :disabled="!inStock" v-on:click="deleteToCart()" :class="{ disableCourser: !inStock }">-</button>-->
                        <button class="addToCartbtn text-white mt-2" :disabled="!inStock" v-on:click="addToCart()" :class="{ disableCourser: !inStock }">Add To Cart</button>
                    </div>
            
            
                </div>
            </div>

            <div class="col-sm-3">

            <review-form @review-submitted="addReview"></review-form>
            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
            
            </div>
        </div>
    </div>
</section>`,

    data() {
        return{
            selectedVarient: 0,
            brand: 'Design',
            product: 'Tshirt',
            Desc: 'This is a beautiful T-shirt',
            url: './assets/images/one.jpg',
            outOfStockImg: './assets/images/oot.jpg', //connect the Images from your Database
            details: ['50% cotton','30% polyster', '20% wool'],
            varients: [
                        { id: 25, color:'yellow', image: './assets/images/one.jpg', onSale: true, quantity: 50, }, 
                        { id: 26, color:'blue', image: './assets/images/two.jpg', onSale: false, quantity: 3 }, //connect the Varients from your Database>
                        { id: 27, color:'ash', image: './assets/images/three.jpg', onSale: false, quantity: 0 },
                    ],
            sizes: [
                {id:5, varient:'small'},
                {id:6, varient:'large'},
                {id:7, varient:'extra large'},   //connect the Varients from your Database
                {id:6, varient:'double extra large'},
            ],
            reviews:[]
        }
    },

    methods:{
        addToCart() {
            this.$emit('add-to-cart', this.varients[this.selectedVarient].id)
        },

        deleteToCart() {
            this.cart -= 1
        },

        updateVarient(index) {
            this.selectedVarient = index
        },

        addReview(review){
            this.reviews.push(review)
        }
    },

    computed:{

        title(){
            return this.brand+' '+this.product
        },
        
        image(){
            return this.varients[this.selectedVarient].image
        },

        inStock(){
            return this.varients[this.selectedVarient].quantity
        },

        onSale(){
            return this.varients[this.selectedVarient].onSale
        },

        shipping(){
            if(this.premium){
                return 'Free'
            }
            return '$2.99'
        }

    }

})