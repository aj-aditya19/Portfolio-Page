# APK files go here

Drop any built `.apk` file into this folder, then point a project's
`links.apk` field in `src/data/projects.json` to `/apks/your-file.apk`.

Example:

```json
"links": {
  "visit": null,
  "repo": "https://github.com/aj-aditya19",
  "apk": "/apks/vedanand-kids.apk"
}
```

When a project has `"project_type": "app"` and a non-null `links.apk`,
clicking its action button on the site will automatically download
that APK — no extra code changes needed. If `links.apk` is `null`,
the button falls back to the GitHub repo link until the file is added.
