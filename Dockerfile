# Stage 1: Build the application
FROM node:21.6.1 AS build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build:docker

# Stage 2: Serve the built app with Nginx
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 5173
EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
