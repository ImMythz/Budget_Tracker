# Budget_Tracker
This application allows the user to add expenses and deposits to their budget with or without a connection to the internet. When entering transactions offline, the transactions will be stored in indexedDB and then populate the total when brought back online. This allows the user to balance a budget regardless is they have a connection to the internet.

## Table of Contents
* [Tech](#tech)
* [Setup](#setup)
* [Usage](#usage)
* [License](#license)

## Tech

Listed below are all of the technologies used in this repo:

- HTML
- CSS
- Javascript
- Node.js
- Express
- MongoDB
- Mongoose

## Setup
1. Open GitBash
2. You will need to clone to repository to your machine

  `$ git https://github.com/ImMythz/Budget_Tracker.git`
  
3. Then open the repository in your code editor of choice (ex: VSCode)

4. Then open the <i>Terminal</i> and run the following command to install all dependencies

  `$ npm i`
  
5. Then run this command to start the application

  `$ npm start`

## Usage
As a user, I want to be able to track my expenses and manage a budget whether or not I have a connection to the internet. This application allows the user to "Add Funds" to their budget, "Subtract Funds" from their budget, and display they total amount on the top and on the graph. Screenshots are shown below.

<img src='images\bt_screenshot-1.png' alt='Budget Tracker Sceenhot One'>

<img src='images\bt_screenshot-2.png' alt='Budget Tracker Sceenhot Two'>

<a href="https://infinite-spire-86267.herokuapp.com/">Checkout the deployed application here</a>

## License
MIT License

Copyright (c) [2021] [Nate Worley]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
