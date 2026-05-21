# Security Tips

Most WordPress security issues aren't caused by themes or plugins — they come from how WordPress is configured. Here are some basic steps to keep your WordPress environment safe.

## Basic Security Checklist

- Keep your [WordPress core up to date](../general/keep-wordpress-up-to-date)
- Keep all your themes and plugins up to date
- Use a secure username — never use "admin"
- Use a strong, unique password — use a tool like [Strong Password Generator](https://strongpasswordgenerator.com/)
- Choose a unique database name and a secure database password
- Change the Authentication Unique [Keys and Salts](https://api.wordpress.org/secret-key/1.1/salt/) in `wp-config.php`
- Use unique database table prefixes — avoid the default `wp_`
- Use a proper [permalink structure](https://codex.wordpress.org/Using_Permalinks)

## Hosting

Security issues can also come from unreliable hosting providers, usually [cheap ones](../general/low-budget-hosts). A reputable host with up-to-date server software is an important layer of security.

## Further Reading

- [20 Steps to a Flexible and Secure WordPress Installation](https://code.tutsplus.com/tutorials/20-steps-to-a-flexible-and-secure-wordpress-installation--wp-13236) — WPTuts
- [WordPress Plugin Repository](https://wordpress.org/plugins/) — search for security plugins

> This article is not a complete WordPress security guide, but a starting point to help you get set up safely.
