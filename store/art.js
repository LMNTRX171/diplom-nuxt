export const state = () => ({
    arts: [],
}) 

export const mutations = {
    setArts(state, arts) {
        state.arts = arts
    }
}

export const actions = {
    async fetch({commit}) {
        const artsEx = await this.$axios.$get("http://localhost:1337/arts")
        console.log(artsEx);
        commit('setArts', artsEx)
    }
}

export const getters = {
    arts: s => s.arts
}