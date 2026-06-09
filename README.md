# DJ Seth — website + beheer

Een statische website die Seth zélf kan bijwerken (tekst, prijzen, foto's, filmpjes)
via een eenvoudig beheerscherm. Inloggen met e-mail, geen code nodig.

## Wat zit erin
- `index.html` — de website (laadt content uit `content/site.json`)
- `content/site.json` — alle tekst, prijzen en de foto/film-lijst
- `content/uploads/` — hier komen geüploade foto's terecht
- `admin/` — het beheerscherm (Decap CMS)

## Hosten (gratis) — eenmalig opzetten, ~30 min
1. **GitHub:** maak een repo `djseth-site` en zet deze bestanden erin.
2. **Hosting (Netlify):** ga naar netlify.com → *Add new site → Import from Git* → kies de repo.
   - Build command: *leeg laten*
   - Publish directory: `/` (de root)
   - Deploy → je site krijgt meteen een gratis adres (bv. `djseth.netlify.app`).
   - *(Cloudflare Pages werkt net zo goed als alternatief.)*
3. **Login voor Seth (DecapBridge):** ga naar decapbridge.com → gratis account →
   voeg je site toe en koppel de GitHub-repo. Je krijgt een `repo` en een `identity_url`.
   - Zet die twee waarden in `admin/config.yml` (de regels met `<< invullen`).
   - Nodig Seth uit op zijn e-mailadres. Hij krijgt een mail, kiest een wachtwoord.
4. Klaar. Seth gaat naar `https://<jouwsite>/admin`, logt in met **e-mail + wachtwoord**,
   en past tekst/prijzen/foto's/filmpjes aan. Elke wijziging gaat automatisch live.

## Het boekingsformulier
Het formulier opent nu de mailapp van de bezoeker met een ingevuld bericht naar Seth.
Wil je dat aanvragen rechtstreeks in zijn inbox binnenkomen (zonder mailapp)?
Maak dan een gratis account op **Formspree**, en vervang in `index.html` de
`verstuur()`-functie door een POST naar je Formspree-endpoint. (Kan ik er zo inzetten.)

## Tip
- QR-code: genereer er een (bv. qr-code-generator.com) die naar je site-adres wijst,
  print 'm en plak op de draaitafel. Klaar voor klanten ter plekke.
- Eigen domein (bv. djseth.nl) kan later — gewoon koppelen in Netlify.
