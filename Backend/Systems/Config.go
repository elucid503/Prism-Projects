package Systems

import (
	"elucid503/Prism/Types"
	"encoding/json"
	"os"
)

var Config *Types.Config = &Types.Config{} 
var ConfigFilePath string = "./Assets/Config.json"

func LoadAndAssignConfig() (*Types.Config, error) {

	// Read the file

	File, Err := os.Open(ConfigFilePath)

	if Err != nil {

		return nil, Err

	}

	defer File.Close()

	// Decode the file

	Decoder := json.NewDecoder(File)

	if Err := Decoder.Decode(Config); Err != nil { // Will unmarshal using the pointer to the Config struct

		return nil, Err

	}

	return Config, nil

}