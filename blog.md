---
layout: post
title: Albert's Log
---
<header>
	<h1>Ramble</h1>
</header>

I wrote a bunch over the past couple while. Not a regular blog but each one is something that means a lot to me specifically. <a href="/">Click here</a> to go back to the main page.

<ul>
{% for post in site.posts  %}
    <li><a href="{{ post.url }}">{{ post.categories[0] | capitalize }}</a></li>
{% endfor %}
</ul>