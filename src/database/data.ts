import { initializeApp } from 'firebase/app';
import { collection, addDoc, deleteDoc, getDocs, getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAUa8ASqRSE4H43_o2QfZtnArjHDVIrJJE",
    authDomain: "football-63302.firebaseapp.com",
    projectId: "football-63302",
    storageBucket: "football-63302.appspot.com",
    messagingSenderId: "774176377887",
    appId: "1:774176377887:web:77edbd800ff203abe6d92a",
    measurementId: "G-N5RNS6X4E0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const leagueData2022 = [
    {
        "POS": 1,
        "CLUB": "FC København",
        "P": 32,
        "W": 21,
        "D": 5,
        "L": 6,
        "GF": 60,
        "GA": 23,
        "GD": "+37",
        "PTS": 68
    },
    {
        "POS": 2,
        "CLUB": "FC Midtjylland",
        "P": 32,
        "W": 17,
        "D": 6,
        "L": 9,
        "GF": 51,
        "GA": 33,
        "GD": "+18",
        "PTS": 57
    },
    {
        "POS": 3,
        "CLUB": "Brøndby IF",
        "P": 32,
        "W": 16,
        "D": 8,
        "L": 8,
        "GF": 54,
        "GA": 36,
        "GD": "+18",
        "PTS": 56
    },
    {
        "POS": 4,
        "CLUB": "AGF",
        "P": 32,
        "W": 13,
        "D": 8,
        "L": 11,
        "GF": 45,
        "GA": 37,
        "GD": "+8",
        "PTS": 47
    },
    {
        "POS": 5,
        "CLUB": "Randers FC",
        "P": 32,
        "W": 12,
        "D": 4,
        "L": 16,
        "GF": 39,
        "GA": 45,
        "GD": "-6",
        "PTS": 40
    },
    {
        "POS": 6,
        "CLUB": "OB",
        "P": 32,
        "W": 11,
        "D": 7,
        "L": 14,
        "GF": 43,
        "GA": 61,
        "GD": "-18",
        "PTS": 40
    }
];

const leagueData2023 = [
    {
        "POS": 1,
        "CLUB": "FC København",
        "P": 32,
        "W": 23,
        "D": 5,
        "L": 4,
        "GF": 73,
        "GA": 28,
        "GD": "+45",
        "PTS": 74
    },
    {
        "POS": 2,
        "CLUB": "FC Midtjylland",
        "P": 32,
        "W": 17,
        "D": 6,
        "L": 9,
        "GF": 64,
        "GA": 37,
        "GD": "+27",
        "PTS": 57
    },
    {
        "POS": 3,
        "CLUB": "Randers FC",
        "P": 32,
        "W": 16,
        "D": 7,
        "L": 9,
        "GF": 56,
        "GA": 39,
        "GD": "+17",
        "PTS": 55
    },
    {
        "POS": 4,
        "CLUB": "Brøndby IF",
        "P": 32,
        "W": 14,
        "D": 7,
        "L": 11,
        "GF": 44,
        "GA": 40,
        "GD": "+4",
        "PTS": 49
    },
    {
        "POS": 5,
        "CLUB": "AGF",
        "P": 32,
        "W": 14,
        "D": 5,
        "L": 13,
        "GF": 50,
        "GA": 45,
        "GD": "+5",
        "PTS": 47
    },
    {
        "POS": 6,
        "CLUB": "Viborg FF",
        "P": 32,
        "W": 13,
        "D": 6,
        "L": 13,
        "GF": 42,
        "GA": 48,
        "GD": "-6",
        "PTS": 45
    }
];

