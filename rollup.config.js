import copy from "rollup-plugin-copy";

export default {
    input: "0.js",
    plugins: [
        copy({
            targets: [
                // Copy module.json to dist
                { src: "module.json", dest: "dist" },

                // Copy only the main CSS file
                { src: "styles/mp-journals.css", dest: "dist/styles" },

                // Copy texture assets to dist/assets/textures/
                { src: "assets/textures/**/*", dest: "dist/assets/textures" },
            ],
        }),
    ],
};
