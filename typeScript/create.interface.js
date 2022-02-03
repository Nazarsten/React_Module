"use strict";
exports.__esModule = true;
var userCounter = function (mission) {
    return mission;
};
console.log(userCounter({
    mission_name: "Starlink-15 (v1.0)",
    launch_date_local: '2020-10-24T11:31:00-04:00',
    launch_site: {
        site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    links: {
        article_link: null,
        video_link: 'https://youtu.be/J442-ti-Dhg'
    },
    rocket:{
        rocket_name: 'falcon',
        first_stage: {
            cores: [{
                flight: 10,
                core: {
                    reuse_count: 12,
                    status: 'unknown'
                }
            }]
        },
        second_stage: {
            payloads: [{
                payload_type: 'Satellite',
                payload_mass_kg: 15400,
                payload_mass_lbs: 33951
            }]
        }
    }
}));
