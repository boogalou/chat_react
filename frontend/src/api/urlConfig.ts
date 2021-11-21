import axios, { AxiosResponse } from 'axios';
import { IConversations } from '../bus/conversationsList/types';


export class ApiService {

  static async getMembers(): Promise<AxiosResponse<IConversations[]>> {
    const response = await axios.get(`http://localhost:9595/conversations`);
    console.log(response);

    return response


  }
}