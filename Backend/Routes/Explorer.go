package Routes

import (
	"github.com/gin-gonic/gin"
)

func Explorer(GinContext *gin.Context) {

	// Returns the frontend page

	GinContext.File("../Frontend/MQ-Explorer/Pages/Main.html")

}
