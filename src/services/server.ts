import type { ServerInfo } from "../types/server-info";

const getServerInfo = async (server: "LK" | "MoP"): Promise<ServerInfo> => {
  const { realm_status, realm_characters, realm_diff } = await (
    await fetch(
      server === "LK"
        ? "https://api.rogwow.com/realm/lk/status/"
        : "https://api.rogwow.com/realm/mop/status/",
    )
  ).json();

  return {
    status: realm_status == "Online" ? "Online" : "Offline",
    numberOfPlayers: realm_characters,
    internalLag: realm_diff,
  };
};

export { getServerInfo };
