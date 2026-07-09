Renders the official Luminova horizontal logo lockup; use it anywhere the brand mark appears (headers, slide corners, footers).

```jsx
<Logo height={56} />
<Logo height={56} plate />   {/* white plate for photo/dark backgrounds */}
```

Do not recreate or recolor the mark. Available official assets (pass via `src`, path relative to your page):
- `assets/logo-luminova-full.png` — **transparent** horizontal lockup (default; works on any light background)
- `assets/logo-luminova-horizontal-white-bg.png` — lockup on a white plate
- `assets/logo-luminova-horizontal.png` — lockup on solid black (dark surfaces)
- `assets/logo-luminova-mark.png` — circle **symbol only**, transparent (avatar / social / favicon)

On dark or busy backgrounds prefer `plate`, or the black-background asset.
