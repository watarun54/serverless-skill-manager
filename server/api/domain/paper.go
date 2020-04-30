package domain

import "time"

type Papers []Paper

type Paper struct {
	ID        int       `json:"id"`
	Text      string    `json:"text"`
	URL       string    `json:"url"`
	UserID    int       `json:"user_id"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}