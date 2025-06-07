// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     base: "/portfolio/",
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
    base: "/portfolio/",

    plugins: [
        react(),

        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,

                interlaced: false,
            },

            optipng: {
                optimizationLevel: 7,
            },

            mozjpeg: {
                quality: 70,
            },

            pngquant: {
                quality: [0.65, 0.9],

                speed: 4,
            },

            svgo: {
                plugins: [
                    {
                        name: "removeViewBox",
                    },

                    {
                        name: "removeEmptyAttrs",

                        active: false,
                    },
                ],
            },
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                fallback: "index.html",
            },
        },
    },
});
