import { defineUserConfig, defaultTheme } from "vuepress";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { navbar_en } from "./navbar";
import { sidebar_en } from "./sidebar";

export default defineUserConfig({
	port: 3000,
	base: "/pulsar-docs/",
	title: "Pulsar Edit",
	locales: {
		"/": { lang: "en" },
		"/nl/": { lang: "nl" }
	},
	theme: defaultTheme({
		locales: {
			"/": {
				selectLanguageName: "English",
				navbar: navbar_en,
				sidebar: sidebar_en
			},
			"/nl/": {
				selectLanguageName: "Nederlands"
			}
		}
	}),
	plugins: [
		shikiPlugin({ theme: "one-dark-pro" })
	]
});
