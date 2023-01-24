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