package business

import (
	"github.com/gin-gonic/gin"
	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/business/entity"
	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/business/service"
	"gorm.io/gorm"
)

var (
	businessService service.BusinessService
)

func getBusinessService() (c service.BusinessService, err error) {
	if businessService == nil {
		businessService, err = service.NewBusinessService()
	}
	return businessService, err
}

func Get() gin.HandlerFunc {
	return func(c *gin.Context) {
		service, err := getBusinessService()
		if err != nil {
			c.JSON(500, err)
			return
		}
		ID := c.Param("id")
		business, err := service.GetBusiness(ID)
		if err != nil {
			// Validate not found
			if err == gorm.ErrRecordNotFound {
				c.JSON(404, "not found")
				return
			}
			c.JSON(500, err)
			return
		}
		c.JSON(200, business)

	}
}

func Create() gin.HandlerFunc {
	return func(c *gin.Context) {
		service, err := getBusinessService()
		if err != nil {
			c.JSON(500, err)
			return
		}
		var business entity.Business
		err = c.ShouldBind(&business)
		if err != nil {
			c.JSON(400, err)
			return
		}
		if business.ID == "" {
			c.JSON(400, "ID is empty")
			return
		}
		err = service.CreateBusiness(business)
		if err != nil {
			if err.Error() == "user already exist" {
				c.JSON(409, err)
				return
			}
			c.JSON(503, err)
			return
		}
		c.Status(201)
	}
}

func Update() gin.HandlerFunc {
	return func(c *gin.Context) {
		service, err := getBusinessService()
		if err != nil {
			c.JSON(500, err)
			return
		}
		var business entity.Business
		err = c.ShouldBind(&business)
		if err != nil {
			c.JSON(500, err)
			return
		}
		ID := c.Param("id")
		if business.ID != ID {
			c.JSON(400, "ID mismatch")
			return
		}
		err = service.UpdateBusiness(business)
		if err != nil {
			if err == gorm.ErrRecordNotFound {
				c.JSON(404, "not found")
				return
			}
			c.JSON(500, err)
			return
		}
		c.Status(204)
	}
}

func Delete() gin.HandlerFunc {
	return func(c *gin.Context) {
		service, err := getBusinessService()
		if err != nil {
			c.JSON(500, err)
			return
		}
		ID := c.Param("id")
		err = service.DeleteBusiness(ID)
		if err != nil {
			if err == gorm.ErrRecordNotFound {
				c.JSON(404, "not found")
				return
			}
			c.JSON(500, err)
			return
		}
		c.Status(202)
	}
}
