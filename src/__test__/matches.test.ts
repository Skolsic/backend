import supertest from 'supertest'
import createServer from './../utils/server'

const app = createServer();

const matches = [
    {
        "_tid": 29,
        "time": {
            "time": "18:00",
            "date": "22/01/21"
        },
        "teams": {
            "home": {
                "name": "Rapid"
            },
            "away": {
                "name": "Sturm Graz"
            }
        },
        "result": {
            "home": 4,
            "away": 1
        },
        "comment": "1:0 (7.) E.Kara, 1:1 (31.) J.Jantscher, 2:1 (45.) T.Schick, 3:1 (50.) C.Knasmullner, 4:1 (88.) Y.Demir"
    },
    {
        "_tid": 29,
        "time": {
            "time": "16:00",
            "date": "23/01/21"
        },
        "teams": {
            "home": {
                "name": "Wolfsberg"
            },
            "away": {
                "name": "TSV Hartberg"
            }
        },
        "result": {
            "home": 0,
            "away": 0
        },
        "comment": ""
    },
    {
        "_tid": 29,
        "time": {
            "time": "16:00",
            "date": "24/01/21"
        },
        "teams": {
            "home": {
                "name": "LASK"
            },
            "away": {
                "name": "WSG Tirol"
            }
        },
        "result": {
            "home": 2,
            "away": 4
        },
        "comment": "1:0 (25.) P.Michorl, 1:1 (29.) D.Gugganig, 1:2 (37.) N.Frederiksen, 1:3 (41.) N.Frederiksen, 2:3 (43.) J.Holland, 2:4 (71.) K.Yeboah (pen)"
    },
    {
        "_tid": 29,
        "time": {
            "time": "13:30",
            "date": "24/01/21"
        },
        "teams": {
            "home": {
                "name": "SCR Altach"
            },
            "away": {
                "name": "Salzburg"
            }
        },
        "result": {
            "home": 0,
            "away": 2
        },
        "comment": "0:1 (48.) J.Zwischenbrugger (og), 0:2 (62.) P.Daka"
    },
    {
        "_tid": 29,
        "time": {
            "time": "16:00",
            "date": "23/01/21"
        },
        "teams": {
            "home": {
                "name": "St. Polten"
            },
            "away": {
                "name": "Admira Wacker"
            }
        },
        "result": {
            "home": 2,
            "away": 2
        },
        "comment": "0:1 (8.) M.Breunig, 1:1 (25.) A.Schmidt, 2:1 (44.) A.Schmidt, 2:2 (59.) R.Kerschbaum (pen)"
    }
]

describe('matches', () => {
    it('should return 404 if route does not exist', async () => {
        const {statusCode} = await supertest(app).get('/api/random');

        expect(statusCode).toBe(404);
    });

    it('should return 200 when and data for route /api/matches/number', async () => {
        const {body, statusCode} = await supertest(app).get('/api/matches/29');

        expect(statusCode).toBe(200);
        expect(body).toEqual(matches);
    });

    it('should return 404 for route /api/matches/string', async () => {
        const {body, statusCode} = await supertest(app).get('/api/matches/random');

        expect(statusCode).toBe(404);
    })
})