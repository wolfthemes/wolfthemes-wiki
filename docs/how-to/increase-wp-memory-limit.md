# Increase PHP Memory Limit

If your site is having memory limit issues, here are a few things you can try before contacting your host.

## 1. Edit wp-config.php

Add this line right before the line that says `/* That's all, stop editing! */`:

```php
define( 'WP_MEMORY_LIMIT', '256M' );
```

WordPress memory can be different from the server memory — you need to set this regardless of server memory settings.

[WordPress Codex — Increasing memory allocated to PHP](http://codex.wordpress.org/Editing_wp-config.php#Increasing_memory_allocated_to_PHP)

## 2. Edit php.ini

If you have access to your `php.ini` file, find the memory limit line and increase it:

```ini
memory_limit = 256M ; Maximum amount of memory a script may consume
```

## 3. Edit .htaccess

If you don't have access to `php.ini`, add this to your `.htaccess` file:

```apache
php_value memory_limit 256M
```

## 4. Contact Your Host

If none of the above works, contact your host and ask them to increase your PHP memory limit. Since you are paying for those resources, you should rightfully expect to be getting your money's worth.