const leagueData2024 = [
    {
        "POS": 1,
        "CLUB": "FC København",
        "P": 32,
        "W": 21,
        "D": 4,
        "L": 7,
        "GF": 64,
        "GA": 34,
        "GD": "+30",
        "PTS": 67
    },
    {
        "POS": 2,
        "CLUB": "FC Nordsjælland",
        "P": 32,
        "W": 19,
        "D": 6,
        "L": 7,
        "GF": 57,
        "GA": 34,
        "GD": "+23",
        "PTS": 63
    },
    {
        "POS": 3,
        "CLUB": "FC Midtjylland",
        "P": 32,
        "W": 18,
        "D": 3,
        "L": 11,
        "GF": 78,
        "GA": 47,
        "GD": "+31",
        "PTS": 57
    },
    {
        "POS": 4,
        "CLUB": "Brøndby IF",
        "P": 32,
        "W": 17,
        "D": 5,
        "L": 10,
        "GF": 54,
        "GA": 32,
        "GD": "+22",
        "PTS": 56
    },
    {
        "POS": 5,
        "CLUB": "Viborg FF",
        "P": 32,
        "W": 12,
        "D": 10,
        "L": 10,
        "GF": 41,
        "GA": 40,
        "GD": "+1",
        "PTS": 46
    },
    {
        "POS": 6,
        "CLUB": "Randers FC",
        "P": 32,
        "W": 9,
        "D": 10,
        "L": 13,
        "GF": 39,
        "GA": 55,
        "GD": "-16",
        "PTS": 37
    }
]

const leagueData2025 = [
    {
        "POS": 1,
        "CLUB": "Brøndby IF",
        "P": 32,
        "W": 22,
        "D": 2,
        "L": 8,
        "GF": 70,
        "GA": 38,
        "GD": "+32",
        "PTS": 68
    },
    {
        "POS": 2,
        "CLUB": "FC Midtjylland",
        "P": 32,
        "W": 19,
        "D": 8,
        "L": 5,
        "GF": 62,
        "GA": 38,
        "GD": "+24",
        "PTS": 65
    },
    {
        "POS": 3,
        "CLUB": "FC København",
        "P": 32,
        "W": 20,
        "D": 3,
        "L": 9,
        "GF": 58,
        "GA": 35,
        "GD": "+23",
        "PTS": 63
    },
    {
        "POS": 4,
        "CLUB": "FC Nordsjælland",
        "P": 32,
        "W": 19,
        "D": 6,
        "L": 7,
        "GF": 64,
        "GA": 42,
        "GD": "+22",
        "PTS": 63
    },
    {
        "POS": 5,
        "CLUB": "Randers FC",
        "P": 32,
        "W": 17,
        "D": 1,
        "L": 14,
        "GF": 49,
        "GA": 46,
        "GD": "+3",
        "PTS": 52
    }
]

const leagueData2026 = [
    {
        "POS": 1,
        "CLUB": "FC Midtjylland",
        "P": 32,
        "W": 20,
        "D": 5,
        "L": 7,
        "GF": 68,
        "GA": 34,
        "GD": "+34",
        "PTS": 65
    },
    {
        "POS": 2,
        "CLUB": "Brøndby IF",
        "P": 32,
        "W": 19,
        "D": 3,
        "L": 10,
        "GF": 49,
        "GA": 32,
        "GD": "+17",
        "PTS": 60
    },
    {
        "POS": 3,
        "CLUB": "FC Nordsjælland",
        "P": 32,
        "W": 16,
        "D": 8,
        "L": 8,
        "GF": 57,
        "GA": 28,
        "GD": "+29",
        "PTS": 56
    },
    {
        "POS": 4,
        "CLUB": "Randers FC",
        "P": 32,
        "W": 15,
        "D": 8,
        "L": 9,
        "GF": 45,
        "GA": 32,
        "GD": "+13",
        "PTS": 53
    },
    {
        "POS": 5,
        "CLUB": "FC København",
        "P": 32,
        "W": 16,
        "D": 2,
        "L": 14,
        "GF": 43,
        "GA": 46,
        "GD": "-3",
        "PTS": 50
    },
    {
        "POS": 6,
        "CLUB": "Vejle BK",
        "P": 32,
        "W": 12,
        "D": 4,
        "L": 16,
        "GF": 32,
        "GA": 53,
        "GD": "-21",
        "PTS": 40
    }
]
const leagueDataSub2022 =[
    {
        "POS": 7,
        "CLUB": "FC Nordsjælland",
        "P": 32,
        "W": 11,
        "D": 10,
        "L": 11,
        "GF": 39,
        "GA": 37,
        "GD": "+2",
        "PTS": 43
    },
    {
        "POS": 8,
        "CLUB": "Viborg FF",
        "P": 32,
        "W": 9,
        "D": 15,
        "L": 8,
        "GF": 32,
        "GA": 27,
        "GD": "+15",
        "PTS": 42
    },
    {
        "POS": 9,
        "CLUB": "AaB",
        "P": 32,
        "W": 9,
        "D": 13,
        "L": 10,
        "GF": 34,
        "GA": 38,
        "GD": "-4",
        "PTS": 40
    },
    {
        "POS": 10,
        "CLUB": "Lyngby BK",
        "P": 32,
        "W": 8,
        "D": 12,
        "L": 12,
        "GF": 32,
        "GA": 45,
        "GD": "-13",
        "PTS": 36
    },
    {
        "POS": 11,
        "CLUB": "AC Horsens",
        "P": 32,
        "W": 5,
        "D": 9,
        "L": 18,
        "GF": 26,
        "GA": 57,
        "GD": "-31",
        "PTS": 24
    },
    {
        "POS": 12,
        "CLUB": "Silkeborg IF",
        "P": 32,
        "W": 3,
        "D": 11,
        "L": 18,
        "GF": 16,
        "GA": 46,
        "GD": "-30",
        "PTS": 20
    }
]


