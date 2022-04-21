import { injectable } from "tsyringe";

import ErrorBuilder from "../../../../application/utils/errorBuilder";
import ISmartDTO from "../../../../domain/interface/dto/SmartDTO";
import logger from "../../../helper/logger";
import IEthereumProvider from "../interface/IEthereumProvider";

@injectable()
class EthereumProvider implements IEthereumProvider {
  public async create(body: ISmartDTO, query: any): Promise<any> {
    try {
      return {
        id: 123456789,
        name: "HyperyToken",
        gas: 1000,
      };
    } catch (error) {
      throw new ErrorBuilder(
        error.name,
        error.message,
        error.response.status || 500,
        error.response || {}
      );
    }
  }
}

export default EthereumProvider;
