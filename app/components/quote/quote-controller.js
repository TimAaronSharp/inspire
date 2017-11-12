function QuoteController() {
	var qs = new QuoteService()

	var quoteElem = document.getElementById('quote-area')

	function drawQuote() {
		var quoteTemplate = ''
		qs.getQuote(function (quote) {
			console.log('What is the quote', quote)
			quoteTemplate +=`
			<h4>${quote.quote} - <span style="font-style: italic; font-size: 1.5rem;">${quote.author}</span></h4>
			
			
			`
			quoteElem.innerHTML = quoteTemplate
		})

	}
	drawQuote()
}