const leagueDataSub2023 = [
    {
        "POS": 7,
        "CLUB": "FC Nordsjælland",
        "P": 32,
        "W": 18,
        "D": 4,
        "L": 10,
        "GF": 50,
        "GA": 38,
        "GD": "+12",
        "PTS": 58
    },
    {
        "POS": 8,
        "CLUB": "AaB",
        "P": 32,
        "W": 12,
        "D": 4,
        "L": 16,
        "GF": 39,
        "GA": 55,
        "GD": "-16",
        "PTS": 40
    },
    {
        "POS": 9,
        "CLUB": "OB",
        "P": 32,
        "W": 10,
        "D": 8,
        "L": 14,
        "GF": 40,
        "GA": 48,
        "GD": "-8",
        "PTS": 38
    },
    {
        "POS": 10,
        "CLUB": "Vejle BK",
        "P": 32,
        "W": 7,
        "D": 9,
        "L": 16,
        "GF": 30,
        "GA": 50,
        "GD": "-20",
        "PTS": 30
    },
    {
        "POS": 11,
        "CLUB": "Vendsyssel FF",
        "P": 32,
        "W": 6,
        "D": 5,
        "L": 21,
        "GF": 17,
        "GA": 54,
        "GD": "-37",
        "PTS": 23
    },
    {
        "POS": 12,
        "CLUB": "Lyngby BK",
        "P": 32,
        "W": 4,
        "D": 10,
        "L": 18,
        "GF": 33,
        "GA": 56,
        "GD": "-23",
        "PTS": 22
    }
]

const leagueDataSub2024 = [
    {
        "POS": 7,
        "CLUB": "OB",
        "P": 32,
        "W": 14,
        "D": 8,
        "L": 10,
        "GF": 56,
        "GA": 52,
        "GD": "+4",
        "PTS": 50
    },
    {
        "POS": 8,
        "CLUB": "AGF",
        "P": 32,
        "W": 11,
        "D": 8,
        "L": 13,
        "GF": 38,
        "GA": 43,
        "GD": "-5",
        "PTS": 41
    },
    {
        "POS": 9,
        "CLUB": "AaB",
        "P": 32,
        "W": 10,
        "D": 9,
        "L": 13,
        "GF": 39,
        "GA": 47,
        "GD": "-8",
        "PTS": 39
    },
    {
        "POS": 10,
        "CLUB": "Vejle BK",
        "P": 32,
        "W": 7,
        "D": 8,
        "L": 17,
        "GF": 34,
        "GA": 59,
        "GD": "-25",
        "PTS": 29
    },
    {
        "POS": 11,
        "CLUB": "FC Fredericia",
        "P": 32,
        "W": 4,
        "D": 13,
        "L": 15,
        "GF": 28,
        "GA": 54,
        "GD": "-26",
        "PTS": 25
    },
    {
        "POS": 12,
        "CLUB": "Sønderjyske",
        "P": 32,
        "W": 5,
        "D": 6,
        "L": 21,
        "GF": 36,
        "GA": 67,
        "GD": "-31",
        "PTS": 21
    }
]

