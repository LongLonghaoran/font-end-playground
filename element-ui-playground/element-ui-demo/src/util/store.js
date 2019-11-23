const store = {
  debug: true,
  state: {
    current_user: null
  },
  setUser(current_user) {
    this.current_user = current_user
  }
}
export default store