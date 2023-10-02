package main

import (
	"github.com/gin-gonic/gin"
	handlers "github.com/liwasi-tech/liwasi-sbm/backend/internal/api/handlers/customer"
)

func main() {
	r := gin.Default()
	customer := r.Group("/customer")
	{
		customer.GET("/:id", handlers.Get())
		customer.POST("/", handlers.Create())
	}
	r.Run(":8010")
}
