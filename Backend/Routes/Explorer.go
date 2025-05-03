package Routes

import (
	"github.com/gin-gonic/gin"
)

func Explorer(GinContext *gin.Context) {

	// Returns the frontend page

	GinContext.File("../Frontend/Explorer/Pages/Main.html")

}
