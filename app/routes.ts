import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home/home.tsx"),
  route("summary/:slug", "routes/Summary/summary.tsx"),
  route("config/set-theme", "routes/set-theme.tsx"),
] satisfies RouteConfig;
