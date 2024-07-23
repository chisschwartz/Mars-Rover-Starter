const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  //7.
  it("constructor sets position and default values for mode and generatorWatts", function() {
  expect( function(){ new Rover(this.position === position && this.mode === "NORMAL" && this.generatorWatts === 110 )});
})
//8
it ("response returned by recieveMessage contains the name of the message", function() {
  expect (function() {receiveMessage(this.message = new Message(this.name === this.name))});
})
//9
it ("response returned by recieveMessage includes two results if two commmands are sent in the message", function() {
  expect (function() { (receiveMessage(this.commands = new Command() && this.commands.length >= 2))});
})
//10
it ("responds correctly to the status check command", function() {
  if (new Command (this.commands = "STATUS_CHECK")) {
    rover = Rover;
  }
})
//11
it ("responds correctly to the mode change command", function() {
  if ( new Command(this.commandType = "MODE_CHANGE")) {
    this.value === this.mode;
    completed = true;
  }
})
//12
it ("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
  expect (function() {Rover.mode = "LOW_POWER" && new Command(this.commandType === "MOVE");})
  //.toThrow(new Error(completed = false));
  completed = false;
})
//13
it ("constructor sets a value passed in as the 2nd argument", function() {
  (new Rover(this.value = this.value))
})
  // 7 tests here!

});
