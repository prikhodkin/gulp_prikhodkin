module.exports = {
    root: true,
    modules: {
        "bem-tools": {
            plugins: {
                create: {
                    techs: ["html", "scss"],
                    levels: {
                        "src/blocks": {
                            default: true
                        }
                    }
                }
            }
        }
    }
};
