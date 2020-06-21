# We can verify if the kong is up and running
curl -I localhost:8001

# firstly we create a service called github
curl -i -X POST \
--url http://localhost:8001/services/ \
--data 'name=github' \
--data 'url=https://api.github.com/users'

# then, we create a route to this service
curl -i -X POST http://localhost:8001/services/github/routes \
  --data 'paths[]=/gihub' \
  --data 'name=github'

# finally, we can perform requests for our service
curl -i -X GET \
--url http://localhost:8000/github/users/marqueswsm
