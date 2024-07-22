import { SIGNUP_ACTION } from '@/stores/storeConstants'
import axios from 'axios'

export default {
  async [SIGNUP_ACTION](context: any, payload: any) {
    const payloadData = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    }

    try {
      const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDNzvthLu-nQWlFVv1AdV6t315YJ1C7Jfs',
        payloadData
      )

      console.log(response, 'helo response')
    } catch (error) {
      console.log(error)
    }
  }
}
