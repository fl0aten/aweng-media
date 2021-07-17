module.exports = {
    siteMetadata: {
        title: "awenɢ meᴅia",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [
                    require("tailwindcss"),
                    require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'Material Icons Outlined',
                    'NTR',
                    'Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900'
                ],
            },
        },
    ],
}