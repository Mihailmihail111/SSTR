export const state = () => ({
    userID: null,
    timezone: null,
    translations: {},
    balance: null,
    deposit: null,
})

export const mutations = {
    SET_BALANCE (state, value) {
        state.balance = value
    },
    SET_DEPOSIT (state, value) {
        state.deposit = value
    },
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

export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn
    },
    loggedInUser(state) {
        return state.auth.user
    },
    balance(state) {
        return state.balance
    },
    deposit(state) {
        return state.deposit
    }
};

export const actions = {
    async nuxtServerInit({ commit }) {
        let {data} = await this.$axios.$get('/api/translations');
        commit('SET_TRANSLATIONS', data)
    },
    async setBalance({ commit }) {
        let {data} = await this.$axios.$get('/api/money/?action=balance');
        commit('SET_BALANCE', data)
    },
    async setDeposit({ commit }) {
        let {data} = await this.$axios.$get('/api/money/?action=deposit');
        commit('SET_DEPOSIT', data)
    }
}