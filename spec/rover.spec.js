const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  //7.
  it("constructor sets position and default values for mode and generatorWatts", function() {
  const truePosition = new Rover(7);
  const trueMode = "NORMAL";
  const watts = 110;
  const result = (truePosition.Rover, trueMode.mode, watts.generatorWatts);
  expect(result).toBe((Rover , this.mode , this.generatorWatts));
});
//8
it ("response returned by recieveMessage contains the name of the message", function() {
  const messageName = new Message("same name");
  const result = messageName.Message;
  expect(result).toBe(Message[0]);
});
//9
it ("response returned by recieveMessage includes two results if two commmands are sent in the message", function() {
  const twoRover = new Rover(9);
  const commandMessage = new Message("two commands" , [new Command("MODE_CHANGE" , "LOW POWER") , new Command ("STATUS_CHECK")]);
  const result = twoRover.receiveMessage(commandMessage);
  console.log(result.results);
  expect(result.results.length).toEqual(2);
});
//10
it ("responds correctly to the status check command", function() {
  const testMessage = new Message("test message", [new Command("STATUS_CHECK")])
  const status = new Rover(10);
  const result = status.receiveMessage(testMessage);
  expect(result).toStrictEqual(
    (response = {
      message: testMessage.name,
      results: [
        {
          completed: true,
          roverStatus: {
            mode: status.mode,
            generatorWatts: status.generatorWatts,
            position: status.position,
          },
        },
      ],
    })
  );
});
//11
it ("responds correctly to the mode change command", function() {
  const modeMessage = new Message("mode change command" , [new Command("MODE_CHANGE" , "LOW_POWER")]);
  const modeStatus = new Rover(11);
  const result = modeStatus.receiveMessage(modeMessage);
  expect(result).toStrictEqual(
    (response = {
      message: modeMessage.name,
      results: [
        {
          completed: true,
          roverStatus: {
            mode: modeStatus.mode,
          },
        },
      ],
    })
  );
});
//12
it ("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
  const newMode = new Rover(12);
  newMode.mode = "LOW_POWER";
  const noMovement = new Message("no move" , [new Command("MOVE" , 4321)]);
  const result = newMode.receiveMessage(noMovement);
  expect(result).toStrictEqual(
    (response = {
      message: noMovement.name,
      results: [
        {
          completed: false,
        },
      ],
    })
  );
});
//13
it ("responds with the position for the move command", function() {
  const oldPos = new Rover(13);
  const movement = new Message ('Test move' , [new Command ("MOVE" , 4321)]);
  let result = oldPos.receiveMessage(movement);
  expect(result).toStrictEqual(
    (response = {
      message: movement.name,
      results: [
        {
          completed: true,
          roverStatus: {
            position: oldPos.position,
          },
        },
      ],
    })
  );
});
  // 7 tests here!

});
