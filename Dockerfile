# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the directory /app in the container
COPY package*.json ./

# Install the application dependencies in the container
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose port 3000 for the application
EXPOSE 5000

# Define the command to run the application
CMD [ "node", "app.js" ]