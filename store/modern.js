export const state = () => ({
    modernArts: [],
}) 

export const mutations = {
    setArts(state, modernArts) {
        state.modernArts = modernArts
    }
}

export const actions = {
    async fetch({commit}) {
        const modernArtsProduct = await this.$axios.$get("http://localhost:1337/moderns")
        console.log(modernArtsProduct);
        commit('setArts', modernArtsProduct)
    }
}

export const getters = {
    modernArts: s => s.modernArts
}