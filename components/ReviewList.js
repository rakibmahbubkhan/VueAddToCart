app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },

    template:
    /* html */
    `<section>
        <div class="review-container bg-white shadow m-2 p-4">
        <b>Reviews:</b>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{review.name}} gave "{{review.rating}} stars" <br/>
                <strong>Feedback: </strong>"{{review.review}}"<br/>
            </li>
        </ul>
        </div>
    </section>`
})