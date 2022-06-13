export const state = () => ({
    banksyPictures: [],
}) 

export const mutations = {
    setArts(state, banksyPictures) {
        state.banksyPictures = banksyPictures
    }
}

export const actions = {
    async fetch({commit}) {
        const banksyPicturesResponce = await this.$axios.$get("http://localhost:1337/banksies")
        console.log(banksyPicturesResponce);
        commit('setArts', banksyPicturesResponce)
    }
}

export const getters = {
    banksyPictures: s => s.banksyPictures
}