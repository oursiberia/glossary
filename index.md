---
title: Siberia Glossary
layout: default
---


<form action="{{ site.baseurl }}/index.html" method="get">
  <label for="search-box">Search</label>
  <input type="text" id="search-box" name="query">
  <input type="submit" value="search">
</form>


<ul id="terms">
{% assign terms = site.data.terms | sort: "term" %}
{% for termData in terms %}
  <li id="{{termData.term | slugify }}">
    <h3 >
      {{termData.term}} 
      ({{termData.part_of_speech}})
    </h3>
    <p>{{termData.definition}}</p>
  </li>
{% endfor %}
</ul>

<script>
  // script for adding anchor links to the term headers
  const headings = document.getElementById('terms').querySelectorAll('li[id]');
  const linkContent = '🔗';
  for (const heading of headings) {
      const linkIcon = document.createElement('a');
      linkIcon.setAttribute('href', `#${heading.id}`);
      linkIcon.innerHTML = linkContent;
      heading.querySelectorAll('h3,h2,h4')[0].appendChild(linkIcon);
  }
</script>

<script>
  window.store = {
    {% for term in site.data.terms %}
      "{{ term.term | slugify }}": {
        "term": "{{ term.term | xml_escape }}",
        "definition": "{{ term.definition | xml_escape }}",
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>
<script src="/js/lunr.min.js"></script>
<script src="/js/search.js"></script>