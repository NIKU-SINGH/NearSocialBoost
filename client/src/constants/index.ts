import {
  createCampaign,
  dashboard,
  profile,
  withdraw,
  notifications,
  chainlink,
} from "../assets";

import { Airplay } from '@geist-ui/icons'

console.log(Airplay)

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/home",
  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "analyse",
    imgUrl: chainlink,
    link: "/analyse",
  },
  {
    name: "notifications",
    imgUrl: notifications,
    link: "/notifications",
  },
  {
    name: "Airdrop",
    imgUrl: withdraw,
    link: "/claim",
    disabled: true
  },
  {
    name: "my camps",
    imgUrl: profile,
    link: "/profile"
  },
  {
    name: "Claim NFTS",
    imgUrl: withdraw,
    link: "/claim",
  }
];
