module.exports = {
    purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    darkMode: false,
    theme: {
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
            center: true,
        },
        extend: {
            height: {
                almost: "calc(100vh - 2 * 64px)",
            },
            backgroundImage: {
                hero: "url('https://placehold.it/1600x500?text=hero')"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}