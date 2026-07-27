## Create a Node server
In this section I´ll run a image with a NodeJs server

In the `Dockerfile` we´re using some instructions like

- _WORKDIR_ : Here is where the image will add folders or do their work.

## Build and run

### Build
```bash
docker build -t 02-node-web .
```

### Run
```bash
docker run --rm 02-node-web
```
> Here I can´t access to the API because my machine can't listen de port

```bash
docker run --rm  -p 5002:3000 02-node-web
```
> With parameter `-p` I'm send my machine port : image port

```bash
docker run --rm -d -p 5002:3000 02-node-web
```
> In this way runs on detach or background with parameter `-d`

### Watch logs

```bash
docker logs <container-hash>
```

```bash
docker logs -f <container-hash>
```
> On this way you'll have the logs on live mode

### Send environment variables
```bash
docker run -d -p 5002:3000 -e SALUDO="Hola Choco1125" --name web-env 02-node-web
```

```bash
docker run -d -p 5002:3000 --env-file .env --name web-env 02-node-web
```
> On this way you can send env file