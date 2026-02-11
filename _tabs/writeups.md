---
layout: default
title: Writeups
icon: fas fa-file-alt
order: 3
permalink: /writeups/
---

{% include lang.html %}

<div id="post-list" class="flex-grow-1 px-xl-1">

  <!-- Hack The Box -->
  <article class="card-wrapper card">
    <a href="{{ '/writeups/hackthebox/' | relative_url }}" class="post-preview row g-0 flex-md-row-reverse">
      {% assign card_body_col = '12' %}

      {% assign src = '/assets/img/htb.png' %}
      {% assign alt = 'Hack The Box' %}

      <div class="col-md-5">
        <img src="{{ src | relative_url }}" alt="{{ alt }}">
      </div>

      {% assign card_body_col = '7' %}

      <div class="col-md-{{ card_body_col }}">
        <div class="card-body d-flex flex-column">
          <h1 class="card-title my-2 mt-md-0">Hack The Box</h1>

          <div class="card-text content mt-0 mb-3">
            <p>Writeups de máquinas HTB.</p>
          </div>

          <div class="post-meta flex-grow-1 d-flex align-items-end">
            <div class="me-auto">
              <i class="far fa-folder-open fa-fw me-1"></i>
              <span class="categories">Writeups</span>
            </div>
          </div>

        </div>
      </div>
    </a>
  </article>

  <!-- HackMyVM -->
  <article class="card-wrapper card">
    <a href="{{ '/writeups/hackmyvm/' | relative_url }}" class="post-preview row g-0 flex-md-row-reverse">
      {% assign card_body_col = '12' %}

      {% assign src = '/assets/img/hmvm.png' %}
      {% assign alt = 'HackMyVM' %}

      <div class="col-md-5">
        <img src="{{ src | relative_url }}" alt="{{ alt }}">
      </div>

      {% assign card_body_col = '7' %}

      <div class="col-md-{{ card_body_col }}">
        <div class="card-body d-flex flex-column">
          <h1 class="card-title my-2 mt-md-0">HackMyVM</h1>

          <div class="card-text content mt-0 mb-3">
            <p>Writeups de máquinas HackMyVM.</p>
          </div>

          <div class="post-meta flex-grow-1 d-flex align-items-end">
            <div class="me-auto">
              <i class="far fa-folder-open fa-fw me-1"></i>
              <span class="categories">Writeups</span>
            </div>
          </div>

        </div>
      </div>
    </a>
  </article>

</div>
