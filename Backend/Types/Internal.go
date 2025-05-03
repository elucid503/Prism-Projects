package Types

type Config struct {
	GinMode    string
	ServiceUID string

	Server struct {
		Port int
	}

	Versions struct {
		Server   string
		Frontend string
	}
}
