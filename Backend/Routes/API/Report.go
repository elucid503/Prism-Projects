package Routes

import (
	"elucid503/Prism/Functions"
	"elucid503/Prism/Types"
	"fmt"

	"github.com/elucid503/Sprout-API-Go/Logs"
	"github.com/gin-gonic/gin"
)

func Report(GinContext *gin.Context) {

	// Takes in a body with a message to report to logs 

	Body := struct { 

		Message string `json:"message"`

	}{}

	if Malformed := GinContext.ShouldBindJSON(&Body); Malformed != nil {

		GinContext.JSON(400, Types.Response{

			Message: "Invalid request body",
			Success: false,

		})

		return

	}

	FromIP := GinContext.ClientIP()
	
	Functions.Log(Logs.LogLevelInfo, fmt.Sprintf("Report From %s", FromIP), Body.Message)

	GinContext.JSON(200, Types.Response{

		Message: "Report received",
		Success: true,

	})
	
}