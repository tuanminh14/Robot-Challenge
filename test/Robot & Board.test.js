import { Robot } from "../robot";
import { Board } from "../board";

describe("Testing robot's functions", () => {
  const robot1 = new Robot(5, 5, "west");
  const board1 = new Board(5, 5);
  test("Robot should take in the given inputs", () => {
    expect(robot1.currentX).toBe(5);
    expect(robot1.currentY).toBe(5);
    expect(robot1.currentDirection).toBe("west");
    expect(robot1.isPlaced).toBeFalsy();
  }),
    test("Robot should be placed and a board should be assigned to robot", () => {
      robot1.assignBoardtoRobot(board1);
      expect(robot1.isPlaced).toBe(true);
      expect(robot1.board).toEqual({ width: 5, height: 5 });
    }),
    test("Robot should rotate with 'left' or 'right' command, and should ignore the incorrect command", () => {
      robot1.rotateMovement("left");
      expect(robot1.currentDirection).toBe("south");
      robot1.rotateMovement("right");
      expect(robot1.currentDirection).toBe("west");
      robot1.rotateMovement("go");
      expect(robot1.currentDirection).toBe("west");
    });
  test("Robot should move 1 unit with the 'move' command, and should ignore the incorrect command ", () => {
    robot1.moveRobot("move");
    expect(robot1.currentX).toBe(4);
    expect(robot1.currentY).toBe(5);
    robot1.moveRobot("left");
    expect(robot1.currentX).toBe(4);
    expect(robot1.currentY).toBe(5);
  }),
    test("Robot should not move out of table", () => {
      robot1.currentX = 0;
      robot1.currentY = 0;
      robot1.currentDirection = "west";
      robot1.moveRobot("move");
      expect(robot1.currentX).toBe(0);
      robot1.currentDirection = "south";
      expect(robot1.currentY).toBe(0);

      robot1.currentX = 5;
      robot1.currentY = 5;
      robot1.currentDirection = "east";
      expect(robot1.currentX).toBe(5);
      robot1.currentDirection = "north";
      expect(robot1.currentY).toBe(5);
    });
});

describe("testing Board to take in input", () => {
  const board1 = new Board(5, 5);
  test(
    "board should take in the given input",
    () => expect(board1.width).toBe(5),
    expect(board1.height).toBe(5)
  );
});
