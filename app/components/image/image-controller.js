function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imgService = new ImageService()

	var imgElem = document.getElementById('body')

	function drawBackroundImage(image) {
		// console.log(image)
		if (image.large_url) {
			document.body.style = `color: red; background-image: url(${image.large_url}); background-repeat: no-repeat; background-size: cover;`
		} else {
			imgService.getImage(drawBackroundImage)
		}
	}
	imgService.getImage(drawBackroundImage)

}


