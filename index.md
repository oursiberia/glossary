---
title: My page
---

# Siberia Glossary  

### A Term.  
This is a term, it is used to describe a thing!  

### Another Term.  
This is also term, it is also used to describe a thing!





{%- comment -%} {% assign date = '2020-04-13T10:20:00Z' %}

- Original date - {{ date }}
- With timeago filter - {{ date | timeago }} {%- endcomment -%}
  
  
{% include footer.md %}

<script>
  const headings = document.querySelectorAll('h2[id],h3[id],h4[id]'); // 1
  const linkContent = '🔗'; // 2
  for (const heading of headings) { // 3
      const linkIcon = document.createElement('a'); // 4
      linkIcon.setAttribute('href', `#${heading.id}`); // 5
      linkIcon.innerHTML = linkContent; // 6
      heading.appendChild(linkIcon); // 7
  }
</script>