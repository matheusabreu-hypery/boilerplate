import axios from "axios";

import ErrorBuilder from "../../application/utils/errorBuilder";

export class AxiosService {
  async post(url: string, body: any, config: any = {}): Promise<any> {
    try {
      const { data } = await axios.post(url, body, config);

      return data;
    } catch (error) {
      throw new ErrorBuilder(
        error.name,
        error.message,
        error.response.status,
        error.response
      );
    }
  }

  async put(url: string, body: any, config: any = {}): Promise<any> {
    try {
      const { data } = await axios.put(url, body, config);

      return data;
    } catch (error) {
      throw new ErrorBuilder(
        error.name,
        error.message,
        error.response.status,
        error.response
      );
    }
  }
}
