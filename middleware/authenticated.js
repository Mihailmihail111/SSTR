export default function ({ store, redirect }) {
  if (
    store.$router.history.current.name == 'login' 
    || store.$router.history.current.name == 'registration'
  ) {
    if (store.state.auth.loggedIn) {
      return redirect('/lk')
    }
  } else {
    if (!store.state.auth.loggedIn) {
      return redirect('/login')
    }
  }
}