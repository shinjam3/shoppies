# A Movie Award Nomination React App: The Shoppies (2020)

## You can try The Shoppies right now by clicking on this link:
* https://the-shoppies-jjs.herokuapp.com/

## Note: this project was created to complete the "UX Developer Intern & Web Developer Intern Challenge - Summer 2021" from Shopify.

## Key Functionalities:
* Search for a movie by title.
* Search results are retrieved from the free OMDb API.
* Nominate up to 5 movies for "The Shoppies" movie awards.
* Nomination picks will be saved on the web browser's local storage for later visits.

## Preparations before downloading and running the project:
* Please have Node.js installed. I am currently using Node.js version 12.16.3 for this project.

## To run the project, please follow these steps in sequence, carefully or the program will not work properly:
1. Download the .zip file from this repository and extract the .zip file.
1. On the command prompt/terminal, set environment variable "REACT_APP_API_KEY" to your OMDb API key. If you do not have one, you can get one for free at http://www.omdbapi.com/apikey.aspx
   * Note: use command "set" for Windows or "export" for macOS.
   * For example: >> set NODE_ENV=development.
1. Open a command terminal and go to the "small_talk_frontend" directory, then run "npm i" to install the dependencies. You can ignore the "vulnerabilities" in the terminal if you see any. Do not close this terminal.
1. Open a second terminal for the "small_talk_backend" directory, then run "npm i" to install the dependencies. Do not close this or the previous terminal.
1. Afterwards, in the "small_talk_frontend" terminal, run "npm start" to run the front-end website.
1. Finally, in the "small_talk_backend" terminal, run "node index.js" to run the back-end server.
1. To close the program on the terminals, simply close both terminals.
