import { App } from "../src/app";
import { jest } from "@jest/globals";

describe("test App functions", () => {
  const app = new App();

  const consoleSpy = jest
    .spyOn(global.console, "log")
    .mockImplementation(() => true);

  test("A new robot should be created and registered to robot array", () => {
    app.creatRobot(), expect(app.robots[0]).not.toBe(undefined);
    expect(app.robots).toContainEqual({
      currentX: 0,
      currentY: 0,
      currentDirection: undefined,
      isPlaced: false,
      name: undefined,
    });
  });

  test("An active robot should be the first robot or if there is a correct command it should be the nominated robot", () => {
    app.makeRobotActive("place");
    app.robots[0].name = "Robot 1";
    app.creatRobot();
    app.robots[1].name = "Robot 2";
    expect(app.activeRobot.name).toBe("Robot 1");
    app.makeRobotActive("robot 2");
    expect(app.activeRobot.name).toBe("Robot 2");
    app.makeRobotActive("robot 1");
    expect(app.activeRobot.name).toBe("Robot 1");
  });

  test("a board with 5 x 5 should be called", () => {
    app.creatBoard();
    expect(app.board).not.toBe(undefined);
    expect(app.board.width).toBe(5);
    expect(app.board.height).toBe(5);
  });

  test("a place command should have its first part follow the format", () => {
    expect(app.placeCommandVal("place ")).toBe(true);
    expect(app.placeCommandVal("place")).toBe(false);
    expect(app.placeCommandVal("move")).toBe(false);
  });

  test("A place command follow the correct format for its second part and after being destructured", () => {
    expect(app.placeInputValidation("place", 4, 4, "west")).toBe(true);
    expect(app.placeInputValidation("place", "4", "4", "west")).toBe(true);
    expect(app.placeInputValidation("place", "Ab", 4, "west")).toBe(false);
    expect(app.placeInputValidation("place", 4, 4, "wests")).toBe(false);
    expect(app.placeInputValidation("move", 4, 4, "wests")).toBe(false);
  });

  test("A new robot is created if a correct place command is given", () => {
    (app.robots = []),
      (app.activeRobot = undefined),
      app.placeRobot("place 3,3,north"),
      expect(app.robots[0].currentX).toBe(3),
      expect(app.robots[0].currentY).toBe(3),
      expect(app.robots[0].currentDirection).toBe("north");
  });

  test("console.log in reporting function is called", () => {
    consoleSpy.mockClear();
    app.activeRobot = app.robots[0];
    app.reporting("report");
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
