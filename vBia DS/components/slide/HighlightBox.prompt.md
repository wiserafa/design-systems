The signature Luminova title block: bold display text on a solid color fill. Use for slide/section headlines.

```jsx
<HighlightBox color="orange" size="60px">Luminova Experience</HighlightBox>

{/* Stack each line in its own box, as on the cover slide */}
<HighlightBox color="lime" lines={['Educação', 'Financeira']} size="52px" as="h1" />
```

Colors: `orange` (default), `yellow`, `purple`, `lime`, `plum`, `white`. White & yellow render dark text; the rest render white text.
