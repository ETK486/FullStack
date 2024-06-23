# Use Node.js Alpine as base image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /backend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Set the entrypoint to start the server
CMD ["node", "server.js"]   
