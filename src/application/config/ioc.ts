import "reflect-metadata";
import { container } from "tsyringe";

import SmartService from "../../domain/service/smartService";
import EthereumProvider from "../../infra/providers/Ethereum/implementations/EthereumProvider";
import IEthereumProvider from "../../infra/providers/Ethereum/interface/IEthereumProvider";

export default class Ioc {
  public configureServices(): void {
    container.register<SmartService>(SmartService, { useClass: SmartService });

    container.registerSingleton<IEthereumProvider>(
      "IEthereumProvider",
      EthereumProvider
    );
  }
}
