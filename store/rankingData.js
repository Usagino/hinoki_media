export const state = () => ({
  gapiPreview: []
})

export const getters = {
  getGapiPv(state) {
    return state.gapiPreview
  }
}

export const mutations = {
  updatePvData(state, array) {
    state.gapiPreview = array
  }
}
