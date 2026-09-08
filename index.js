pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://pannellum.org/images/alma.jpg"
});

pannellum.viewer('panorama2', {
    "default": {
        "firstScene": "outside",
        "author": "P Diddy",
        "sceneFadeDuration": 1000
    },
    "scenes": {
        "inside": {
            "title": "Inside the House",
            "panorama": "./interior.jpg",
            "hotSpots": [{
                "pitch": -2.1,
                "yaw": 132.9,
                "type": "scene",
                "text": "Outside",
                "sceneId": "outside"
            }]
        },
        "outside": {
            "title": "Outside",
            "type": "equirectangular",
            "panorama": "./house.jpg",
            "hotSpots": [
                {
                    "pitch": -21.6,
                    "yaw": 149.7,
                    "type": "scene",
                    "text": "Inside the House",
                    "sceneId": "inside",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
});