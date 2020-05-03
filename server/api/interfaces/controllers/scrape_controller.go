package controllers

import (
	"github.com/watarun54/serverless-skill-manager/server/domain"
)

type ScrapeController struct {
	ScrapeHandler IScrapeHandler
}

func NewScrapeController(scrapeHandler IScrapeHandler) *ScrapeController {
	return &ScrapeController{
		ScrapeHandler: scrapeHandler,
	}
}

func (controller *ScrapeController) GetPaperTitle(c Context) (err error) {
	form := domain.ScrapeForm{}
	c.Bind(&form)
	title, err := controller.ScrapeHandler.GetTitleFromURL(form.URL)
	if err != nil {
		c.JSON(500, NewError(err))
		return
	}
	c.JSON(200, NewResponse(title))
	return
}
