app.component('product-display', {
    template: 
    /*html*/
    `<section class="py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-1">
                <div>
                    <p class="color-circle" v-for="(varient, index) in varients" :key="varient.id" v-on:mouseover="updateVarient(index)" :style="{ backgroundColor: varient.color }"></p>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="product-display rounded border shadow">
                        <div class="product-image">
                            <a><img width="300" :src="image" :class="{ outOfStockImg: !inStock }"></a>
                            <!-- 
                            <a v-if="!inStock" :href="image"><img width="300" :src="outOfStockImg"></a>
                            <a v-else :href="image"><img width="300" :src="image"></a>
                             -->
                        </div>
                </div>
            </div>

            <div class="col-sm-7">
                <div class="product-description">
                    <h1>{{ title }} <small><sup v-show="onSale">On sale</sup></small></h1>
                    <p>{{ Desc }}</p>
                    <p v-if="inStock > 10">In Stock</p>
                    <p v-else-if="inStock < 5 && inStock > 0">Almost Sold Out!</p>
                    <p v-else>Out of stock</p>
                    <!-- <p v-show="onSale">On sale</p> -->
                    <ul>
                        <li class="list-unstyled" v-for="detail in details">- {{ detail }}</li>
                    </ul>
            
            
                    <div>
                        <select name="" id="">
                            <option v-for="size in sizes" :key="size.id" value="">{{ size.varient }}</option>
                        </select>
                    </div>
            
                    <div>
                        <!--<button :disabled="!inStock" v-on:click="deleteToCart()" :class="{ disableCourser: !inStock }">-</button>-->
                        <strong>&nbsp; {{ cart }} &nbsp;</strong>
                        <button class="addToCartbtn text-white mt-2" :disabled="!inStock" v-on:click="addToCart()" :class="{ disableCourser: !inStock }">Add To Cart</button>
                    </div>
            
            
                </div>
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
            outOfStockImg: './assets/images/oot.jpg',
            details: ['50% cotton','30% polyster', '20% wool'],
            varients: [
                        { id: 25, color:'yellow', image: './assets/images/one.jpg', onSale: true, quantity: 50, },
                        { id: 26, color:'blue', image: './assets/images/two.jpg', onSale: false, quantity: 3 },
                        { id: 27, color:'ash', image: './assets/images/three.jpg', onSale: false, quantity: 0 },
                    ],
            sizes: [
                {id:5, varient:'small'},
                {id:6, varient:'large'},
                {id:7, varient:'extra large'},
                {id:6, varient:'double extra large'},
            ]
        }
    },

    methods:{
        addToCart() {
            this.cart += 1
        },

        deleteToCart() {
            this.cart -= 1
        },

        updateVarient(index) {
            this.selectedVarient = index
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
        }

    }

})