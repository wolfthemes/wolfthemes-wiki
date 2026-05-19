# Child Theme

All our theme packages include a [child theme](https://developer.wordpress.org/themes/advanced-topics/child-themes/). A WordPress child theme allows you to apply custom code changes to your site without having those changes overwritten when you update the parent theme.

For simple style adjustments, you may not need a child theme at all — you can add custom CSS directly in the Customizer under the **Additional CSS** tab (available since WordPress 4.7.2). However, if you need more advanced customizations such as extensive CSS overrides or custom PHP functions, it is strongly recommended to use a child theme.

## How to Set Up Your Child Theme

Find the `themename-child` folder in your theme package and upload it to your `wp-content/themes/` directory via FTP. It is provided as a folder rather than a zip file since it is intended to be edited directly. Once installed and activated, it will automatically inherit all parent theme features, functions and styles.

> **Please note:** customizations made via child themes fall outside the scope of our support. We will be unable to assist with issues that arise from custom code changes.

## Additional Resources

- [WordPress Codex on Child Themes](https://developer.wordpress.org/themes/advanced-topics/child-themes/)
- [How To Create A WP Child Theme — WPBeginner video](http://www.wpbeginner.com/wp-themes/how-to-create-a-wordpress-child-theme-video/)
