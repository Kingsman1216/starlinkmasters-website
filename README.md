# STARLINK MASTERS website

A responsive static business website for STARLINK MASTERS (MJONIS SERVICE PROVIDES).

## Files
- `index.html` — page content
- `styles.css` — responsive blue-and-white styling
- `script.js` — mobile navigation and current year
- `CNAME` — custom domain for GitHub Pages
- `favicon.svg` — browser icon

## Publish with GitHub Pages
1. Create a GitHub repository, for example `starlinkmasters-website`.
2. Upload all files in this folder to the repository's root (not inside another nested folder).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. Keep the `CNAME` file in the repository root.
6. In the GitHub Pages custom domain setting, enter `starlinkmasters.co.ke` and save.
7. Configure the domain's DNS at Truehost:
   - A records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - CNAME for `www`: `USERNAME.github.io` (replace USERNAME with the GitHub account username)
   - Remove conflicting A/AAAA/CNAME records for `@` or `www` if they point to an old host.
8. After DNS resolves and GitHub verifies the domain, enable **Enforce HTTPS** in GitHub Pages.

DNS changes can take time to propagate. Do not delete email-related MX/TXT records.

## Contact details
Phone/WhatsApp: +254 718 905 020  
Email: starlinkmasters@gmail.com
