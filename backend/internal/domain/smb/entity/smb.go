package entity

import "gorm.io/gorm"

// SMD is the struct representation for Small and Medium Business
type Business struct {
	gorm.Model `json:"-"`
	ID         string `gorm:"primaryKey" json:"id"`
	FullName   string `json:"fullName,omitempty"`
	Name       string `json:"name"`
	Email      string `json:"email,omitempty"`
	Phone      string `json:"phone,omitempty"`
	Address    string `json:"address,omitempty"`
	City       string `json:"city,omitempty"`
	State      string `json:"state,omitempty"`
	Zip        string `json:"zip,omitempty"`
	Status     string `json:"status,omitempty"`
}
