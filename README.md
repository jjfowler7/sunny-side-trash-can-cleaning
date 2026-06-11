# Sunny Side Trash Can Cleaning Website

A one-page static website for a local trash can cleaning business. It is designed
to deploy cleanly on Cloudflare Pages using the free `*.pages.dev` URL.

## Local Preview

Open `index.html` in a browser, or run a small local server:

```sh
python3 -m http.server 8788
```

Then visit `http://localhost:8788`.

## Free Cloudflare Pages Launch

Cloudflare Pages can host this as a static site on a free
`<project-name>.pages.dev` address.

### Recommended method: Git integration

1. Push this repository to GitHub.
2. In Cloudflare, open **Workers & Pages**.
3. Choose **Create application**.
4. Choose **Pages**.
5. Choose **Connect to Git**.
6. Select the `sunny-side-trash-can-cleaning` repository.
7. Use these build settings:
   - Production branch: `main`
   - Framework preset: None
   - Build command: `exit 0`
   - Build output directory: `/`
8. Select **Save and Deploy**.

The free URL should look like:

```text
https://sunny-side-trash-can-cleaning.pages.dev
```

### Alternate method: drag and drop

1. Go to the Cloudflare dashboard.
2. Open **Workers & Pages**.
3. Choose **Create application**.
4. Choose **Pages** and then **Upload assets** or **Direct Upload**.
5. Use a project name like `sunny-side-trash-can-cleaning`.
6. Upload this folder.
7. Deploy the site.

If you want automatic future deployments from GitHub, choose Cloudflare's Git
integration when creating the project. Direct Upload is simpler for a first
launch, but Cloudflare notes that Direct Upload projects cannot switch to Git
integration later.

### CLI method

```sh
npx wrangler pages project create
npx wrangler pages deploy .
```

When Wrangler asks for a project name, use `sunny-side-trash-can-cleaning` or another
available name.

## Notes

- The website does not collect personal data.
- The booking button opens the visitor's SMS app with a prefilled message.
- A custom domain can be added later, but the free Cloudflare Pages subdomain is
  enough to launch.
