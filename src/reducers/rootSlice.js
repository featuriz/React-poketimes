import { createSlice } from '@reduxjs/toolkit'

export const rootSlice = createSlice({
    name: 'root',
    initialState: {
        posts: [
            { id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" },
            { id: 2, title: "qui est esse", body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla" },
            { id: 3, title: "ea molestias quasi exercitationem repellat qui ipsa sit aut", body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut" },
        ],
    },
    reducers: {
        deletePost: (state, action) => {
            console.log("state: " + state.posts)
            console.log("action: " + action.payload.id)
            console.log("action: " + action.payload.extra_val)
            // to do
            let newPost = state.posts.filter(post => {
                return action.payload.id !== post.id
            })
            return {
                ...state,
                posts: newPost
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { deletePost } = rootSlice.actions

export default rootSlice.reducer