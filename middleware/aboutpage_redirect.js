export default function({ params, redirect }) {
  if (params.id === '1') {
    return redirect('/about')
  }
}
