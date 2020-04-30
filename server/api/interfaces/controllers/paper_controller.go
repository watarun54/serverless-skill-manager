package controllers

import (
	"strconv"

	"github.com/watarun54/serverless-skill-manager/server/domain"
	"github.com/watarun54/serverless-skill-manager/server/interfaces/database"
	"github.com/watarun54/serverless-skill-manager/server/usecase"
)

type PaperController struct {
	Interactor usecase.PaperInteractor
}

func NewPaperController(sqlHandler database.SqlHandler) *PaperController {
	return &PaperController{
		Interactor: usecase.PaperInteractor{
			PaperRepository: &database.PaperRepository{
				SqlHandler: sqlHandler,
			},
		},
	}
}

func (controller *PaperController) Show(c Context) (err error) {
	id, _ := strconv.Atoi(c.Param("id"))
	uid := userIDFromToken(c)
	com := domain.Paper{
		ID:     id,
		UserID: uid,
	}
	paper, err := controller.Interactor.Paper(com)
	if err != nil {
		c.JSON(500, NewError(err))
		return
	}
	c.JSON(200, paper)
	return
}

func (controller *PaperController) Index(c Context) (err error) {
	uid := userIDFromToken(c)
	com := domain.Paper{
		UserID: uid,
	}
	papers, err := controller.Interactor.Papers(com)
	if err != nil {
		c.JSON(500, NewError(err))
		return
	}
	c.JSON(200, papers)
	return
}

func (controller *PaperController) Create(c Context) (err error) {
	uid := userIDFromToken(c)
	com := domain.Paper{
		UserID: uid,
	}
	c.Bind(&com)
	paper, err := controller.Interactor.Add(com)
	if err != nil {
		c.JSON(500, NewError(err))
		return
	}
	c.JSON(200, paper)
	return
}

func (controller *PaperController) Update(c Context) (err error) {
	id, _ := strconv.Atoi(c.Param("id"))
	uid := userIDFromToken(c)
	com := domain.Paper{
		ID:     id,
		UserID: uid,
	}
	c.Bind(&com)
	paper, err := controller.Interactor.Update(com)
	if err != nil {
		c.JSON(500, NewError(err))
		return
	}
	c.JSON(200, paper)
	return
}

func (controller *PaperController) Delete(c Context) (err error) {
	id, _ := strconv.Atoi(c.Param("id"))
	uid := userIDFromToken(c)
	com := domain.Paper{
		ID:     id,
		UserID: uid,
	}
	err = controller.Interactor.DeleteById(com)
	if err != nil {
		c.JSON(500, NewError(err))
		return
	}
	c.JSON(200, com)
	return
}
