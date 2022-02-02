const table = document.querySelector(".grid");

export class Robot {
  constructor(x, y, direction, name) {
    this.currentX = x;
    this.currentY = y;
    this.currentDirection = direction;
    this.isPlaced = false;
    this.name = name;
  }

  visualDisplay() {
    const visualRobot = document.createElement("div");
    table.appendChild(visualRobot);
    visualRobot.classList.add("triangle");
    visualRobot.classList.add(`${this.name}`);
    this.moveRotatevisually();
  }

  moveRotatevisually() {
    const directionConvert = {
      north: 1,
      east: 0.25,
      south: 0.5,
      west: 0.75,
    };
    const robotDirection = directionConvert[`${this.currentDirection}`];
    const robotEle = document.querySelector(`.${this.name}`);
    robotEle.style.transform = `rotate(${robotDirection}turn)`;
    robotEle.style.gridRowStart = 5 - this.currentY;
    robotEle.style.gridColumnStart = this.currentX + 1;
  }

  assignBoardtoRobot(board) {
    this.isPlaced = true;
    return (this.board = board);
  }

  moveRobot(command) {
    if (command === "move" && this.isPlaced) {
      if (this.currentY >= 0 && this.currentY < this.board.height) {
        switch (this.currentDirection) {
          case "north":
            this.currentY += 1;
            if ((this.currentY = this.board.height)) {
              this.currentY -= 1;
              console.log(
                "Cant move the robot out of the board. Please try again"
              );
            }
            this.moveRotatevisually();
            break;
          case "south":
            this.currentY -= 1;
            if (this.currentY < 0) {
              this.currentY += 1;
              console.log(
                "Cant move the robot out of the board. Please try again"
              );
            }
            this.moveRotatevisually();
            break;
        }
      }

      if (this.currentX >= 0 && this.currentX < this.board.width) {
        switch (this.currentDirection) {
          case "east":
            this.currentX += 1;
            if ((this.currentX = this.board.width)) {
              this.currentX -= 1;
              console.log(
                "Cant move the robot out of the board. Please try again"
              );
            }
            this.moveRotatevisually();
            break;
          case "west":
            this.currentX -= 1;
            if (this.currentX < 0) {
              this.currentX += 1;
              console.log(
                "Cant move the robot out of the board. Please try again"
              );
            }
            this.moveRotatevisually();
            break;
        }
      }
    }
  }

  rotateMovement(command) {
    if (this.isPlaced) {
      if (command === "left") {
        switch (this.currentDirection) {
          case "north":
            this.currentDirection = "west";
            break;
          case "south":
            this.currentDirection = "east";
            break;
          case "east":
            this.currentDirection = "north";
            break;
          case "west":
            this.currentDirection = "south";
            break;
        }
        this.moveRotatevisually();
      }
      if (command === "right") {
        switch (this.currentDirection) {
          case "north":
            this.currentDirection = "east";
            break;
          case "south":
            this.currentDirection = "west";
            break;
          case "east":
            this.currentDirection = "south";
            break;
          case "west":
            this.currentDirection = "north";
            break;
        }
        this.moveRotatevisually();
      }
    }
  }
}
