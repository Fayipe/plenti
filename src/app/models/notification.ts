import { User } from "./user";

export interface NotificationData {
  notifications: Notification[];
  unreads: number;
}

export interface Notification {
  id: number;
  message: string;
  context: string;
  is_read: boolean;
  triggered_by: number;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  userId: number;
  user: User;
  extra_data: any;
}

export interface NotificationSettings {
  post_comment: boolean;
  comment_reply: boolean;
  comment_like: boolean;
  poll_reaction: boolean;
  follow_post_comment: boolean;
  received_coins: boolean;
  direct_message: boolean;
}


export enum NotificationContext {
  NEW_POST = "new_post",
  POST_COMMENT = "post_comment",
  POST_REPLY = "post_reply",
  COMMENT_LIKE = "comment_like",
  COMMENT_REPLY = "comment_reply",
  DIRECT_MESSAGE = "direct_message",
}
