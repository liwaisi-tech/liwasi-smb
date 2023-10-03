package service

import "github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/customer/entity"

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

func (srv *customerService) UpdateCustomer(customer entity.Customer) (err error) {
	return srv.customerRepo.UpdateCustomer(&customer)
}

func (srv *customerService) DeleteCustomer(ID string) (err error) {
	return srv.customerRepo.DeleteCustomer(ID)
}
