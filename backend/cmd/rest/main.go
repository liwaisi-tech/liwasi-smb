package main

import (
	"github.com/gin-gonic/gin"
	"github.com/liwasi-tech/liwasi-sbm/backend/cmd/rest/business"
	"github.com/liwasi-tech/liwasi-sbm/backend/cmd/rest/customer"
)

func main() {
	r := gin.Default()
	customer.RegisterRoutes(r)
	business.RegisterRoutes(r)
	r.Run(":8010")
}
