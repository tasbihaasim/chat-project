# GroupTherapy+

## Description

GroupTherapy+ is a full-stack chat application for online group therapy. Our backend server uses Go and handles multiple instances for high concurrency. It broadcasts messages and alerts users when someone joins the chat room.

Our frontend is built with React, providing an interactive user interface. 

The application uses Hate Speech Detection which allows us to detect and filter out hate speech, maintaining a respectful and courteous environment.

## Usage

GroupTherapy+ is deployed via Docker. Use the following commands to get started:

### 1. Set up backend server:

Pull docker image
```
docker pull tasbiha/golangchat
```
Run docker image
```
docker run -p 9000:9000 tasbiha/golangchat
```

### 2. Access the frontend at:
https://tasbihaasim.github.io/chat-project/


