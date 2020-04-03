module.exports = {
  title: 'Switchy API v1',
  tagline: 'Switchy Developer Guide',
  url: 'https://developers.switchy.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Switchy-io', // Usually your GitHub org/user name.
  projectName: 'api-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Switchy for developers',
      logo: {
        alt: 'Switchy Logo',
        src: 'img/switchy_io_blue.svg',
      },
      links: [
        {to: 'docs/overview/index', label: 'Docs', position: 'left'},
        /*
        {to: 'blog', label: 'Blog', position: 'left'},
        */
        {
          href: 'https://switchy.io',
          label: 'Back to Switchy',
          position: 'right',
        },
        {
          href: 'https://github.com/Switchy-io/api-docs',
          label: 'Contribute to the doc on GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/overview/index',
            },
            {
              label: 'Guides',
              to: '/docs/guides/how-to-query',
            },
          ],
        },
        /*
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook developper',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            /*
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            
          ],
        },
        */
        {
          title: 'Social',
          items: [
            /*
            {
              label: 'Blog',
              to: 'blog',
            },
            */
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/groups/2357989371103633/?source_id=265902427493952',
            },
            /*
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
            */
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Switchy, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Switchy-io/api-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
