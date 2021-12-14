---
---

Welcome to My Home Page

{% assign date = '2020-04-13T10:20:00Z' %}

- Original date - {{ date }}
- With timeago filter - {{ date | timeago }}

- {{ site.data.metadata.build_date }}
- {{ site.data.metadata.git_sha }}