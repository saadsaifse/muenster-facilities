# Münster Facilities

## Usage

We need Node and NPM to run this locally.

- Install dependencies using `npm i`
- Execute using `npm run start`

## Setting up a Geoserver

We are using a Geoserver from OSGeo http://geoserver.org/. Step to get the server running on your machine

- Download the platform independent binary from the above link
- Extract the files to your desired location
- Make sure you install Java Runtime Environment (JRE) v8 and Java Development Kit (JDK) v8 before running the server
- Follow the guide [here](https://docs.geoserver.org/latest/en/user/installation/index.html#installation)
- Once Java and geoserver are installed, go to `bin` directory of geoserver and execute `startup.sh`
- Browse to `0.0.0.0:8080` to view server's webpage
