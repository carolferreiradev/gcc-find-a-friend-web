import axios, { AxiosError } from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL

const accessToken = localStorage.getItem('@findAFriend:credential')

const publicRequest = axios.create({
  baseURL: BASE_URL,
})

const authRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken ? JSON.parse(accessToken).token : ''}`,
  },
})
let isRefreshing = false
let failedRequests: any[] = []

authRequest.interceptors.response.use(
  (response) => response,
  (error: AxiosError<any>) => {
    if (error?.response?.status === 401) {
      const invalidCredentialsMessage = 'Credenciais inválidas'
      if (error?.response?.data?.error !== invalidCredentialsMessage) {
        const originalConfig = error.config!

        if (!isRefreshing) {
          isRefreshing = true

          authRequest
            .patch('/auth/refresh-token')
            .then((response) => {
              failedRequests.forEach((request) =>
                request.onSuccess(response.data.token),
              )
              failedRequests = []
            })
            .catch((err) => {
              failedRequests.forEach((request) => request.onFailure(err))
              failedRequests = []
            })
            .finally(() => {
              isRefreshing = false
            })
        }

        return new Promise((resolve, reject) => {
          failedRequests.push({
            onSuccess: (token: string) => {
              const credential = {
                token,
                name: accessToken ? JSON.parse(accessToken).name : '',
              }

              localStorage.setItem(
                '@findAFriend:credential',
                JSON.stringify(credential),
              )

              originalConfig.headers.Authorization = `Bearer ${token}`

              resolve(authRequest(originalConfig))
            },
            onFailure: (err: AxiosError) => {
              reject(err)
            },
          })
        })
      } else {
        window.location.href = '/'
      }
    }

    return Promise.reject(error)
  },
)

// authRequest.interceptors.request.use(async (config: any) => {
//   try {
//     const { data } = await authRequest.patch(`/auth/refresh-token`)

//     if (data.token) {
//       config.headers = {
//         ...config.headers,
//         Authorization: `Bearer ${data.token}`,
//       }
//     }

//     return config
//   } catch (error: any) {
//     toast.error(error.response.data.error)
//     Promise.reject(error)
//   }
// })

export { authRequest, publicRequest }
