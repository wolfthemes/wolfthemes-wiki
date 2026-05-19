# Import Demo Content Manually

If you want to import the demo data manually, or if your theme doesn't offer the one-click import feature, you can import demo content using the WordPress Importer tool.

In your theme package you will find a link to download the demo data files. Download, extract the zip and you will find these files:

- `content.xml` — all pages, media, etc.
- `customizer.dat` — the customizer settings.
- `widgets.wie` — the widget settings.

## Import the Content

1. In your admin panel go to **Tools > Import**.
2. Choose the **WordPress** option (last one in the list).
3. Select the `content.xml` file.
4. Click **Upload file and import** and follow the instructions.

> **Note:** Some demo data files are large. If you encounter issues, check your [Server Requirements](../general/server-requirements) — particularly `max_execution_time`, `post_max_size` and `upload_max_filesize`.

**Recommended:** The [WordPress Importer v2](http://github.com/humanmade/WordPress-Importer) plugin works better than the default importer, especially on [low settings servers](../general/low-budget-hosts). Deactivate the default WordPress Importer and install this one instead.

> During import with WordPress Importer v2, even if the progress bar doesn't move, wait until it confirms the posts have been imported.

### WordPress Importer v2 and Elementor

If you are using Elementor, use this two-step approach to avoid import issues:

1. Use the default **WordPress Importer** to import content **without media** (uncheck the import media option).
2. Then use **WordPress Importer v2** to import the media using the same `content.xml` file (or the `medias.xml` file if included in the demo package).

## Import the Customizer Settings

Customizer settings are applied automatically on theme activation. If you need to reset or import a specific demo's settings, install the [Customizer Export/Import](https://wordpress.org/plugins/customizer-export-import/) plugin.

1. Go to **Appearance > Customize**.
2. Navigate to the **Export/Import** tab.
3. Click **Browse** and select the `customizer.dat` file.
4. Click **Import**.

## Import the Widgets

To import widget settings, install the [Widget Importer & Exporter](https://wordpress.org/plugins/widget-importer-exporter/) plugin.

1. Go to **Tools > Widget Importer & Exporter**.
2. Select the `widgets.wie` file.
3. Click **Import**.

---

**Want to skip the hassle? [Explore our setup services](https://wolfthemes.com/services/)**
