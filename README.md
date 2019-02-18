# Plexxis Interview Exercise
## Requirements
Create a simple but __impressive__ (looks good, works well, has intuitive design, etc.) CRUD application that can do the following:

1) Retrieve employees from a REST API  - Completed - Retrieved the data from the rest API
2) Display the employees in a React application  - Completed -  Displayed the employess using the react table library on the page
3) Has UI mechanisms for creating and deleting employees - Yet to Start - Add a button to create new entries to the employee data by means of a form. Delete as an added option against each of the line entries
4) Has API endpoints for creating and deleting employees - Yet to Start - create suitable endpoints to handle and delete the employee details
5) Edit your version of the `README.md` file to explain to us what things you did, where you focussed your effort, etc.

*Read over the `Bonus` objectives and consider tackling those items as well*

## Bonus (Highly Encouraged)

1) Use a relational database to store the data (SQLite, MariaDB, Postgres) - Yet to Start 
2) UI mechanisms to edit/update employee data - Yet to Start  - Click on a button that enables an edit option and then update the content
3) Add API endpoint to update employee data   - Yet to Start
4) Use [React Table](https://react-table.js.org) - Completed  - Using it to display the employees data in a table

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The front-end app runs off localhost:3000. The REST API is located in the /server folder and runs off localhost:8080. The data is being served from a JSON file located in the /server/data folder. Run `npm start` to start both servers.

## Getting it Done
* You are free to use whatever libraries that you want. Be prepared to defend your decisions.
* There is no time limit. Use as little or as much time as is necessary to showcase your abilities.
* You should fork or clone our repository into your own repository.
  * Send us the link when you are done the exercise (pglinker at plexxis dot com).

If you do well on the test, we will bring you in for an interview. Your test results will be used as talking points.  

 __This is your chance to amaze us with your talent!__

Steps implemented:
 
Step 1 : Use the react table library to display the content on the website
Step 2: Integrated react table library into to capture the details from the api
Step 3: Plugged in redux to store the data and accessing the details with ease of access to add/delete entries of data in the next steps
Step 4: Installed the redux form library to enable creating and deleting employees in the next steps