package Routes

import (
	"github.com/gin-gonic/gin"
)

func Portfolio(GinContext *gin.Context) {

	// Returns the frontend page

	GinContext.File("../Frontend/Portfolio/Pages/Main.html")

}