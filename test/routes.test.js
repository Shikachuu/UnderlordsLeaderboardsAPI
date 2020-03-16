var request = require("supertest");
var app = require("../index");
describe("GET /", () => {
  it("should return 200 OK", () => {
    return request(app).get("/")
      .expect(200);
  });
});
describe("GET /byRank/random num-random num", () => {
  let higherNum = Math.floor(Math.random() * 10);
  let lowerNum = Math.floor(Math.random() * higherNum);
  it("should return 200 OK", () => {
    return request(app).get(`byRank/${higherNum}-${lowerNum}`)
      .expect(200);
  });
});