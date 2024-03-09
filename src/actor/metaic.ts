import { Actor, HttpAgent } from "@dfinity/agent";

import { _SERVICE as SERVICE } from "../candid/metaic";
import { idlFactory as InterfaceFactory } from "../candid/metaic.did";

const agent = new HttpAgent({
  host: "https://ic0.app",
});

// ic pro : ahqrb-yqaaa-aaaap-ab4uq-cai
// ic test : 25asb-xqaaa-aaaap-qb7nq-cai

export const metaic = Actor.createActor<SERVICE>(InterfaceFactory, {
  agent: agent,
  canisterId: "25asb-xqaaa-aaaap-qb7nq-cai",
});
