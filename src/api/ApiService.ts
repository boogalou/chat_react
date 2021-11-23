import axios, { AxiosResponse } from 'axios';
import { IConversations, IMessage } from '../types/apiTypes';


export class ApiService {

  static async getMembers(): Promise<AxiosResponse<IConversations[]>> {
    const response = await axios.get(`http://localhost:9595/conversations`);
    console.log(response);

    return response
  }

  static async getDialogById(dialogID: string | null): Promise<AxiosResponse<IMessage[]>> {
    const response = await axios.get(`http://localhost:9595/conversations?_id=${dialogID}`);
    console.log(response);

    return response;
  }
}