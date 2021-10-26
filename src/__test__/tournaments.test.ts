import supertest from 'supertest'
import createServer from './../utils/server'

const app = createServer();

const tournaments = [
    {
        "_rcid": 17, 
        "_tid": 29, 
        "name": "Bundesliga", 
        "seasontypename": "Regular Season", 
        "year": "21/22"
    }, 
    {
        "_rcid": 17, 
        "_tid": 79864, 
        "name": "Bundesliga, Championship Round", 
        "seasontypename": "Group stage", 
        "year": "21/22"}, 
    {
        "_rcid": 17, 
        "_tid": 79866, 
        "name": "Bundesliga, Relegation Round", 
        "seasontypename": "Group stage", 
        "year": "21/22"
    }, 
    {
        "_rcid": 17, 
        "_tid": 30, 
        "name": "2. Liga", 
        "seasontypename": "Regular Season", 
        "year": "21/22"
    }, 
    {
        "_rcid": 17, 
        "_tid": 70899, 
        "name": "Bundesliga, Relegation/Promotion", 
        "seasontypename": "Promotion/Relegation", 
        "year": "21/22"
    }]

describe('tournaments', () => {
    it('should return 404 if route does not exist', async () => {
        const {statusCode} = await supertest(app).get('/api/random');

        expect(statusCode).toBe(404);
    })

    it('should return 200 when and data for route /api/tournaments', async () => {
        const {body, statusCode} = await supertest(app).get('/api/tournaments');

        expect(statusCode).toBe(200);
        expect(body).toEqual(tournaments);
    })
})