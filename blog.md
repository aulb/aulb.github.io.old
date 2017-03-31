---
layout: post
title: Albert's Notes
---
<header>
	<h1>Notes</h1>
</header>

<a href="/">Click here</a> to go back to the main page.

<ul>
{% for post in site.posts  %}
    <li><a href="{{ post.url }}">{{ post.categories[0] | capitalize }}</a></li>
{% endfor %}
</ul>