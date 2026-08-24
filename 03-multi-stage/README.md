# Create server on different steps
This image runs on two steps
1. Build the javascript files
2. Runs the server

## How?
The `builder` on `Dockerfile` copy the files on `src` folder and install the dependencies, before that, it runs `npm run build` command and it generates `dist` folder. 
When it finish, docker process will execute the `runner` just copy the folder `dist` from `builder` and executing the server. 

It helps because reduces the size of image. 

## Build and run

### Build 
```bash
docker build -t momon-mini .
```

### Run
```bash
docker run --rm momon-mini
``` 