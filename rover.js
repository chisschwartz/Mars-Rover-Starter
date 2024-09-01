const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   constructor(position) {
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   };
    
   receiveMessage(Message) {
      
         let response = {message:Message.name , results:[]}
         
         for (let index = 0; index < Message.commands.length; index++) {
         
            if (Message.commands[index].commandType == "STATUS_CHECK") {
            response.results.push({
              completed: true,
              roverStatus: {
                mode: this.mode,
                generatorWatts: this.generatorWatts,
                position: this.position,
              },
            });

         } else if (Message.commands[index].commandType == "MODE_CHANGE") {
            this.mode = Message.commands[index].value;
           response.results.push({
             completed: true,
             
             roverStatus: {
               mode: this.mode,
             },
           });
           
         } else if (this.mode == "LOW_POWER" && Message.commands[index].commandType == "MOVE") {
            response.results.push({
               completed:false,
            });
            
         } else if (Message.commands[index].commandType == "MOVE") {
            this.position = Message.commands[index].value;
            response.results.push({
               completed:true,

               roverStatus: {
                  position: this.position
               },
            });
           
         }; 
         //return response;
      };
      return response;
      };
};


module.exports = Rover;