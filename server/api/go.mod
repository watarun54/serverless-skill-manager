module github.com/watarun54/serverless-skill-manager/server

go 1.13

require (
	github.com/PuerkitoBio/goquery v1.5.1
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/jinzhu/gorm v1.9.12
	github.com/labstack/echo v3.3.10+incompatible
	github.com/labstack/gommon v0.3.0 // indirect
	github.com/saintfish/chardet v0.0.0-20120816061221-3af4cd4741ca
	github.com/valyala/fasttemplate v1.1.0 // indirect
	golang.org/x/net v0.0.0-20200202094626-16171245cfb2
)

replace gopkg.in/urfave/cli.v2 => github.com/urfave/cli/v2 v2.2.0
