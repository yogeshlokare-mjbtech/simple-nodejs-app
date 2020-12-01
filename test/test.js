var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = 'http://localhost:5000';
let should = chai.should();

chai.use(chaiHttp);
describe("Customers", function() {
  describe("DELETE ALL", function() {
    it("should remove all first", done => {
      console.log("Deleting all data in db first.");
      chai
        .request(server)
        .delete("/customers/")
        .send({})
        .end((err, res) => {
          //console.log (res)
          // console.log("err",err);
          res.should.have.status(200);
          console.log("Response Body:", res.body);
          // console.log (result);
          done();
        });
    });
  });

  describe("CRUD OPERATIONS", function() {
    var books = [
      {
        email: "manasi.birhade@mjbtech.com",
        name: "Manasi Birhade",
        active: 1
      },
      {
        email: "rahul.maurya@mjbtech.com",
        name: "Rahul Maurya",
        active: 0
      }
    ];
    it("Should add Customers in DB", done => {
      for (book in books) {
        chai
          .request(server)
          .post("/customers/")
          .send(books[book])
          .end((err, res) => {
            res.should.have.status(200);
            console.log("Response Body:", res.body);
          });
      }
      done();
    });

    it("Should Fecth all the Customers", done => {
      chai
        .request(server)
        .get("/customers/")
        .end((err, result) => {
          result.should.have.status(200);
          console.log("Got", result.body.data.length, " docs");
          console.log ("Result Body of Customers:", result.body);
          books = result.body
          done();
        });
    });

    /*it("Should Fetch Particular Customer only", done => {
      chai
        .request(server)
        .get("/customers/" + 14)
        .end((err, result) => {
          result.should.have.status(200);
          console.log(
            "Fetched Customer Customer using /GET/customers/:CUSTOMERID ::::",
            result.body
          );
          done();
        });
    });

   it("Should Update Partcular Book Only", done => {
      var updatedBook = {
        email: "kaustubh.kate@mjbtech.com",
        name: "Kaustubh Kate",
        active: 1
      };

      chai
        .request(server)
        .put("/customers/" + 14)
        .send(updatedBook)
        .end((err, result) => {
          result.should.have.status(200);
          console.log(
            "Updated Particlar Customers using /GET/BOOKS/:BOOKID ::::",
            result.body
          );
          done();
        });
    });

    it("should check data updated in DB", done => {
      chai
        .request(server)
        .get("/customers/" + 14)
        .end((err, result) => {
          result.should.have.status(200);
          result.body.data.name.should.eq("Kaustubh Kate");
          console.log(
            "Fetched Particlar Book using /GET/CUSTOMER/:BOOKID ::::",
            result.body
          );
          done();
        });
    });

    it("Should Delete Particular Book", done => {
      chai
        .request(server)
        .delete("/customers/" + 14)
        .end((err, result) => {
          result.should.have.status(200);
          console.log(
            "Deleted Particlar Book using /GET/CUSTOMER/:BOOKID ::::",
            result.body
          );
          done();
        });
    });

    it("Should confirm delete with number of Docs from DB", done => {
      chai
        .request(server)
        .get("/customers/")
        .end((err, result) => {
          result.should.have.status(200);
          result.body.data.length.should.eq(1);
          console.log("Got", result.body.data.length, " docs");
          //console.log ("Result Body:", result.body);
          done();
        });
    });*/
  });
});
