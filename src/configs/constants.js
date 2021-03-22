const PUBLIC_URL = process.env.PUBLIC_URL;

const constants = {
    PUBLIC_IMAGE_FOLDER: PUBLIC_URL + '/images',
    DEFAULT_BANNER_IMAGE : PUBLIC_URL + '/public/images/default.png',
    SPORT_CRICKET : {
        label : "Cricket",
        value : "Cricket"
    },
    SPORTS_FOOTBALL : {
        label : "Football",
        value : "Football"
    },
    SPORT_CRICKET_OPTIONS : [
        {
            label : "Batsman",
            value : "Batsman"
        },
        {
            label : "Bowler",
            value : "Bowler"
        },
        {
            label : "Keeper",
            value : "Keeper"
        },
        {
            label : "Fielder",
            value : "Fielder"
        },
    ],
    SPORT_FOOTBALL_OPTIONS : [
        {
            label : "Defender",
            value : "Defender"
        },
        {
            label : "Striker",
            value : "Striker"
        },
        {
            label : "Goalkeeper",
            value : "Goalkeeper"
        }
    ]
}

export default constants;
