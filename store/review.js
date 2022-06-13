export const state = () => ({
    reviews: [],
}) 

export const mutations = {
    setArts(state, reviews) {
        state.reviews = reviews
    }
}

export const actions = {
    async fetch({commit}) {
        const reviewsAll = await this.$axios.$get("http://localhost:1337/reviews")
        console.log(reviewsAll);
        commit('setArts', reviewsAll)
    }
}

export const getters = {
    reviews: s => s.reviews
}