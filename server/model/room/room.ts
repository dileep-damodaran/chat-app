export interface IRoom {
    name: string,
    users: {
        user_id: string,
        socket_id: string,
        activity_log: {
            joined_at: Date,
            left_at: Date
        }[]
    }[]
}