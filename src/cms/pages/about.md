---
layout: layouts/base-md.html
type: page
title: About
date: 2021-11-24T01:27:56.766Z
url: about
permalink: /{{url}}/index.html
---
This is a template website, developed by DemingFactor.

It comes with Netlify CMS, AlpineJS, TailwindCSS and 11ty.

Configuration for the site's name, logo, and contact information can be set in the site.json file at /src/_data/site.json.

{% raw %}
Variables set in the site.json file can be called, by using **{{variable}}**. For example, **{{site.general.url}}** returns the url set in the site.json file. **{{site.contact.webmaster}}** would return the webmaster email address.
{% endraw %}

The navigation menus can be configured at /src/_data/navigation.json.

Pages can be edited at /admin. Netlify CMS needs to be configured with Cloudinary, and git backend, in the /src/config/cms.yml file.