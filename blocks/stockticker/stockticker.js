var searchSymbols = document.getElementsByClassName("stockticker")[0].innerHTML

var searchSymbol = searchSymbols.replace(/<div>|<\/div>/g, '');

var stockSymbol = searchSymbol.match(/\S+/g);

// Make an HTTP request to the Alpha Vantage API
fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol='+stockSymbol[1]+'&apikey=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => {
    // Extract the stock price ticker
    const stockTicker = data['Global Quote']['01. symbol'];
    
    // Extract the stock price from the API response
    const stockPrice = data['Global Quote']['05. price'];

    // Extract the high price
    const highPrice = data['Global Quote']['03. high'];

    // Extract the low price
    const lowPrice = data['Global Quote']['04. low'];
    
    // Display the stock price
    document.getElementById('stock-price').textContent = stockTicker + ': ' + stockPrice;

    // Display the high price
    document.getElementById('high-price').textContent = 'High Price: ' + highPrice;

  })
  .catch(error => {
    console.log('Error fetching stock price:', error);
  });

  //alert (stockSymbol[1])