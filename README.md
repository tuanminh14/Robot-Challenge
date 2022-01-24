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

The application is developed in Object-oriented format. As the exention part has been completed, "report" command will shows the active robot's location, numbers of robot on the board, and which robot is active.

Board details are set default to 5x5, but if we have further extension to include multiple boards, the application can be extended.

I have used jest to write unit tests on the methods.
