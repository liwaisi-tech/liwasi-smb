package handlers

import (
	"net/http"
	"sync"

	"github.com/gin-gonic/gin"
	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/customer/entity"
	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/customer/service"
	"gorm.io/gorm"
)

var (
	customerService service.CustomerService
	once            sync.Once
)

func getCustomerService() (c service.CustomerService, err error) {
	once.Do(func() {
		customerService, err = service.NewCustomerService()
	})
	return customerService, err
}

func Get() gin.HandlerFunc {
	return func(c *gin.Context) {
		service, err := getCustomerService()
		if err != nil {
			c.JSON(500, err)
			return
		}
		ID := c.Param("id")
		customer, err := service.GetCustomer(ID)
		if err != nil {
			// Validate not found
			if err == gorm.ErrRecordNotFound {
				c.JSON(404, "not found")
				return
			}
			c.JSON(500, err)
			return
		}
		c.JSON(200, customer)

	}
}

func Create() gin.HandlerFunc {
	return func(c *gin.Context) {
		service, err := getCustomerService()
		if err != nil {
			c.JSON(500, err)
			return
		}
		var customer entity.Customer
		err = c.ShouldBind(&customer)
		if err != nil {
			c.JSON(500, err)
			return
		}
		err = service.CreateCustomer(customer)
		if err != nil {
			if err.Error() == "user already exist" {
				c.JSON(409, err)
				return
			}
			c.JSON(500, err)
			return
		}
		c.Status(http.StatusCreated)
	}
}
