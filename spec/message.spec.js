const Message = require('../message.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

    it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
    expect( function() { new Message();}).toThrow(new Error('Name required'));
    });

    it("constructor sets name", function() {
        (new Message(this.name === this.name));
    });

    it("contains a commands array passed into the constructor as the 2nd argument", function(){
        //new Message (this.commands === new Command[this.commandType && this.value]);
        (new Message(this.commands === this.commands));
    });

});
