echo Deploying
eb deploy --label `git rev-list HEAD | wc -l` || exit 1
