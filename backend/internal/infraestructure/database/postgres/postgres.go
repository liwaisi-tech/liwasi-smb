package postgres

import (
	customerEntity "github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/customer/entity"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var gormConfiguration = &gorm.Config{
	//TODO: Not implemented yet
}

var postgresConfig = postgres.Config{
	DSN:                  "user=postgres password=postgres dbname=liwasi-smb-database host=localhost port=5432 sslmode=disable TimeZone=America/Bogota",
	PreferSimpleProtocol: true,
}

func OpenDefautDatabase() (db *gorm.DB, err error) {
	db, err = gorm.Open(postgres.New(postgresConfig), gormConfiguration)
	if err != nil {
		return
	}
	err = migrations(db)
	return
}

func migrations(db *gorm.DB) (err error) {
	err = db.AutoMigrate(&customerEntity.Customer{})
	return
}
