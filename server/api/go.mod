module github.com/watarun54/serverless-skill-manager/server

go 1.13

require (
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/jinzhu/gorm v1.9.12
	github.com/labstack/echo v3.3.10+incompatible
	github.com/labstack/gommon v0.3.0 // indirect
	github.com/valyala/fasttemplate v1.1.0 // indirect
)

replace gopkg.in/urfave/cli.v2 => github.com/urfave/cli/v2 v2.2.0
