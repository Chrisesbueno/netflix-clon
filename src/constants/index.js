import * as All from "../../public";

export const navbar = {
    logo: All.Logo,
    pages: [
        {
            id: 'page-1',
            title: 'TV Shows',
            link: 'tv-shows'
        },
        {
            id: 'page-2',
            title: 'Movies',
            link: 'movies'
        },
        {
            id: 'page-3',
            title: 'My List',
            link: 'my-list'
        },
    ],
    profile: [
        {
            id: 'profile-1',
            icon: 'bx bx-search',
        },
        {
            id: 'profile-2',
            icon: 'bx bxs-bell',
        },
        {
            id: 'profile-3',
            icon: 'bx bxs-square',
        },
        {
            id: 'profile-4',
            icon: 'bx bxs-down-arrow',
        },
    ]
}

export const hero = {
    poster: All.Poster,
    content: {
        title: 'yanimda kal asas',
        description: `Emir is a handsome, rich, successful man in his thirties. He was born into a family of workers and dedicated to study. He works day and night by putting everything in his life into the background. One of Turkey's most important investment bank has been working as an investment adviser at.`,
        top: {
            icon: All.Top10,
            title: 'Number 4 Today'
        }
    },
    key: 'andawSiawdaLK12KADAxa',
    buttons: {
        play: {
            icon: 'bx bx-play',
            title: 'Play'
        },
        info: {
            icon: 'bx bx-info-circle',
            title: 'More info'
        }
    }
}