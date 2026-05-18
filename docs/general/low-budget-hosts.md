# Low Budget Hosts or Low Settings Servers

On some hosts like **GoDaddy, 1&1 and Hostgator** basic plans, you may experience issues such as demo content import failure, endless loading, incomplete page rendering, etc. All these problems are caused by the fact that the base plans of these hosts do not meet the minimum [Server Requirements](./server-requirements) to work with modern WordPress themes. For example, the memory limit of these hosts is too low (approximately 40MB), while the [official WordPress documentation](http://codex.wordpress.org/Editing_wp-config.php#Increasing_memory_allocated_to_PHP) suggests at least 96MB.

> **We are sorry for the inconvenience but this is out of the scope of our support and something that is isolated to a low-performance host.**

## How to Increase the Limits

Most problems are caused by the WP Memory Limit — the maximum amount of RAM your site can use at one time. When you reach your memory limit you will encounter a fatal error. WordPress itself, your theme and your plugins all consume memory. The more content and features you add, the higher your memory limit needs to be.

To increase PHP parameters on GoDaddy, create a new file named `php5.ini` (or edit it if it already exists) and add the following:

    upload_max_filesize = 48M
    post_max_size = 48M
    memory_limit = 128M
    max_execution_time = 600
    max_input_vars = 10000
    max_input_time = 400

Wait a few minutes for the changes to take effect. Note that if your hosting plan does not permit increasing these values, the modifications will not take effect — in that case contact GoDaddy directly to request an increase to the PHP memory limit.

- [Follow this tutorial for GoDaddy](http://codingcyber.com/how-to-increase-php-memory-limit-on-godaddy-hosting-882/)

## Consideration

GoDaddy's support team may try to up-sell you to a higher plan rather than help you configure your current one. Keep in mind that you get what you pay for — a $0.99/month hosting plan will struggle to run a WordPress site with a modern theme and plugins. For reference, the GoDaddy Ultimate Plan at around $7.49/month can handle approximately one fully-featured WordPress site. Adding more sites will require purchasing more resources.

---

To avoid server-side headaches, check our list of [Recommended Web Hosts](./recommended-web-hosts).
