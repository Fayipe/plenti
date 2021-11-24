/**
 * Keys used for storing data on offline db
 *
 * @export
 * @enum {string}
 */
export enum StorageKey {
  onboardingDone = 'onboardingDone',
  user = 'user',
  accessToken = 'accessToken',
  refreshToken = 'refreshToken',
  profile = 'profile',
  profileImg = 'profileImg',
  authPayload = 'authPayload',
  HomePosts = 'HomePosts',
  Colleagues = 'Colleagues',
  diaries = 'diaries',
  libraries = 'libraries',
  goals = 'goals',
  Posts = 'Posts',
  userPosts = 'userPosts',
  notifications = 'notifications',
  notificationUnread = 'notificationUnread',
  recentSearch = 'recentSearch',
  recentPreference = 'recentPreference',
  reportCategories = 'reportCategories',
  chatList = 'chatList',
  workExprnce = 'workExprience',
  achievement = 'achievement',
}



/**
 * Keys used for emitting events using Ionic Events
 *
 * @export
 * @enum {string}
 */
export enum EventsType {
  updateUser = 'updateUser',
  updateGoal = 'updateGoal',
  updateDiary = 'updateDiary',
  updateArticle = 'updateArticle',
  updateHomeStorage = 'updateHomeStorage',
  connectSocket = 'connectSocket'
}

export enum SocketEvents {
  NEW_CONNECTION = 'connected',
  NEW_NOTIFICATION = 'new_notification',
  NEW_POST = 'new_post',
  NEW_ARTICLE = 'new_article',
  NEW_POLL = 'new_poll',
  NEW_COMMENT = 'new_comment',
  NEW_REPLY = 'new_reply',
  VIEWED_POST = 'viewed_post',
  NEW_VOTE = 'new_vote',
  NEW_LIKE = 'new_like',
  ONLINE_STATUS = 'online_status',
  CHAT_MESSAGE = 'chat_message',
  SESSION_STATUS = 'session_status',
  SESSION_STATUS_MESSAGE = 'session_status_message',
  KEYSTROKE = 'keystroke',
  ERROR = 'connect_error',
  MESSAGE_RECEIVED = 'message_received',
  MESSAGE_READ = 'message_read',
  CONNECT = 'connect',
  PROMPT_CHAT_TRANSFER = 'prompt_chat_transfer',
  CHAT_TRANSFER_RESPONSE = 'chat_transfer_response',
  CHAT_TRANSFER = 'chat_transfer',
  TIME_OUT = 'connect_timeout'
}
