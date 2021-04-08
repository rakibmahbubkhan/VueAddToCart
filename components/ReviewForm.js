app.component('review-form', {
    template:
    /* html */
    `
    <form class="m-2 p-4 bg-white shadow" @submit.prevent="onSubmit">
    <b>Leave a review</b>
      <div class="mb-3">
        <label for="Name">Name</label>
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="mb-3">
        <label for="Review">Review</label>
        <textarea name="" id="" cols="30" rows="2" class="form-control" v-model="review"></textarea>
      </div>
      <div class="mb-3">
        <label for="rating">Rating</label>
        <select name="" id="" style="width: 100%;" v-model.number="rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div class="mb-3">
        <input type="submit" class="form-control">
      </div>
    </form>
  `,
  data(){
      return{
          name: '',
          review: '',
          rating: null
      }
  },

  methods: {
      onSubmit() {

        if(this.name === '' || this.rating === '' || this.review === ''){
            alert('Review is Incomplete, please fill out every field')
            return
        }
          let productReview = {
              name: this.name,
              review: this.review,
              rating: this.rating
          }

          this.$emit('review-submitted', productReview)

          this.name = ''
          this.review = ''
          this.rating = null
      }
  }
})