package repository

import (
	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/customer/entity"
)

type CustomerRepository interface {
	GetCustomerByID(id string) (customer *entity.Customer, err error)
	CreateCustomer(customer *entity.Customer) (err error)
}
