---
layout: page
permalink: /publications/
# permalink: /#publications # Create a Link to Jump to a Specific Part of a Page
title: Publications
# description: publications by categories in reversed chronological order.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">
  {% bibliography --group_by year %}
</div>
