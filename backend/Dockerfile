# Etapa de compilación para el servicio de archivos
FROM golang:1.21.1-alpine AS build-customer-rest

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build -o customer-rest ./cmd/rest/customer

# Imagen final para el servicio de archivos
FROM alpine:latest

WORKDIR /app

COPY --from=build-customer-rest /app/customer-rest .

EXPOSE 8010

CMD ["./customer-rest"]