package main

import (
	"fmt"

	"github.com/elucid503/Sprout-API-Go/Logs"
	"github.com/gin-gonic/gin"

	"elucid503/Prism/Assets"
	"elucid503/Prism/Functions"
	"elucid503/Prism/Routes"
	"elucid503/Prism/Systems"

	"elucid503/Prism/Middleware"
)


var RouteHandlers = Assets.GetRoutes()

func LoadRoutes(Router *gin.Engine) {

	// First, not found handler

	Router.NoRoute(Routes.NotFound);

	// Now, loading all routes

	for Route, Handler := range RouteHandlers {

		MiddlewareFuncs := []gin.HandlerFunc{}

		if Handler.RateLimitConfig != nil {

			MiddlewareFuncs = append(MiddlewareFuncs, Middleware.RateLimit(Handler.RateLimitConfig))

		}

		MiddlewareFuncs = append(MiddlewareFuncs, Handler.Handler) // Adding the real handler to the end of the middleware chain

		Router.Handle(Handler.Method, Route, MiddlewareFuncs...)

	}

}

func main() {

	Config, Error := Systems.LoadAndAssignConfig()

	if Error != nil {

		panic(Error) // Can't continue

	}

	Functions.Log(Logs.LogLevelInfo, "Startup", fmt.Sprintf("Prism Projects Server Backend; Version %s", Config.Versions.Server))

	gin.SetMode(Config.GinMode)

	GinRouter := gin.Default()

	LoadRoutes(GinRouter)

	Functions.Log(Logs.LogLevelInfo, "Routes", fmt.Sprintf("Loaded %d routes...", len(RouteHandlers)))

	// Serve Static files for each 
	
	// "Moral Question Explorer"

	GinRouter.Static("/Moral-Question-Explorer/Out", "../Frontend/MQ-Explorer/Out")
	GinRouter.Static("/Moral-Question-Explorer/Assets", "../Frontend/MQ-Explorer/Assets")
	GinRouter.Static("/Moral-Question-Explorer/Styles", "../Frontend/MQ-Explorer/Styles") // for maps back to SCSS

	// "Portfolio Site"

	GinRouter.Static("/Out", "../Frontend/Portfolio/Out")
	GinRouter.Static("/Assets", "../Frontend/Portfolio/Assets")
	GinRouter.Static("/Styles", "../Frontend/Portfolio/Styles") // for maps back to SCSS

	Functions.Log(Logs.LogLevelInfo, "Server", fmt.Sprintf("Listening on port %d...", Config.Server.Port))

	GinRouter.Run(fmt.Sprintf(":%d", Config.Server.Port))

	// Keep thread alive

	select {

		case <-make(chan struct{}): 
	
		// Block forever

	} // Block forever

}