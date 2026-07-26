# First Docker Image
In this section I create a basic docker image. 

## Build image
This is the first step, I need to create the image to use it. 
```bash
docker build -t hola-docker .
```

## Run image
In this stet I´ll run the image using: 
```bash
docker run --rm hola-docker
```
> The parameter `--rm` is used to delete the container before it stop.