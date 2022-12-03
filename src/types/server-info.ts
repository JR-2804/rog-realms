export interface ServerInfo {
  status: "Online" | "Offline";
  numberOfPlayers: Number;
  internalLag: Number;
}
