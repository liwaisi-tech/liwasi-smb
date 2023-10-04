package postgres

import (
	"errors"

	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/customer/entity"
	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/customer/repository"
	"gorm.io/gorm"
)

type postgresCustomerRepository struct {
	gormDB *gorm.DB
}

func NewPostgresCustomerRepository(gormDB *gorm.DB) repository.CustomerRepository {
	return &postgresCustomerRepository{
		gormDB: gormDB,
	}
}

// CustomerRepository implementation

func (repo *postgresCustomerRepository) GetByID(ID string) (customer *entity.Customer, err error) {
	customer = &entity.Customer{}
	result := repo.gormDB.Unscoped().First(customer, ID)
	if result.Error != nil {
		err = result.Error
	}
	return
}

func (repo *postgresCustomerRepository) Create(customer *entity.Customer) (err error) {
	find := &entity.Customer{}
	result := repo.gormDB.Unscoped().First(find, customer.ID)
	if find.ID == customer.ID {
		err = errors.New("user already exist")
		return
	}
	if result.Error != gorm.ErrRecordNotFound {
		err = result.Error
		return
	}
	result = repo.gormDB.Create(customer)
	if result.Error != nil {
		err = result.Error
	}
	return
}

func (repo *postgresCustomerRepository) Update(customer *entity.Customer) (err error) {
	find := &entity.Customer{}
	result := repo.gormDB.Unscoped().First(find, customer.ID)
	if result.Error != nil {
		err = result.Error
		return
	}
	result = repo.gormDB.Save(customer)
	if result.Error != nil {
		err = result.Error
	}
	return
}

func (repo *postgresCustomerRepository) DeleteByID(ID string) (err error) {
	customer := &entity.Customer{}
	result := repo.gormDB.Unscoped().First(customer, ID)
	if result.Error != nil {
		err = result.Error
		return
	}
	result = repo.gormDB.Unscoped().Delete(customer)
	if result.Error != nil {
		err = result.Error
	}
	return
}
