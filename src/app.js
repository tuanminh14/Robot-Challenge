import { Robot } from "./robot.js";
import { Board } from "./board.js";
import * as readline from "node:readline";
import { stdin as input, stdout as output } from "process";

export class App {
  constructor() {
    this.robots = [];
    // this.takingCommand();
  }

  //Create Robot and add Robot to the array
  creatRobot() {
    let robot = new Robot();
    this.robots.push(robot);
    return robot;
  }

  // Default active Robot or render Robot active
  makeRobotActive(command) {
    if (!this.activeRobot && !command.includes("robot"))
      this.activeRobot = this.robots[0];
    if (command.includes("robot")) {
      const [_, robotNumber] = command.split(" ");
      if (this.robots[robotNumber - 1])
        this.activeRobot = this.robots[robotNumber - 1];
    }
  }

  creatBoard() {
    return (this.board = new Board(5, 5));
  }

  //Validate if the command has place and follow the format with space
  placeCommandVal(command) {
    if (command.includes("place") && command.includes(" ")) return true;

    if (command.includes("place") && !command.includes(" ")) {
      console.log("please follow this format place x,y,direction");
      return false;
    }
    return false;
  }

  //validate place inputs after destructuring the place command

  placeInputValidation(comm, x, y, direction) {
    const directionArr = ["north", "south", "west", "east"];

    //Make sure place command follow the format; x,y are integers and directions are correct
    if (comm !== "place") {
      console.log("please follow this format place x,y,direction");
      return false;
    }

    [x, y] = [Number(x), Number(y)];
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      console.log("please follow this format place x,y,direction");
      return false;
    }
    if (x < 0 || x >= this.board.width || y < 0 || y >= this.board.height) {
      console.log("Cant place Robot outside board");
      return false;
    }

    if (!directionArr.includes(direction)) {
      console.log(
        "Please follow this format place x,y,direction. Direction should also be North, South, West, or East"
      );
      return false;
    }
    return true;
  }

  placeRobot(command) {
    if (this.placeCommandVal(command)) {
      //Destructure the place command
      const [comm, comm2] = command.split(" ");
      const [x, y, direction] = comm2.split(",");

      //Board is created if command includes place and there is no board created before
      if (!this.board) this.creatBoard();

      //Create a new robot and allocate inputs to Robot if validation works
      if (this.placeInputValidation(comm, x, y, direction)) {
        this.creatRobot();
        const currentRobot = this.robots.length - 1;

        if (!this.robots[currentRobot].isPlaced)
          this.robots[currentRobot].assignBoardtoRobot(this.board);

        this.robots[currentRobot].currentX = Number(x);
        this.robots[currentRobot].currentY = Number(y);
        this.robots[currentRobot].currentDirection = direction;
        this.robots[currentRobot].name = `Robot${this.robots.length}`;

        this.isPlacefirst = true;
      }
    }
  }

  reporting(command) {
    if (command === "report")
      console.log(
        `${this.activeRobot.currentX}, ${this.activeRobot.currentY}, ${this.activeRobot.currentDirection}; number of robots on board: ${this.robots.length}; active robot: ${this.activeRobot.name}`
      );
  }

  takingCommand() {
    const r1 = readline.createInterface({ input, output });

    const recursiveInputTaking = () => {
      r1.question("please enter your command: ", (command) => {
        command = command.toLowerCase();

        this.placeRobot(command);

        //Ignore commands until the first command is Place
        if (this.isPlacefirst) {
          this.makeRobotActive(command);
          this.activeRobot.rotateMovement(command);
          this.activeRobot.moveRobot(command);
          this.reporting(command);
        }

        if (command === "exit") return r1.close();

        recursiveInputTaking();
      });
    };
    recursiveInputTaking();
  }
}

// const app1 = new App();
