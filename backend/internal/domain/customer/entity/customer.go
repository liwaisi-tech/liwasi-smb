package entity

import "gorm.io/gorm"

// -- Table "CUSTOMERS"
// CREATE TABLE CUSTOMERS (
//     id VARCHAR(20) NOT NULL,
//     first_name VARCHAR(40) NULL,
//     last_name VARCHAR(100) NULL,
//     phone NUMERIC NULL,
//     address VARCHAR(80) NULL,
//     email VARCHAR(70) NULL,
//     PRIMARY KEY (id)
// );

type Customer struct {
	gorm.Model `json:"-"`
	ID         string `gorm:"primaryKey" json:"id"`
	FirstName  string `json:"first_name,omitempty"`
	LastName   string `json:"last_name,omitempty"`
	Phone      string `json:"phone,omitempty"`
	Address    string `json:"address,omitempty"`
	Email      string `json:"email,omitempty"`
}
