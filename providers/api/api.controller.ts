import axios, { AxiosInstance } from "axios";

class AxiosController {
  public axiosInstance: AxiosInstance

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  async get(url: string, token: string | null = null) {
    try {
      const response = await this.axiosInstance.get(url,
        {
          headers: token ? { 'Authorization': `Bearer ${token}` } : {}
        }
      )
      return response.data
    } catch (error) {
      console.error("GET request error:", error)
      return null
    }

  }
}

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

export const apiController = new AxiosController(baseUrl)
