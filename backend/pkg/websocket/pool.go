type Pool struct {
	Register   chan *Client
	Unregister chan *Client
	Clients    map[*Client]*BufferPool
	Broadcast  chan Message
}

func NewPool() *Pool {
	return &Pool{
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
		Clients:    make(map[*Client]*BufferPool),
		Broadcast:  make(chan Message),
	}
}
