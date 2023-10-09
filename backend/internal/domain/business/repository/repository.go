package repository

import "github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/business/entity"

type BusinessRepository interface {
	GetByID(ID string) (business *entity.Business, err error)
	Create(business *entity.Business) (err error)
	Update(business *entity.Business) (err error)
	DeleteByID(ID string) (err error)
	GetAll() (businesses []entity.Business, err error)
}
