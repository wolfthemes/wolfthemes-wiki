# Theme Translation

In each of our themes and plugins you will find a **languages** folder containing a `themename.pot` or `pluginname.pot` file.

A `.pot` file is a template containing all translatable strings. You can use it to translate your theme or plugin into any language and generate the `.po` and `.mo` files that WordPress uses to display the translation.

## Set Your Language in WordPress

Before translating, set your site language under **Settings > General** and select your language at the bottom of the page.

![WordPress Language Setting](/images/wordpress-language-setting.png)

## Translate with Loco Translate (Recommended)

[Loco Translate](https://wordpress.org/plugins/loco-translate/) allows you to translate all strings directly in your WordPress admin panel.

1. Install and activate Loco Translate.
2. Navigate to **Loco Translate > Themes** (or Plugins) and select the theme or plugin to translate.
3. In the Overview tab, click **New language** or select an existing language to continue.
4. Select each string and fill in the Translation field. Save after each session.

![Loco Translate](/images/loco-translate.png)

> If you create a new translation or improve an existing one, please send your `.po` and `.mo` files to **help@wolfthemes.com** — it is much appreciated!

## Translate with Poedit

[Poedit](http://www.poedit.net/download.php) is a desktop app for translating from the `.pot` file. You will need to upload the files manually to your server after each update.

1. Open Poedit and go to **File > New from POT file**.
2. Select the `.pot` file from your theme or plugin's `languages` folder.
3. Translate each string and save.

![Poedit](/images/poedit.png)

Name your translation files using the correct language code:

- French: `fr_FR.po` and `fr_FR.mo`
- German: `de_DE.po` and `de_DE.mo`

For plugins, prefix with the plugin slug: `wolf-plugin-slug-fr_FR.po` and `wolf-plugin-slug-fr_FR.mo`.

Browse the [WordPress language code list](https://make.wordpress.org/polyglots/teams/) to find the correct code for your language.

## Multi-language Sites

For multi-language websites, you can use the [WPML](http://wpml.org/) plugin (premium).
