import { injectable, inject, scoped, Lifecycle } from "tsyringe";

import EthereumProvider from "../../infra/providers/Ethereum/implementations/EthereumProvider";
import IEthereumProvider from "../../infra/providers/Ethereum/interface/IEthereumProvider";
import SmartDTO from "../interface/dto/SmartDTO";
import ISmartService from "../interface/service/ISmartService";

@injectable()
@scoped(Lifecycle.ResolutionScoped)
export default class SmartService implements ISmartService {
  private readonly _EthereumProvider: IEthereumProvider;

  constructor(@inject("IEthereumProvider") EthereumProvider: EthereumProvider) {
    this._EthereumProvider = EthereumProvider;
  }

  public async execute(SmartDto: SmartDTO, params: any): Promise<any> {
    return this._EthereumProvider.create(SmartDto, params);
  }
}
