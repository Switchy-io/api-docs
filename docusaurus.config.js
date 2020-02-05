module.exports = {
  title: 'Switchy API v1',
  tagline: 'Switchy Developer Guide',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'switchy', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Switchy Developer',
      logo: {
        alt: 'Switchy Logo',
        src: 'img/switchy_io_blue.svg',
      },
      links: [
        {to: 'docs/doc1', label: 'Docs', position: 'left'},
        /*
        {to: 'blog', label: 'Blog', position: 'left'},
        */
        {
          href: 'https://jobs.stationf.co/companies/sently/jobs/software-engineer_paris',
          label: 'We are hiring!',
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
              to: 'overview/index',
            },
            {
              label: 'Guides',
              to: 'guides/index',
            },
          ],
        },
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
            */
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Facebook',
              href: 'https://github.com/facebook/docusaurus',
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
            'https://github.com/Switchy-io/api-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
