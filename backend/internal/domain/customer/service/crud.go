package service

import "github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/customer/entity"

func (srv *customerService) GetCustomer(ID string) (customer entity.Customer, err error) {
	customerRepo, err := srv.customerRepo.GetByID(ID)
	if err != nil {
		return
	}
	customer = *customerRepo
	return
}

func (srv *customerService) CreateCustomer(customer entity.Customer) (err error) {
	return srv.customerRepo.Create(&customer)
}

func (srv *customerService) UpdateCustomer(customer entity.Customer) (err error) {
	return srv.customerRepo.Update(&customer)
}

func (srv *customerService) DeleteCustomer(ID string) (err error) {
	return srv.customerRepo.DeleteByID(ID)
}
