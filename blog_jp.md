---
layout: post
title: あるばーとの何気無いブログ
---
<header>
	<h1>ブロ</h1>
</header>

なぜ？１年日本語勉強
何気ない毎日ブログ、<strong>全ての意見は僕の</strong>！英語は<a href="/">こちら</a>。👀

<ul>
{% for post in site.posts  %}
	{% if post.language == 'jp' %}
    <li><a href="{{ post.url }}">{{ post.title | capitalize }}</a></li>
    {% endif %}
{% endfor %}
</ul>