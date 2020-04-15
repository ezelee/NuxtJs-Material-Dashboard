import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://my-json-server.typicode.com/ezelee/NuxtJs-Material-Dashboard`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getHeaders() {
    return apiClient.get('/headers')
  },
  getItems() {
    return apiClient.get('/items')
  },
  apiDailySalesChart() {
    return apiClient.get('/dailySalesChart')
  },
  apiDataCompletedTasksChart() {
    return apiClient.get('/dataCompletedTasksChart')
  },
  apiEmailsSubscriptionChart() {
    return apiClient.get('/emailsSubscriptionChart')
  }
}
