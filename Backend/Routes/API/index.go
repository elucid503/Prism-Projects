package Routes

import (
	"elucid503/Prism/Types"

	"github.com/gin-gonic/gin"
)

func Index(GinContext *gin.Context) {

	GinContext.JSON(200, Types.Response{

		Message: "Welcome to the shared API for these projects! Unfortunately, this API is not available for public use.",
	})

}