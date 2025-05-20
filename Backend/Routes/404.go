package Routes

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func NotFound(GinContext *gin.Context) {

	HTML := GetNotFoundTemplate(GinContext.Request.URL.Path)

	GinContext.Data(404, "text/html; charset=utf-8", []byte(HTML))
	GinContext.Abort()

}

func GetNotFoundTemplate(Path string) string {

	return fmt.Sprintf(`

	<!DOCTYPE html>
	<html lang="en">
	
	<head>
	
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
		<title>404 Not Found</title>

		<link rel="stylesheet" href="https://use.typekit.net/pge8obf.css">

		<style>
	
			body {
	
				font-family: "din-2014", sans-serif;
				font-weight: 400;
				font-style: normal;

				display: flex;
				justify-content: center;
				align-items: center;
	
				height: 100vh;
				margin: 0;

				color: white;
	
				background-color:rgb(10, 10, 10);
		
			}

			h1 {

				margin-top: 15px;
				margin-bottom: 0;

			}
	
			.PageNotFoundPageContent {
	
				text-align: center;

				padding: 5px 20px;
				margin: 0 25px;

				max-width: 400px;

				background-color:rgb(20, 20, 20);

				border-radius: 7.5px;
				border: 1px solid rgb(50, 50, 50);
	
			}

			.PageNotFoundPageCodeBlock {
			
				background-color:rgb(50, 50, 50);

				padding: 2.5px 5px;

				border-radius: 5px;
				
			}
	
		</style>
	
	</head>
	
	<body>
	
		<div class="PageNotFoundPageContent">
	
			<h1>Page Not Found</h1>
			<p>The page <span class="PageNotFoundPageCodeBlock">%s</span> was not found. The path may be incorrect, you may not have access, or it may no longer exist.</p>
		
		</div>
	
	</body>
	</html>`, Path)

}