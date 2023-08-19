#Use an offical Node.js img as the base iamge
FROM node:14

#set the working directory within the container
WORKDIR /app

#copy the package.json
COPY package*.json ./

#install project dependencies
RUN npm install

#copy the application code into the container
COPY . .

#build the react app
RUN npm run build

#Expose the port that the application will run on
EXPOSE 3000

#command to start the app
CMD ["npm","start"]







