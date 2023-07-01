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
    link: "/campaign",
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
    link: "/airdrop",
    disabled: true
  },
  {
    name: "profile",
    imgUrl: profile,
    link: "/profile"
  },
  {
    name: "Claim NFTs",
    imgUrl: withdraw,
    link: "/claim",
  }
];
