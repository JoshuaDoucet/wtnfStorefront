eb init wtnf-api --region $AWS_DEFAULT_REGION
eb use wtnf-api --profile default
eb setenv AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION  --profile default
eb deploy --profile default 


