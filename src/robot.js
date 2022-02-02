export class Robot {
  constructor(x, y, direction, name) {
    this.currentX = x;
    this.currentY = y;
    this.currentDirection = direction;
    this.isPlaced = false;
    this.name = name;
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
            if (this.currentY === this.board.height) {
              this.currentY -= 1;
              console.log(
                "Cant move the robot out of the board. Please try again"
              );
            }
            break;
          case "south":
            this.currentY -= 1;
            if (this.currentY < 0) {
              this.currentY += 1;
              console.log(
                "Cant move the robot out of the board. Please try again"
              );
            }
            break;
        }
      }

      if (this.currentX >= 0 && this.currentX < this.board.width) {
        switch (this.currentDirection) {
          case "east":
            this.currentX += 1;
            if (this.currentX === this.board.width) {
              this.currentX -= 1;
              console.log(
                "Cant move the robot out of the board. Please try again"
              );
            }
            break;
          case "west":
            this.currentX -= 1;
            if (this.currentX < 0) {
              this.currentX += 1;
              console.log(
                "Cant move the robot out of the board. Please try again"
              );
            }

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
            return (this.currentDirection = "west");
          case "south":
            return (this.currentDirection = "east");
          case "east":
            return (this.currentDirection = "north");
          case "west":
            return (this.currentDirection = "south");
        }
      }
      if (command === "right") {
        switch (this.currentDirection) {
          case "north":
            return (this.currentDirection = "east");
          case "south":
            return (this.currentDirection = "west");
          case "east":
            return (this.currentDirection = "south");
          case "west":
            return (this.currentDirection = "north");
        }
      }
    }
  }
}
