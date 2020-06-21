# Kong API Gateway

API Gateway are inserted between the client and services, routing the requests of these clients to the properly service. In the same sense, API Gateways can be used to a lot of functions, including **Gateway Routing, Gateway Aggregation, and Gateway Offloading.** In this repository, we will use Kong to perform the gateway routing. If you want to learn more about API Gateway, I recommend you to take a look at [Microsoft documentation](https://docs.microsoft.com/en-us/azure/architecture/microservices/design/gateway).

### How to install

As you can see in the kong doc, we have several ways to install king locally. In this proof-of-concept, I installed Kong using docker.

1 - Firstly, we need to create a docker network:
```
docker network create kong-net
```

2 - Then, we must to create a database container:
```
docker run -d --name kong-database \
               --network=kong-net \
               -p 5432:5432 \
               -e "POSTGRES_USER=kong" \
               -e "POSTGRES_DB=kong" \
               -e "POSTGRES_PASSWORD=kong" \
               postgres:9.6
```

3 - After create our database, we can run the kong migrations:
```
docker run --rm \
     --network=kong-net \
     -e "KONG_DATABASE=postgres" \
     -e "KONG_PG_HOST=kong-database" \
     -e "KONG_PG_USER=kong" \
     -e "KONG_PG_PASSWORD=kong" \
     -e "KONG_CASSANDRA_CONTACT_POINTS=kong-database" \
     kong:latest kong migrations bootstrap
```

4 - Now, considering that our database is running and the migration was already performed, we can start Kong:
```
docker run -d --name kong \
     --network=kong-net \
     -e "KONG_DATABASE=postgres" \
     -e "KONG_PG_HOST=kong-database" \
     -e "KONG_PG_USER=kong" \
     -e "KONG_PG_PASSWORD=kong" \
     -e "KONG_CASSANDRA_CONTACT_POINTS=kong-database" \
     -e "KONG_PROXY_ACCESS_LOG=/dev/stdout" \
     -e "KONG_ADMIN_ACCESS_LOG=/dev/stdout" \
     -e "KONG_PROXY_ERROR_LOG=/dev/stderr" \
     -e "KONG_ADMIN_ERROR_LOG=/dev/stderr" \
     -e "KONG_ADMIN_LISTEN=0.0.0.0:8001, 0.0.0.0:8444 ssl" \
     -p 8000:8000 \
     -p 8443:8443 \
     -p 127.0.0.1:8001:8001 \
     -p 127.0.0.1:8444:8444 \
     kong:latest
```

### Proof-of-Concept

Here, we will define a service and a route into Kong. We will use the public API provided by the github to test the gateway routing function provided by Kong. To do it, we will try get a github's user using an username.

1 - We need to create an service instance on Kong. To do it, we must to define a service name and its baseUrl:
```
curl -i -X POST \
--url http://localhost:8001/services/ \
--data 'name=github' \
--data 'url=https://api.github.com/users'
```

2 - Then, we can define a route to the created service. As you can se bellow, we define a path that Kong will use to route the request for the properly service:
```
curl -i -X POST http://localhost:8001/services/github/routes \
  --data 'paths[]=/gihub' \
  --data 'name=github'
```

3 - Now, we can perform a request to our service (in this case github) throughout the gateway API:
```
curl -i -X GET \
--url http://localhost:8000/github/users/marqueswsm
```

### Conclusions

Kong is a really great platform to use as an API Gateway. It is open source and provide a good documentation. I also will test Konga to perform the service management using a GUI.
