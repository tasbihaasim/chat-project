package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/websocket"
	"github.com/tasbihaasim/golang-chat/pkg/websocket"
)

func serveWS(pool *Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("websocket endpoint reached")
	conn, err := websocket.Upgrade(w, r, nil, 1024, 1024)

	if err != nil {
		fmt.Fprintf(w, "%+V\n", err)
	}
	client := &Client{
		Conn: conn,
		Pool: pool,
	}
	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	pool := NewPool()
	go pool.Start()
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWS(pool, w, r)
	})
}

func main() {
	fmt.Println("Full Stack Chat Project")
	setupRoutes()
	fmt.Println("Server started listening on port 9000")
	err := http.ListenAndServe(":9000", nil)
	if err != nil {
		fmt.Println(err)
	}
}
