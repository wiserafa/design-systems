The colored program columns / side rail. `ProgramRail` lays out a row of `ProgramColumn`s; `PROGRAMS` is the canonical seven-track list.

```jsx
import { ProgramRail, ProgramColumn, PROGRAMS } from './ProgramRail';

<div style={{ height: 400 }}>
  <ProgramRail />
</div>

{/* one column */}
<ProgramColumn label="Educacross" color="var(--purple-700)" />
```

Program order & colors: Plataforma AZ (yellow), Macmillan (orange), Educacross (purple), Ed. Financeira (lime), Régua Literária (plum), Feira de Ciências (navy), Projetos (teal).
