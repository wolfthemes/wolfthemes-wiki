# Server Requirements

To avoid headaches with server-side issues, be sure to check our list of [Recommended Web Hosts](./recommended-web-hosts).

---

To use our WordPress themes you must be running **WordPress 6.0** or higher, **PHP 8.0** or higher (PHP 8.3 recommended) and **MySQL 7** or higher. Our themes have been tested on all major browsers. Below is a checklist of items your host needs to comply with:

- Ensure your web host has the [recommended requirements](https://wordpress.org/about/requirements/) to run WordPress.
- Make sure the [latest version of WordPress](https://wordpress.org/download/) is up and running.
- If necessary, download the latest release from the official [WordPress](http://wordpress.org/) website.

> **PHP note:** Our themes work correctly with PHP 7.4+ however **PHP 8.0 or higher is strongly recommended**.

## PHP Configuration Limits

Issues such as demo content failing to import are generally related to low PHP configuration limits. Ask your host to increase these to the following minimums:

| Setting | Minimum |
|---|---|
| `memory_limit` | 256M |
| `max_input_vars` | 3000 |
| `max_execution_time` | 300 |
| `post_max_size` | 256M |
| `upload_max_filesize` | 256M |

If your host allows overriding PHP settings, create a `php.ini` file with the following and drop it in your `wp-admin` folder:

```ini
memory_limit = 256M
max_input_vars = 3000
max_execution_time = 300
post_max_size = 256M
upload_max_filesize = 256M
```

For **Nginx** based servers, use a `.user.ini` file instead following the same process.

## Verify Your Server Limits

Check your server limits via the System Status table or by installing the [WP-ServerInfo](https://wordpress.org/plugins/wp-serverinfo/) plugin and navigating to **Settings > WordPress phpinfo()**.

Some hosts keep PHP limits low to conserve resources — you can always contact your host to have them adjusted.

---

**Want to skip the hassle?** [Explore our setup services](https://wolfthemes.com/services/)
