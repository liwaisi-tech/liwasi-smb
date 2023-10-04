package service

import "github.com/liwasi-tech/liwasi-sbm/backend/internal/domain/business/entity"

func (s *businessService) GetBusiness(ID string) (business entity.Business, err error) {
	find, err := s.businessRepository.GetByID(ID)
	if err != nil {
		return
	}
	business = *find
	return
}

func (s *businessService) CreateBusiness(business entity.Business) (err error) {
	return s.businessRepository.Create(&business)
}

func (s *businessService) UpdateBusiness(business entity.Business) (err error) {
	return s.businessRepository.Update(&business)
}

func (s *businessService) DeleteBusiness(ID string) (err error) {
	return s.businessRepository.DeleteByID(ID)
}
