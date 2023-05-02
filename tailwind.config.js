/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"home-banner":
					"url(https://as1.ftcdn.net/v2/jpg/00/79/71/08/1000_F_79710864_QkDm7AGQ3XL4Gvuhymi7LeNwXQhPahrr.jpg)",
			},
		},
	},
	plugins: [],
};
