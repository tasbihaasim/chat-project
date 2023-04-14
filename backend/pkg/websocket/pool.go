package websocket

type Pool struct {
	Register   chan *Client
	Unregister chan *Client
	Clients    map[*Client]*Pool
	Broadcast  chan Message
}

func NewPool() *Pool {
	return &Pool{
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
		Clients:    make(map[*Client]*Pool),
		Broadcast:  make(chan Message),
	}
}
