// src/data/dbdata.ts
export type Character = {
    id?: number;
    name: string;
    path: string;
    characters?: Character[];
    type?: string;
    fighter?: string;
    valuation?: string;
    fusion?: boolean;
    person?: string;
};

// Use the Character type for the ImgCharacterData array
const ImgCharacterData: Character[] = [
    {
        id: 1,
        name: "Goku (ULTRA INSTINCT)",
        path: "src/assets/img/PCard_FavoriteCh/character012.png",
        fighter: "Z Fighter",
        valuation: "Legendary Warrior",
        person: "Goku",
        characters: [
            {
                name: "Goku (ULTRA INSTINCT -SIGN-)",
                path: "src/assets/img/PCard_FavoriteCh/character012.png",
            },
            {
                name: "Goku (ULTRA INSTINCT)",
                path: "src/assets/img/PCard_FavoriteCh/character013.png",
            },
        ],
    },
    {
        id: 2,
        name: "Goku",
        path: "src/assets/img/PCard_FavoriteCh/character001.png",
        fighter: "Z Fighter",
        person: "Goku",
    },
    {
        id: 3,
        name: "Goku (Z-MID)",
        path: "src/assets/img/PCard_FavoriteCh/character002.png",
        fighter: "Z Fighter",
        person: "Goku",
        characters: [
            {
                name: "Goku (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character002.png",
            },
            {
                name: "Goku (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character003.png",
            },
        ],
    },
    {
        id: 4,
        name: "Goku (Z-END)",
        path: "src/assets/img/PCard_FavoriteCh/character004.png",
        fighter: "Z Fighter",
        person: "Goku",
        characters: [
            {
                name: "Goku (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character004.png",
            },
            {
                name: "Goku (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character005.png",
            },
            {
                name: "Goku (SUPER SAIYAN 2)",
                path: "src/assets/img/PCard_FavoriteCh/character006.png",
            },
            {
                name: "Goku (SUPER SAIYAN 3)",
                path: "src/assets/img/PCard_FavoriteCh/character007.png",
            },
        ],
    },
    {
        id: 5,
        name: "Goku (SUPER)",
        path: "src/assets/img/PCard_FavoriteCh/character009.png",
        fighter: "Z Fighter",
        person: "Goku",
        characters: [
            {
                name: "Goku (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character009.png",
            },
            {
                name: "Goku (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character010.png",
            },
            {
                name: "Goku (SUPER SAIYAN GOD)",
                path: "src/assets/img/PCard_FavoriteCh/character014.png",
            },
            {
                name: "Goku (SUPER SAIYAN GOD SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character011.png",
            },
        ],
    },

    {
        id: 6,
        name: "Goku (GT)",
        path: "src/assets/img/PCard_FavoriteCh/character015.png",
        type: "kid",
        fighter: "Z Fighter",
        person: "Goku",
        characters: [
            {
                name: "Goku (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character015.png",
            },
            {
                name: "Goku (SUPER SAIYAN 1)",
                path: "src/assets/img/PCard_FavoriteCh/character016.png",
            },
            {
                name: "Goku (SUPER SAIYAN 3)",
                path: "src/assets/img/PCard_FavoriteCh/character017.png",
            },
            {
                name: "Goku (SUPER SAIYAN 4)",
                path: "src/assets/img/PCard_FavoriteCh/character008.png",
            },
        ],
    },
    {
        id: 7,
        name: "Goku (TEEN)",
        path: "src/assets/img/PCard_FavoriteCh/character018.png",
        type: "kid",
        fighter: "Z Fighter",
        person: "Goku",
    },
    {
        name: "Vegeta (Z-Scouter)",
        path: "src/assets/img/PCard_FavoriteCh/character019.png",
        fighter: "Z Fighter",
        person: "Vegeta",
        characters: [
            {
                name: "Vegeta (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character019.png",
            },
            {
                name: "Vegeta (GREAT APE)",
                path: "src/assets/img/PCard_FavoriteCh/character032.png",
            },
        ],
    },
    {
        id: 9,
        name: "Vegeta (Z-EARLY)",
        path: "src/assets/img/PCard_FavoriteCh/character020.png",
        fighter: "Z Fighter",
        person: "Vegeta",
        characters: [
            {
                name: "Vegeta (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character020.png",
            },
            {
                name: "Vegeta (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character021.png",
            },
            {
                name: "Super Vegeta",
                path: "src/assets/img/PCard_FavoriteCh/character030.png",
                fighter: "Z Fighter",
                person: "Vegeta",
            },
        ],
    },
    {
        id: 10,
        name: "Vegeta (Z-END)",
        path: "src/assets/img/PCard_FavoriteCh/character022.png",
        fighter: "Z Fighter",
        person: "Vegeta",
        characters: [
            {
                name: "Vegeta (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character022.png",
            },
            {
                name: "Vegeta (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character023.png",
            },
            {
                name: "Vegeta (SUPER SAIYAN 2)",
                path: "src/assets/img/PCard_FavoriteCh/character024.png",
            },
        ],
    },
    {
        id: 11,
        name: "Majin Vegeta",
        path: "src/assets/img/PCard_FavoriteCh/character025.png",
        valuation: "Legendary Warrior",
        fighter: "Z Fighter",
        person: "Vegeta",
    },
    {
        id: 12,
        name: "Vegeta (SUPER SAIYAN 4)",
        path: "src/assets/img/PCard_FavoriteCh/character026.png",
        fighter: "Z Fighter",
        person: "Vegeta",
    },
    {
        id: 13,
        name: "Vegeta (SUPER)",
        path: "src/assets/img/PCard_FavoriteCh/character027.png",
        fighter: "Z Fighter",
        person: "Vegeta",
        characters: [
            {
                name: "Vegeta (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character027.png",
            },
            {
                name: "Vegeta (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character028.png",
            },
            {
                name: "Vegeta (SUPER SAIYAN GOD)",
                path: "src/assets/img/PCard_FavoriteCh/character031.png",
            },
            {
                name: "Vegeta (SUPER SAIYAN GOD SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character029.png",
            },
        ],
    },
    {
        id: 14,
        name: "Gohan (KID)",
        path: "src/assets/img/PCard_FavoriteCh/character0.png",
        type: "kid",
        fighter: "Z Fighter",
        person: "Gohan",
    },
    {
        id: 15,
        name: "Ultimate Gohan",
        path: "src/assets/img/PCard_FavoriteCh/character041.png",
        fighter: "Z Fighter",
        person: "Gohan",
        valuation: "Legendary Warrior",
    },
    {
        id: 16,
        name: "Gohan (TEEN)",
        path: "src/assets/img/PCard_FavoriteCh/character034.png",
        type: "kid",
        fighter: "Z Fighter",
        person: "Gohan",
        characters: [
            {
                name: "Gohan (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character034.png",
            },
            {
                name: "Gohan (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character035.png",
            },
            {
                name: "Gohan (SUPER SAIYAN 2)",
                path: "src/assets/img/PCard_FavoriteCh/character036.png",
            },
        ],
    },
    {
        id: 17,
        name: "Gohan (ADULT)",
        path: "src/assets/img/PCard_FavoriteCh/character037.png",
        fighter: "Z Fighter",
        person: "Gohan",
        characters: [
            {
                name: "Gohan (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character037.png",
            },
            {
                name: "Gohan (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character038.png",
            },
            {
                name: "Gohan (SUPER SAIYAN 2)",
                path: "src/assets/img/PCard_FavoriteCh/character039.png",
            },
            {
                name: "GREAT SAIYAMAN",
                path: "src/assets/img/PCard_FavoriteCh/character040.png",
            },
        ],
    },
    {
        id: 18,
        name: "Future Gohan",
        path: "src/assets/img/PCard_FavoriteCh/character042.png",
        fighter: "Z Fighter",
        person: "Gohan",
        characters: [
            {
                name: "Future Gohan (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character042.png",
            },
            {
                name: "Future Gohan (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character043.png",
            },
        ],
    },
    {
        id: 19,
        name: "Piccolo",
        path: "src/assets/img/PCard_FavoriteCh/character044.png",
        fighter: "Z Fighter",
        characters: [
            {
                name: "Piccolo (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character044.png",
            },
            {
                name: "Piccolo (FUSED WITH KAMI)",
                path: "src/assets/img/PCard_FavoriteCh/character045.png",
            },
        ],
    },
    {
        id: 20,
        name: "Nail",
        path: "src/assets/img/PCard_FavoriteCh/character046.png",
    },
    {
        id: 21,
        name: "Krillin",
        path: "src/assets/img/PCard_FavoriteCh/character047.png",
        fighter: "Z Fighter",
    },
    {
        id: 22,
        name: "Yamcha",
        path: "src/assets/img/PCard_FavoriteCh/character048.png",
        fighter: "Z Fighter",
    },
    {
        id: 23,
        name: "Tien",
        path: "src/assets/img/PCard_FavoriteCh/character049.png",
        fighter: "Z Fighter",
    },
    {
        id: 24,
        name: "Trunks (Sword)",
        path: "src/assets/img/PCard_FavoriteCh/character050.png",
        fighter: "Z Fighter",
        characters: [
            {
                name: "Trunks (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character050.png",
            },
            {
                name: "Trunks (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character051.png",
            },
        ],
    },
    {
        id: 25,
        name: "Trunks (Melee)",
        path: "src/assets/img/PCard_FavoriteCh/character052.png",
        fighter: "Z Fighter",
        characters: [
            {
                name: "Trunks (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character052.png",
            },
            {
                name: "Trunks (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character053.png",
            },
            {
                name: "Super Trunks",
                path: "src/assets/img/PCard_FavoriteCh/character056.png",
            },
        ],
    },
    {
        id: 26,
        name: "Future Trunks",
        path: "src/assets/img/PCard_FavoriteCh/character054.png",
        fighter: "Z Fighter",
        characters: [
            {
                name: "Future Trunks (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character054.png",
            },
            {
                name: "Future Trunks (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character055.png",
            },
        ],
    },
    {
        id: 27,
        name: "Vegito",
        path: "src/assets/img/PCard_FavoriteCh/character061.png",
        fighter: "Z Fighter",
        valuation: "Legendary Warrior",
        fusion: true,
        characters: [
            {
                name: "Vegito (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character061.png",
            },
            {
                name: "Vegito (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character062.png",
            },
            {
                name: "Vegito (SUPER SAIYAN BLUE)",
                path: "src/assets/img/PCard_FavoriteCh/character063.png",
            },
        ],
    },
    {
        id: 28,
        name: "Gogeta (SUPER)",
        path: "src/assets/img/PCard_FavoriteCh/character064.png",
        fighter: "Z Fighter",
        valuation: "Legendary Warrior",
        fusion: true,
        characters: [
            {
                name: "Gogeta (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character064.png",
            },
            {
                name: "Gogeta (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character065.png",
            },
            {
                name: "Gogeta (SUPER SAIYAN BLUE)",
                path: "src/assets/img/PCard_FavoriteCh/character067.png",
            },
        ],
    },
    {
        id: 29,
        name: "Gogeta (SUPER SAIYAN 4)",
        path: "src/assets/img/PCard_FavoriteCh/character066.png",
        fighter: "Z Fighter",
        valuation: "Legendary Warrior",
        fusion: true,
    },
    {
        id: 30,
        name: "Super Gogeta (Z)",
        path: "src/assets/img/PCard_FavoriteCh/character068.png",
        fighter: "Z Fighter",
        valuation: "Legendary Warrior",
        fusion: true,
    },
    {
        id: 31,
        name: "Trunks (KID)",
        path: "src/assets/img/PCard_FavoriteCh/character057.png",
        type: "kid",
        fighter: "Z Fighter",
        characters: [
            {
                name: "Kid Trunks (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character057.png",
            },
            {
                name: "Kid Trunks (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character058.png",
            },
        ],
    },
    {
        id: 32,
        name: "Goten",
        path: "src/assets/img/PCard_FavoriteCh/character059.png",
        type: "kid",
        fighter: "Z Fighter",
        characters: [
            {
                name: "Goten (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character059.png",
            },
            {
                name: "Goten (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character060.png",
            },
        ],
    },
    {
        id: 33,
        name: "Gotenks",
        path: "src/assets/img/PCard_FavoriteCh/character069.png",
        type: "kid",
        fighter: "Z Fighter",
        valuation: "Legendary Warrior",
        fusion: true,
        characters: [
            {
                name: "Gotenks (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character069.png",
            },
            {
                name: "Gotenks (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character070.png",
            },
            {
                name: "Gotenks (SUPER SAIYAN 3)",
                path: "src/assets/img/PCard_FavoriteCh/character071.png",
            },
        ],
    },
    {
        id: 34,
        name: "Videl",
        path: "src/assets/img/PCard_FavoriteCh/character072.png",
    },
    {
        id: 35,

        name: "Master Roshi",
        path: "src/assets/img/PCard_FavoriteCh/character073.png",
        fighter: "Z Fighter",
        characters: [
            {
                name: "Master Roshi (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character073.png",
            },
            {
                name: "Master Roshi (MAX POWER)",
                path: "src/assets/img/PCard_FavoriteCh/character074.png",
            },
        ],
    },

    {
        id: 35,

        name: "Frieza (Z)",
        path: "src/assets/img/PCard_FavoriteCh/character075.png",
        characters: [
            {
                name: "Frieza (FIRST FORM)",
                path: "src/assets/img/PCard_FavoriteCh/character075.png",
            },
            {
                name: "Frieza (SECOND FORM)",
                path: "src/assets/img/PCard_FavoriteCh/character076.png",
            },
            {
                name: "Frieza (THIRD FORM)",
                path: "src/assets/img/PCard_FavoriteCh/character077.png",
            },
            {
                name: "Frieza (FINAL FORM)",
                path: "src/assets/img/PCard_FavoriteCh/character078.png",
            },
            {
                name: "Frieza (FULL POWER)",
                path: "src/assets/img/PCard_FavoriteCh/character081.png",
            },
        ],
    },

    {
        id: 36,
        name: "Mecha Frieza",
        path: "src/assets/img/PCard_FavoriteCh/character079.png",
    },
    {
        id: 37,

        name: "Frieza (SUPER)",
        path: "src/assets/img/PCard_FavoriteCh/character080.png",
        characters: [
            {
                name: "Frieza (FINAL FORM)",
                path: "src/assets/img/PCard_FavoriteCh/character080.png",
            },
            {
                name: "Frieza (GOLDEN)",
                path: "src/assets/img/PCard_FavoriteCh/character082.png",
            },
        ],
    },

    {
        id: 38,

        name: "Cell",
        path: "src/assets/img/PCard_FavoriteCh/character083.png",
        characters: [
            {
                name: "Cell (FIRST FORM)",
                path: "src/assets/img/PCard_FavoriteCh/character083.png",
            },
            {
                name: "Cell (SECOND FORM)",
                path: "src/assets/img/PCard_FavoriteCh/character084.png",
            },
            {
                name: "Cell (PERFECT)",
                path: "src/assets/img/PCard_FavoriteCh/character085.png",
            },
            {
                name: "Perfect Cell",
                path: "src/assets/img/PCard_FavoriteCh/character086.png",
            },
        ],
    },

    {
        id: 39,
        name: "Cell Jr.",
        path: "src/assets/img/PCard_FavoriteCh/character087.png",
        type: "kid",
    },
    {
        id: 40,
        name: "Majin Buu",
        path: "src/assets/img/PCard_FavoriteCh/character088.png",
    },
    {
        id: 41,
        name: "Majin Buu (EVIL)",
        path: "src/assets/img/PCard_FavoriteCh/character089.png",
    },
    {
        id: 42,

        name: "Super Buu",
        path: "src/assets/img/PCard_FavoriteCh/character090.png",
        characters: [
            {
                name: "Super Buu (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character090.png",
            },
            {
                name: "Super Buu (GOTENKS ABSORBED)",
                path: "src/assets/img/PCard_FavoriteCh/character091.png",
            },
            {
                name: "Super Buu (GOHAN ABSORBED)",
                path: "src/assets/img/PCard_FavoriteCh/character092.png",
            },
        ],
    },

    {
        id: 43,
        name: "Kid Buu",
        path: "src/assets/img/PCard_FavoriteCh/character093.png",
        type: "kid",
    },
    {
        id: 45,
        name: "Mr. Satan",
        path: "src/assets/img/PCard_FavoriteCh/character094.png",
    },
    {
        id: 46,
        name: "Chiaotzu",
        path: "src/assets/img/PCard_FavoriteCh/character095.png",
        type: "kid",
        fighter: "Z Fighter",
    },
    {
        id: 47,
        name: "Yajirobe",
        path: "src/assets/img/PCard_FavoriteCh/character096.png",
        fighter: "Z Fighter",
    },
    {
        id: 48,
        name: "Pan (GT)",
        path: "src/assets/img/PCard_FavoriteCh/character097.png",
        fighter: "Z Fighter",
    },
    {
        id: 49,

        name: "Uub",
        path: "src/assets/img/PCard_FavoriteCh/character098.png",
        fighter: "Z Fighter",
        characters: [
            {
                name: "Uub (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character098.png",
            },
            {
                name: "Majuub",
                path: "src/assets/img/PCard_FavoriteCh/character099.png",
            },
        ],
    },

    {
        id: 50,
        name: "Bardock",
        path: "src/assets/img/PCard_FavoriteCh/character100.png",
    },
    {
        id: 51,
        name: "Raditz",
        path: "src/assets/img/PCard_FavoriteCh/character101.png",
    },
    {
        id: 52,
        name: "Saibaman",
        path: "src/assets/img/PCard_FavoriteCh/character102.png",
        type: "kid",
    },
    {
        id: 53,
        name: "Nappa",
        path: "src/assets/img/PCard_FavoriteCh/character103.png",
    },
    {
        id: 54,

        name: "Zarbon",
        path: "src/assets/img/PCard_FavoriteCh/character104.png",
        characters: [
            {
                name: "Zarbon (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character104.png",
            },
            {
                name: "Super Zarbon",
                path: "src/assets/img/PCard_FavoriteCh/character105.png",
            },
        ],
    },

    {
        id: 55,
        name: "Dodoria",
        path: "src/assets/img/PCard_FavoriteCh/character106.png",
    },
    {
        id: 56,
        name: "Cui",
        path: "src/assets/img/PCard_FavoriteCh/character107.png",
    },
    {
        id: 57,
        name: "Captain Ginyu",
        path: "src/assets/img/PCard_FavoriteCh/character108.png",
    },
    {
        id: 58,
        name: "Recoome",
        path: "src/assets/img/PCard_FavoriteCh/character109.png",
    },
    {
        id: 59,
        name: "Burter",
        path: "src/assets/img/PCard_FavoriteCh/character110.png",
    },
    {
        id: 60,
        name: "Jeice",
        path: "src/assets/img/PCard_FavoriteCh/character111.png",
    },
    {
        id: 61,
        name: "Guldo",
        path: "src/assets/img/PCard_FavoriteCh/character112.png",
    },
    {
        id: 62,
        name: "King Cold",
        path: "src/assets/img/PCard_FavoriteCh/character113.png",
    },
    {
        id: 63,
        name: "Android 16",
        path: "src/assets/img/PCard_FavoriteCh/character114.png",
    },
    {
        id: 64,
        name: "Android 17 (Z)",
        path: "src/assets/img/PCard_FavoriteCh/character115.png",
    },
    {
        id: 65,
        name: "Android 17 (SUPER)",
        path: "src/assets/img/PCard_FavoriteCh/character116.png",
    },
    {
        id: 66,
        name: "Android 18",
        path: "src/assets/img/PCard_FavoriteCh/character117.png",
    },
    {
        id: 67,
        name: "Android 19",
        path: "src/assets/img/PCard_FavoriteCh/character118.png",
    },
    {
        id: 68,
        name: "Doctor Gero",
        path: "src/assets/img/PCard_FavoriteCh/character119.png",
    },
    {
        id: 69,
        name: "Babidi",
        path: "src/assets/img/PCard_FavoriteCh/character120.png",
        type: "kid",
    },
    {
        id: 70,
        name: "Dabura",
        path: "src/assets/img/PCard_FavoriteCh/character121.png",
    },
    {
        id: 71,
        name: "Frieza Force Soldier",
        path: "src/assets/img/PCard_FavoriteCh/character122.png",
    },
    {
        id: 72,
        name: "Broly (Z)",
        path: "src/assets/img/PCard_FavoriteCh/character123.png",
        valuation: "Legendary Warrior",
        characters: [
            {
                name: "Broly (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character123.png",
            },
            {
                name: "Broly (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character124.png",
            },
            {
                name: "Broly (LEGENDARY SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character125.png",
            },
        ],
    },

    {
        id: 73,
        name: "Broly (SUPER)",
        path: "src/assets/img/PCard_FavoriteCh/character126.png",
        valuation: "Legendary Warrior",
        characters: [
            {
                name: "Broly (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character126.png",
            },
            {
                name: "Broly (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character127.png",
            },
            {
                name: "Super Saiyan Broly (FULL POWER)",
                path: "src/assets/img/PCard_FavoriteCh/character128.png",
            },
        ],
    },

    {
        id: 74,
        name: "Super Garlic Jr.",
        path: "src/assets/img/PCard_FavoriteCh/character129.png",
    },
    {
        id: 75,
        name: "Dr. Willow",
        path: "src/assets/img/PCard_FavoriteCh/character130.png",
    },
    {
        id: 76,
        name: "Turles",
        path: "src/assets/img/PCard_FavoriteCh/character131.png",
    },
    {
        id: 77,
        name: "Lord Slug",
        path: "src/assets/img/PCard_FavoriteCh/character132.png",
    },
    {
        id: 78,
        name: "Lord Slug (GIANT FORM)",
        path: "src/assets/img/PCard_FavoriteCh/character1.png",
    },
    {
        id: 79,
        name: "Cooler",
        path: "src/assets/img/PCard_FavoriteCh/character134.png",
    },
    {
        id: 80,
        name: "Cooler (FINAL FORM)",
        path: "src/assets/img/PCard_FavoriteCh/character136.png",
    },
    {
        id: 81,
        name: "Metal Cooler",
        path: "src/assets/img/PCard_FavoriteCh/character135.png",
    },
    {
        id: 82,

        name: "Android 13",
        path: "src/assets/img/PCard_FavoriteCh/character137.png",
        characters: [
            {
                name: "Android 13 (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character137.png",
            },
            {
                name: "FUSION ANDROID 13",
                path: "src/assets/img/PCard_FavoriteCh/character138.png",
            },
        ],
    },

    {
        id: 83,

        name: "Bojack",
        path: "src/assets/img/PCard_FavoriteCh/character139.png",
        characters: [
            {
                name: "Bojack (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character139.png",
            },
            {
                name: "Bojack (FULL-POWER)",
                path: "src/assets/img/PCard_FavoriteCh/character140.png",
            },
        ],
    },

    {
        id: 84,

        name: "Janemba",
        path: "src/assets/img/PCard_FavoriteCh/character141.png",
        characters: [
            {
                name: "Janemba (FIRST FORM)",
                path: "src/assets/img/PCard_FavoriteCh/character141.png",
            },
            {
                name: "Super Janemba",
                path: "src/assets/img/PCard_FavoriteCh/character142.png",
            },
        ],
    },

    {
        id: 85,
        name: "Tapion",
        path: "src/assets/img/PCard_FavoriteCh/character143.png",
    },
    {
        id: 86,
        name: "Hirudegarn",
        path: "src/assets/img/PCard_FavoriteCh/character144.png",
    },
    {
        id: 87,

        name: "Baby Vegeta (GT)",
        path: "src/assets/img/PCard_FavoriteCh/character145.png",
        characters: [
            {
                name: "Baby Vegeta (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character145.png",
            },
            {
                name: "Super Baby 1",
                path: "src/assets/img/PCard_FavoriteCh/character146.png",
            },
            {
                name: "Super Baby 2",
                path: "src/assets/img/PCard_FavoriteCh/character147.png",
            },
            {
                name: "Great Ape Baby",
                path: "src/assets/img/PCard_FavoriteCh/character148.png",
            },
        ],
    },

    {
        id: 88,

        name: "Syn Shenron (GT)",
        path: "src/assets/img/PCard_FavoriteCh/character149.png",
        characters: [
            {
                name: "Syn Shenron (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character149.png",
            },
            {
                name: "Omega Shenron",
                path: "src/assets/img/PCard_FavoriteCh/character150.png",
            },
        ],
    },

    {
        id: 89,
        name: "Spopovich",
        path: "src/assets/img/PCard_FavoriteCh/character151.png",
    },
    {
        id: 90,
        name: "Beerus",
        path: "src/assets/img/PCard_FavoriteCh/character152.png",
    },
    {
        id: 91,
        name: "Whis",
        path: "src/assets/img/PCard_FavoriteCh/character153.png",
    },
    {
        id: 92,
        name: "Goku Black",
        path: "src/assets/img/PCard_FavoriteCh/character154.png",
        characters: [
            {
                name: "Goku Black (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character154.png",
            },
            {
                name: "Goku Black (SUPER SAIYAN ROSÉ)",
                path: "src/assets/img/PCard_FavoriteCh/character155.png",
            },
        ],
    },

    {
        id: 93,
        name: "Zamasu",
        path: "src/assets/img/PCard_FavoriteCh/character156.png",
    },
    {
        id: 94,
        name: "Fused Zamasu",
        path: "src/assets/img/PCard_FavoriteCh/character157.png",
        valuation: "Legendary Warrior",
        fusion: true,
        characters: [
            {
                name: "Fused Zamasu (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character157.png",
            },
            {
                name: "Fused Zamasu (Half-Corrupted)",
                path: "src/assets/img/PCard_FavoriteCh/character158.png",
            },
        ],
    },

    {
        id: 95,
        name: "Hit",
        path: "src/assets/img/PCard_FavoriteCh/character159.png",
    },
    {
        id: 96,
        name: "Frost",
        path: "src/assets/img/PCard_FavoriteCh/character160.png",
    },
    {
        id: 97,
        name: "Cabba",
        path: "src/assets/img/PCard_FavoriteCh/character161.png",
        characters: [
            {
                name: "Cabba (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character161.png",
            },
            {
                name: "Cabba (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character162.png",
            },
            {
                name: "Cabba (SUPER SAIYAN 2)",
                path: "src/assets/img/PCard_FavoriteCh/character163.png",
            },
        ],
    },

    {
        id: 98,
        name: "Caulifla",
        path: "src/assets/img/PCard_FavoriteCh/character164.png",
        characters: [
            {
                name: "Caulifla (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character164.png",
            },
            {
                name: "Caulifla (SUPER SAIYAN 2)",
                path: "src/assets/img/PCard_FavoriteCh/character165.png",
            },
        ],
    },

    {
        id: 99,
        name: "Kale",
        path: "src/assets/img/PCard_FavoriteCh/character166.png",
        characters: [
            {
                name: "Kale (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character166.png",
            },
            {
                name: "Kale (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character167.png",
            },
            {
                name: "Super Saiyan Kale (Berserk)",
                path: "src/assets/img/PCard_FavoriteCh/character168.png",
            },
        ],
    },

    {
        id: 100,
        name: "Kefla",
        path: "src/assets/img/PCard_FavoriteCh/character169.png",
        valuation: "Legendary Warrior",
        fusion: true,
        characters: [
            {
                name: "Kefla (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character169.png",
            },
            {
                name: "Kefla (SUPER SAIYAN)",
                path: "src/assets/img/PCard_FavoriteCh/character170.png",
            },
            {
                name: "Kefla (SUPER SAIYAN 2)",
                path: "src/assets/img/PCard_FavoriteCh/character171.png",
            },
        ],
    },

    {
        id: 101,
        name: "Jiren",
        path: "src/assets/img/PCard_FavoriteCh/character172.png",
        valuation: "Legendary Warrior",
        characters: [
            {
                name: "Jiren (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character172.png",
            },
            {
                name: "Jiren (FULL POWER)",
                path: "src/assets/img/PCard_FavoriteCh/character173.png",
            },
        ],
    },

    {
        id: 102,
        name: "Toppo",
        path: "src/assets/img/PCard_FavoriteCh/character174.png",
        characters: [
            {
                name: "Toppo (BASE)",
                path: "src/assets/img/PCard_FavoriteCh/character174.png",
            },
            {
                name: "Toppo (GOD OF DESTRUCTION)",
                path: "src/assets/img/PCard_FavoriteCh/character175.png",
            },
        ],
    },

    {
        id: 103,
        name: "Dyspo",
        path: "src/assets/img/PCard_FavoriteCh/character176.png",
    },
    {
        id: 104,
        name: "Bergamo",
        path: "src/assets/img/PCard_FavoriteCh/character177.png",
    },
    {
        id: 105,
        name: "Ribrianne",
        path: "src/assets/img/PCard_FavoriteCh/character178.png",
    },
    {
        id: 106,
        name: "Kakunsa",
        path: "src/assets/img/PCard_FavoriteCh/character179.png",
    },
    {
        id: 107,
        name: "Roasie",
        path: "src/assets/img/PCard_FavoriteCh/character180.png",
    },
    {
        id: 108,
        name: "Anilaza",
        path: "src/assets/img/PCard_FavoriteCh/character181.png",
    },
    {
        id: 109,
        name: "Goku (MINI)",
        path: "src/assets/img/PCard_FavoriteCh/character182.png",
        type: "kid",
        fighter: "Z Fighter",
    },
];

export default ImgCharacterData;