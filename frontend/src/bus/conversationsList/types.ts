export interface IConversations {
  _id: string;
  text: string;
  created_at: string;
  user: IUser
}

export interface IUser {
  _id: string;
  avatar: string;
  fullName: string;
  isOnline: boolean;
}


