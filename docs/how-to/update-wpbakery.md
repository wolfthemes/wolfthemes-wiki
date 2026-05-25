# Update WPBakery Page Builder (Formerly Visual Composer)

Most of our themes include a full version of WPBakery Page Builder. Any time the plugin is updated, you will find the latest version in the `config/plugins` (or `includes/admin/plugins`) folder of your theme package.

> Please note that we need several days to test compatibility with our themes. If a new plugin version doesn't include critical updates, it may take more time before we update all themes.

## How to Update

**Method 1 — Reinstall via WordPress admin:**

1. Deactivate and delete the plugin from **Plugins** in your WordPress admin.
2. Reinstall the new version via **Appearance > Install Plugins**.

**Method 2 — Upload the zip file:**

Upload the new `js_composer.zip` file found in the `config/plugins` folder of your latest theme package via **Plugins > Add New > Upload**.

**Method 3 — FTP:**

Replace the `wp-content/plugins/js_composer` folder on your server with the contents of the new zip file.

You can [enable Maintenance Mode](../extras/coming-soon) while updating to avoid showing a broken site to visitors.

## Licenses

We are not permitted to sell a WPBakery Page Builder license inside the theme. You only need to [purchase a license](https://1.envato.market/Pyn14N) if you want auto-updates and direct support from the plugin author.
