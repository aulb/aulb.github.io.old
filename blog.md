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
	{% if post.language == 'en' %}
    <li><a href="{{ post.url }}">{{ post.title | capitalize }}</a></li>
    {% endif %}
{% endfor %}
</ul>

そよ風