package business

import (
	"github.com/gin-gonic/gin"
	handlers "github.com/liwasi-tech/liwasi-sbm/backend/internal/api/handlers/business"
)

func RegisterRoutes(r *gin.Engine) {
	business := r.Group("/business")
	{
		business.GET("/:id", handlers.Get())
		business.POST("/", handlers.Create())
		business.PUT("/:id", handlers.Update())
		business.DELETE("/:id", handlers.Delete())
		business.GET("/", handlers.GetAll())
	}
}
