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

export interface IMessage {
  _id: string;
  text: string;
  created_at: string;
  avatar: string;
  voice: string | null
  attachments: Attach[] | null;
  isMe: boolean;
  isRead: boolean;
  isTyping: boolean;
}

export type Attach = {
  filename: string;
  url: string;
};

