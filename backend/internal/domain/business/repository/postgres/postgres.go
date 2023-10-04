package postgres

import (
	"errors"

	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/business/entity"
	"github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/business/repository"
	"gorm.io/gorm"
)

type postgresBusinessRepository struct {
	gormDB *gorm.DB
}

func NewPostgresBusinessRepository(gormDB *gorm.DB) repository.BusinessRepository {
	return &postgresBusinessRepository{
		gormDB: gormDB,
	}
}

func (r *postgresBusinessRepository) GetByID(ID string) (business *entity.Business, err error) {
	business = &entity.Business{}
	err = r.gormDB.First(business, ID).Error
	return
}

func (r *postgresBusinessRepository) Create(business *entity.Business) (err error) {
	find := &entity.Business{}
	result := r.gormDB.Unscoped().First(find, business.ID)
	if find.ID == business.ID {
		err = errors.New("user already exist")
		return
	}
	if result.Error != gorm.ErrRecordNotFound {
		err = result.Error
		return
	}
	err = r.gormDB.Create(business).Error
	return
}

func (r *postgresBusinessRepository) Update(business *entity.Business) (err error) {
	find := &entity.Business{}
	result := r.gormDB.Unscoped().First(find, business.ID)
	if result.Error != nil {
		err = result.Error
		return
	}
	err = r.gormDB.Save(business).Error
	return
}

func (r *postgresBusinessRepository) DeleteByID(ID string) (err error) {
	business := &entity.Business{}
	result := r.gormDB.Unscoped().First(business, ID)
	if result.Error != nil {
		err = result.Error
		return
	}
	err = r.gormDB.Unscoped().Delete(business).Error
	return
}
