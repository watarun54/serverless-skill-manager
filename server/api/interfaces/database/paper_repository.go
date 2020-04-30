package database

import (
	"github.com/watarun54/serverless-skill-manager/server/domain"
)

type PaperRepository struct {
	SqlHandler
}

func (repo *PaperRepository) FindOne(c domain.Paper) (paper domain.Paper, err error) {
	if err = repo.Debug().Where(&c).Take(&paper).Error; err != nil {
		return
	}
	return
}

func (repo *PaperRepository) FindAll(c domain.Paper) (papers domain.Papers, err error) {
	if err = repo.Debug().Where(&c).Find(&papers).Error; err != nil {
		return
	}
	return
}

func (repo *PaperRepository) Store(c domain.Paper) (paper domain.Paper, err error) {
	if err = repo.Debug().Create(&c).Error; err != nil {
		return
	}
	paper = c
	return
}

func (repo *PaperRepository) Update(c domain.Paper) (paper domain.Paper, err error) {
	if err = repo.Debug().Take(&domain.Paper{ID: c.ID}, "user_id = ?", c.UserID).Updates(&c).Error; err != nil {
		return
	}
	paper = c
	return
}

func (repo *PaperRepository) DeleteById(c domain.Paper) (err error) {
	if err = repo.Debug().Take(&domain.Paper{ID: c.ID}, "user_id = ?", c.UserID).Delete(&c).Error; err != nil {
		return
	}
	return
}
