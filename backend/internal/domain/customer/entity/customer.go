package entity

import "gorm.io/gorm"

type Customer struct {
	gorm.Model `json:"-"`
	ID         string `gorm:"primaryKey" json:"id"`
	FirstName  string `json:"first_name,omitempty"`
	LastName   string `json:"last_name,omitempty"`
	Phone      string `json:"phone,omitempty"`
	Address    string `json:"address,omitempty"`
	Email      string `json:"email,omitempty"`
}
