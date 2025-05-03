package Assets

import (
	"elucid503/Prism/Middleware"

	// Route Imports from ./Routes

	GlobalRoutes "elucid503/Prism/Routes"
	APIRoutes "elucid503/Prism/Routes/API"

	"github.com/gin-gonic/gin"
)

type RouteInfo struct {

	Method  string
	Handler func(*gin.Context)

	// Middleware Opts

	RateLimitConfig *Middleware.RouteRateLimitConfig

}

func GetRoutes() map[string]RouteInfo {

	return map[string]RouteInfo{

		"/Explorer": {

			Method:  "GET",
			Handler: GlobalRoutes.Explorer,

			RateLimitConfig: nil,
		},

		"/API/": {

			Method:  "GET",
			Handler: APIRoutes.Index,

			RateLimitConfig: nil,
		},
		
		"/API/Report": {

			Method:  "POST",
			Handler: APIRoutes.Report,

			RateLimitConfig: nil,
		},

	}

}
