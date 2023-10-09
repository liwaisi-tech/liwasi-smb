package service

import (
	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/business/entity"
	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/business/repository"
	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/business/repository/postgres"
	gorPostgres "github.com/liwasi-tech/liwasi-sbm/backend/internal/infraestructure/database/postgres"
)

type BusinessService interface {
	GetBusiness(ID string) (business entity.Business, err error)
	CreateBusiness(business entity.Business) (err error)
	UpdateBusiness(business entity.Business) (err error)
	DeleteBusiness(ID string) (err error)
	GetAllBusinesses() (businesses []entity.Business, err error)
}

type businessService struct {
	businessRepository repository.BusinessRepository
}

func NewBusinessService() (service BusinessService, err error) {
	gormDB, err := gorPostgres.OpenDefautDatabase()
	if err != nil {
		return
	}
	repository := postgres.NewPostgresBusinessRepository(gormDB)
	service = &businessService{
		businessRepository: repository,
	}
	return
}
