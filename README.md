# Puppy CMS

A Nodejs project for managing operations of a dog boarding, grooming, and daycare facility.    

## What's the business need?  

Keeping track of service history and client information can be messy business. One example of this would be writing tracking sheets for dogs on site that consists of all their feeding, medicine, service information, etc. Copying this information over on paper or with generic documents leaves the possibility of information not being copied correctly. With this site, we hope to make it easier for these facilites to keep accurate records of all dogs taken care, provide services with ease, and make all information easily accessible. 

## Getting Started 

This project is publically available and can be cloned for alteration and use by others. It was developed using NodeJs, MySQL, and ReactJs. In order to get started after pulling the code you will need to perform some installations. 
 - Install NodeJs and npm   https://nodejs.org/en/download/
 - Install MySQL    https://dev.mysql.com/downloads/installer/
 - Install React    https://reactjs-bot.github.io/react/docs/installation.html

To run the project you will need to make a few configurations. 
- A *dev.js* file needs to be created in the config folder of the main directory. The corresponding required keys and values of the file can be found in the *prod.js* file of the same directory. 
- Before running the application you must first `npm install` in the main directory of the project as well as the *client* directory.  
- The database is not created for this project when started. Users who pull this project for modification or use must create their database with MySQL. It can be named whatever the user wants and the same name must be used in the config's *dev.js* file. 
- Next you must have mock data to work with. The *package.json* file has some commands for migrating the tables and seed data into local and production databases. To do so run 
     - ``` npm run db:migrate ```
     - ``` npm run db:seed ```
- To run the project locally execute the command 
    - ``` npm run dev ```


## Limitations 

The project was designed without integrating management for payments and their calculations for services. In future iterations of the project the database will need to be altered to account for these services. 

The project is not setup to account for families with multiple pets checking in at the same time. 

Pet owner information is coupled with the dog's information. This can be redundant so future iterations will be decoupled in the database design. 


