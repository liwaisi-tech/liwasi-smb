package service

import (
	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/customer/entity"
	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/customer/repository"
	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/customer/repository/postgres"

	gorPostgres "github.com/liwasi-tech/liwasi-sbm/backend/internal/infraestructure/database/postgres"
)

type CustomerService interface {
	GetCustomer(ID string) (customer entity.Customer, err error)
	CreateCustomer(customer entity.Customer) (err error)
}

type customerService struct {
	customerRepo repository.CustomerRepository
}

func NewCustomerService() (service CustomerService, err error) {
	gormDB, err := gorPostgres.OpenDefautDatabase()
	if err != nil {
		return
	}
	repository := postgres.NewPostgresCustomerRepository(gormDB)
	service = &customerService{
		customerRepo: repository,
	}
	return
}

// CustomerService interface implementation

func (srv *customerService) GetCustomer(ID string) (customer entity.Customer, err error) {
	customerRepo, err := srv.customerRepo.GetCustomerByID(ID)
	if err != nil {
		return
	}
	customer = *customerRepo
	return
}

func (srv *customerService) CreateCustomer(customer entity.Customer) (err error) {
	return srv.customerRepo.CreateCustomer(&customer)
}
