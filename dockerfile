# Use the official Node.js image.
FROM node:16

# Set the working directory inside the container.

# Copy package.json and package-lock.json files.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the Strapi application code.
COPY ./ ./

# Build the Strapi admin panel.
RUN npm run build:prod

# Expose the default Strapi port.
EXPOSE 3000

# Start the Strapi server.
CMD ["npm", "run", "start"] 
