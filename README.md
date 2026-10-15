# Sayoni Chakraborty · Academic & Professional Research Website

This is a fully static, responsive GitHub Pages website designed for academic collaborators and industry research hiring. The first screen features a real portrait, a clearly visible name, and research interests. The rest of the page covers education and professional experience, long-form research narratives, publications, presentations and academic organization, recognition, professional skills, teaching, PDFs, and direct contact details.

No external web service, framework, paid hosting, tracking, or build process is required.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Website content, navigation, paper and conference links |
| `assets/style.css` | Design and responsive layouts |
| `assets/main.js` | Mobile navigation and publications filter |
| `assets/sayoni-portrait.webp` | Optimized portrait photograph provided by site owner |
| `assets/favicon.svg` | Site icon |
| `docs/Sayoni_Chakraborty_Two_Page_CV.pdf` | Current two-page CV provided by owner |
| `docs/Sayoni_Chakraborty_One_Page_Resume.pdf` | Updated one-page résumé provided by owner (October 2026) |
| `.nojekyll` | GitHub Pages configuration |

## Preview and publish

1. Unzip the website package into a folder and open `index.html` in a browser to preview it locally. The portrait, illustrative scientific SVGs, CSS, and PDF files are local; several attributed medical images are loaded from Wikimedia Commons and require internet access. If they cannot load, a local illustration displays instead.
2. Sign in to https://github.com and check your **actual username** (the GitHub homepage URL alone is not a user profile link).
3. Create a **public** repository named `USERNAME.github.io`. Replace `USERNAME` with your GitHub username. If you already use this repository, check its existing contents before uploading.
4. Upload the **contents** of this website folder to the root of the repository, preserving `index.html`, `assets/`, and `docs/` paths. Commit them.
5. Go to `Settings` → `Pages` → `Build and deployment` → `Deploy from a branch`, select `main` and `/(root)`, and save.
6. Once GitHub reports successful deployment, the personal website will be available at `https://USERNAME.github.io/`.

This package **has not been uploaded or published to GitHub**. A custom domain can be configured later.

## Edit later without rebuilding

- **Replace your CV:** Upload a new PDF to `docs/Sayoni_Chakraborty_Two_Page_CV.pdf`, replacing the previous copy. The website link stays working. Rename the PDF only if you also edit the corresponding `href` in `index.html`.
- **Replace your résumé:** Replace `docs/Sayoni_Chakraborty_One_Page_Resume.pdf` the same way. The included one-page résumé was updated using the owner’s newly supplied PDF.
- **Update any text:** Use GitHub's browser-based pencil (`Edit this file`) on `index.html`, or edit it locally with a code editor. Sections have named IDs such as `about`, `research`, `publications`, `speaking`, `teaching`, `recognition`, `experience`, `documents`, `contact`.
- **Change research descriptions:** Each `<article class="research-story">` is a separate self-contained research narrative. You can add progress, change methodology details, or add another row. Paper links belong in `publications`, not in the research narratives.
- **Add a paper:** Copy an existing `<article class="publication">`, update the title, authors, status, year, and public URL. For publication filtering, set `data-category="published"` or `data-category="submitted"`.
- **Add talks or awards:** Update the dated `event` blocks or `detail-list` elements. Move the most recent entries to the top.
- **Edit portrait:** Replace `assets/sayoni-portrait.webp` with a new WebP image under the same name. CSS controls cropping through `.portrait-frame img`.
- **Design changes:** CSS variables at the top of `assets/style.css` control global colors and fonts. More detailed layouts are in the dedicated section CSS near the end.

## Content accuracy and privacy

- The site's main text is based on the owner's current two-page CV and additional directions shared on October 15, 2026.
- Institution role is shown as `Research Intern / Graduate Researcher`, reflecting the owner's requested public wording; review the official title if needed.
- The graduation date is future expected date, **May 2027**, not a completed PhD.
- The ongoing image segmentation and spatial-omics research is described as work in progress, not as a published result.
- The SIAM MDS26 three-part minisymposium title and organizer list were checked against the official 2026 program. The conference program lists Sayoni Chakraborty as an organizer and a speaker for “Topoformer” in the last part. Source: https://meetings.siam.org/sess/dsp_programsess.cfm?SESSIONCODE=89777 and https://meetings.siam.org/sess/dsp_programsess.cfm?SESSIONCODE=89779
- The scheduled SIAM TXLA26 conference is at Southern Methodist University October 30–November 1, 2026: https://sites.google.com/view/siam-txla-2026/home . The current site links to the organizer's program homepage rather than guessing a session identifier.
- Travel awards listed for SIAM/GSMMC/MPI incorporate details provided directly by the owner. Keep award statuses and institutional naming updated as supporting documentation changes.
- Contact shows email and **Dallas, Texas**. The phone number is not repeated publicly on the contact page because email is a better first public point of contact and publishing a mobile number can attract unwanted calls/spam. The owner's **CV and résumé PDFs still contain phone number information**. Consider a public version with phone details removed if preferred.
- To add a GitHub profile link, first confirm the exact `https://github.com/USERNAME` page. `https://github.com` is the general homepage and does not identify a profile.
- Never publish confidential patient data, protected research materials, unpublished collaboration assets, internal documents, or restricted figures.

## External publication links

- TopoCon-MP, MIDL 2026 — https://proceedings.mlr.press/v315/tastan26a.html
- Topoformer, ML4H 2025 / PMLR — https://proceedings.mlr.press/v297/chakraborty26a.html
- Topology-Aware Deep Models for Skin Lesion Classification — https://doi.org/10.1007/978-3-032-05825-6_4
- TopOC — https://doi.org/10.1007/978-3-031-73967-5_3
- Google Scholar — https://scholar.google.com/citations?user=Q0i8S-sAAAAJ&hl=en

## Research-image sources, credits, and use

The following medical images are illustrative **public examples**, not figures produced by the website owner's own experiments, not images from MD Anderson datasets, and not clinical evidence for the studies described.

- **Dermoscopy**: Braga et al., *Superficial spreading melanoma in situ on dermoscopy*, source and attribution: https://commons.wikimedia.org/wiki/File:Superficial_spreading_melanoma_in_situ_on_dermoscopy.jpg — Creative Commons Attribution 4.0 (CC BY 4.0).
- **Histopathology**: Hurwitz, Buckel, and Summerlin, *Histopathology of melanoma, HE*, https://commons.wikimedia.org/wiki/File:Histopathology_of_melanoma,_HE.jpg — CC BY 4.0.
- **MRI**: 511KeV, *MRI Brain T2 Axial (1)*, https://commons.wikimedia.org/wiki/File:MRI_Brain_T2_Axial_(1).jpg — CC BY-SA 4.0.
- **CT**: Mikael Häggström, *CT of a normal abdomen and pelvis, axial plane 105*, https://commons.wikimedia.org/wiki/File:CT_of_a_normal_abdomen_and_pelvis,_axial_plane_105.png — CC0. This is an example of a **contrast-enhanced normal-abdominal CT**; it does not represent the donor liver cohort.
- **Scientific diagrams** (point cloud, bifiltration, segmentation, clinical-data fusion) are custom generic SVG illustrations created for this site. The bifiltration diagram is conceptual, not the owner's scientific figure. To replace with the owner's approved original figure, edit the relevant image `src` in `index.html` and save the figure under `assets/research/`.

Image caption links lead directly to the respective source pages with authorship and license details. Credited medical images are currently served remotely from Wikimedia's upload host.

## Current one-page résumé

The website includes the updated one-page résumé provided by the owner and the latest two-page CV. To update either document later, replace the PDF using the same filename.
