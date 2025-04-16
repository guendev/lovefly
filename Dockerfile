FROM node:23-alpine AS builder
WORKDIR /app

# Copy all source code before installing dependencies
COPY . .

# Install dependencies (preinstall script will now have access to the full source)
RUN npm install

# Build the application
RUN npm run build

# Production stage: run the built application
FROM node:23-alpine
WORKDIR /app

# Copy all files from the builder stage (including the built dist folder)
COPY --from=builder /app ./

# Expose the port on which the application will run (adjust if needed)
EXPOSE 3000

# Start the application using the preview script output npm run preview
CMD ["npm", "run", "preview"]