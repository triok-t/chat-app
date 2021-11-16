import { useQuery } from "@apollo/client";
import { FETCH_LATEST_MESSAGES_QUERY, FETCH_MORE_MESSAGES_QUERY } from "../../GraphQL/Queries";


export const useFetchLatestMessages = (channelId: string) => {
    const { data, loading, error, refetch } = useQuery(FETCH_LATEST_MESSAGES_QUERY, {
        variables: { channelId },
    });
    return { data, loading, error, refetch }
}

export const useFetchMoreMessages = (channelId: string, messageId: string, old: boolean) => {
    const { data, loading, error, refetch } = useQuery(FETCH_MORE_MESSAGES_QUERY, {
        variables: { channelId, messageId, old },
    });
    return { data, loading, error, refetch }
}