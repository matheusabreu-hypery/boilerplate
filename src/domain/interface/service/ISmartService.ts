import SmartDTO from "../dto/SmartDTO";

export default interface ISmartService {
  execute(dto: SmartDTO, params: any): Promise<any>;
}
