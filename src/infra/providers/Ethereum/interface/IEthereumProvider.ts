import ISmartDTO from "../../../../domain/interface/dto/SmartDTO";

export default interface IEthereumProvider {
  create(body: ISmartDTO, query: any): Promise<any>;
}
