import { Actor, HttpAgent } from "@dfinity/agent";

import { _SERVICE as SERVICE } from "../candid/metaic";
import { idlFactory as InterfaceFactory } from "../candid/metaic.did";

const agent = new HttpAgent({
  host: "https://ic0.app",
});

export const metaic = Actor.createActor<SERVICE>(InterfaceFactory, {
  agent: agent,
  canisterId: "ahqrb-yqaaa-aaaap-ab4uq-cai",
});
