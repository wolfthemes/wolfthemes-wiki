# How to Increase Your Loading Speed

Website speed is a critical factor for user retention. It has been proven that if your loading speed is too slow, visitors will leave before the page finishes loading.

## Basics First

- Use tools like [Pingdom](https://tools.pingdom.com/) to analyze your current loading speed.
- Make sure you have a [reliable web host](../general/recommended-web-hosts) that meets the [minimum server requirements](../general/server-requirements).
- Optimize your images for the web: **max 2000px wide, 2500px tall, and around 500KB per image**.

## Caching and Optimization Plugins

Once your theme is installed, you may notice it is slower than the demo. This is because our demos run a cache system. Here are the 3 plugins we use on all our demos:

1. [EWWW Image Optimizer](https://wordpress.org/plugins/ewww-image-optimizer/) — automatically compresses images on upload.
2. [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/) — generates static HTML files to serve visitors faster.
3. [Autoptimize](https://wordpress.org/plugins/autoptimize/) — minifies and combines CSS/JS files.

> **Important for Autoptimize:** uncheck the **"Also aggregate inline CSS"** option, and add [this exclusion line](https://gist.github.com/wolfthemes/68c9cb5c3f5ebc3e56d9115204c945a9) to the **"Exclude scripts from Autoptimize"** field.

## CDN

For even faster loading, use a [CDN (Content Delivery Network)](https://www.wpbeginner.com/beginners-guide/why-you-need-a-cdn-for-your-wordpress-blog-infographic/) to serve your static assets (images, videos, etc.) from servers closer to your visitors. We use and recommend [Bunny.net](https://bunny.net?ref=cta4iplkoi).

---

**Want to skip the hassle? [Explore our speed optimization service](https://wolfthemes.com/services/)**
