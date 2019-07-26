const app = require("../index");
const request = require("supertest-as-promised");
const getData = require("../getData");

describe('Flow API',()=>{
    it('root test', ()=>{
        return request(app).get('/')
            .expect(200)
            .then((res)=>{
                expect(typeof res.body).toBe('string');
                expect(Array.isArray(res.body)).toBe(true);
            });
    });
});