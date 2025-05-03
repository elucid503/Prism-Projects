package Functions

import (
	"elucid503/Prism/Systems"
	"fmt"
	"strings"

	"github.com/elucid503/Sprout-API-Go/Logs"

	"encoding/json"
	"math/rand"
	"net/http"
)

// HTTP Requests

type RequestOptions struct {

	Headers map[string]string

}

var HTTPClient = &http.Client{}

func MakeHTTPRequest(Method string, URL string, Options RequestOptions) (*http.Response, error) {

	// Make the request

	RequestInstance, Err := http.NewRequest(Method, URL, nil)

	if Err != nil {

		return nil, Err

	}

	for HeaderKey, HeaderValue := range Options.Headers {

		RequestInstance.Header.Set(HeaderKey, HeaderValue)

	}

	RequestResponse, RequestErr := HTTPClient.Do(RequestInstance)

	if RequestErr != nil {

		return nil, RequestErr // Return the error

	}

	return RequestResponse, nil

}

func GetHTTPRequestJSONResponse(Response *http.Response) (map[string]interface{}, error) {

	var ResponseData map[string]interface{}

	Decoder := json.NewDecoder(Response.Body)

	if Err := Decoder.Decode(&ResponseData); Err != nil {

		return nil, Err

	}

	return ResponseData, nil

}

// Random

func RandomString(Length int) string {

	var Charset string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

	var RandomStr string

	for i := 0; i < Length; i++ {

		RandomStr += string(Charset[rand.Intn(len(Charset))])

	}

	return RandomStr

}

// Strings

func PluralizeString(Count int, Str string) string {

	if Count == 1 {

		return Str

	} else {

		return Str + "s"

	}

}

// Logging 

func Log(Level Logs.LogLevel, Title string, Message string) {

	fmt.Printf("[%s] %s: %s\n", strings.ToUpper(Logs.GetLogLevelString(Level)), Title, Message)

	if (Systems.Config.ServiceUID == "") {

		return; // Implemented services must define their own UID from the logging relay

	}

	go Logs.Log(Systems.Config.ServiceUID, Level, Title, Message) // Service UID is hardcoded here; also, non-blocking call

}