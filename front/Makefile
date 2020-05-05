build:
	npm run build

deploy: build
	aws s3 sync build/ s3://serverless-skill-manager --exclude '*.DS_Store' --acl public-read
