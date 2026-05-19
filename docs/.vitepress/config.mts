import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'WolfThemes Wiki',
	description: 'Documentation, FAQs and code snippets for WolfThemes products',
	appearance: 'light',
	ignoreDeadLinks: true,
	base: '/',

  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'WolfThemes', link: 'https://wolfthemes.com' }
    ],

    sidebar: [
      {
        text: 'General',
        collapsed: false,
        items: [
          { text: 'WordPress General', link: '/general/wordpress-general' },
          { text: 'About our Themes', link: '/general/about-our-themes' },
          { text: 'Server Requirements', link: '/general/server-requirements' },
          { text: 'Recommended Web Hosts', link: '/general/recommended-web-hosts' },
          { text: 'Keep WordPress Up To Date', link: '/general/keep-wordpress-up-to-date' },
          { text: 'Low Budget Hosts', link: '/general/low-budget-hosts' },
          { text: 'Theme Documentations', link: '/general/theme-documentations' },
          { text: 'Bundled Plugin Activation', link: '/general/bundled-plugin-activation' },
        ]
      },
      {
        text: 'Getting Started',
        collapsed: true,
        items: [
          { text: 'Before Getting Started', link: '/getting-started/before-getting-started' },
          { text: 'Theme Installation', link: '/getting-started/theme-installation' },
          { text: 'System Status', link: '/getting-started/system-status' },
          { text: 'Plugin Installation', link: '/getting-started/plugin-installation' },
          { text: 'Import Demo Data', link: '/getting-started/import-demo-data' },
          { text: 'Import Demo Content Manually', link: '/getting-started/import-demo-content-manually' },
          { text: 'Import Demo Sliders', link: '/getting-started/import-demo-sliders' },
          { text: 'Home & Blog Pages', link: '/getting-started/home-blog-pages' },
          { text: 'Child Theme', link: '/getting-started/child-theme' },
          { text: 'Activate Wolf Core Plugin', link: '/getting-started/activate-wolf-core' },
          { text: 'Activate Wolf WPBakery Extension', link: '/getting-started/activate-wolf-wpbakery-extension' },
        ]
      },
      {
        text: 'How To',
        collapsed: true,
        items: [
          { text: 'Theme Update', link: '/how-to/themeforest-theme-update' },
          { text: 'Update WPBakery Page Builder', link: '/how-to/update-wpbakery' },
          { text: 'Translate Your Theme', link: '/how-to/translate-theme' },
          { text: 'Add Google Fonts to Your Theme', link: '/how-to/add-google-fonts' },
          { text: 'Add Typekit Fonts to Your Theme', link: '/how-to/add-typekit-fonts' },
          { text: 'Add Custom Fonts to Your Theme', link: '/how-to/add-custom-fonts' },
          { text: 'Create a SVG Logo', link: '/how-to/create-svg-logo' },
          { text: 'Enable WP_DEBUG', link: '/how-to/enable-wp-debug' },
          { text: 'Increasing Your Loading Speed', link: '/how-to/increase-loading-speed' },
          { text: 'Increasing the WordPress Memory Limit', link: '/how-to/increase-wp-memory-limit' },
          { text: 'Increasing PHP Max Input Vars', link: '/how-to/increase-php-max-input-vars' },
          { text: 'Increasing the Upload Size Limit', link: '/how-to/increase-upload-size-limit' },
          { text: 'Increasing Server Memory Limit', link: '/how-to/increase-server-memory-limit' },
          { text: 'Update Your PHP Version', link: '/how-to/update-php-version' },
        ]
      },
      {
        text: 'Troubleshooting',
        collapsed: true,
        items: [
          { text: 'Stylesheet is Missing', link: '/troubleshooting/stylesheet-missing' },
          { text: 'Issue Importing Demo', link: '/troubleshooting/issue-importing-demo' },
          { text: 'Slider Revolution Not Starting', link: '/troubleshooting/slider-revolution' },
        ]
      },
      {
        text: 'Features',
        collapsed: true,
        items: [
          { text: 'Content Blocks', link: '/features/content-blocks' },
          { text: 'Wolf Page Builder Extension', link: '/features/wolf-page-builder' },
          { text: 'Video Background Scroll', link: '/features/video-background-scroll' },
        ]
      },
      {
        text: 'Extras',
        collapsed: true,
        items: [
          { text: 'Coming Soon / Maintenance Mode', link: '/extras/coming-soon' },
          { text: 'Integrate Google Analytics', link: '/extras/google-analytics' },
          { text: 'Security Tips', link: '/extras/security-tips' },
        ]
      },
      {
        text: 'FAQ',
        collapsed: true,
        items: [
          { text: 'FAQ', link: '/faq/faq' },
        ]
      },
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'WolfThemes Support Documentation',
      copyright: 'Copyright © 2026 WolfThemes'
    }
  }
})
