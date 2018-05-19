# State-Server-Vistar-Media
A server to determine the state name in USA after checking state the boundaries.  

## Stack
Os : Windows
node.js version v6.11.0
npm libraries: express, fs, badyparser
tested using : git bash and postman

## Readings/ References:
1. http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html  
2. https://stackoverflow.com/questions/22521982/js-check-if-point-inside-a-polygon  

## Steps to test the server:
> 1. Install node.js  
> 2. Add all npm packages to the folder by running ```npm install```  
> 3. Run the Server: ``` node server.js```  
> 4. Run the command : ```curl -s -d '{"longitude":-77.036133,"latitude":40.513799}' -H "Content-Type: application/json" http://localhost:8080/``` in git bash.

## Screenshots
1. Server Console: []
3. Desired output: []
 
