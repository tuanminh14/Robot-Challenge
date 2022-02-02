# Robot Challenge

## Description

The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
For further details, please refer to the link:https://github.com/ioof-holdings/recruitment/wiki/Robot-Challenge

## Environement

This application was developed on MacOSX 10.15.17, with Node.js v17.4.0 and jest v27.4.7.

## Installation and Usage

Please have Node.js installed.

After Node is installed, you can run the application VSCode terminal with:

node javascriptfilename

Please download jest for the test suite to be run. You can run the test suite in the VSC terminal with:

npm run test

## Design decisions and testing

The application is developed in Object-oriented format. As the exention part has been completed, "report" command will show the active robot's location, numbers of robot on the board, and which robot is active.

Board details are set default to 5x5, but if we have further extension to include multiple boards, the application can be extended.

I have used jest to write unit tests on the methods.

## New Update

A new update (v1.1) has been made to fix a bug. 4 should be the maximum number that Robot can move to as Robot starts at 0. The fix is to make Robot not to be moved or placed at 5 or larger number.

## Robot Visual Display

A new trial of diplaying Robot visually has been made. Robot in this trial version is represented by a triangle. Commands are put in textbox and actioned once the enter button is hit. Board will appear once the command contain place even it is not in the correct format.
More updates and fixes on this version will be released in the future.
Please go to src(visual) to try out the trial.
