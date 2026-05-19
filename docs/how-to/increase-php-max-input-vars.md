# Increase PHP Max Input Vars

The PHP Max Input Vars setting defines the maximum number of variables your server can use for a single function. For modern WordPress themes this value should be set to at least **3000**. Lower values can cause lost data in Theme Options, disappearing widgets, and [menu items not saving](https://wordpress.org/support/topic/menu-item-limit-1/).

## Method 1: Edit php.ini

> **Note:** Many shared hosts prohibit direct access to `php.ini`. Only use this method if you have direct access, or are on a local server.

1. Locate your `php.ini` file. If you can't find it, create one in the root folder of your WordPress installation.
2. Find or add the following line and set it to 3000:

```ini
max_input_vars = 3000
```

3. Save the file and restart your server.

## Method 2: Edit .htaccess

> **Note:** Back up your `.htaccess` file before editing.

1. Locate your `.htaccess` file in the root of your WordPress installation (it may be hidden — enable hidden files in your file manager or FTP client).
2. Add the following line:

```apache
php_value max_input_vars 3000
```

If your server has the Suhosin security patch, use these instead:

```apache
php_value suhosin.request.max_vars 3000
php_value suhosin.post.max_vars 3000
```

3. Save the file and refresh your website.

## Contact Your Host

If neither method works, contact your host and ask them to increase `max_input_vars` to 3000. Most shared hosts can do this on request.
