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

## Links registered with the App Store

App Store Connect points at the privacy policy and support pages, so **their
paths must not change**. If the site ever moves again, update both URLs in App
Store Connect at the same time.

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
