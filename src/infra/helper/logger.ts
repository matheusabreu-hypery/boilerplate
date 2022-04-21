import pino from "pino";

export default pino({
  enabled: true,
  level: "debug",
  prettyPrint: {
    levelFirst: true,
    colorize: true,
  },
});
