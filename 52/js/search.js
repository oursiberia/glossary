(function() {
  function displaySearchResults(results, store) {
    var terms = document.getElementById('terms');
    
    var resultIds = [];
    console.log(results);
    for (var i = 0; i < results.length; i++) {
      resultIds.push(results[i].ref)
    }

    // hide any term elements that dont match a search results
    for (var j = 0; j < terms.children.length; j++) {
      const term = terms.children[j]
      if(resultIds.length && !resultIds.includes(term.id)) {
        term.style.display = "none";
      }
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('term', { boost: 10 });
      this.field('definition');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'term': window.store[key].term,
        'definition': window.store[key].definition,
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();