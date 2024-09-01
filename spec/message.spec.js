const Message = require('../message.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

    it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
    expect( function() { new Message();}).toThrow(new Error('Name required'));
    });

    it("constructor sets name", function() {
       const trueName = new Message("test message with two commands");
       const result = trueName.Message;
       expect(result).toBe(Message[0]);
    });

    it("contains a commands array passed into the constructor as the 2nd argument", function(){
        const trueCommands = new Message("test message with two commands", this.commands);
        const result = trueCommands.Message
        expect(result).toBe(Message[1]);
    });

});
