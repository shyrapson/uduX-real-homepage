import koffee from "../assets/images/koffee.png";
import lojay from "../assets/images/lojay.png";
import burna from "../assets/images/burna.png";
import {
  HomeIcon,
  DiscoverIcon,
  LibraryIcon,
  PlaylistIcon,
  LikedIcon,
  PlayedIcon,
  CreatePlaylistIcon,
} from "../components/icons";

type ArtistCardType = {
  image: string;
  title: string;
  content: string;
  contentBgColor: string;
  layoutColor: string;
};

export const ArtistCard: Array<ArtistCardType> = [
  {
    image: burna,
    title: "Daily Vibes 1",
    content: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....",
    contentBgColor:
      "linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%)",
    layoutColor: "linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%)",
  },
  {
    image: lojay,
    title: "Daily Vibes 2",
    content: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....",
    contentBgColor:
      "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
    layoutColor: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
  },
  {
    image: koffee,
    title: "Daily Vibes 3",
    content: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy",
    contentBgColor:
      "linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%)",
    layoutColor: "linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)",
  },
  {
    image: burna,
    title: "Daily Vibes 1",
    content: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....",
    contentBgColor:
      "linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%)",
    layoutColor: "linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%)",
  },
  {
    image: lojay,
    title: "Daily Vibes 2",
    content: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....",
    contentBgColor:
      "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
    layoutColor: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
  },
  {
    image: koffee,
    title: "Daily Vibes 3",
    content: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy",
    contentBgColor:
      "linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%)",
    layoutColor: "linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)",
  },
];

export const ArtistCards: Array<ArtistCardType> = [
  {
    image: burna,
    title: "Daily Vibes 1",
    content: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....",
    contentBgColor:
      "linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%)",
    layoutColor: "linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%)",
  },
  {
    image: lojay,
    title: "Daily Vibes 2",
    content: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....",
    contentBgColor:
      "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
    layoutColor: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
  },
  {
    image: koffee,
    title: "Daily Vibes 3",
    content: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy",
    contentBgColor:
      "linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%)",
    layoutColor: "linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)",
  },
  {
    image: burna,
    title: "Daily Vibes 1",
    content: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....",
    contentBgColor:
      "linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%)",
    layoutColor: "linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%)",
  },
  {
    image: lojay,
    title: "Daily Vibes 2",
    content: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....",
    contentBgColor:
      "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
    layoutColor: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
  },
  {
    image: koffee,
    title: "Daily Vibes 3",
    content: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy",
    contentBgColor:
      "linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%)",
    layoutColor: "linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)",
  },
];

export type sideBarItemsTypes = {
  icon: JSX.Element | (() => JSX.Element);
  href: string;
};

export const sideBarItems: Array<sideBarItemsTypes> = [
  {
    icon: HomeIcon({}),
    href: "/",
  },
  {
    icon: DiscoverIcon({}),
    href: "/discover",
  },
  {
    icon: LibraryIcon({}),
    href: "/library",
  },
  {
    icon: PlaylistIcon({}),
    href: "/playlist",
  },
];

export type ItemsType = {
  icon: JSX.Element | (() => JSX.Element);
  title: string;
  href: string;
};

export const BottomSideNav: Array<ItemsType> = [
  {
    icon: LibraryIcon({}),
    title: "Your Library",
    href: "/library",
  },
  {
    icon: LikedIcon({}),
    title: "Liked Songs",
    href: "/songs",
  },
  {
    icon: PlayedIcon({}),
    title: "Recently Played",
    href: "/played",
  },
  {
    icon: CreatePlaylistIcon({}),
    title: "Create Playlist",
    href: "/playlist",
  },
];

export const topSideNav: Array<ItemsType> = [
  {
    icon: HomeIcon({}),
    title: "Home",
    href: "/",
  },
  {
    icon: DiscoverIcon({}),
    title: "Discover",
    href: "/discover",
  },
];

export const Playsongs: Array<string> = [
  "Riffs & Runs",
  "African Heat",
  "Running out of Playlist na....",
  "Saturday was a Good Day",
  "Gidi Nights",
  "Riffs & Runs",
  "African Heat",
];
