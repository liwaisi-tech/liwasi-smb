package repository

import (
	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/customer/entity"
)

type CustomerRepository interface {
	GetCustomerByID(ID string) (customer *entity.Customer, err error)
	CreateCustomer(customer *entity.Customer) (err error)
	UpdateCustomer(customer *entity.Customer) (err error)
	DeleteCustomer(ID string) (err error)
}
