# Use the official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /frontend

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
