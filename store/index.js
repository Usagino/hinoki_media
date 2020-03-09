export const state = () => ({
  latestPosts: {}
})
// export const getters = {
//   latestPost(state) {
//     state.latestPosts = {}
//   }
// }
export const mutations = {
  setList(state, post) {
    state.latestPosts = post
  }
}

export const actions = {
  async getList({ commit }) {
    const res = await this.$axios.get(
      `${process.env.endpoint}/wp-json/wp/v2/posts?per_page=12&page=1&_embed=1`
    )
    console.log(res)
    commit('setList', res)
  }
}
