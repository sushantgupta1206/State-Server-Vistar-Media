# State-Server-Vistar-Media
A server to determine the state name after checking the boundaries. 

## Readings/ References:
> http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
> https://github.com/substack/point-in-polygon/blob/master/index.js

## Steps to test the server:
> if you need to install node use ```npm install node```
> add all packages to the folder by running ```npm install```
> Run the Server: ``` node server.js```
> Run the command : curl -d "longitude=-77.036133&latitude=40.513799" http://localhost:8080/
OR 
> Go to the browser and enter: ```http://localhost:8080/?longitude=-77.036133&latitude=40.513799``` in the URL tab
