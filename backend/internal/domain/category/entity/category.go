package entity

import (
	"github.com/google/uuid"
	productEntity "github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/product/entity"
	"gorm.io/gorm"
)

type Category struct {
	gorm.Model  `json:"-"`
	ID          uuid.UUID               `json:"id" gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	Name        string                  `json:"name"`
	Description string                  `json:"description,omitempty"`
	Product     []productEntity.Product `gorm:"foreignKey:CategoryID"`
}
