# Usa una imagen de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo en la carpeta de la aplicación
WORKDIR /app

# Copia los archivos de tu aplicación al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Construye la aplicación Next.js para producción
RUN npm run build

# Expone el puerto en el que corre la aplicación Next.js
EXPOSE 3000

# Comando para ejecutar la aplicación en modo producción
CMD ["npm", "run", "start"]
