package entity

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model  `json:"-"`
	ID          uuid.UUID `json:"id" gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	CategoryID  uuid.UUID `json:"category_id"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Price       float64   `json:"price"`
}
