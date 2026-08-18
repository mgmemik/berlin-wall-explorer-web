# Berlin Wall Explorer — website

Marketing page, privacy policy and support page for the **Berlin Wall Explorer**
iOS app, served by GitHub Pages.

| Page | Path |
|---|---|
| Home | `/` |
| Privacy policy | `/privacy/` |
| Support | `/support/` |

The app itself and its backend live in a separate private repository; only this
public-facing site is open, because GitHub Pages cannot serve a private repo on
the free plan.

Live at <https://mgmemik.github.io/berlin-wall-explorer-web/>.

## Links registered with the App Store

App Store Connect points at the privacy policy and support pages, so **their
paths must not change**. If the site ever moves again, update both URLs in App
Store Connect at the same time.

| App Store Connect field | Value |
|---|---|
| Privacy Policy URL | `https://mgmemik.github.io/berlin-wall-explorer-web/privacy/` |
| Support URL | `https://mgmemik.github.io/berlin-wall-explorer-web/support/` |
| Marketing URL (optional) | `https://mgmemik.github.io/berlin-wall-explorer-web/` |

## Keeping the old address instead

The site previously ran at `https://berlinwallexplorer.memik.com/` on paid
hosting (`91.151.82.42`, Plesk/IIS). Pointing that hostname at GitHub Pages
keeps every existing URL intact, so nothing in App Store Connect has to change:

1. At the DNS provider for `memik.com` (GoDaddy — `ns31/ns32.domaincontrol.com`),
   replace the `berlinwallexplorer` **A** record with a **CNAME** to
   `mgmemik.github.io.`
2. Set the custom domain on the repository:

   ```bash
   gh api -X PUT repos/mgmemik/berlin-wall-explorer-web/pages \
     -f cname=berlinwallexplorer.memik.com -F https_enforced=true
   ```

   This commits a `CNAME` file; GitHub then issues a certificate, which takes a
   few minutes.
3. Only after the new address serves correctly, decommission the old host.

Do the DNS change first — setting the custom domain while DNS still points at
the old server leaves the site unreachable until the record catches up.

## Local preview

All links are document-relative, so the site works both at a domain root and
under a subdirectory. Preview it exactly as GitHub Pages serves it:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/.

## Deployment

Pushing to `main` publishes automatically — GitHub Pages serves the repository
root. There is no build step; the site is plain HTML, CSS and one small script.
