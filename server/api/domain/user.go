package domain

type Users []User

type (
	User struct {
		ID             int    `json:"id"`
		Name           string `json:"name"`
		Email          string `json:"email"`
		HashedPassword string `json:"-"`
	}

	UserForm struct {
		User
		Password string `json:"password"`
	}
)
