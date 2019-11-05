export const getConversations = (state) => {
    return state.conversation.items.map(item => {
            let id = item.conversation.peer.local_id;
            let type = item.conversation.peer.type;
            let name = "";
            let ava = "";
            switch (type) {
                case "group":
                    let group = state.conversation.groups.find(item => item.id === id);
                    name = group.name;
                    ava = group.photo_50;
                    break;
                case "user":
                    let user = state.conversation.profiles.find(item => item.id === id);
                    name = `${user.first_name} ${user.last_name}`;
                    ava = user.photo_50;
            }
            return {
                id,
                message: item.last_message.text,
                name,
                ava,
            }
        }
    );
};
