# JSONOVA landing page

Static, dependency-free product landing page for JSONOVA 1.2.0. It includes interactive JSON/XML and URL Details previews built from real extension screenshots.

## Local preview

From this repository directory:

```powershell
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Deployment

Deploy the repository root as a static website. No build step or runtime dependencies are required.

The landing page, the matching `privacy.html` page, and the canonical
`privacy-policy.en.md` source are self-contained in this repository.
