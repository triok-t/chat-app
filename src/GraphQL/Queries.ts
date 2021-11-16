import { gql } from "@apollo/client";

export const FETCH_LATEST_MESSAGES_QUERY = gql`
  query fetchLatestMessages(
    $channelId: String!
  ) {
    fetchLatestMessages(
      channelId: $channelId
    ) {
      messageId
      text
      datetime
      userId
    }
  }
`

export const FETCH_MORE_MESSAGES_QUERY = gql`
  query fetchMoreMessages(
    $channelId: String!
    $messageId: String!
    $old: Boolean!
  ) {
    fetchMoreMessages(
      channelId: $channelId
      messageId: $messageId
      old: $old
    ) {
      messageId
      text
      datetime
      userId
    }
  }
`
