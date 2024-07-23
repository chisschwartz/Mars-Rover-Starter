class Rover {
   // Write code here!
   constructor(position) {
      this.position = position;
      this.mode = "NORMAL";
      if (this.mode === "LOW_POWER" && commands.commandType === "MOVE") {
         throw Error(completed = false);
      }
      this.generatorWatts = 110;
   }
}

const Message = require('./message.js');
const Command = require('./command.js');

function receiveMessage() {
let commands = [new Command("")];
let message = new Message("")
let rover = new Rover("")
let completed = true

   if (new Message(message.commands = commands)) {
      console.log(`message: ${message.name} ,`);
      console.log("Results :");
   }

   if (new Rover(position != this.position)) {
      console.log(`completed: ${completed} ,`);
      this.position = position;
      console.log(rover.position);
   }

   if (new Command(commands = "STATUS_CHECK")) {
      console.log(`completed: ${completed} ,`);
      console.log(`Rover Status: { mode: ${rover.mode} , ${rover.generatorWatts} , ${rover.position}}`);
   };

   if (new Command(commands.commandType = "MODE_CHANGE")) {
      console.log(`completed: ${completed}`);
      this.mode = commands.value;
   };

   if (new Command(commands.commandType = "MOVE") && this.mode != "LOW_POWER") {
      console.log(`completed: ${completed}`);
      this.position = commands.value;
   } else {
      let completed = false;
      console.log(`completed: ${completed}`);
      console.log("ROVER IS IN LOW_POWER MODE, PLEASE TRY AGAIN");
   }
}

module.exports = Rover;