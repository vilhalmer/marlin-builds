module.exports = {
    board_env: "STM32F103RE_creality",
    active: true,
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },
    configuration: {
        enable: [
            // Manual bed leveling
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER",

            // CR Touch
            "BLTOUCH",
            "AUTO_BED_LEVELING_BILINEAR",
            "USE_PROBE_FOR_Z_HOMING",
            "Z_SAFE_HOMING",
            "RESTORE_LEVELING_AFTER_G28",
            ["NOZZLE_TO_PROBE_OFFSET", [-47, -9, 0]]
        ],
        disable: [
            // Faster boot
            "SHOW_CUSTOM_BOOTSCREEN",
            "SHOW_BOOTSCREEN",

            // CR Touch
            "Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN"
        ]
    },
    configuration_adv: {
        enable: [
            // Octoprint integration
            "HOST_ACTION_COMMANDS",
            "HOST_START_MENU_ITEM",

            // CR Touch
            "PROBE_OFFSET_WIZARD"
        ],
        disable: []
    }
};
