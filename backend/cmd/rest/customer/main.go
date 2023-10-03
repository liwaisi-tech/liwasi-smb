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
		customer.PUT("/:id", handlers.Update())
		customer.DELETE("/:id", handlers.Delete())
	}
	r.Run(":8010")
}
