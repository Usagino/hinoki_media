// import axios from 'axios'

export const state = () => ({
  latestPosts: []
})

export const mutations = {
  setList(state, latestPosts) {
    state.latestPosts = latestPosts
  }
}

export const actions = {
  async getList({ commit }) {
    const res = await this.$axios
      .get(
        `${process.env.endpoint}/wp-json/wp/v2/posts?per_page=12&page=1&_embed=1`
      )
      .then((res) => {
        console.log(res)
      })
    commit('setList', res)
  }
}
