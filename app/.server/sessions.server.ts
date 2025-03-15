import { createCookieSessionStorage } from "react-router"
import { createThemeSessionResolver } from "remix-themes"

const isProduction = process.env.NODE_ENV === "production"

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["DaMPFatheR05=8"],
    ...(isProduction
      ? { domain: "sumrize.co", secure: true }
      : {}),
  },
})

export const themeSessionResolver = createThemeSessionResolver(sessionStorage)
