export const state = () => ({
    userID: null,
    timezone: null,
    translations: {}
})

export const mutations = {
    SET_USERID (state, value) {
        state.userID = value
    },
    SET_TIMEZONE (state, value) {
        state.timezone = value
    },
    SET_TRANSLATIONS (state, value) {
        state.translations = value
    }
}

export const actions = {
    async nuxtServerInit({ commit }) {
        let {data} = await this.$axios.$post(this.$env.BACKEND_URL + '?method=translations');
        commit('SET_TRANSLATIONS', data)
    }
}