package repository

import (
	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/customer/entity"
)

type CustomerRepository interface {
	GetByID(ID string) (customer *entity.Customer, err error)
	Create(customer *entity.Customer) (err error)
	Update(customer *entity.Customer) (err error)
	DeleteByID(ID string) (err error)
}