const leagueDataSub2025 = [
    {
        "POS": 7,
        "CLUB": "Viborg FF",
        "P": 32,
        "W": 13,
        "D": 9,
        "L": 10,
        "GF": 41,
        "GA": 40,
        "GD": "+1",
        "PTS": 48
    },
    {
        "POS": 8,
        "CLUB": "Silkeborg IF",
        "P": 32,
        "W": 11,
        "D": 11,
        "L": 10,
        "GF": 30,
        "GA": 31,
        "GD": "-1",
        "PTS": 44
    },
    {
        "POS": 9,
        "CLUB": "OB",
        "P": 32,
        "W": 8,
        "D": 11,
        "L": 13,
        "GF": 39,
        "GA": 49,
        "GD": "+10",
        "PTS": 35
    },
    {
        "POS": 10,
        "CLUB": "Vejle BK",
        "P": 32,
        "W": 5,
        "D": 9,
        "L": 18,
        "GF": 20,
        "GA": 51,
        "GD": "-31",
        "PTS": 24
    },
    {
        "POS": 11,
        "CLUB": "AaB",
        "P": 32,
        "W": 6,
        "D": 5,
        "L": 21,
        "GF": 28,
        "GA": 51,
        "GD": "-23",
        "PTS": 23
    },
    {
        "POS": 12,
        "CLUB": "Vendsyssel FF",
        "P": 32,
        "W": 3,
        "D": 7,
        "L": 22,
        "GF": 26,
        "GA": 59,
        "GD": "-33",
        "PTS": 16
    }
]

const leagueDataSub2026 = [
    {
        "POS": 7,
        "CLUB": "AGF",
        "P": 32,
        "W": 13,
        "D": 12,
        "L": 7,
        "GF": 49,
        "GA": 34,
        "GD": "+15",
        "PTS": 51
    },
    {
        "POS": 8,
        "CLUB": "Lyngby BK",
        "P": 32,
        "W": 12,
        "D": 8,
        "L": 12,
        "GF": 37,
        "GA": 41,
        "GD": "-4",
        "PTS": 44
    },
    {
        "POS": 9,
        "CLUB": "Silkeborg IF",
        "P": 32,
        "W": 10,
        "D": 8,
        "L": 14,
        "GF": 35,
        "GA": 49,
        "GD": "-14",
        "PTS": 38
    },
    {
        "POS": 10,
        "CLUB": "AC Horsens",
        "P": 32,
        "W": 7,
        "D": 8,
        "L": 17,
        "GF": 28,
        "GA": 40,
        "GD": "-12",
        "PTS": 29
    },
    {
        "POS": 11,
        "CLUB": "OB",
        "P": 32,
        "W": 6,
        "D": 10,
        "L": 16,
        "GF": 23,
        "GA": 44,
        "GD": "-21",
        "PTS": 28
    },
    {
        "POS": 12,
        "CLUB": "Viborg FF",
        "P": 32,
        "W": 5,
        "D": 6,
        "L": 21,
        "GF": 20,
        "GA": 53,
        "GD": "-33",
        "PTS": 21
    }
]

export async function addLeagueData() {
    const collectionRef = collection(db, '2022C');
    const querySnapshot = await getDocs(collectionRef);

    if (!querySnapshot.empty) {
        querySnapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref);
        });
    }

    for (const team of leagueData2022) {
        await addDoc(collectionRef, team);
    }
    for (const team of leagueDataSub2022) {
        await addDoc(collectionRef, team);
    }

    console.log('Data added successfully');
}