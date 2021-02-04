
let chai = require('chai');
let chaiHttp = require('chai-http');
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index');

chai.use(chaiHttp);
const url= 'http://localhost:7000/?text=TOOLBOX';



 describe('MUESTRA EL TEXTO INVERTIDO: ',()=>{
    it('DEBE MOSTRAR EL TEXTO INVERTIDO', (done) => {
    chai.request(app)
    .get('/iecho?text=test')
    .end( function(err,res){
        console.log(res.headers['content-type'].split(';')[0])
        console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });
   
describe('MUESTRA UN ERROR: ',()=>{
    it('DEBE MOSTRAR NO TEXT', (done) => {
    chai.request(app)
    .get('/iecho?textt=test')
    .end( function(err,res){
        console.log(res.headers['content-type'].split(';')[0])
        console.log(res.body)
        expect(res).to.have.status(400);
        done();
    });
    });
});

request(app)
  .get('/iecho?textt=test')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
    console.log(res);
  });
   