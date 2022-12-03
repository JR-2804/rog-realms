import type { ServerInfo } from "../types/server-info";

const getServerInfo = (server: "LK" | "MoP"): ServerInfo => {
  if (server === "LK") {
    return {
      status: "Online",
      numberOfPlayers: 123,
      internalLag: 5,
    };
  }

  return {
    status: "Online",
    numberOfPlayers: 476,
    internalLag: 20,
  };
};

export { getServerInfo };
