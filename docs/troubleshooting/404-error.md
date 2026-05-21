# 404 Error Page

If a custom post type single page shows a 404 error, there is usually a simple fix.

## Fix: Flush Permalinks

Go to **Settings > Permalinks** and click **Save Changes** — no need to change anything, just save. This flushes the rewrite rules and resolves most 404 errors with custom post types.

## Still Getting 404 Errors?

If the issue persists, it may be related to your server configuration. Make sure your hosting service has the **mod_rewrite** PHP extension enabled. Contact your host if you are unsure.
