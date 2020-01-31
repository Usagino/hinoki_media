export default function({ $axios, redirect }) {
  $axios.setToken('access_token')

  $axios.onResponse((config) => {
    $axios.setHeader(
      'Access-Control-Allow-Origin',
      'https://admin.frontartgraph.com/wp-json/wp/v2/posts'
    )
  })
}