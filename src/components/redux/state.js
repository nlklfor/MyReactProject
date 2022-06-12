let state = {
    profileState: {
        postsData: [

            { id: 1, message: "This team will never trade ⬇", image: 'https://www.si.com/.image/t_share/MTY4NDk3MTA3MjYyNzc3MTEw/joel-embiid.png' },
            { id: 2, message: "Joel chmo", image: 'https://www.kindpng.com/picc/m/104-1042894_transparent-lebron-james-face-png-stephen-curry-face.png' },
            { id: 3, message: "NePon😐", image: 'https://www.si.com/.image/t_share/MTY4NDk3MTA3MjYyNzc3MTEw/joel-embiid.png' }
        ]
    },
    dialogsState: {
        dialogsData: [
            { id: 1, name: "Dimych", image: "https://i1.sndcdn.com/avatars-vTz4Uz5gwRSMyG7U-B6a28A-t500x500.jpg" },
            { id: 2, name: "Nikitos", image: "https://sun9-57.userapi.com/sun9-64/s/v1/ig2/yFfB4KtXNFoS9BtJAcdie9zncTWPkXCZmEgFkY-b5LW8Q1pjThxrLDFX-BswBFyImYLr4cov9ce1jes-y-NRI8h1.jpg?size=200x200&quality=96&crop=283,475,1018,1018&ava=1" },
            { id: 3, name: "Iluha", image: "https://i1.sndcdn.com/avatars-lcLvzmx5Q3PBCQje-u37Ojw-t500x500.jpg" },
            { id: 4, name: "Atnoha", image: "https://sun9-42.userapi.com/sun9-12/impg/hQLu1FFjulje9mUD5VBmjqAt0YCQGOuziKoLTw/_AHDH4Ob5Cw.jpg?size=604x604&quality=96&sign=42f944745be2f98d2daaac59dcb651cc&type=album" },
            { id: 5, name: "Kiruha", image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WnKgtr0v33ZzxQ5d24gIjFz_OlZbqJxD4C68cp2u-Z9Ijw0AXmrUZoZm2iLI-cc1M7MAmC_FntwvCv28EpZvYmDw" },
            { id: 6, name: "Egorishe", image: "https://stickerly.pstatic.net/sticker_pack/V3UsPH6pEtk8qTcLjMqdQ/F4MF00/33/0a5a27ca-3840-4383-8431-918ae45ff2ef.png" }
        ],
        messagesData: [
            { id: 1, message: "Ky" },
            { id: 2, message: "Che nado?" },
            { id: 3, message: "Ta niche" },
            { id: 4, message: "Pon😐😐😐" }
        ]
    }






}

export let addPost = (postMessage) => {
    let addNewPost = {
        id: 1,
        message: { postMessage },
        image: "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png"
    }

    state.profileState.postsData.push(addNewPost);
};



export default state;