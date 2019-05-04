export default {
	changeCity (state, city) {
		state.city = city
		// localStorage
		try {
			localStorage.city = city
		}
		catch (e) {

		}
	}
}